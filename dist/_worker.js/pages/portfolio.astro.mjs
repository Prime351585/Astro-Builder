globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DSg_L672.mjs';
import { $ as $$Layout } from '../chunks/Layout_CpvWtCKs.mjs';
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 lg:pl-20 lg:pr-20"> <h1 class=" text-3xl lg:text-6xl font-bold mb-6">Our Portfolio</h1> <!-- Embed PDF --> <div class="flex justify-center mt-8 items-center"> <object data="/Canva/portfolio.pdf" type="application/pdf" width="600" height="800"> <p>Your browser does not support PDFs. <a href="/public/Canva/portfolio.pdf"></a><a href="/Canva/portfolio.pdf" class="text-blue-500">Download the PDF</a>.</p> </object> </div> </main> ` })}`;
}, "/workspaces/Astro-Builder/src/pages/portfolio.astro", void 0);

const $$file = "/workspaces/Astro-Builder/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Portfolio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
