(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{47210:function(e,t,n){Promise.resolve().then(n.bind(n,70404)),Promise.resolve().then(n.bind(n,1594))},12507:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(72330),o=n.n(r)},61621:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(95384),o=n.n(r)},69219:function(e,t,n){"use strict";var r=n(61128);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},72330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},getImageProps:function(){return s}});let r=n(3397),o=n(90052),a=n(14569),i=r._(n(45074));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let m=a.Image},70404:function(e,t,n){"use strict";n.d(t,{default:function(){return h}});var r=n(47586),o=n(80890),a=n(61621),i=n(69219),s=n(57882),m=n(28823),l=n(41778),u=e=>{let{initialState:t=!1,onChange:n}=e,[o,a]=(0,m.useState)(t);return(0,r.jsx)("button",{className:(0,l.cn)("w-[2.125rem] h-5 flex items-center rounded-2xl p-[0.188rem] cursor-pointer",o?"bg-surface-normal":"bg-surface-base"),onClick:()=>{a(e=>!e),null==n||n(!o)},type:"button",children:(0,r.jsx)("div",{className:(0,l.cn)("w-3.5 h-3.5 bg-surface-foreground rounded-full duration-300",o?"translate-x-[.9rem]":"translate-x-0")})})},c=n(656);let d=[{month:7,week:1,items:[{id:"memo-1",isBookmark:!1,title:"신규 서비스 개요",memo:"목표: 서비스 사용자 만족도 향상 및 체류 시간 증가\n주요 기능: 사용자 맞춤 추천, 실시간 알림 시스템, 사용자 피드백 통합",date:"7.22"},{id:"memo-2",isBookmark:!0,title:"리더님 피드백",memo:"유관 부서에 지표 리포트할 때 항상 엑셀 파일 첨부하기\n엑셀 제목은 데이터 날짜 항상 표기하기!",date:"7.24"},{id:"memo-3",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-4",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-5",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-6",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-7",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-8",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-9",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"},{id:"memo-10",isBookmark:!1,title:"8/6 동기들이랑 점심 식사",memo:"참여자: 봉주, 지선, 해람, 호, 유림",date:"7.25"}]},{month:6,week:4,items:[{id:"memo-11",isBookmark:!1,title:"신규 서비스 개요",memo:"목표: 서비스 사용자 만족도 향상 및 체류 시간 증가\n주요 기능: 사용자 맞춤 추천, 실시간 알림 시스템, 사용자 피드백 통합",date:"7.22"},{id:"memo-12",isBookmark:!0,title:"리더님 피드백",memo:"유관 부서에 지표 리포트할 때 항상 엑셀 파일 첨부하기\n엑셀 제목은 데이터 날짜 항상 표기하기!",date:"7.24"}]}],f=[{label:"회고",path:"/history/review"},{label:"메모",path:"/history/memo"}];var h=()=>{let e=(0,i.usePathname)(),[t,n]=(0,o.KO)(c.d);return(0,r.jsxs)("div",{className:"flex items-center justify-between mb-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-5",children:[f.map(t=>(0,r.jsx)(a.default,{href:t.path,children:(0,r.jsx)("p",{className:(0,l.cn)("font-head-20",t.path===e?"text-text-strong":"text-text-neutral"),children:t.label})},t.path)),"/history/memo"===e&&d.length>0&&(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)("p",{className:"font-body-14 text-text-normal",children:"북마크만 보기"}),(0,r.jsx)(u,{initialState:t,onChange:n})]})]}),"/history/memo"===e&&(0,r.jsxs)("button",{type:"button",className:"button-primary button-medium",children:[(0,r.jsx)(s.Z,{size:20,stroke:"#fff"}),(0,r.jsx)("p",{className:"font-body-14 text-text-invert",children:"추가"})]})]})}},1594:function(e,t,n){"use strict";n.d(t,{default:function(){return h}});var r=n(47586),o=n(80890),a=n(28823),i=n(3855),s=n(656),m=n(31407),l=n(12507),u=n(65492),c=()=>(0,r.jsxs)("div",{className:"flex flex-col items-center gap-10 mt-[7rem]",children:[(0,r.jsx)("p",{className:"font-body-16 text-text-normal",children:"작성된 메모가 없어요"}),(0,r.jsx)(l.default,{src:u.Z,width:100,height:100,priority:!0,alt:"no-memo-history"})]}),d=n(14239),f=e=>{let{currentWeek:t,memos:n}=e;return(0,r.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[(0,r.jsxs)("p",{className:"font-title-16 text-text-normal",children:[t.month,"월 ",t.week,"주"]}),(0,r.jsx)("div",{className:"grid gap-[15px] grid-cols-4",children:n.map(e=>(0,r.jsx)(d.Z,{id:String(e.id),memo:e.content,date:"7.22",isBookmark:e.isMarked,className:"w-[229px] h-[10rem]"},e.id))})]},"".concat(t.year,"-").concat(t.month,"-").concat(t.week))},h=()=>{let e=(0,o.Dv)(s.d),[t,n]=(0,a.useState)([]),[l,u]=(0,a.useState)([]),d=e=>Object.values(e.contents.reduce((e,t)=>{let{year:n,month:r,week:o}=t.weekNumber,a={id:t.id,content:t.content,isMarked:t.isMarked,updatedAt:t.updatedAt},i="".concat(n,"-").concat(r,"-").concat(o);return e[i]?e[i].memos.push(a):e[i]={weekNumber:t.weekNumber,memos:[a]},e},{})).sort(m.H),h=e=>e.map(e=>({weekNumber:e.weekNumber,memos:e.memos.filter(e=>e.isMarked)})).filter(e=>e.memos.length>0);return((0,a.useEffect)(()=>{(async()=>{n(d(await (0,i.r)({})))})()},[]),(0,a.useEffect)(()=>{e?u(h(t)):u(t)},[t,e]),0===t.length)?(0,r.jsx)(c,{}):(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{weekNumber:t,memos:n}=e;return(0,r.jsx)(f,{currentWeek:t,memos:n},"".concat(t.year,"-").concat(t.month,"-").concat(t.week))})})}},57882:function(e,t,n){"use strict";var r=n(47586);t.Z=e=>{let{size:t=20,stroke:n="#999CA1",...o}=e;return(0,r.jsx)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M3 10H10M17 10H10M10 10V17M10 10V3",stroke:n,strokeWidth:"1.5",strokeLinecap:"round"})})}},656:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});let r=(0,n(70140).cn)(!1)},31407:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});let r=(e,t)=>{let n=t.weekNumber.year-e.weekNumber.year,r=t.weekNumber.month-e.weekNumber.month,o=t.weekNumber.week-e.weekNumber.week;return n||r||o}},65492:function(e,t){"use strict";t.Z={src:"/_next/static/media/memo-empty.ae5a8e65.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXGaoKOZmp+bm5+ZnKGZm6GZnKCdoKaZm6Gcn6SxmOBGAAAACnRSTlMACyoexER1n1qTClRl0AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJxNi7kRADAIw2TAefZfOEcq3KiQDGPC8SlfBClXrSRW1cnsYEcLCM8jPA5+AGSX24bZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[116,990,796,890,38,97,384,569,891,689,366,400,744],function(){return e(e.s=47210)}),_N_E=e.O()}]);