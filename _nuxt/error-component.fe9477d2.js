import{u as N,_ as O,a as b,b as A}from"./Footer.2ffd1cec.js";import{u as F,s as G,a as R}from"./usePageTransition.21f5647f.js";import{u as k}from"./useAsyncNavigationData.0f6c9372.js";import{w as D,o as n,c as r,a as c,b as t,t as i,u as e,F as h,d as f}from"./entry.155d5b82.js";import{E as S,a as $}from"./lang.4a9029fb.js";const B={class:"theme-mid-green"},C={class:"h-screen flex flex-col justify-end -mt-64 lg:-mt-80 pb-gutter"},T={class:"container"},U={class:"cols-container"},V={class:"xs:w-6-cols md:w-4-cols lg:w-5-cols lg:ml-2-cols"},j={class:"f-display-4"},H={class:"xs:w-6-cols md:w-4-cols lg:w-3-cols md:mt-30 lg:ml-2-cols lg:mt-48 xl:mt-64 xxl:mt-86"},P={class:"f-body-1"},I={class:"mt-16"},L={__name:"error",props:{error:Object},async setup(o){var d,u;let s,l;const y=o,a=F(),{data:_,error:m}=([s,l]=D(()=>k()),s=await s,l(),s);return!m.value&&G((d=_.value)==null?void 0:d.navigation),!m.value&&R((u=_.value)==null?void 0:u.social),N({title:`${y.error.statusCode} Error`}),(M,Y)=>{var g,v,p;const x=O,w=b,E=A;return n(),r("div",B,[c(x,{name:"Generic",navOnly:!0,theme:"mid-green"}),t("div",C,[t("div",T,[t("div",U,[t("div",V,[t("h1",j,i(o.error.statusCode),1)]),t("div",H,[t("div",P,[o.error.message===e(S)?(n(),r(h,{key:0},[f(i(e($)),1)],64)):(n(),r(h,{key:1},[f(i(o.error.message),1)],64)),t("div",I,[c(w,{label:"Go home",url:"/",modifier:"underline"})])])])])])]),c(E,{navigation:(g=e(a))==null?void 0:g.footer,tertiary:(v=e(a))==null?void 0:v.tertiary,social:(p=e(a))==null?void 0:p.social,copyright:`OpenAI © 2015 – ${new Date().getFullYear()}`},null,8,["navigation","tertiary","social","copyright"])])}}},W=L;export{W as default};
