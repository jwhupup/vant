import{u as I,V as k,b as N}from"./index-2942c68e.js";import{N as F,n as $,c as q,s as U,O as M,a as z}from"./use-translate-bcc9285c.js";import{u as A}from"./use-expose-52ca271b.js";import{L as H}from"./index-2bd2daba.js";import{A as B,u as T,x as w,Z as O,M as Z,e as o,q as j,o as g,c as x,w as u,C as n,a as b,F as L,b as R}from"./vue-libs-b2a2f6f9.js";import{c as D,m as G,t as J,w as K}from"./with-install-c0de7835.js";import{V}from"./index-95093031.js";import{V as Q}from"./index-1e47e40a.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-ce56f8fe.js";import"./use-touch-8f92051d.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-2274e31b.js";import"./index-3cdd9fde.js";import"./constant-a81ffd37.js";import"./interceptor-e1e3c393.js";import"./index-13130ea7.js";const[W,h,X]=q("list"),Y={error:Boolean,offset:D(300),loading:Boolean,disabled:Boolean,finished:Boolean,errorText:String,direction:G("down"),loadingText:String,finishedText:String,immediateCheck:J},ee=B({name:W,props:Y,emits:["load","update:error","update:loading"],setup(r,{emit:l,slots:t}){const s=T(r.loading),c=T(),f=T(),e=I(),i=F(c),d=()=>{j(()=>{if(s.value||r.finished||r.disabled||r.error||(e==null?void 0:e.value)===!1)return;const{offset:a,direction:v}=r,m=U(i);if(!m.height||M(c))return;let p=!1;const P=U(f);v==="up"?p=m.top-P.top<=a:p=P.bottom-m.bottom<=a,p&&(s.value=!0,l("update:loading",!0),l("load"))})},E=()=>{if(r.finished){const a=t.finished?t.finished():r.finishedText;if(a)return o("div",{class:h("finished-text")},[a])}},S=()=>{l("update:error",!1),d()},y=()=>{if(r.error){const a=t.error?t.error():r.errorText;if(a)return o("div",{role:"button",class:h("error-text"),tabindex:0,onClick:S},[a])}},_=()=>{if(s.value&&!r.finished&&!r.disabled)return o("div",{class:h("loading")},[t.loading?t.loading():o(H,{class:h("loading-icon")},{default:()=>[r.loadingText||X("loading")]})])};return w(()=>[r.loading,r.finished,r.error],d),e&&w(e,a=>{a&&d()}),O(()=>{s.value=r.loading}),Z(()=>{r.immediateCheck&&d()}),A({check:d}),$("scroll",d,{target:i,passive:!0}),()=>{var m;const a=(m=t.default)==null?void 0:m.call(t),v=o("div",{ref:f,class:h("placeholder")},null);return o("div",{ref:c,role:"feed",class:h(),"aria-busy":s.value},[r.direction==="down"?a:v,_(),E(),y(),r.direction==="up"?a:v])}}}),te=K(ee),C=te,be=B({__name:"index",setup(r){const l=z({"zh-CN":{errorInfo:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新",finishedText:"没有更多了"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=T([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),s=f=>{const e=t.value[f];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let i=0;i<10;i++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,f===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=f=>{t.value[f].finished=!1,s(f)};return(f,e)=>(g(),x(n(N),null,{default:u(()=>[o(n(k),{title:n(l)("basicUsage")},{default:u(()=>[o(n(C),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=i=>t.value[0].loading=i),finished:t.value[0].finished,"finished-text":n(l)("finishedText"),onLoad:e[1]||(e[1]=i=>s(0))},{default:u(()=>[(g(!0),b(L,null,R(t.value[0].items,i=>(g(),x(n(V),{key:i,title:i},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),o(n(k),{title:n(l)("errorInfo")},{default:u(()=>[o(n(C),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=i=>t.value[1].loading=i),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=i=>t.value[1].error=i),finished:t.value[1].finished,"error-text":n(l)("errorText"),onLoad:e[4]||(e[4]=i=>s(1))},{default:u(()=>[(g(!0),b(L,null,R(t.value[1].items,i=>(g(),x(n(V),{key:i,title:i},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),o(n(k),{title:n(l)("pullRefresh")},{default:u(()=>[o(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=i=>t.value[2].refreshing=i),onRefresh:e[8]||(e[8]=i=>c(2))},{default:u(()=>[o(n(C),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=i=>t.value[2].loading=i),finished:t.value[2].finished,"finished-text":n(l)("finishedText"),onLoad:e[6]||(e[6]=i=>s(2))},{default:u(()=>[(g(!0),b(L,null,R(t.value[2].items,i=>(g(),x(n(V),{key:i,title:i},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{be as default};
