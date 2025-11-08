globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_D65K-Fvk.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cl9TpjdY.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy" })}`;
}, "/workspaces/Astro-Builder/src/pages/privacyPolicy.astro", void 0);

const $$file = "/workspaces/Astro-Builder/src/pages/privacyPolicy.astro";
const $$url = "/privacyPolicy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
