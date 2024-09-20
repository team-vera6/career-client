(()=>{var e={};e.id=797,e.ids=[797],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},38812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(8143),r(72995),r(74762),r(75786);var s=r(36911),a=r(48218),i=r(40255),n=r.n(i),o=r(29379),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["auth",{children:["email-verification",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8143)),"/Users/hrkim/Desktop/next/career-client/src/app/auth/email-verification/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,72995)),"/Users/hrkim/Desktop/next/career-client/src/app/auth/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,74762)),"/Users/hrkim/Desktop/next/career-client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,75786,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/hrkim/Desktop/next/career-client/src/app/auth/email-verification/page.tsx"],p="/auth/email-verification/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/auth/email-verification/page",pathname:"/auth/email-verification",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},38410:(e,t,r)=>{Promise.resolve().then(r.bind(r,25281))},25978:()=>{},25281:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var s=r(55677),a=r(19964),i=r(69247),n=r(61387),o=r(34012);let l=(0,n.forwardRef)(({value:e,onChange:t,errorText:r,...a},i)=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("input",{type:"text",inputMode:"numeric",className:"p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive w-10 h-11 text-center",style:r?{borderColor:o.Z.state.negative,outline:o.Z.state.negative}:{},value:e,onChange:t,size:1,ref:i,...a}),r&&s.jsx("p",{className:"text-state-negative font-body-12 mt-[2px]",children:r})]}));l.displayName="NumberInput";let c=({timeLimit:e,interval:t=1e3})=>{let[r,s]=(0,n.useState)(e),[a,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=setInterval(()=>{s(e=>e-t)},t);return r<=0&&(clearInterval(e),i(!0)),()=>clearInterval(e)},[r,t]),{isTimeExpired:a,minutes:(0,n.useMemo)(()=>Math.floor(r/6e4%60),[r]),seconds:(0,n.useMemo)(()=>Math.floor(r/1e3%60),[r]),setCurrentTime:s}};var u=r(54453),p=r(12144),d=r(10733);let x=()=>{let e=(0,i.useRouter)(),[t,r]=(0,n.useState)(Array(6).fill("")),o=(0,n.useRef)([]),[{email:x,id:m},h]=(0,a.KO)(p.I),{userEmailCheck:f,userEmailVerification:v}=(0,u.a)();(0,n.useEffect)(()=>{""===x&&e.push("/auth/enter-email")},[x,e]);let{isTimeExpired:g,minutes:b,seconds:y,setCurrentTime:j}=c({timeLimit:3e5}),q=(e,s)=>{let a=/^[0-9]+$/.test(e);if(""!==e&&!a)return;if(e.length>1){let a=[...t];for(let t=0;t<e.length&&s+t<6;t++)a[s+t]=e[t];r(a),o.current[Math.min(5,s+e.length)]?.focus();return}let i=[...t];i[s]=e,r(i),e&&s<t.length-1&&o.current[s+1]?.focus()},w=(e,r)=>{"Backspace"===e.key&&""===t[r]&&0!==r&&o.current[r-1]?.focus()},P=async r=>{if(r.preventDefault(),g){e.push("/auth/enter-email"),h({email:"",id:""});return}"success"===await v(m,t.join(""))&&e.push("/auth/password")},k=async()=>{await f(x,!0),j(3e5)},N=(0,n.useMemo)(()=>!!g||t.every(e=>""!==e),[t,g]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"font-body-14 mb-12 text-text-strong",children:[s.jsx("span",{className:"font-title-14 mr-0.5",children:x}),"으로 전송된 인증 메일을 확인해 주세요."]}),(0,s.jsxs)("form",{className:"flex flex-col items-center gap-5 w-[22.25rem]",onSubmit:P,children:[s.jsx("div",{className:"flex gap-2",children:t.map((e,t)=>s.jsx(l,{value:e,onChange:e=>q(e.currentTarget.value,t),autoFocus:0===t,ref:e=>{o.current[t]=e},onKeyDown:e=>w(e,t)},`code-${t}`))}),g?s.jsx("p",{className:"font-body-14 text-text-primary",children:"인증 번호를 재전송해 주세요."}):s.jsx("p",{className:"font-body-14 text-text-strong",children:`${b}:${(0,d.K)(y,2)}`}),s.jsx("button",{type:"submit",className:"button-primary h-12 rounded-xl w-full",disabled:!N,children:"확인"}),(0,s.jsxs)("p",{className:"font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong",children:[`메일이 오지 않으셨나요?
스팸함을 확인하거나 인증 메일을 `,s.jsx("strong",{className:"font-title-14 cursor-pointer",onClick:k,children:"재전송"}),"해 주세요."]})]})]})}},10733:(e,t,r)=>{"use strict";r.d(t,{K:()=>s});let s=(e,t)=>e.toString().padStart(t,"0")},8143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(59093),a=r(48770);let i=(0,a.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/auth/email-verification/components.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let l=(0,a.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/auth/email-verification/components.tsx#default`),c=()=>s.jsx("div",{className:"w-[25rem] flex flex-col items-center pt-[3.75rem]",children:s.jsx(l,{})})},72995:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(59093);function a({children:e}){return s.jsx("div",{className:"w-full h-dvh flex justify-center pt-60 bg-surface-foreground",children:s.jsx("div",{className:"flex flex-col items-center",children:s.jsx("main",{children:e})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[435,638,246,204,633],()=>r(38812));module.exports=s})();