// ============================================================
//  BLOG DEPLOYER — VS Code Extension
//
//  Watches for .blog-task.json in the workspace.
//  When found, automatically opens Copilot Chat and sends
//  the blog creation prompt using VS Code's internal APIs.
//
//  No keyboard simulation. No window hacks. Pure API.
// ============================================================

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let taskWatcher = null;
let statusBarItem = null;
let currentTask = null;

// ============================================================
//  ACTIVATION
// ============================================================

function activate(context) {
    console.log('[BlogDeployer] Extension activated');

    // ── Status Bar ──
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left, 100
    );
    statusBarItem.command = 'blogDeployer.runTask';
    context.subscriptions.push(statusBarItem);

    // ── Register Commands ──
    context.subscriptions.push(
        vscode.commands.registerCommand('blogDeployer.runTask', () => runTask()),
        vscode.commands.registerCommand('blogDeployer.pushToGit', () => pushToGit()),
        vscode.commands.registerCommand('blogDeployer.retryPrompt', () => retryPrompt()),
        vscode.commands.registerCommand('blogDeployer.pickAndRun', () => pickAndRun())
    );

    // ── File Watcher: auto-detect .blog-task.json ──
    setupFileWatcher(context);

    // ── Check if task file already exists on startup ──
    checkForExistingTask();
}

// ============================================================
//  FILE WATCHER
// ============================================================

function setupFileWatcher(context) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) return;

    // Watch for .blog-task.json creation/changes
    const pattern = new vscode.RelativePattern(
        workspaceFolders[0], '.blog-task.json'
    );

    taskWatcher = vscode.workspace.createFileSystemWatcher(
        pattern, false, false, true
    );

    // On create
    taskWatcher.onDidCreate(async (uri) => {
        console.log('[BlogDeployer] Task file created:', uri.fsPath);
        await handleNewTask(uri.fsPath);
    });

    // On change (re-trigger if updated)
    taskWatcher.onDidChange(async (uri) => {
        console.log('[BlogDeployer] Task file updated:', uri.fsPath);
        await handleNewTask(uri.fsPath);
    });

    context.subscriptions.push(taskWatcher);
}

function checkForExistingTask() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) return;

    const taskPath = path.join(workspaceFolders[0].uri.fsPath, '.blog-task.json');
    if (fs.existsSync(taskPath)) {
        // Small delay to let VS Code fully initialize
        setTimeout(() => handleNewTask(taskPath), 3000);
    }
}

// ============================================================
//  TASK HANDLING
// ============================================================

async function handleNewTask(taskFilePath) {
    try {
        const raw = fs.readFileSync(taskFilePath, 'utf8');
        const task = JSON.parse(raw);

        // Validate task
        if (!task.prompt || !task.blogNum) {
            vscode.window.showErrorMessage(
                'Blog task file is invalid. Missing "prompt" or "blogNum".'
            );
            return;
        }

        // Check if already processed
        if (task.status === 'sent') {
            console.log('[BlogDeployer] Task already processed. Skipping.');
            return;
        }

        currentTask = { ...task, filePath: taskFilePath };

        // Show notification
        const action = await vscode.window.showInformationMessage(
            `📝 Blog ${task.blogNum} deployment ready! Send to Copilot?`,
            'Send Now',
            'Preview Prompt',
            'Cancel'
        );

        if (action === 'Send Now') {
            await sendToCopilot(task);
        } else if (action === 'Preview Prompt') {
            await previewPrompt(task);
        }

    } catch (err) {
        console.error('[BlogDeployer] Error handling task:', err);
        vscode.window.showErrorMessage(
            `Blog Deployer error: ${err.message}`
        );
    }
}

// ============================================================
//  COPILOT INTEGRATION — Multiple Methods
// ============================================================

