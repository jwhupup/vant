import{C as s}from"./index.b5076744.js";import{I as k}from"./index.0a9aad73.js";import{N as g,s as u}from"./index.f700e1ef.js";import{a as E}from"./use-translate.a029ce72.js";import{A as w,u as A,r as N,o as B,a as F,e,w as l,C as t,d as D,t as v,F as b}from"./vue-libs.d5ee895a.js";import"./with-install.1dc27775.js";import"./use-route.55b36618.js";import"./index.3014f697.js";import"./mount-component.a9874ea3.js";import"./use-expose.c6c7f4f7.js";import"./index.61c0c549.js";import"./constant.e12a51b9.js";import"./interceptor.2257d115.js";import"./use-touch.e8c4f7e8.js";import"./use-lazy-render.8319bb4a.js";import"./on-popup-reopen.5b484164.js";import"./index.45507804.js";const K=w({__name:"index",setup(P){const o=E({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",useComponent:"\u4F7F\u7528 Notify \u7EC4\u4EF6",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",useComponent:"Use Notify Component",customDuration:"Custom Duration",customPosition:"Custom Position"}}),r=A(!1),p=()=>{u(o("content"))},C=()=>{u({color:"#ad0000",message:o("customColor"),background:"#ffe1e1"})},f=()=>{u({message:o("customDuration"),duration:1e3})},y=()=>{u({message:o("customPosition"),position:"bottom"})},a=c=>{u({message:o("content"),type:c})},d=()=>{r.value=!0,setTimeout(()=>{r.value=!1},2e3)};return(c,i)=>{const m=N("demo-block");return B(),F(b,null,[e(m,{card:"",title:t(o)("basicUsage")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("basicUsage"),onClick:p},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("notifyType")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("primary"),onClick:i[0]||(i[0]=n=>a("primary"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("success"),onClick:i[1]||(i[1]=n=>a("success"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("danger"),onClick:i[2]||(i[2]=n=>a("danger"))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("warning"),onClick:i[3]||(i[3]=n=>a("warning"))},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("customNotify")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("customColor"),onClick:C},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("customPosition"),onClick:y},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("customDuration"),onClick:f},null,8,["title"])]),_:1},8,["title"]),e(m,{card:"",title:t(o)("useComponent")},{default:l(()=>[e(t(s),{"is-link":"",title:t(o)("useComponent"),onClick:d},null,8,["title"]),e(t(g),{show:r.value,"onUpdate:show":i[4]||(i[4]=n=>r.value=n),type:"success"},{default:l(()=>[e(t(k),{name:"bell",style:{"margin-right":"4px"}}),D("span",null,v(t(o)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{K as default};
