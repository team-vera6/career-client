(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{60933:function(e,t,s){Promise.resolve().then(s.bind(s,40465))},12507:function(e,t,s){"use strict";s.d(t,{default:function(){return n.a}});var l=s(72330),n=s.n(l)},72330:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},getImageProps:function(){return i}});let l=s(3397),n=s(90052),r=s(14569),a=l._(s(45074));function i(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let c=r.Image},71152:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let l=s(3397)._(s(28823)).default.createContext(null)},40465:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return F}});var l=s(47586),n=s(28823),r=s(18775);let a=async()=>await (0,r.bN)("/projects"),i=async e=>await (0,r.bN)("/projects/".concat(e));var c=s(4979),o=s(57882),d=()=>{let[e,t]=(0,n.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"w-full flex items-center justify-between mb-[1.875rem]",children:[(0,l.jsx)("p",{className:"font-head-20 text-text-strong",children:"프로젝트"}),(0,l.jsxs)("button",{className:"button-primary button-medium",onClick:()=>t(!0),children:[(0,l.jsx)(o.Z,{size:20,stroke:"#fff"}),(0,l.jsx)("p",{className:"font-body-14 text-text-invert",children:"추가"})]})]}),(0,l.jsx)(c.Z,{isOpen:e,closeSheet:()=>t(!1)})]})},x=s(12507),u={src:"/_next/static/media/project-empty.93d3d496.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXGYmaKZm6GZm6CWm6GYnKCurrmZnKCZnZ93kOB2AAAACXRSTlMAFGCAKrcHozskKa1AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nB2IQQ4AMAiDaKtz/3/x4i5AADjYIGscQ3XivkKVzO2CtHwASktA4o+N9QMViwB/v+xSgAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},m=()=>(0,l.jsxs)("div",{className:"w-full flex items-center justify-center flex-col gap-10 mt-[5.625rem]",children:[(0,l.jsx)("p",{className:"font-body-16 text-text-normal",children:"프로젝트를 추가하고 회고해보세요"}),(0,l.jsx)(x.default,{src:u,alt:"no project",width:100,height:100})]}),h=s(22668);let f=(e,t)=>{let s=t.weekNumber.year-e.weekNumber.year,l=t.weekNumber.month-e.weekNumber.month,n=t.weekNumber.week-e.weekNumber.week;return s||l||n};var g=s(51e3);let j=async(e,t)=>await (0,r.vx)("/projects/".concat(e),t);var p=s(58389),v=s(86156),b=s(81932),w=s(73025),N=s(29335),A=e=>{let{size:t=16,stroke:s="#999CA1",...n}=e;return(0,l.jsx)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,l.jsx)("path",{d:"M6 3L12 8L6 13",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},y=s(63278),k=s(80044),C=s(41778),S=e=>{let{className:t}=e;return(0,l.jsx)("span",{className:(0,C.cn)("w-0 h-[3.75rem] border-l border-line-normalHover",t)})},Z=e=>{let{type:t,review:s,week:n,last:r}=e;return(0,l.jsxs)("div",{className:"flex gap-4 h-[5.375rem] relative",children:["highlight"===t?(0,l.jsx)(y.Z,{size:24,className:"mt-2"}):(0,l.jsx)(k.Z,{size:24,className:"mt-2"}),!r&&(0,l.jsx)(S,{className:"absolute left-2.5 top-10"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("div",{className:"mb-1 border border-line-assistive bg-surface-foreground rounded-lg p-3",children:(0,l.jsx)("p",{className:"font-body-14 text-text-strong line-clamp-2",children:s})}),(0,l.jsxs)("div",{className:"flex items-center gap-0.5 justify-end",children:[(0,l.jsx)("p",{className:"font-body-13 text-text-strong",children:"".concat(n.month,"월 ").concat(n.week,"주차")}),(0,l.jsx)(A,{size:16})]})]})]})},D=e=>{let{isOpen:t,closeSheet:s,projectId:r,initialTitle:a,initialDate:i,initialGoal:c,initialDescription:o,reviews:d}=e,{addToast:x}=(0,N.Z)(),[u,m]=(0,n.useState)(""),[f,A]=(0,n.useState)({start:"",end:""}),[y,k]=(0,n.useState)(""),[C,S]=(0,n.useState)(""),[D,O]=(0,n.useState)(!1);(0,n.useEffect)(()=>{t&&(m(null!=a?a:""),A(null!=i?i:{start:"",end:""}),k(null!=c?c:""),S(null!=o?o:""),k(null!=c?c:""))},[t,a,i,c,o]);let _=async()=>{let e={title:u,startDate:f.start,endDate:f.end,goal:y,content:C};try{await j(r,e),x({message:"프로젝트 내용이 수정되었어요.",iconType:"success"}),s()}catch(e){x({message:"프로젝트 수정에 실패했어요. 다시 시도해주세요.",iconType:"error"})}};return(0,l.jsxs)(g.Z,{isOpen:t,closeActionSheet:()=>O(!0),buttons:[{text:"저장",onClick:_}],children:[(0,l.jsx)(b.Z,{placeholder:"프로젝트 이름",className:"!font-bold",value:u,onChange:e=>m(e.currentTarget.value),id:String(r)}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 mb-6 mt-3",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("p",{className:"font-body-14 text-text-normal",children:"기간"}),(0,l.jsx)(p.Z,{date:f,setDate:A})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("p",{className:"font-body-14 text-text-normal",children:"목표"}),(0,l.jsx)(v.Z,{placeholder:"목표를 입력해주세요",maxLength:50,value:y,onChange:e=>k(e.currentTarget.value)})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("p",{className:"font-body-14 text-text-normal",children:"내용"}),(0,l.jsx)(w.Z,{placeholder:"내용을 입력해주세요",maxLength:160,className:"h-[9.6875rem]",value:C,onChange:e=>S(e)})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"mb-5 font-title-16 text-text-strong",children:"연관된 회고"}),(0,l.jsx)("div",{className:"flex flex-col gap-3",children:null==d?void 0:d.map(e=>(0,l.jsx)(Z,{type:e.type,review:e.content,week:e.weekNumber,last:e===d[d.length-1]},e.id))})]}),(0,l.jsx)(h.Z,{isOpen:D,onDismiss:()=>O(!1),title:"변경사항을 저장하지 않고 나가시겠어요?",buttons:{left:{text:"취소"},right:{text:"확인",onClick:s}}})]})},O=e=>{let{title:t,content:s}=e;return(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("p",{className:"font-body-14 text-text-normal shrink-0",children:t}),(0,l.jsx)("p",{className:"font-body-14 text-text-strong",children:s})]})},_=e=>{let{percentage:t}=e;return(0,l.jsx)("div",{className:"w-full bg-surface-background rounded relative h-1.5",children:(0,l.jsx)("div",{className:"absolute left-0 top-0 bottom-0 h-1.5 rounded bg-surface-normal",style:{width:"".concat(t,"%")}})})},E=e=>{let{startDate:t,endDate:s,percentage:n}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-2 mb-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("p",{className:"font-body-14 text-text-strong",children:[t," - ",s]}),(0,l.jsxs)("p",{className:"font-body-14 text-text-primary",children:[n,"%"]})]}),(0,l.jsx)(_,{percentage:n})]})},L=e=>{var t,s;let{isOpen:r,closeSheet:a,projectId:c}=e,[o,d]=(0,n.useState)(!1),[x,u]=(0,n.useState)(!1),[m,j]=(0,n.useState)(),[p,v]=(0,n.useState)([]),b=(0,n.useCallback)(async()=>{let e=await i(c);j(e),v(w(e.highlights,e.lowlights))},[c]);(0,n.useEffect)(()=>{r&&b()},[r,b]);let w=(e,t)=>{let s=[...e.map(e=>({...e,type:"highlight"})),...t.map(e=>({...e,type:"lowlight"}))];return s.sort(f),s};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{isOpen:r,closeActionSheet:a,buttons:[{text:"삭제",buttonStyle:"line",onClick:()=>d(!0)},{text:"수정",buttonStyle:"line",onClick:()=>u(!0)}],children:(0,l.jsx)(l.Fragment,{children:m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"font-head-24 text-text-strong mb-4",children:m.title}),(0,l.jsx)(E,{startDate:m.startDate,endDate:m.endDate,percentage:m.progress}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 mb-6",children:[(0,l.jsx)(O,{title:"목표",content:m.goal}),(0,l.jsx)(O,{title:"내용",content:m.content})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"mb-5 font-title-16 text-text-strong",children:"연관된 회고"}),(0,l.jsx)("div",{className:"flex flex-col gap-3",children:p.map(e=>(0,l.jsx)(Z,{type:e.type,review:e.content,week:e.weekNumber,last:e===p[p.length-1]},"".concat(e.type,"-").concat(e.id)))})]})]}):(0,l.jsx)(M,{})})}),(0,l.jsx)(h.Z,{isOpen:o,title:"정말로 삭제하시겠어요?",onDismiss:()=>d(!1),buttons:{left:{text:"취소"},right:{text:"확인",onClick:a}}}),(0,l.jsx)(D,{isOpen:x,closeSheet:async()=>{u(!1),await b()},projectId:c,initialTitle:null==m?void 0:m.title,initialDate:{start:null!==(t=null==m?void 0:m.startDate)&&void 0!==t?t:"",end:null!==(s=null==m?void 0:m.endDate)&&void 0!==s?s:""},initialGoal:null==m?void 0:m.goal,initialDescription:null==m?void 0:m.content,reviews:p})]})};let M=()=>(0,l.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,l.jsx)("p",{className:"font-body-16 text-text-weak",children:"로딩중..."})});var z=s(39390),B=e=>{let{id:t,title:s,progress:r,onClose:a}=e,[i,c]=(0,n.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"w-full rounded-lg flex items-center justify-between gap-2.5 bg-surface-foreground px-5 py-3 hover:bg-surface-foregroundOn cursor-pointer",onClick:()=>c(!0),children:[(0,l.jsx)("p",{className:"font-body-16 text-text-strong max-w-[53.375rem] text-ellipsis whitespace-nowrap overflow-hidden",title:s,children:s}),(0,l.jsx)(z.Z,{percentage:r})]},t),(0,l.jsx)(L,{projectId:t,isOpen:i,closeSheet:()=>{null==a||a(),c(!1)}})]})};function F(){let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{s()},[]);let s=async()=>{let{projects:e}=await a();t(e)};return(0,l.jsxs)("div",{className:"w-[60rem]",children:[(0,l.jsx)(d,{}),(0,l.jsx)("div",{className:"w-full flex flex-col gap-3",children:e.length>0?(0,l.jsx)(l.Fragment,{children:e.map(e=>(0,l.jsx)(B,{id:e.id,title:e.title,progress:e.progress,onClose:s},e.id))}):(0,l.jsx)(m,{})})]})}},63278:function(e,t,s){"use strict";var l=s(47586);t.Z=e=>{let{size:t=24,stroke:s="#FF3D0D",...n}=e;return(0,l.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,l.jsx)("rect",{x:"6",y:"6",width:"12",height:"12",rx:"6",fill:s}),(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"4 4"})]})}},80044:function(e,t,s){"use strict";var l=s(47586);t.Z=e=>{let{size:t=24,stroke:s="#999CA1",...n}=e;return(0,l.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:s,strokeWidth:"2",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M12 6C12.7879 6 13.5681 6.15519 14.2961 6.45672C15.0241 6.75825 15.6855 7.20021 16.2426 7.75736C16.7998 8.31451 17.2417 8.97595 17.5433 9.7039C17.8448 10.4319 18 11.2121 18 12C18 12.7879 17.8448 13.5682 17.5433 14.2961C17.2417 15.0241 16.7998 15.6855 16.2426 16.2426C15.6855 16.7998 15.0241 17.2418 14.2961 17.5433C13.5681 17.8448 12.7879 18 12 18L12 12V6Z",fill:s})]})}}},function(e){e.O(0,[568,890,38,97,569,682,709,366,400,744],function(){return e(e.s=60933)}),_N_E=e.O()}]);