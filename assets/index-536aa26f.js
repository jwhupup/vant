import{t as j}from"./util-78f71b01.js";import{h as V,n as E,c as O,d as U,m as A,L as I,a as L}from"./use-translate-7ec0e456.js";import{I as q}from"./index-b4068522.js";import{A as w,u as d,D,M as F,x as M,e as a,B as z,S as Q,Q as G,q as H,o as s,c as f,w as u,C as t,a as g,F as k,b as v,f as b,h as J,t as K,d as R}from"./vue-libs-a0ef9506.js";import{n as B,c as W,w as X}from"./with-install-5cd181dc.js";import{V as T,b as Y}from"./index-4cc1a83f.js";import{V as y}from"./index-a792186e.js";import"./index-f26f74fc.js";import"./use-id-97e5b872.js";import"./use-expose-8d780f8a.js";import"./use-route-ed093b71.js";import"./index-01a9a624.js";import"./use-touch-2d22ae5a.js";import"./on-popup-reopen-a0d16524.js";import"./use-refs-81a99117.js";import"./index-5969013a.js";import"./constant-a81ffd37.js";import"./interceptor-cab67930.js";function Z(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!G(o)}const[$,P]=O("back-top"),tt={right:B,bottom:B,target:[String,Object],offset:W(200),teleport:{type:[String,Object],default:"body"}},et=w({name:$,inheritAttrs:!1,props:tt,emits:["click"],setup(o,{emit:c,slots:l,attrs:i}){const m=d(!1),h=d(),n=d(),e=D(()=>({right:V(o.right),bottom:V(o.bottom)})),x=r=>{var p;c("click",r),(p=n.value)==null||p.scrollTo({top:0,behavior:"smooth"})},C=()=>{m.value=n.value?I(n.value)>=o.offset:!1},N=()=>{const{target:r}=o;if(typeof r=="string"){const p=document.querySelector(r);if(p)return p}else return r},S=()=>{U&&H(()=>{n.value=o.target?N():A(h.value),C()})};return E("scroll",j(C,100),{target:n}),F(S),M(()=>o.target,S),()=>{const r=a("div",z({ref:h,class:P({active:m.value}),style:e.value,onClick:x},i),[l.default?l.default():a(q,{name:"back-top",class:P("icon")},null)]);return o.teleport?a(Q,{to:o.teleport},Z(r)?r:{default:()=>[r]}):r}}}),ot=X(et),_=ot,_t=w({__name:"index",setup(o){const c=L({"zh-CN":{backTop:"返回顶部",customContent:"自定义内容",customPosition:"自定义位置",setScrollTarget:"设置滚动目标"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",setScrollTarget:"Set Scroll Target"}}),l=d(0),i=[...Array(50).keys()],m=d();return(h,n)=>(s(),f(t(Y),{active:l.value,"onUpdate:active":n[0]||(n[0]=e=>l.value=e)},{default:u(()=>[a(t(T),{title:t(c)("basicUsage")},{default:u(()=>[(s(),g(k,null,v(i,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===0?(s(),f(t(_),{key:0})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(c)("customPosition")},{default:u(()=>[(s(),g(k,null,v(i,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===1?(s(),f(t(_),{key:0,right:"15vw",bottom:"10vh"})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(c)("customContent")},{default:u(()=>[(s(),g(k,null,v(i,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===2?(s(),f(t(_),{key:0,class:"custom-back-top"},{default:u(()=>[J(K(t(c)("backTop")),1)]),_:1})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(c)("setScrollTarget")},{default:u(()=>[R("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:m},[(s(),g(k,null,v(i,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===3?(s(),f(t(_),{key:0,target:m.value,bottom:"30vh"},null,8,["target"])):b("",!0)],512)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{_t as default};
