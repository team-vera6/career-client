(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{53670:function(e,t,r){Promise.resolve().then(r.bind(r,82825))},69219:function(e,t,r){"use strict";var s=r(61128);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},18775:function(e,t,r){"use strict";r.d(t,{GZ:function(){return u},QQ:function(){return i},bN:function(){return o},f9:function(){return l},vx:function(){return c}});var s=r(54250),n=r(49038);let a=s.default.create({baseURL:"",responseType:"json"});a.interceptors.request.use(e=>{let t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=t),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if((0,n.IZ)(e)&&e.response){var t,r;return Promise.reject({status:e.response.status,message:(null===(t=e.response.data)||void 0===t?void 0:t.message)||"An error occurred",code:(null===(r=e.response.data)||void 0===r?void 0:r.code)||"Unknown error"})}return Promise.reject(e)});let o=async(e,t)=>(await a.get(e,t)).data,i=async(e,t,r)=>(await a.post(e,t,r)).data,c=async(e,t,r)=>(await a.put(e,t,r)).data,u=async(e,t)=>(await a.delete(e,t)).data,l=async(e,t,r)=>(await a.patch(e,t,r)).data},82825:function(e,t,r){"use strict";var s=r(47586),n=r(69219),a=r(28823),o=r(86156),i=r(12835),c=r(96181);t.default=()=>{let e=(0,n.useRouter)(),{userLogin:t}=(0,c.a)(),[r,u]=(0,a.useState)({email:"",password:""}),l=t=>{e.push(t)},d=e=>{let{name:t,value:s}=e.currentTarget;u({...r,[t]:s})},p=async s=>{s.preventDefault(),"success"===await t(r.email,r.password)&&e.push("/")},F=(0,a.useMemo)(()=>!r.email||r.password.length<8,[r.email,r.password]);return(0,s.jsx)("div",{children:(0,s.jsxs)("form",{className:"flex flex-col gap-7 w-[22.25rem]",onSubmit:p,children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsx)(o.Z,{placeholder:"이메일 주소",name:"email",value:r.email,onChange:d}),(0,s.jsx)(i.Z,{placeholder:"비밀번호",name:"password",value:r.password,onChange:d})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsx)("button",{type:"submit",className:"button-primary h-12 rounded-xl",disabled:F,children:"로그인"}),(0,s.jsx)("button",{type:"button",className:"button-line h-12 rounded-xl",onClick:()=>l("/auth/enter-email"),children:"회원가입"})]})]})})}},86156:function(e,t,r){"use strict";var s=r(47586),n=r(86241);t.Z=e=>{let{errorText:t,...r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",className:"w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive h-11 read-only:outline-0",style:t?{borderColor:n.Z.state.negative,outline:n.Z.state.negative}:{},...r}),t&&(0,s.jsx)("p",{className:"text-state-negative font-body-12 mt-[2px]",children:t})]})}},12835:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(47586),n=r(28823),a=e=>{let{size:t=20,stroke:r="#999CA1",fill:n="none",...a}=e;return(0,s.jsxs)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:n,xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,s.jsx)("circle",{cx:"10",cy:"10",r:"3",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17.8984 8.82545C18.5747 9.47938 18.5747 10.5206 17.8984 11.1746C16.3698 12.6525 13.4058 15 10 15C6.59419 15 3.63024 12.6525 2.10163 11.1746C1.42529 10.5206 1.42529 9.47938 2.10163 8.82545C3.63024 7.34746 6.5942 5 10 5C13.4058 5 16.3698 7.34746 17.8984 8.82545Z",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M3 4L17 16",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},o=e=>{let{size:t=20,stroke:r="#999CA1",fill:n="none",...a}=e;return(0,s.jsxs)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:n,xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,s.jsx)("circle",{cx:"10",cy:"10",r:"3",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17.8984 8.82545C18.5747 9.47938 18.5747 10.5206 17.8984 11.1746C16.3698 12.6525 13.4058 15 10 15C6.59419 15 3.63024 12.6525 2.10163 11.1746C1.42529 10.5206 1.42529 9.47938 2.10163 8.82545C3.63024 7.34746 6.5942 5 10 5C13.4058 5 16.3698 7.34746 17.8984 8.82545Z",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},i=r(86241),c=e=>{let{errorText:t,...r}=e,[c,u]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:c?"text":"password",className:"w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive h-11 read-only:outline-0",style:t?{borderColor:i.Z.state.negative,outline:i.Z.state.negative}:{},...r}),(0,s.jsx)("button",{type:"button",onClick:()=>u(e=>!e),className:"absolute right-3 top-3",children:c?(0,s.jsx)(o,{size:20}):(0,s.jsx)(a,{size:20})}),t&&(0,s.jsx)("p",{className:"text-state-negative font-body-12 mt-[2px]",children:t})]})}},29335:function(e,t,r){"use strict";var s=r(80890),n=r(28823),a=r(58098);t.Z=()=>{let e=(0,s.b9)(a.f),[t,r]=(0,s.KO)(a.y);return{addToast:(0,n.useCallback)(s=>{let{message:n,iconType:a}=s;r(e=>e+1),e(e=>[{id:t,message:n,iconType:a},...e]),setTimeout(()=>{e(e=>e.filter(e=>e.id!==t))},3e3)},[t,r,e])}}},96181:function(e,t,r){"use strict";r.d(t,{a:function(){return h}});var s=r(80890),n=r(69219),a=r(18775);let o={invalid_request:"올바른 이메일 주소를 입력해 주세요.",already_exist_email:"이미 가입되어있는 이메일입니다.",invalid_password:"비밀번호를 다시 확인해 주세요.",incorrect_password:"비밀번호를 다시 확인해 주세요.",incorrect_credentials:"이메일 또는 비밀번호를 다시 확인해 주세요",resource_not_found:"올바른 이메일 주소를 입력해 주세요."},i=e=>o[e.code]?{errorMessage:o[e.code]}:{errorMessage:"Unknown error"},c=async(e,t)=>{try{return await (0,a.QQ)("/auth/sign-in",{email:e,password:t})}catch(e){return i(e)}},u=async e=>{try{return await (0,a.QQ)("/auth/email",{email:e})}catch(e){return i(e)}},l=async(e,t)=>{try{return await (0,a.QQ)("/auth/email/verification",{emailId:e,code:t})}catch(e){return i(e)}},d=async e=>{let{emailId:t,password:r,nickname:s}=e;try{return await (0,a.QQ)("/auth/sign-up",{emailId:t,password:r,nickname:s})}catch(e){return i(e)}};var p=r(41834);let F=(0,r(70140).cn)({accessToken:"",refreshToken:""});var m=r(29335);let h=()=>{let e=(0,n.useRouter)(),t=(0,s.b9)(F),r=(0,s.b9)(p.I),{addToast:a}=(0,m.Z)();return{userLogin:async(e,r)=>{let s=await c(e,r);if(!("accessToken"in s))return a({message:s.errorMessage,iconType:"error"}),"error";{let e=s.accessToken;return localStorage.setItem("accessToken",e),t(e=>({...e,accessToken:s.accessToken})),"success"}},userLogout:()=>{localStorage.removeItem("accessToken"),t(e=>({...e,accessToken:""})),e.push("/auth/login")},userEmailCheck:async(e,t)=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return a({message:"올바른 이메일 주소를 입력해 주세요.",iconType:"error"}),"error";let s=await u(e);return"id"in s?(r(s),a({message:t?"인증 메일을 다시 전송했어요.":"인증 메일을 전송했어요.",iconType:"success"}),"success"):(a({message:s.errorMessage,iconType:"error"}),"error")},userEmailVerification:async(e,t)=>{let r=await l(e,t);return"isVerified"in r&&r.isVerified?"success":(a({message:"인증번호를 다시 확인해주세요.",iconType:"error"}),"error")},userSignUp:async e=>{let{emailId:r,password:s,nickname:n}=e,o=await d({emailId:r,password:s,nickname:n});return"token"in o?(localStorage.setItem("accessToken",o.token),t(e=>({...e,accessToken:o.token})),"success"):(a({message:o.errorMessage,iconType:"error"}),"error")},userExpired:t=>{var r;(401===t.status||(null===(r=t.response)||void 0===r?void 0:r.status)===401)&&(e.push("/auth/login"),localStorage.setItem("accessToken",""))}}}},58098:function(e,t,r){"use strict";r.d(t,{f:function(){return n},y:function(){return a}});var s=r(70140);let n=(0,s.cn)([]),a=(0,s.cn)(0)},41834:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});let s=(0,r(70140).cn)({id:"",email:""})},86241:function(e,t){"use strict";t.Z={neutral:{95:"#1C1D1E",90:"#292A2D",80:"#4D4F52",70:"#66696E",60:"#808389",50:"#999CA1",40:"#B3B5B8",30:"#CECECE",20:"#E1E1E1",10:"#EFEFEF",white:"#FFFFFF"},red:{90:"#451305",80:"#7F270F",70:"#C02C02",60:"#E33302",50:"#FF3D0D",40:"#FF5C37",30:"#FF8A70",20:"#FFB8A9",10:"#FFDDD4",5:"#FFF2EF"},green:{90:"#1C4B00",80:"#245F00",70:"#348700",60:"#43B000",50:"#5FD915",40:"#7FFF30",30:"#ADFF7B",20:"#C4FFA0",10:"#DBFFC5",5:"#F2FFEA"},transparent:"transparent",text:{strong:"#292A2D",normal:"#66696E",neutral:"#999CA1",assistive:"#CECECE",invert:"#FFFFFF",primary:"#FF3D0D"},surface:{foreground:"#FFFFFF",foregroundOn:"#F7F7F7",background:"#EFEFEF",base:"#E1E1E1",accent:"#999CA1",alternative:"#4D4F52",invert:"#1C1D1E",strong:"#E33302",normal:"#FF3D0D",light:"#FFDDD4",blank:"transparent",dimmer:"#00000080",assistive:"#00000014"},line:{normal:"#CECECE",normalHover:"#B3B5B8",assistive:"#EFEFEF",focus:"#FF5C37"},button:{primary:"#1C1D1E",primaryHover:"#4D4F52",secondary:"#E1E1E1",secondaryHover:"#CECECE",disabled:"#F7F7F7"},state:{positive:"#43B000",caution:"#FFD02A",negative:"#E20000"}}}},function(e){e.O(0,[890,38,366,400,744],function(){return e(e.s=53670)}),_N_E=e.O()}]);