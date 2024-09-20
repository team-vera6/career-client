(()=>{var e={};e.id=781,e.ids=[781],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},73796:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(41442),s(58145),s(75786),s(74762);var r=s(36911),a=s(48218),n=s(40255),i=s.n(n),o=s(29379),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(with-navigation)",{children:["dashboards",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,41442)),"/Users/hrkim/Desktop/next/career-client/src/app/(with-navigation)/dashboards/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,58145)),"/Users/hrkim/Desktop/next/career-client/src/app/(with-navigation)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,75786,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,74762)),"/Users/hrkim/Desktop/next/career-client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,75786,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,25585))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/hrkim/Desktop/next/career-client/src/app/(with-navigation)/dashboards/page.tsx"],x="/(with-navigation)/dashboards/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(with-navigation)/dashboards/page",pathname:"/dashboards",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},65493:(e,t,s)=>{Promise.resolve().then(s.bind(s,41911))},68039:(e,t,s)=>{"use strict";s.d(t,{h:()=>a});var r=s(14327);let a=async({content:e,isMarked:t})=>await (0,r.QQ)("/memos",{content:e,isMarked:t})},61278:(e,t,s)=>{"use strict";s.d(t,{LC:()=>o,_Y:()=>n,nv:()=>i,t_:()=>a});var r=s(14327);let a=async()=>await (0,r.bN)("/reviews/page"),n=async({year:e,month:t,week:s})=>await (0,r.bN)("/highlights",{params:{year:e,month:t,week:s}}),i=async({year:e,month:t,week:s})=>await (0,r.bN)("/lowlights",{params:{year:e,month:t,week:s}}),o=async({year:e,month:t,week:s})=>await (0,r.bN)("/todos",{params:{year:e,month:t,week:s}})},44948:(e,t,s)=>{"use strict";s.d(t,{a:()=>a});var r=s(14327);let a=async e=>await (0,r.GZ)("/todos",{params:{ids:e.join(",")}})},41911:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>I});var r=s(55677),a=s(19964),n=s(55362),i=s(61387),o=s(14327),l=s(4564),d=s(54453),c=s(85072),x=s(94270),h=s(85269),u=s(36078),m=s(68039),p=s(9451),g=s(24436),f=s(26015),A=s(92397);let w=()=>{let[e,t]=(0,i.useState)(!1),[s,n]=(0,a.KO)(l.P$),o=(0,a.Dv)(c.C),d=async({year:e,month:t,week:s})=>{n((await (0,u.k)({year:e,month:t,week:s})).memos.map(e=>({id:String(e.id),isBookmark:e.isMarked,memo:e.content,date:e.updatedAt})))};(0,i.useEffect)(()=>{d(o)},[o]);let w=async e=>{try{await (0,m.h)({content:e,isMarked:!1})}catch(e){console.log("fail to add memo",e)}};return(0,r.jsxs)("section",{className:"shrink-0 min-w-[252px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between w-full",children:[r.jsx("p",{className:"font-title-16 text-text-strong",children:"이번 주 메모"}),(0,r.jsxs)("button",{className:"button-line button-small h-8",onClick:()=>t(!0),children:[r.jsx(g.Z,{size:20}),r.jsx("p",{className:"font-body-13 text-text-strong",children:"추가"})]})]}),s.length>0?r.jsx("div",{className:"flex flex-col gap-3 mt-4",children:s.map((e,t)=>r.jsx(f.Z,{id:e.id,title:e.title,memo:e.memo,date:e.date},t))}):(0,r.jsxs)("div",{className:"w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]",children:[r.jsx("p",{className:"font-body-16 text-text-normal",children:"번뜩이는 아이디어는 메모에 남겨봐요."}),r.jsx(h.default,{src:p.Z,width:100,height:100,alt:"no memo"})]}),r.jsx(A.Z,{isOpen:e,onDismiss:()=>{t(!1)},onSaveText:async e=>{await w(e),n(t=>[...t,{id:new Date().toString(),title:"",memo:e,date:(0,x.WU)(new Date,"yyyy-MM-dd HH:mm")}])},value:""})]})},b=({size:e=20,...t})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("path",{d:"M24.9761 8.85588C25.3033 11.0391 25.6833 12.2887 24.1217 12.2887C21.9969 12.2887 21.9961 7.25988 18.4001 4.39508C14.8425 1.56148 12.1889 2.25028 12.1329 2.26548C12.1321 2.26628 12.1305 2.26788 12.1297 2.26868C15.0929 4.74228 13.4401 8.80788 11.5009 9.92868C9.64009 11.0039 7.51609 9.64788 8.62809 6.45668C6.18249 9.80068 4.07129 13.8527 4.07129 17.8903C4.07129 24.4783 9.41209 29.8191 16.0001 29.8191C22.5881 29.8191 27.9289 24.4783 27.9289 17.8903C27.9289 14.7775 26.6713 11.6559 24.9761 8.85588Z",fill:"#FF723E"}),r.jsx("path",{d:"M16.0001 16.0146C16.0001 16.0146 21.1873 19.0018 21.1873 23.1754C21.1873 26.0402 18.8649 28.3626 16.0001 28.3626C13.1353 28.3626 10.8129 26.0402 10.8129 23.1754C10.8129 19.0018 16.0001 16.0146 16.0001 16.0146Z",fill:"#FFEFEB"})]}),j=({size:e=20,...t})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("path",{d:"M11.2672 12.8664C9.30961 12.9768 7.35201 12.7568 5.39441 11.8752C5.39441 9.91764 5.39441 7.96004 5.39441 6.00244C7.35201 6.88324 9.30961 7.10404 11.2672 6.99364C11.2672 8.95124 11.2672 10.9088 11.2672 12.8664Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M17.1401 11.8752C15.1825 12.316 13.2249 12.756 11.2673 12.8664C11.2673 10.9088 11.2673 8.95124 11.2673 6.99364C13.2249 6.88404 15.1825 6.44324 17.1401 6.00244V11.8752Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M23.0127 10.884C21.0551 10.9944 19.0975 11.4344 17.1399 11.8752V6.00243C19.0975 5.56243 21.0551 5.12163 23.0127 5.01123V10.884Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M28.8856 11.8755C26.928 10.9947 24.9704 10.7747 23.0128 10.8843V5.01152C24.8048 4.91072 26.5968 5.08672 28.388 5.79232C28.6904 5.91152 28.8856 6.21472 28.8856 6.53952V11.8755Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M11.2672 18.7395C9.30961 18.8499 7.35201 18.6291 5.39441 17.7483C5.39441 15.7907 5.39441 13.8331 5.39441 11.8755C7.35201 12.7563 9.30961 12.9763 11.2672 12.8667C11.2672 14.8243 11.2672 16.7819 11.2672 18.7395Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M17.1401 17.7483C15.1825 18.1891 13.2249 18.6291 11.2673 18.7395C11.2673 16.7819 11.2673 14.8243 11.2673 12.8667C13.2249 12.7563 15.1825 12.3163 17.1401 11.8755V17.7483Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M23.0127 16.7566C21.0551 16.867 19.0975 17.3078 17.1399 17.7478V11.875C19.0975 11.435 21.0551 10.9942 23.0127 10.8838V16.7566Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M28.8856 17.7482C26.928 16.8674 24.9704 16.6474 23.0128 16.757V10.8842C24.9704 10.7738 26.928 10.9946 28.8856 11.8754V17.7482Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M11.2672 24.612C9.30961 24.7224 7.35201 24.5016 5.39441 23.6208C5.39441 21.6632 5.39441 19.7056 5.39441 17.748C7.35201 18.6288 9.30961 18.8488 11.2672 18.7392C11.2672 20.6968 11.2672 22.6544 11.2672 24.612Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M17.1401 23.6208C15.1825 24.0616 13.2249 24.5016 11.2673 24.612C11.2673 22.6544 11.2673 20.6968 11.2673 18.7392C13.2249 18.6288 15.1825 18.188 17.1401 17.748V23.6208Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M23.0127 22.6296C21.0551 22.74 19.0975 23.18 17.1399 23.6208V17.748C19.0975 17.3072 21.0551 16.8672 23.0127 16.7568V22.6296Z",fill:"#3D3D3D"}),r.jsx("path",{d:"M27.8352 23.21C26.228 22.6724 24.62 22.5396 23.0128 22.63V16.7572C24.9704 16.6468 26.928 16.8676 28.8856 17.7484V22.4572C28.8856 23.002 28.352 23.3828 27.8352 23.21Z",fill:"#E3E3E3"}),r.jsx("path",{d:"M4.71443 28.6704C4.27203 28.6704 3.91443 28.3128 3.91443 27.8704V4.12959C3.91443 3.68719 4.27203 3.32959 4.71443 3.32959C5.15683 3.32959 5.51443 3.68719 5.51443 4.12959V27.8704C5.51443 28.3128 5.15683 28.6704 4.71443 28.6704Z",fill:"#3D3D3D"})]}),C=({size:e=20,...t})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("path",{d:"M4.00012 9L26.8406 7.17276C28.0044 7.07966 29.0001 7.99894 29.0001 9.16639V24.1536C29.0001 25.1963 28.199 26.0641 27.1596 26.1472L6.15961 27.8272C4.99588 27.9203 4.00012 27.0011 4.00012 25.8336V9Z",fill:"#FFC33A"}),r.jsx("path",{d:"M4.00012 6.84027C4.00012 5.80009 4.79745 4.93356 5.83403 4.84717L14.306 4.14117C15.2828 4.05977 16.1747 4.69828 16.4124 5.64919L17.0001 8L4.00012 9V6.84027Z",fill:"#FFA300"})]});var v=s(10733);let y=({weekStreak:e,reviewCount:t,projectCount:s})=>(0,r.jsxs)("section",{className:"flex gap-3 w-full mb-7",children:[(0,r.jsxs)("div",{className:"w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4",children:[r.jsx(b,{size:32}),(0,r.jsxs)("p",{className:"font-body-16 text-text-strong flex items-center",children:[r.jsx("b",{className:"font-chakra font-semibold italic mr-1.5 text-2xl",children:(0,v.K)(e,2)}),"주 연속 회고"]})]}),(0,r.jsxs)("div",{className:"w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4",children:[r.jsx(j,{size:32}),(0,r.jsxs)("p",{className:"font-body-16 text-text-strong flex items-center",children:[r.jsx("span",{className:"font-chakra font-semibold italic mr-1.5 text-2xl",children:(0,v.K)(t,2)}),"개 회고 기록"]})]}),(0,r.jsxs)("div",{className:"w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4",children:[r.jsx(C,{size:32}),(0,r.jsxs)("p",{className:"font-body-16 text-text-strong flex items-center",children:[r.jsx("span",{className:"font-chakra font-semibold italic mr-1.5 text-2xl",children:(0,v.K)(s,2)}),"개 프로젝트"]})]})]}),k={src:"/_next/static/media/sign-up-success.706442a5.png",height:344,width:684,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEV8fXx4eXlNUFNtbW42NDFLST5dQz56XT1ZXmBmUDqjQDhdU1VuXV+CmoMdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJklEQVR4nAXBgQEAIAjDsG6AiPr/vSZI4VkbiOrzAFxzhYlMS84PCPgAd/gjPiEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4};var D=s(57849),N=s(71036);let E=()=>{let[e,t]=(0,a.KO)(N.W);return e?r.jsx(D.Z,{isOpen:e,children:(0,r.jsxs)("div",{className:"flex flex-col items-center relative overflow-hidden rounded-[20px]",children:[r.jsx(h.default,{src:k,width:342,height:172,alt:"no-memo-history"}),(0,r.jsxs)("div",{className:"mt-6 mb-2 flex flex-col items-center font-head-20 text-text-strong",children:[r.jsx("strong",{style:{fontWeight:600},children:"매주 금요일 13시!"}),r.jsx("p",{style:{fontWeight:400},children:"회고 메일을 보내드릴게요"})]}),r.jsx("p",{className:"mb-5 font-body-14 text-text-strong",children:"피트스탑과 함께 성공적인 한주를 이뤄봐요\uD83D\uDC4D"}),r.jsx("button",{className:"mb-7 button-primary button-large",onClick:()=>t(!1),children:"시작하기"})]})}):null},M=async({weekNumber:e,contents:t})=>await (0,o.QQ)("/todos",{weekNumber:e,contents:t}),L=async e=>await (0,o.vx)("/todos",e);var Z=s(61278),V=s(44948);let q={src:"/_next/static/media/todo-empty.b05775f3.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWqqqqbnqLBw8VxcXGYm6CcoKSYnKGWmp+ZnKGgoKCpqa6+wcOcnKaZnaKZnKKhpKnv7/Dc3d+qrbElfiuLAAAAD3RSTlMB+34E/ZRYNPsIRZYaqqpIPjVwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nDXLWQ7AIAwDUdMEnNDFlPsfthKofyM9DYwkE0CfXtRgON5wVRjOUUL3inA9m0KVF/qU1DLx7x9DCgH1etbHygAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var S=s(10326),O=s(16435),P=s(4656);let U=()=>{let[e,t]=(0,i.useState)([]),[s,n]=(0,i.useState)(!1),[o,l]=(0,i.useState)(!1),[d,x]=(0,i.useState)(-1),{year:u,month:m,week:p}=(0,a.Dv)(c.C);(0,i.useEffect)(()=>{f({year:u,month:m,week:p})},[u,m,p]);let f=async({year:e,month:s,week:r})=>{t((await (0,Z.LC)({year:e,month:s,week:r})).todos)},A=async t=>{let s=e.map(e=>e.id===t?{...e,status:"DONE"===e.status?"ONGOING":"DONE"}:e);try{await L(s),await f({year:u,month:m,week:p})}catch(e){console.error("fail to change checkbox",e)}},w=async()=>{try{await M({weekNumber:{year:u,month:m,week:p},contents:e.filter(e=>e.id<1).map(e=>({content:e.content}))}),await f({year:u,month:m,week:p})}catch(e){console.error("fail to add todos",e)}},b=async()=>{try{await L(e)}catch(e){console.error("fail to edit todos",e)}},j=async e=>{try{await (0,V.a)([String(e)]),t(e=>e.filter(e=>e.id!==d)),l(!1)}catch(e){console.error("fail to delete todo",e)}};return(0,r.jsxs)("section",{className:"w-full",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between w-full",children:[r.jsx("p",{className:"font-title-16 text-text-strong",children:"이번 주 할 일"}),(0,r.jsxs)("button",{className:"button-line button-small",onClick:()=>{n(!0),t(e=>[...e,{id:.9*Math.random(),content:"",status:"ONGOING"}])},children:[r.jsx(g.Z,{size:20}),r.jsx("p",{className:"font-body-13 text-text-strong",children:"추가"})]})]}),e.length>0?r.jsx("div",{className:"flex flex-col gap-3 mt-4",children:e.map((e,a)=>r.jsx(O.Z,{value:e.content,placeholder:"할 일을 입력해 주세요",checked:"DONE"===e.status,onChange:s=>t(t=>t.map(t=>t.id===e.id?{...t,content:s}:t)),onClickCheckbox:()=>A(e.id),buttons:r.jsx("button",{onClick:()=>{x(e.id),l(!0)},children:r.jsx(S.Z,{size:20})}),onBlur:async()=>{s?(await w(),n(!1)):await b()}},a))}):(0,r.jsxs)("div",{className:"w-full flex items-center flex-col gap-5 mt-[3.75rem]",children:[r.jsx("p",{className:"font-body-16 text-text-normal",children:"할 일을 한곳에 기록해두고 필요할 때 찾아봐요!"}),r.jsx(h.default,{src:q,width:100,height:100,alt:"no memo"})]}),r.jsx(P.Z,{isOpen:o,onDismiss:()=>l(!1),title:"정말로 삭제하시겠어요?",buttons:{left:{text:"취소",className:"button-secondary button-medium font-body-14 text-text-strong"},right:{text:"확인",className:"button-primary button-medium font-body-14 text-text-invert",onClick:async()=>{await j(d)}}}})]})};var B=s(21454),K=s(88703);let G=({size:e=20,stroke:t="#999CA1",...s})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{d:"M12.5 16.5L5.5 9.5L12.5 2.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),_=({size:e=20,stroke:t="#999CA1",...s})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{d:"M7.5 3.5L14.5 10.5L7.5 17.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var R=s(76155);let{year:W,month:F,week:X}=(0,R._y)(),z=()=>{let[e,t]=(0,a.KO)(c.C),s=(0,i.useMemo)(()=>e.year===W&&e.month===F&&e.week===X,[e]);return(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)("p",{className:"font-head-20 text-text-strong",children:[e.month,"월 ",e.week,"주차 레이스"]}),(0,r.jsxs)("div",{className:"flex gap-1.5 items-center",children:[r.jsx("button",{type:"button",className:"bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center disabled:bg-surface-foregroundOn",onClick:()=>{let s=(0,B.f)(new Date(e.year,e.month-1,e.date),e.day),{week:r}=(0,R._y)(s);t({year:s.getFullYear(),month:s.getMonth()+1,week:r,date:s.getDate(),day:s.getDay()})},disabled:2024===e.year&&1===e.month&&1===e.week,children:r.jsx(G,{size:20})}),r.jsx("button",{type:"button",className:"bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center disabled:bg-surface-foregroundOn",onClick:()=>{let s=(0,K.O)(new Date(e.year,e.month-1,e.date),e.day),{week:r}=(0,R._y)(s);t({year:s.getFullYear(),month:s.getMonth()+1,week:r,date:s.getDate(),day:s.getDay()})},disabled:s,children:r.jsx(_,{size:20})}),r.jsx("button",{type:"button",className:"button-line button-small ml-1",onClick:()=>{let e=new Date;t({year:W,month:F,week:X,date:e.getDate(),day:0===e.getDay()?e.getDay():4})},disabled:s,children:"이번주"})]})]})};function I(){(0,a.b9)(l.GR),(0,a.Dv)(c.C);let{userExpired:e}=(0,d.a)(),[t,s]=(0,i.useState)();return t?(0,r.jsxs)("div",{children:[r.jsx(y,{weekStreak:t.laps,reviewCount:t.reviewCount,projectCount:t.projectCount}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("section",{className:"flex items-center justify-between mb-6",children:[r.jsx(z,{}),r.jsx(n.default,{href:"/review",children:r.jsx("button",{className:"button-primary button-large",children:"회고하기"})})]}),(0,r.jsxs)("div",{className:"flex gap-9",children:[r.jsx(U,{}),r.jsx(w,{})]})]}),r.jsx(E,{})]}):r.jsx("div",{children:"loading..."})}},10326:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(55677);let a=({size:e=20,stroke:t="#999CA1",fill:s="none",...a})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:s,xmlns:"http://www.w3.org/2000/svg",...a,children:[r.jsx("path",{d:"M4 5H16L15.142 16.1534C15.0619 17.1954 14.193 18 13.1479 18H6.85206C5.80699 18 4.93811 17.1954 4.85795 16.1534L4 5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.5 9L8 14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 4.5L14.5 2L5.5 2L5 4.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18 5L2 5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12.5 9L12 14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},16435:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(55677),a=s(61387);let n=({size:e=20,stroke:t="white",fill:s="#FF5C37",...a})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[r.jsx("rect",{width:e,height:e,rx:"4",fill:s}),r.jsx("path",{d:"M5.5 10L9 14L15 6.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var i=s(34012),o=s(5163);let l=(0,a.memo)(({value:e,placeholder:t,onChange:s,checked:l,onClickCheckbox:x,onBlur:h,width:u,buttons:m,category:p="dashboard"})=>{let g=(0,a.useRef)(null),[f,A]=(0,a.useState)(!1),[w,b]=(0,a.useState)(!1),j="dashboard"===p&&f&&!w||"review"===p&&!w;return(0,r.jsxs)("div",{className:(0,o.cn)(c.default,"dashboard"===p&&c.dashboard,"dashboard"===p&&w&&c.dashboardEditing,"review"===p&&c.review,"review"===p&&w&&c.reviewEditing),style:{width:u??"100%",boxShadow:"dashboard"===p?"0px 4px 12px 0px rgba(0, 0, 0, 0.08)":"none"},onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 w-full",children:[r.jsx("button",{type:"button",onClick:x,children:l?r.jsx(n,{size:20}):r.jsx(d,{})}),r.jsx("input",{ref:g,type:"text",className:"w-full font-body-16 outline-none bg-transparent",value:e,placeholder:t,onChange:e=>s?.(e.currentTarget.value),style:{color:l?i.Z.text.normal:i.Z.text.strong},onFocus:()=>b(!0),onBlur:()=>{b(!1),h?.()},onKeyDown:e=>{e.nativeEvent.isComposing||("Enter"===e.key&&g.current?.blur(),"Escape"===e.key&&g.current?.blur())}})]}),j&&m]})}),d=()=>r.jsx("div",{className:"w-5 h-5 rounded border-[1.5px] border-text-assistive bg-surface-foreground"}),c={default:"px-3 py-3.5 flex items-center justify-between h-12 focus-within:outline-none cursor-pointer",dashboard:"rounded-lg bg-surface-foreground hover:bg-surface-assistive",dashboardEditing:"border border-text-primary hover:bg-surface-foreground",review:"bg-transparent box-border border-b border-transparent",reviewEditing:"border-b border-text-primary"}},71036:(e,t,s)=>{"use strict";s.d(t,{W:()=>r});let r=(0,s(22248).cn)(!1)},10733:(e,t,s)=>{"use strict";s.d(t,{K:()=>r});let r=(e,t)=>e.toString().padStart(t,"0")},41442:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var r=s(48770);let a=(0,r.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/(with-navigation)/dashboards/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`/Users/hrkim/Desktop/next/career-client/src/app/(with-navigation)/dashboards/page.tsx#default`)},9451:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/memo-empty.ae5a8e65.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXGaoKOZmp+bm5+ZnKGZm6GZnKCdoKaZm6Gcn6SxmOBGAAAACnRSTlMACyoexER1n1qTClRl0AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJxNi7kRADAIw2TAefZfOEcq3KiQDGPC8SlfBClXrSRW1cnsYEcLCM8jPA5+AGSX24bZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[435,638,246,204,940,759,616,913,633,693,596],()=>s(73796));module.exports=r})();