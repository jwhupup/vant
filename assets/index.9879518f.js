import{b as c,V as _}from"./index.e0531846.js";import{V as f}from"./index.57810578.js";import{c as n}from"./index.f8bdf99b.js";import{T as v}from"./function-call.dae83f0e.js";import{a as T}from"./use-translate.4764287f.js";import{z as x,C as V,D as B,N as y,o as R,c as C,w as o,e as a,B as e,d as r,t as g,g as D}from"./vue-libs.7ad34eae.js";import"./with-install.bb994bce.js";import"./use-id.fe691ba6.js";import"./use-expose.6911a823.js";import"./use-route.13c8c682.js";import"./index.9fdc7af1.js";import"./use-touch.79e2b006.js";import"./on-popup-reopen.c53e1654.js";import"./constant.80c6de18.js";import"./interceptor.958dcd96.js";import"./use-refs.2f0555bc.js";import"./index.011c71d9.js";import"./index.de1d0b70.js";import"./index.eee57e92.js";import"./mount-component.18ad4a6f.js";import"./index.5b4db4e8.js";import"./use-lazy-render.96f053d1.js";import"./index.54e1cc24.js";const U=["src"],$=["src"],w=["src"],ee=x({__name:"index",setup(b){const u=T({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),m=V(0),l=V(!1),p=B(()=>m.value?`${u("text")}: ${m.value}`:u("try")),d=i=>{setTimeout(()=>{i&&v(u("success")),l.value=!1,m.value++},1e3)};return y(()=>{const i=new Image,s=new Image;i.src=n("doge.png"),s.src=n("doge-fire.jpeg")}),(i,s)=>(R(),C(e(_),null,{default:o(()=>[a(e(c),{title:e(u)("basicUsage")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),onRefresh:s[1]||(s[1]=t=>d(!0))},{default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(e(c),{title:e(u)("successTip")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value=t),"success-text":e(u)("success"),onRefresh:s[3]||(s[3]=t=>d(!1))},{default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),a(e(c),{title:e(u)("customTips")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[4]||(s[4]=t=>l.value=t),"head-height":"80",onRefresh:s[5]||(s[5]=t=>d(!0))},{pulling:o(({distance:t})=>[r("img",{class:"doge",src:e(n)("doge.png"),style:D({transform:`scale(${t/80})`})},null,12,U)]),loosing:o(()=>[r("img",{src:e(n)("doge.png"),class:"doge"},null,8,$)]),loading:o(()=>[r("img",{src:e(n)("doge-fire.jpeg"),class:"doge"},null,8,w)]),default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{ee as default};