async function sendToCopilot(task) {
    const config = vscode.workspace.getConfiguration('blogDeployer');
    const autoSend = config.get('autoSendPrompt', true);
    const promptDelay = config.get('promptDelayMs', 2000);

    updateStatusBar('$(loading~spin) Sending to Copilot...', 'blogDeployer.retryPrompt');

    const prompt = task.prompt;
    let sent = false;

    // ────────────────────────────────────────────────────
    //  METHOD 1: Chat Open with Query (Best — auto-sends)
    //  Works in VS Code 1.93+ with Copilot Chat extension
    // ────────────────────────────────────────────────────
    if (!sent) {
        sent = await tryChatOpenWithQuery(prompt, autoSend);
    }

    // ────────────────────────────────────────────────────
    //  METHOD 2: Copilot Agent Mode with Query
    // ────────────────────────────────────────────────────
    if (!sent) {
        sent = await tryAgentModeWithQuery(prompt, autoSend);
    }

    // ────────────────────────────────────────────────────
    //  METHOD 3: Open Chat Panel + Insert via API
    // ────────────────────────────────────────────────────
    if (!sent) {
        sent = await tryChatPanelInsert(prompt, promptDelay);
    }

    // ────────────────────────────────────────────────────
    //  METHOD 4: Interactive Editor Chat
    // ────────────────────────────────────────────────────
    if (!sent) {
        sent = await tryInteractiveChat(prompt);
    }

    // ────────────────────────────────────────────────────
    //  METHOD 5: Clipboard Fallback
    // ────────────────────────────────────────────────────
    if (!sent) {
        await vscode.env.clipboard.writeText(prompt);
        vscode.window.showWarningMessage(
            'Could not auto-send to Copilot. Prompt copied to clipboard. ' +
            'Press Ctrl+L to open Copilot Chat, then Ctrl+V to paste.',
            'Open Chat'
        ).then(action => {
            if (action === 'Open Chat') {
                openCopilotPanel();
            }
        });
        sent = true; // Partial success
    }

    // Mark task as sent
    if (sent) {
        markTaskComplete(task);
        showPostDeployOptions(task);
    }
}

async function tryChatOpenWithQuery(prompt, autoSend) {
    try {
        console.log('[BlogDeployer] Trying Method 1: chat.open with query');

        // This is the most reliable method in newer VS Code
        // isPartialQuery: false = auto-submits the prompt
        await vscode.commands.executeCommand('workbench.action.chat.open', {
            query: prompt,
            isPartialQuery: !autoSend
        });

        console.log('[BlogDeployer] Method 1 succeeded');
        updateStatusBar('$(check) Prompt sent to Copilot', 'blogDeployer.pushToGit');
        return true;

    } catch (err) {
        console.log('[BlogDeployer] Method 1 failed:', err.message);
        return false;
    }
}

async function tryAgentModeWithQuery(prompt, autoSend) {
    try {
        console.log('[BlogDeployer] Trying Method 2: Agent mode');

        // Try opening in agent/edit mode
        const agentCommands = [
            'workbench.action.chat.openAgent',
            'workbench.action.chat.openEditSession',
            'github.copilot.chat.openAgent'
        ];

        for (const cmd of agentCommands) {
            try {
                await vscode.commands.executeCommand(cmd, {
                    query: prompt,
                    isPartialQuery: !autoSend
                });
                console.log(`[BlogDeployer] Method 2 succeeded with: ${cmd}`);
                updateStatusBar('$(check) Prompt sent (Agent mode)', 'blogDeployer.pushToGit');
                return true;
            } catch (e) {
                continue;
            }
        }

        return false;
    } catch (err) {
        console.log('[BlogDeployer] Method 2 failed:', err.message);
        return false;
    }
}

async function tryChatPanelInsert(prompt, delayMs) {
    try {
        console.log('[BlogDeployer] Trying Method 3: Panel + clipboard insert');

        // Open the chat panel first
        const opened = await openCopilotPanel();
        if (!opened) return false;

        // Wait for panel to load
        await sleep(delayMs);

        // Copy prompt to clipboard and use paste command
        await vscode.env.clipboard.writeText(prompt);

        // Try to focus the chat input and paste
        await vscode.commands.executeCommand('workbench.action.chat.focusInput');
        await sleep(300);
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        await sleep(500);

        // Try to submit
        await vscode.commands.executeCommand('workbench.action.chat.submit');

        console.log('[BlogDeployer] Method 3 succeeded');
        updateStatusBar('$(check) Prompt sent (panel insert)', 'blogDeployer.pushToGit');
        return true;

    } catch (err) {
        console.log('[BlogDeployer] Method 3 failed:', err.message);
        return false;
    }
}

