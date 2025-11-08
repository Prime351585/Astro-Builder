globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_D65K-Fvk.mjs';
import './chunks/astro-designed-error-pages_CMbgeYsG.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_hgPAMIOo.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/Astro-Builder/","cacheDir":"file:///workspaces/Astro-Builder/node_modules/.astro/","outDir":"file:///workspaces/Astro-Builder/dist/","srcDir":"file:///workspaces/Astro-Builder/src/","publicDir":"file:///workspaces/Astro-Builder/public/","buildClientDir":"file:///workspaces/Astro-Builder/dist/","buildServerDir":"file:///workspaces/Astro-Builder/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/about","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"/about","pathname":"/about","prerender":false,"redirect":"/","redirectRoute":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Da8rhTFU.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Da8rhTFU.css"}],"routeData":{"route":"/privacypolicy","isIndex":false,"type":"page","pattern":"^\\/privacyPolicy\\/?$","segments":[[{"content":"privacyPolicy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacyPolicy.astro","pathname":"/privacyPolicy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Da8rhTFU.css"},{"type":"inline","content":".projects-grid[data-astro-cid-aid3sr62]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;padding:1rem;background-color:#f3f4f6;border-radius:.5rem;box-shadow:0 4px 6px #0000001a;cursor:default}.project-card[data-astro-cid-aid3sr62]{background-color:#fff;border-radius:.375rem;padding:1rem;transition:all .3s ease;box-shadow:0 2px 4px #0000000d}.project-card[data-astro-cid-aid3sr62]:hover{transform:translateY(-5px);box-shadow:0 4px 8px #0000001a}.project-title[data-astro-cid-aid3sr62]{font-size:1rem;font-weight:700;color:#1f2937;margin-bottom:.5rem}.project-detail[data-astro-cid-aid3sr62]{font-size:.875rem;color:#4b5563;margin-bottom:.25rem}.status[data-astro-cid-aid3sr62]{display:inline-block;padding:.25rem .5rem;border-radius:9999px;font-size:.75rem;font-weight:700;text-transform:uppercase}.status-completed[data-astro-cid-aid3sr62]{background-color:#d1fae5;color:#065f46}.status-progress[data-astro-cid-aid3sr62]{background-color:#fef3c7;color:#92400e}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Da8rhTFU.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Da8rhTFU.css"},{"type":"inline","content":".animate-scroll[data-astro-cid-iuzbqp2t]{animation:scroll 40s linear infinite}.animate-scroll[data-astro-cid-iuzbqp2t]:hover{animation-play-state:paused}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(calc(-100% - 4rem))}}.logo-slide[data-astro-cid-iuzbqp2t]{flex:0 0 auto}@media (min-width: 768px){.animate-scroll[data-astro-cid-iuzbqp2t]:before,.animate-scroll[data-astro-cid-iuzbqp2t]:after{content:\"\";position:absolute;top:0;width:50px;height:100%;z-index:2}.animate-scroll[data-astro-cid-iuzbqp2t]:before{left:0}.animate-scroll[data-astro-cid-iuzbqp2t]:after{right:0}}.bg-image-1[data-astro-cid-b4h46p6s]{background-image:url(/Canva/1.webp)}.bg-image-2[data-astro-cid-b4h46p6s]{background-image:url(/Canva/StructuralWorks.webp)}.bg-image-3[data-astro-cid-b4h46p6s]{background-image:url(/Canva/SpecialCage.webp)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://dwizzyinfra.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/Astro-Builder/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/workspaces/Astro-Builder/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/Astro-Builder/src/pages/privacyPolicy.astro",{"propagation":"none","containsHead":true}],["/workspaces/Astro-Builder/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/workspaces/Astro-Builder/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/privacyPolicy@_@astro":"pages/privacypolicy.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DLXfo9Qr.mjs","/workspaces/Astro-Builder/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/workspaces/Astro-Builder/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_6WPGWDc2.mjs","/workspaces/Astro-Builder/src/pages/services.astro?astro&type=script&index=0&lang.ts":"_astro/services.astro_astro_type_script_index_0_lang.JMdzHoFm.js","/workspaces/Astro-Builder/src/components/Slider.astro?astro&type=script&index=0&lang.ts":"_astro/Slider.astro_astro_type_script_index_0_lang.DgBv7bYe.js","/workspaces/Astro-Builder/src/components/CompanySlider.astro?astro&type=script&index=0&lang.ts":"_astro/CompanySlider.astro_astro_type_script_index_0_lang.DQVVEh6t.js","/workspaces/Astro-Builder/src/components/WhatWeDo.astro?astro&type=script&index=0&lang.ts":"_astro/WhatWeDo.astro_astro_type_script_index_0_lang.t5eYk6no.js","/workspaces/Astro-Builder/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.d6V8J2CV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/workspaces/Astro-Builder/src/components/Slider.astro?astro&type=script&index=0&lang.ts","const r=document.getElementById(\"slider-container\"),o=document.getElementById(\"prev-button\"),l=document.getElementById(\"next-button\"),i=document.getElementById(\"progress-bar\"),t=document.querySelectorAll(\"#slider-container > div\").length;let e=0,d;function c(){r&&(r.style.transform=`translateX(-${e*100}%)`),i&&(i.style.width=`${(e+1)/t*100}%`)}function n(u){e=(e+u+t)%t,c(),a()}function s(){d=setInterval(()=>{n(1)},5e3)}function a(){clearInterval(d),s()}o&&o.addEventListener(\"click\",()=>n(-1));l&&l.addEventListener(\"click\",()=>n(1));c();s();"],["/workspaces/Astro-Builder/src/components/CompanySlider.astro?astro&type=script&index=0&lang.ts","function i(){const e=document.querySelector(\".animate-scroll\"),t=Array.from(document.querySelectorAll(\".logo-slide\")).reduce((n,d)=>n+d.offsetWidth,0);if(t<window.innerWidth&&e!==null){const n=Math.ceil(window.innerWidth/t)+1;e.innerHTML=e.innerHTML.repeat(n)}}window.addEventListener(\"load\",i);window.addEventListener(\"resize\",i);"],["/workspaces/Astro-Builder/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/aboutus.Cuf0tzrS.webp","/_astro/icon.CGGwzaKN.webp","/_astro/linkedin-icon.CjG-WsE7.svg","/_astro/instagram-icon.Dh05VWxw.svg","/_astro/contact.Da8rhTFU.css","/favicon.svg","/icon.webp","/instagram-icon.svg","/linkedin-icon.svg","/Canva/1.webp","/Canva/AkshayPanwar.webp","/Canva/PileConstruction.webp","/Canva/PileFoundation.webp","/Canva/PowerErection.webp","/Canva/PratapSinghJindal.webp","/Canva/RahulNagar.webp","/Canva/SpecialCage.webp","/Canva/StructuralWorks.webp","/Canva/aboutus.webp","/Canva/portfolio.pdf","/Canva/what_we_do1.webp","/Canva/what_we_do2.webp","/Canva/what_we_do3.webp","/Canva/what_we_do4.webp","/Canva/what_we_do5.webp","/Partners/Afcons.webp","/Partners/Bajaj.webp","/Partners/HP.webp","/Partners/Hgiel.webp","/Partners/LT.webp","/Partners/NCC.webp","/Partners/Rajshyama.webp","/Partners/bajel.webp","/Site/1.webp","/Site/2.webp","/Site/3.webp","/Site/4.webp","/Site/5.webp","/Site/6.webp","/SliderImages/1.webp","/SliderImages/10.webp","/SliderImages/19.webp","/SliderImages/2.webp","/SliderImages/3.webp","/SliderImages/4.webp","/SliderImages/7.webp","/SliderImages/Cage1.webp","/_astro/WhatWeDo.astro_astro_type_script_index_0_lang.t5eYk6no.js","/_astro/index.DKtf60Sy.js","/_astro/services.astro_astro_type_script_index_0_lang.JMdzHoFm.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_astro/aboutus.Cuf0tzrS.webp","/_worker.js/_astro/contact.Da8rhTFU.css","/_worker.js/_astro/icon.CGGwzaKN.webp","/_worker.js/_astro/instagram-icon.Dh05VWxw.svg","/_worker.js/_astro/linkedin-icon.CjG-WsE7.svg","/_worker.js/chunks/Layout_Cl9TpjdY.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Bz7AZzCn.mjs","/_worker.js/chunks/astro-designed-error-pages_CMbgeYsG.mjs","/_worker.js/chunks/astro_Dtmc_DCW.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_CLNYi4w5.mjs","/_worker.js/chunks/noop-middleware_hgPAMIOo.mjs","/_worker.js/chunks/path_lFLZ0pUM.mjs","/_worker.js/chunks/sharp_6WPGWDc2.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/contact.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/privacypolicy.astro.mjs","/_worker.js/pages/projects.astro.mjs","/_worker.js/pages/services.astro.mjs","/_worker.js/chunks/astro/server_D65K-Fvk.mjs"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"URPrunr81AMDLkvLHaXsGJbBuR8ENKs9m9xBJxfwmD0=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
