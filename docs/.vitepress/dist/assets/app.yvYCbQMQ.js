import{j as o,a1 as p,a2 as u,a3 as c,a4 as l,a5 as f,a6 as d,a7 as m,a8 as h,a9 as A,aa as g,ab as v,d as P,u as y,l as C,z as w,ac as _,ad as b,ae as E,af as R}from"./chunks/framework.EUmXWpxD.js";import{t as D}from"./chunks/theme.Mi6r6lR3.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(D),j=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return C(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&_(),b(),E(),s.setup&&s.setup(),()=>R(s.Layout)}});async function L(){const e=S(),a=O();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(j)}function S(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&L().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
