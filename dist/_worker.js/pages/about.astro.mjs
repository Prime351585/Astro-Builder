globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderScript, a as addAttribute, b as renderTemplate, d as renderComponent } from '../chunks/astro/server_D_orNtTN.mjs';
import { $ as $$Layout, a as $$Image } from '../chunks/Layout_DAZ7Q1Ap.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What services does Dwizzy Infra offer?",
      answer: "At Dwizzy Infra, we offer a broad spectrum of services in the construction industry, including road construction, railway development, bridge engineering, urban transit systems, and energy infrastructure projects. Our expertise allows us to manage a wide range of infrastructure projects effectively."
    },
    {
      question: "What makes Dwizzy Infra a trusted partner in construction?",
      answer: "With years of experience and a dedicated team of professionals, we have built a reputation for excellence in the construction industry. We focus on delivering high-quality projects, maintaining strict safety standards, and embracing innovation to ensure we always meet and exceed our clients' expectations."
    },
    {
      question: "How does Dwizzy Infra ensure project quality and safety?",
      answer: "Quality and safety are at the heart of everything we do at Dwizzy Infra. Our skilled professionals work diligently to ensure every project is completed to the highest standards, on time, and within budget. We are committed to using the best practices and modern technology to achieve exceptional results."
    },
    {
      question: "What sets Dwizzy Infra apart from other construction companies?",
      answer: "Our commitment to innovation, quality, and safety sets us apart. We are more than just a construction company; we are a reliable partner dedicated to delivering outstanding infrastructure solutions. Our team's passion for excellence and our client-centric approach ensure that we consistently deliver on our promises."
    },
    {
      question: "How does Dwizzy Infra contribute to community development?",
      answer: "We believe in contributing positively to the communities we serve by delivering projects that enhance social and economic development. Our projects are designed to benefit the community by improving infrastructure and creating sustainable growth opportunities."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-8" data-astro-cid-al2ca2vr> <h2 class="text-3xl font-bold mb-6 text-center" data-astro-cid-al2ca2vr>Frequently Asked Questions</h2> <div class="space-y-4" data-astro-cid-al2ca2vr> ${faqs.map((faq, index) => renderTemplate`<div class="border border-gray-200 rounded-lg text-xl" data-astro-cid-al2ca2vr> <button class="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"${addAttribute(`faq-button-${index}`, "id")} data-astro-cid-al2ca2vr> <span class="font-bold" data-astro-cid-al2ca2vr>${faq.question}</span> <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </button> <div class="hidden px-4 pb-4"${addAttribute(`faq-answer-${index}`, "id")} data-astro-cid-al2ca2vr> <p class="text-gray-700 font-medium" data-astro-cid-al2ca2vr>${faq.answer}</p> </div> </div>`)} </div> </div> ${renderScript($$result, "/workspaces/Astro-Builder/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")} `;
}, "/workspaces/Astro-Builder/src/components/FAQ.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us  " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 lg:pl-20 lg:pr-20"> <h1 class=" text-3xl lg:text-6xl font-bold mb-6">About Us</h1> <div class=" mt-10 mb-10 w-[100%] h-1 bg-primary rounded-lg "></div> <div class="flex flex-col md:flex-row gap-8"> <div class="md:w-1/3 "> ${renderComponent($$result2, "Image", $$Image, { "src": "/Canva/aboutus.webp", "alt": "Construction site", "width": 300, "height": 100, "class": "rounded-lg shadow-lg object-cover w-[400px] h-[400px]" })}</div> <div class="md:w-2/3"> <p class="text-lg  mb-4">
At Dwizzy Infra, we're committed to excellence in the construction industry. With years of experience and a dedicated team, we've established ourselves as a trusted partner for a wide range of infrastructure projects.
</p> <p class="text-lg  mb-4">
Our expertise spans various sectors, including:
</p> <ul class="list-disc list-inside mb-4 text-lg "> <li>Road construction</li> <li>Railway development</li> <li>Bridge engineering</li> <li>Urban transit systems</li> <li>Energy infrastructure</li> </ul> <p class="text-lg ">
We pride ourselves on our commitment to quality, safety, and innovation. Our team of skilled professionals works tirelessly to deliver projects on time and within budget, always exceeding our clients' expectations.
</p> <div class="line mt-10 w-[100%] h-1 bg-primary rounded-lg "></div> <div class="text-3xl lg:text-5xl font-bold flex items-center justify-end mt-10 mb-28">
Our Team
</div> </div> </div> <div class="lg:flex items-center justify-center gap-7 "> <div class="w-[350px] h-[350px] flex flex-col items-center justify-center mb-20"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": "/Canva/AkshayPanwar.webp", "alt": "Team member", "width": 400, "height": 400, "class": "pic rounded-[50%] shadow-lg" })}</div> <div> <h1 class="text-3xl font-bold text-black mt-2">Akshay Panwar</h1> <p class="text-sm text-center">Head of Business Development</p> </div> </div> <div class="w-[350px] h-[350px] flex flex-col items-center justify-center mb-20"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": "/Canva/RahulNagar.webp", "alt": "Team member", "width": 400, "height": 400, "class": "pic rounded-[50%] shadow-lg" })}</div> <div> <h1 class="text-3xl font-bold text-black mt-2">Rahul Nagar</h1> <p class="text-sm text-center">Head of Operations</p> </div> </div> <div class="w-[350px] h-[350px] flex flex-col items-center justify-center mb-20 "> <div> ${renderComponent($$result2, "Image", $$Image, { "src": "/Canva/PratapSinghJindal.webp", "alt": "Team member", "width": 400, "height": 400, "class": "pic rounded-[50%] shadow-lg" })}</div> <h1 class="text-3xl font-bold text-black mt-2">Pratap Singh </h1> <p class="text-sm text-center">Project Manager</p> </div> </div> <div class="text-5xl font-bold "> <div class="line mt-10 w-[100%] h-1 bg-primary rounded-lg "></div> ${renderComponent($$result2, "FAQ", $$FAQ, {})} </div> </main> ` })} ${renderScript($$result, "/workspaces/Astro-Builder/src/pages/about.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Astro-Builder/src/pages/about.astro", void 0);

const $$file = "/workspaces/Astro-Builder/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
