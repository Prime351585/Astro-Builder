globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DSg_L672.mjs';
import { $ as $$Layout } from '../chunks/Layout_CpvWtCKs.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const projectjson = [
	{
		Heading: "66 KVA Transmission Line on Monopoles",
		Client: "Bajaj Electricals Ltd",
		Scope: "Monopoles Foundation & Erection Job",
		Dia: "2500 MM",
		Duration: "2021-05-08 to 2022-06-11",
		Value: "₹ 6,449,467",
		Status: "Work Completed"
	},
	{
		Heading: "132 KVA Monopoles Line in OPPO Project",
		Client: "Bajaj Electricals Ltd",
		Scope: "Civil Foundation Work",
		Dia: "N/A",
		Duration: "2021-06-10 to 2021-09-26",
		Value: "₹ 2,217,000",
		Status: "Work Completed"
	},
	{
		Heading: "132 KVA Monopoles Line in OPPO Project",
		Client: "Bajaj Electricals Ltd",
		Scope: "Monopoles Foundation Job",
		Dia: "2500 MM / 3000 MM",
		Duration: "2021-08-17 to 2021-11-25",
		Value: "₹ 3,655,000",
		Status: "Work Completed"
	},
	{
		Heading: "Elevated Viaduct in Delhi-Meerut RRTS Corridor",
		Client: "Afcons Infrastructure Ltd",
		Scope: "Pile Foundation & Pile Chipping Job",
		Dia: "800 MM / 1200 MM",
		Duration: "2022-06-02 to 2023-07-15",
		Value: "₹ 9,060,000",
		Status: "Work Completed"
	},
	{
		Heading: "Elevated Viaduct in Delhi-Meerut RRTS Corridor",
		Client: "Larsen & Toubro Ltd",
		Scope: "Pile Foundation",
		Dia: "1200 MM",
		Duration: "2022-02-23 to 2022-04-05",
		Value: "₹ 1,500,000",
		Status: "Work Completed"
	},
	{
		Heading: "Pile Foundation Job at 66 KVA Substation",
		Client: "Skytech Engineers",
		Scope: "Pile Foundation",
		Dia: "400 MM / 500 MM / 600 MM",
		Duration: "2022-10-15 to 2022-12-10",
		Value: "₹ 900,000",
		Status: "Work Completed"
	},
	{
		Heading: "132 KVA Monopoles Line in Gwalior",
		Client: "Bajel Electricals Ltd",
		Scope: "Monopoles Foundation & Erection Job",
		Dia: "2500 MM / 3000 MM / 35000 MM",
		Duration: "2022-11-01 to Ongoing",
		Value: "₹ 13,500,000",
		Status: "Under Progress"
	},
	{
		Heading: "400 KVA Monopoles Line from Noida to Ghaziabad",
		Client: "Bajaj Electricals Ltd",
		Scope: "Monopoles Foundation Job",
		Dia: "2500 MM / 3000 MM / 35000 MM",
		Duration: "2022-11-05 to 2023-05-15",
		Value: "₹ 5,562,000",
		Status: "Work Completed"
	},
	{
		Heading: "Ganga Expressway Pile Chipping Job",
		Client: "Larsen & Toubro Ltd",
		Scope: "Pile Chipping Job",
		Dia: "1000 MM / 1200 MM / 1500 MM",
		Duration: "2023-05-12 to 2023-11-21",
		Value: "₹ 1,365,000",
		Status: "Work Completed"
	},
	{
		Heading: "220 KVA MC BN Towers LILO Project",
		Client: "Bajel Projects Ltd",
		Scope: "Civil Foundation / Piling Job",
		Dia: "1000 MM / 1200 MM / 1500 MM",
		Duration: "2023-06-20 to 2024-02-28",
		Value: "₹ 16,534,000",
		Status: "Work Completed"
	},
	{
		Heading: "1200 MM Pile Viaduct Construction",
		Client: "H.G Infra Engineering Ltd",
		Scope: "Piling Job with Hydraulic Rig",
		Dia: "1200 MM",
		Duration: "2023-11-29 to 2024-07-18",
		Value: "₹ 25,000,000",
		Status: "Work Completed"
	},
	{
		Heading: "220 KVA Monopoles Construction in Gujarat",
		Client: "Bajel Projects Ltd",
		Scope: "Monopoles Foundation Job",
		Dia: "3000 MM / 3200 MM / 3500 MM / 4500 MM",
		Duration: "2023-12-30 to 2024-03-26",
		Value: "₹ 25,500,000",
		Status: "Work Completed"
	},
	{
		Heading: "Pile Foundation 1200 MM Dia Project",
		Client: "Bajel Projects Ltd",
		Scope: "Pile Foundation",
		Dia: "1200 MM",
		Duration: "2024-05-15 to 2024-06-26",
		Value: "₹ 7,500,000",
		Status: "Work Completed"
	},
	{
		Heading: "Six Lane Highway Development in Uttar Pradesh",
		Client: "Raj Shyama Constructions Pvt Ltd",
		Scope: "Piling Job with Hydraulic Rig Machine",
		Dia: "1200 MM",
		Duration: "2024-07-10 to Ongoing",
		Value: "₹ 5,000,000",
		Status: "Under Progress"
	}
];

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 lg:pl-20 lg:pr-20" data-astro-cid-aid3sr62> <h1 class=" text-3xl lg:text-6xl font-bold mb-6" data-astro-cid-aid3sr62>Our Projects</h1> <div class="projects-grid" data-astro-cid-aid3sr62> ${projectjson.map((project) => renderTemplate`<div class="project-card" data-astro-cid-aid3sr62> <h3 class="project-title" data-astro-cid-aid3sr62>${project.Heading}</h3> <p class="project-detail" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Client:</strong> ${project.Client}</p> <p class="project-detail" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Scope:</strong> ${project.Scope}</p> <p class="project-detail" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Duration:</strong> ${project.Duration}</p> <p class="project-detail" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Value:</strong> ${project.Value}</p> <p class="project-detail" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Status:</strong> <span${addAttribute(`status project-card status-${project.Status === "Work Completed" ? "completed" : "progress"}`, "class")} data-astro-cid-aid3sr62>${project.Status}</span></p> </div>`)} </div> </main> ` })}`;
}, "/workspaces/Astro-Builder/src/pages/projects.astro", void 0);

const $$file = "/workspaces/Astro-Builder/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
