globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D65K-Fvk.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cl9TpjdY.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us - Your Company Name " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 lg:pr-20 lg:pl-20"> <h1 class="text-4xl font-bold mb-6">Contact Us</h1> <div class="grid md:grid-cols-2 gap-8"> <div> <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2> <form class="space-y-4"> <div> <label for="name" class="block mb-1">Name</label> <input type="text" id="name" name="name" class="w-full p-2 border rounded" required> </div> <div> <label for="email" class="block mb-1">Email</label> <input type="email" id="email" name="email" class="w-full p-2 border rounded" required> </div> <div> <label for="message" class="block mb-1">Message</label> <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea> </div> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button> </form> </div> <div> <h2 class="text-2xl font-semibold mb-4">Our Office</h2> <p class="mb-2">C2-36, KA-323, Sector-12</p> <p class="mb-2">Pratap Vihar Ghaziabad</p> <p class="mb-2">Uttar Pradesh, 201009, India</p> <p class="mb-2">Phone:<a href="tel:+919555580002"> +919555580002 </a></p> <p class="mb-2">Email: <a href="mailto:info@dwizzyinfra.com"> info@dwizzyinfra.com</a> </p> <div class="mt-4"> <h3 class="text-xl font-semibold mb-2">Business Hours</h3> <p>Monday - Friday: 10:00 AM - 06:00 PM</p> <p>Saturday - Sunday: Closed</p> </div> </div> </div> </main> ` })}`;
}, "/workspaces/Astro-Builder/src/pages/contact.astro", void 0);

const $$file = "/workspaces/Astro-Builder/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
