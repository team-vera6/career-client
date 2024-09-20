(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{50352:function(e,t,r){Promise.resolve().then(r.bind(r,23351))},69219:function(e,t,r){"use strict";var n=r(61128);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},18775:function(e,t,r){"use strict";r.d(t,{GZ:function(){return u},QQ:function(){return i},bN:function(){return o},f9:function(){return l},vx:function(){return c}});var n=r(54250),s=r(49038);let a=n.default.create({baseURL:"",responseType:"json"});a.interceptors.request.use(e=>{let t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=t),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if((0,s.IZ)(e)&&e.response){var t,r;return Promise.reject({status:e.response.status,message:(null===(t=e.response.data)||void 0===t?void 0:t.message)||"An error occurred",code:(null===(r=e.response.data)||void 0===r?void 0:r.code)||"Unknown error"})}return Promise.reject(e)});let o=async(e,t)=>(await a.get(e,t)).data,i=async(e,t,r)=>(await a.post(e,t,r)).data,c=async(e,t,r)=>(await a.put(e,t,r)).data,u=async(e,t)=>(await a.delete(e,t)).data,l=async(e,t,r)=>(await a.patch(e,t,r)).data},23351:function(e,t,r){"use strict";r.d(t,{default:function(){return m}});var n=r(47586),s=r(80890),a=r(69219),o=r(28823),i=r(86241);let c=(0,o.forwardRef)((e,t)=>{let{value:r,onChange:s,errorText:a,...o}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"text",inputMode:"numeric",className:"p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive w-10 h-11 text-center",style:a?{borderColor:i.Z.state.negative,outline:i.Z.state.negative}:{},value:r,onChange:s,size:1,ref:t,...o}),a&&(0,n.jsx)("p",{className:"text-state-negative font-body-12 mt-[2px]",children:a})]})});c.displayName="NumberInput";let u=e=>{let{timeLimit:t,interval:r=1e3}=e,[n,s]=(0,o.useState)(t),[a,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=setInterval(()=>{s(e=>e-r)},r);return n<=0&&(clearInterval(e),i(!0)),()=>clearInterval(e)},[n,r]),{isTimeExpired:a,minutes:(0,o.useMemo)(()=>Math.floor(n/6e4%60),[n]),seconds:(0,o.useMemo)(()=>Math.floor(n/1e3%60),[n]),setCurrentTime:s}};var l=r(96181),d=r(41834),f=r(663),m=()=>{let e=(0,a.useRouter)(),[t,r]=(0,o.useState)(Array(6).fill("")),i=(0,o.useRef)([]),[{email:m,id:F},p]=(0,s.KO)(d.I),{userEmailCheck:h,userEmailVerification:g}=(0,l.a)();(0,o.useEffect)(()=>{""===m&&e.push("/auth/enter-email")},[m,e]);let{isTimeExpired:v,minutes:y,seconds:E,setCurrentTime:x}=u({timeLimit:3e5}),b=(e,n)=>{var s,a;let o=/^[0-9]+$/.test(e);if(""!==e&&!o)return;if(e.length>1){let a=[...t];for(let t=0;t<e.length&&n+t<6;t++)a[n+t]=e[t];r(a),null===(s=i.current[Math.min(5,n+e.length)])||void 0===s||s.focus();return}let c=[...t];c[n]=e,r(c),e&&n<t.length-1&&(null===(a=i.current[n+1])||void 0===a||a.focus())},C=(e,r)=>{if("Backspace"===e.key&&""===t[r]&&0!==r){var n;null===(n=i.current[r-1])||void 0===n||n.focus()}},w=async r=>{if(r.preventDefault(),v){e.push("/auth/enter-email"),p({email:"",id:""});return}"success"===await g(F,t.join(""))&&e.push("/auth/password")},k=async()=>{await h(m,!0),x(3e5)},D=(0,o.useMemo)(()=>!!v||t.every(e=>""!==e),[t,v]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{className:"font-body-14 mb-12 text-text-strong",children:[(0,n.jsx)("span",{className:"font-title-14 mr-0.5",children:m}),"으로 전송된 인증 메일을 확인해 주세요."]}),(0,n.jsxs)("form",{className:"flex flex-col items-center gap-5 w-[22.25rem]",onSubmit:w,children:[(0,n.jsx)("div",{className:"flex gap-2",children:t.map((e,t)=>(0,n.jsx)(c,{value:e,onChange:e=>b(e.currentTarget.value,t),autoFocus:0===t,ref:e=>{i.current[t]=e},onKeyDown:e=>C(e,t)},"code-".concat(t)))}),v?(0,n.jsx)("p",{className:"font-body-14 text-text-primary",children:"인증 번호를 재전송해 주세요."}):(0,n.jsx)("p",{className:"font-body-14 text-text-strong",children:"".concat(y,":").concat((0,f.K)(E,2))}),(0,n.jsx)("button",{type:"submit",className:"button-primary h-12 rounded-xl w-full",disabled:!D,children:"확인"}),(0,n.jsxs)("p",{className:"font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong",children:["메일이 오지 않으셨나요?\n스팸함을 확인하거나 인증 메일을 ",(0,n.jsx)("strong",{className:"font-title-14 cursor-pointer",onClick:k,children:"재전송"}),"해 주세요."]})]})]})}},29335:function(e,t,r){"use strict";var n=r(80890),s=r(28823),a=r(58098);t.Z=()=>{let e=(0,n.b9)(a.f),[t,r]=(0,n.KO)(a.y);return{addToast:(0,s.useCallback)(n=>{let{message:s,iconType:a}=n;r(e=>e+1),e(e=>[{id:t,message:s,iconType:a},...e]),setTimeout(()=>{e(e=>e.filter(e=>e.id!==t))},3e3)},[t,r,e])}}},96181:function(e,t,r){"use strict";r.d(t,{a:function(){return p}});var n=r(80890),s=r(69219),a=r(18775);let o={invalid_request:"올바른 이메일 주소를 입력해 주세요.",already_exist_email:"이미 가입되어있는 이메일입니다.",invalid_password:"비밀번호를 다시 확인해 주세요.",incorrect_password:"비밀번호를 다시 확인해 주세요.",incorrect_credentials:"이메일 또는 비밀번호를 다시 확인해 주세요",resource_not_found:"올바른 이메일 주소를 입력해 주세요."},i=e=>o[e.code]?{errorMessage:o[e.code]}:{errorMessage:"Unknown error"},c=async(e,t)=>{try{return await (0,a.QQ)("/auth/sign-in",{email:e,password:t})}catch(e){return i(e)}},u=async e=>{try{return await (0,a.QQ)("/auth/email",{email:e})}catch(e){return i(e)}},l=async(e,t)=>{try{return await (0,a.QQ)("/auth/email/verification",{emailId:e,code:t})}catch(e){return i(e)}},d=async e=>{let{emailId:t,password:r,nickname:n}=e;try{return await (0,a.QQ)("/auth/sign-up",{emailId:t,password:r,nickname:n})}catch(e){return i(e)}};var f=r(41834);let m=(0,r(70140).cn)({accessToken:"",refreshToken:""});var F=r(29335);let p=()=>{let e=(0,s.useRouter)(),t=(0,n.b9)(m),r=(0,n.b9)(f.I),{addToast:a}=(0,F.Z)();return{userLogin:async(e,r)=>{let n=await c(e,r);if(!("accessToken"in n))return a({message:n.errorMessage,iconType:"error"}),"error";{let e=n.accessToken;return localStorage.setItem("accessToken",e),t(e=>({...e,accessToken:n.accessToken})),"success"}},userLogout:()=>{localStorage.removeItem("accessToken"),t(e=>({...e,accessToken:""})),e.push("/auth/login")},userEmailCheck:async(e,t)=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return a({message:"올바른 이메일 주소를 입력해 주세요.",iconType:"error"}),"error";let n=await u(e);return"id"in n?(r(n),a({message:t?"인증 메일을 다시 전송했어요.":"인증 메일을 전송했어요.",iconType:"success"}),"success"):(a({message:n.errorMessage,iconType:"error"}),"error")},userEmailVerification:async(e,t)=>{let r=await l(e,t);return"isVerified"in r&&r.isVerified?"success":(a({message:"인증번호를 다시 확인해주세요.",iconType:"error"}),"error")},userSignUp:async e=>{let{emailId:r,password:n,nickname:s}=e,o=await d({emailId:r,password:n,nickname:s});return"token"in o?(localStorage.setItem("accessToken",o.token),t(e=>({...e,accessToken:o.token})),"success"):(a({message:o.errorMessage,iconType:"error"}),"error")},userExpired:t=>{var r;(401===t.status||(null===(r=t.response)||void 0===r?void 0:r.status)===401)&&(e.push("/auth/login"),localStorage.setItem("accessToken",""))}}}},58098:function(e,t,r){"use strict";r.d(t,{f:function(){return s},y:function(){return a}});var n=r(70140);let s=(0,n.cn)([]),a=(0,n.cn)(0)},41834:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});let n=(0,r(70140).cn)({id:"",email:""})},86241:function(e,t){"use strict";t.Z={neutral:{95:"#1C1D1E",90:"#292A2D",80:"#4D4F52",70:"#66696E",60:"#808389",50:"#999CA1",40:"#B3B5B8",30:"#CECECE",20:"#E1E1E1",10:"#EFEFEF",white:"#FFFFFF"},red:{90:"#451305",80:"#7F270F",70:"#C02C02",60:"#E33302",50:"#FF3D0D",40:"#FF5C37",30:"#FF8A70",20:"#FFB8A9",10:"#FFDDD4",5:"#FFF2EF"},green:{90:"#1C4B00",80:"#245F00",70:"#348700",60:"#43B000",50:"#5FD915",40:"#7FFF30",30:"#ADFF7B",20:"#C4FFA0",10:"#DBFFC5",5:"#F2FFEA"},transparent:"transparent",text:{strong:"#292A2D",normal:"#66696E",neutral:"#999CA1",assistive:"#CECECE",invert:"#FFFFFF",primary:"#FF3D0D"},surface:{foreground:"#FFFFFF",foregroundOn:"#F7F7F7",background:"#EFEFEF",base:"#E1E1E1",accent:"#999CA1",alternative:"#4D4F52",invert:"#1C1D1E",strong:"#E33302",normal:"#FF3D0D",light:"#FFDDD4",blank:"transparent",dimmer:"#00000080",assistive:"#00000014"},line:{normal:"#CECECE",normalHover:"#B3B5B8",assistive:"#EFEFEF",focus:"#FF5C37"},button:{primary:"#1C1D1E",primaryHover:"#4D4F52",secondary:"#E1E1E1",secondaryHover:"#CECECE",disabled:"#F7F7F7"},state:{positive:"#43B000",caution:"#FFD02A",negative:"#E20000"}}},663:function(e,t,r){"use strict";r.d(t,{K:function(){return n}});let n=(e,t)=>e.toString().padStart(t,"0")}},function(e){e.O(0,[890,38,366,400,744],function(){return e(e.s=50352)}),_N_E=e.O()}]);