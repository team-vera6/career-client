(()=>{var e={};e.id=458,e.ids=[458],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},29775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(38780),r(72995),r(74762),r(75786);var s=r(36911),a=r(48218),i=r(40255),n=r.n(i),o=r(29379),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["auth",{children:["enter-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38780)),"/Users/hrkim/Desktop/next/career-client/src/app/auth/enter-email/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,72995)),"/Users/hrkim/Desktop/next/career-client/src/app/auth/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,74762)),"/Users/hrkim/Desktop/next/career-client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,75786,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/hrkim/Desktop/next/career-client/src/app/auth/enter-email/page.tsx"],d="/auth/enter-email/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/auth/enter-email/page",pathname:"/auth/enter-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},35770:(e,t,r)=>{Promise.resolve().then(r.bind(r,16963))},25978:()=>{},55362:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(70940),a=r.n(s)},16963:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(55677),a=r(55362),i=r(69247),n=r(61387),o=r(59613),l=r(54453);let c=()=>{let e=(0,i.useRouter)(),[t,r]=(0,n.useState)(""),{userEmailCheck:c}=(0,l.a)(),u=async r=>{r.preventDefault(),"success"===await c(t)&&e.push("/auth/email-verification")};return(0,s.jsxs)("form",{className:"flex flex-col items-center gap-7 w-[22.25rem]",onSubmit:u,children:[s.jsx(o.Z,{placeholder:"이메일 주소",style:{width:"100%"},value:t,onChange:e=>r(e.currentTarget.value)}),s.jsx("button",{type:"submit",className:"button-primary h-12 rounded-xl w-full",children:"메일 인증"}),(0,s.jsxs)("div",{className:"flex gap-2 text-text-strong",children:[s.jsx("p",{className:"font-body-14",children:"이미 계정이 있으신가요?"}),s.jsx(a.default,{href:"/auth/login",children:s.jsx("p",{className:"font-title-14",children:"로그인"})})]})]})}},59613:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(55677),a=r(34012);let i=({errorText:e,...t})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("input",{type:"text",className:"w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive h-11 read-only:outline-0",style:e?{borderColor:a.Z.state.negative,outline:a.Z.state.negative}:{},...t}),e&&s.jsx("p",{className:"text-state-negative font-body-12 mt-[2px]",children:e})]})},38780:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(59093),a=r(48770);let i=(0,a.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/auth/enter-email/components.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let l=(0,a.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/auth/enter-email/components.tsx#default`),c=()=>(0,s.jsxs)("div",{className:"w-[25rem] flex flex-col items-center pt-[3.75rem]",children:[s.jsx("p",{className:"font-body-14 mb-12 text-text-strong",children:"사용 중이신 이메일 주소로 가입할 수 있어요."}),s.jsx(l,{})]})},72995:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(59093);function a({children:e}){return s.jsx("div",{className:"w-full h-dvh flex justify-center pt-60 bg-surface-foreground",children:s.jsx("div",{className:"flex flex-col items-center",children:s.jsx("main",{children:e})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[435,638,246,204,940,633],()=>r(29775));module.exports=s})();