async function tryInteractiveChat(prompt) {
    try {
        console.log('[BlogDeployer] Trying Method 4: Interactive send');

        // Use the newInteractiveSession or sendInteractiveRequest commands
        const interactiveCommands = [
            'github.copilot.interactiveEditor.explain',
            'github.copilot.chat.sendRequest'
        ];

        for (const cmd of interactiveCommands) {
            try {
                await vscode.commands.executeCommand(cmd, { query: prompt });
                console.log(`[BlogDeployer] Method 4 succeeded with: ${cmd}`);
                return true;
            } catch (e) {
                continue;
            }
        }

        return false;
    } catch (err) {
        console.log('[BlogDeployer] Method 4 failed:', err.message);
        return false;
    }
}

// ============================================================
//  COPILOT PANEL OPENER — tries all known commands
// ============================================================

async function openCopilotPanel() {
    const panelCommands = [
        'workbench.action.chat.open',
        'workbench.action.chat.openAgent',
        'workbench.panel.chat.view.copilot.focus',
        'github.copilot.chat.focus',
        'workbench.action.chat.newChat',
        'github.copilot.interactiveSession.focus'
    ];

    for (const cmd of panelCommands) {
        try {
            await vscode.commands.executeCommand(cmd);
            console.log(`[BlogDeployer] Panel opened with: ${cmd}`);
            return true;
        } catch (e) {
            continue;
        }
    }

    console.log('[BlogDeployer] Could not open Copilot panel');
    return false;
}

// ============================================================
//  POST-DEPLOY: Push to Git
// ============================================================

function showPostDeployOptions(task) {
    // Show a persistent notification after Copilot finishes
    // We can't know exactly when Copilot is done, so we show
    // the push button immediately and let user click when ready

    setTimeout(() => {
        vscode.window.showInformationMessage(
            `📝 Blog ${task.blogNum} prompt sent to Copilot! ` +
            `When Copilot finishes, review changes then push.`,
            'Push to GitHub',
            'Retry Prompt',
            'Dismiss'
        ).then(action => {
            if (action === 'Push to GitHub') {
                pushToGit();
            } else if (action === 'Retry Prompt') {
                retryPrompt();
            }
        });
    }, 5000);
}

async function pushToGit() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace folder open.');
        return;
    }

    const wsRoot = workspaceFolders[0].uri.fsPath;

    // Check for uncommitted changes
    const hasChanges = await new Promise((resolve) => {
        exec('git status --short', { cwd: wsRoot }, (err, stdout) => {
            resolve(stdout && stdout.trim().length > 0);
        });
    });

    if (!hasChanges) {
        vscode.window.showInformationMessage('No changes to commit.');
        return;
    }

    // Ask for commit message
    const blogNum = currentTask ? currentTask.blogNum : '?';
    const defaultMsg = `Add Blog ${blogNum}`;

    const commitMsg = await vscode.window.showInputBox({
        prompt: 'Commit message',
        value: defaultMsg,
        placeHolder: 'Enter commit message...'
    });

    if (!commitMsg) return;

    // Show progress
    await vscode.window.withProgress(
        {
            location: vscode.ProgressLocation.Notification,
            title: 'Pushing to GitHub...',
            cancellable: false
        },
        async (progress) => {
            progress.report({ message: 'Staging files...' });

            try {
                await execPromise('git add -A', wsRoot);
                progress.report({ message: 'Committing...' });

                await execPromise(`git commit -m "${commitMsg}"`, wsRoot);
                progress.report({ message: 'Pushing...' });

                // Detect branch
                let branch = 'main';
                try {
                    branch = (await execPromise(
                        'git symbolic-ref --short HEAD', wsRoot
                    )).trim();
                } catch (e) { /* keep main */ }

                await execPromise(`git push origin ${branch}`, wsRoot);

                vscode.window.showInformationMessage(
                    `✅ Pushed to origin/${branch}: "${commitMsg}"`
                );

                updateStatusBar('$(check) Blog deployed!', '');

            } catch (err) {
                vscode.window.showErrorMessage(
                    `Git push failed: ${err.message}`
                );
            }
        }
    );
}

