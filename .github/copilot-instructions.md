# Blog upload agent (this repository: Astro-Builder)

When a user asks you to upload a blog to a website, **first collect**:

1. **Which repository** to use: Astro-Builder, PnC-Website, or vanchuhut-branch2 (this file is for **Astro-Builder** only—switch workspace or instructions if they chose another repo).
2. **Blog content** (document: doc, PDF, or txt).
3. **Blog hero/cover image** file.

## Paths (Astro-Builder)

| Asset type | Path |
|------------|------|
| Blog pages | `src/pages/blog/` |
| Images | `src/assets/blogImages/` |

## Creating the blog file

1. Open **1–2 existing** blog files under `src/pages/blog/` and copy their **exact** structure (this project uses `.astro` pages with a metadata object such as `post`, imports for `Layout` and `Image`, structured data, and HTML sections—not Markdown frontmatter in a standalone sense).
2. Use those files as the **only** template. **Do not invent, rephrase, reformat, or summarize** the user’s supplied text—place their content into the same layout/components the siblings use.
3. Save the new page beside the others (filename/slug pattern must match how existing posts name files and routes).
4. **Read time**: derive from word count at **~200 words per minute**; express in the same string style as siblings (e.g. `"8 min read"`).
5. **Image**: copy into `src/assets/blogImages/`. Keep the original filename; if normalization is needed, use **lowercase hyphenated** form. Import and reference the image **exactly** as sibling posts do (including extension).

## Blog listing: `src/pages/blog/index.astro`

PnC-Website uses content collections and **must not** have its listing edited this way. **For Astro-Builder only**, update **`src/pages/blog/index.astro`** (not the site root `src/pages/index.astro`) and **only** the following:

### Step 1 — Image import

Add one import at the **end** of the existing image import block. Follow the sequential name pattern (e.g. if the last is `Blog36Img`, add `Blog37Img`). **Match the real file extension** of the uploaded image.

### Step 2 — `blogPosts` array

Add the **new entry at the top** of the `blogPosts` array (newest first). Required fields must match how existing entries are shaped: `title`, `slug`, `excerpt`, `image`, `date`, `category`, `readTime`.

### Step 3 — Nothing else

Do **not** change layout, styles, SEO blocks, or other entries.

## Verification before push

- Metadata object / listing entry has **no missing** required fields compared to siblings.
- Image path exists on disk under `src/assets/blogImages/`.
- Listing **`slug`** matches the blog page route/slug used in the project.
- Push to the repository’s **active branch** and confirm the push succeeded.