// ============================================================
//  RETRY / MANUAL COMMANDS
// ============================================================

async function retryPrompt() {
    if (currentTask) {
        await sendToCopilot(currentTask);
    } else {
        // Try to load from file
        await runTask();
    }
}

async function runTask() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace folder open.');
        return;
    }

    const taskPath = path.join(
        workspaceFolders[0].uri.fsPath, '.blog-task.json'
    );

    if (fs.existsSync(taskPath)) {
        await handleNewTask(taskPath);
    } else {
        vscode.window.showWarningMessage(
            'No .blog-task.json found. Run blog-deploy.bat first.'
        );
    }
}

async function pickAndRun() {
    const files = await vscode.workspace.findFiles(
        '**/blog-drafts/*.txt', null, 10
    );

    if (files.length === 0) {
        vscode.window.showWarningMessage('No blog drafts found.');
        return;
    }

    const items = files.map(f => ({
        label: path.basename(f.fsPath),
        description: f.fsPath,
        uri: f
    }));

    const picked = await vscode.window.showQuickPick(items, {
        placeHolder: 'Select a blog draft to deploy'
    });

    if (!picked) return;

    // Generate task from picked file
    const content = fs.readFileSync(picked.uri.fsPath, 'utf8');
    const task = {
        blogNum: 'X',
        blogFile: path.basename(picked.uri.fsPath),
        prompt: `Look at existing blog pages in this project. ` +
                `Create a new blog page using this content:\n\n${content}`,
        status: 'pending'
    };

    currentTask = task;
    await sendToCopilot(task);
}

// ============================================================
//  PREVIEW
// ============================================================

async function previewPrompt(task) {
    const doc = await vscode.workspace.openTextDocument({
        content: task.prompt,
        language: 'markdown'
    });
    await vscode.window.showTextDocument(doc, { preview: true });

    const action = await vscode.window.showInformationMessage(
        'Review the prompt above. Send to Copilot?',
        'Send Now', 'Cancel'
    );

    if (action === 'Send Now') {
        await sendToCopilot(task);
    }
}

// ============================================================
//  HELPERS
// ============================================================

function markTaskComplete(task) {
    try {
        const config = vscode.workspace.getConfiguration('blogDeployer');
        const autoDelete = config.get('autoDeleteTaskFile', true);

        if (task.filePath && fs.existsSync(task.filePath)) {
            if (autoDelete) {
                // Delete the task file
                fs.unlinkSync(task.filePath);
                console.log('[BlogDeployer] Task file deleted');
            } else {
                // Mark as sent
                const updated = { ...task };
                delete updated.filePath;
                updated.status = 'sent';
                updated.sentAt = new Date().toISOString();
                fs.writeFileSync(
                    task.filePath,
                    JSON.stringify(updated, null, 2),
                    'utf8'
                );
            }
        }
    } catch (err) {
        console.error('[BlogDeployer] Error marking task complete:', err);
    }
}

function updateStatusBar(text, command) {
    if (statusBarItem) {
        statusBarItem.text = text;
        statusBarItem.command = command || 'blogDeployer.runTask';
        statusBarItem.show();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function execPromise(command, cwd) {
    return new Promise((resolve, reject) => {
        exec(command, { cwd, encoding: 'utf8' }, (err, stdout, stderr) => {
            if (err) {
                reject(new Error(stderr || err.message));
            } else {
                resolve(stdout);
            }
        });
    });
}

// ============================================================
//  DEACTIVATION
// ============================================================

function deactivate() {
    if (taskWatcher) {
        taskWatcher.dispose();
    }
    if (statusBarItem) {
        statusBarItem.dispose();
    }
    console.log('[BlogDeployer] Extension deactivated');
}

module.exports = { activate, deactivate };