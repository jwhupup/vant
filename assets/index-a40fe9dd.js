import{u as I}from"./use-placeholder-addab9d8.js";import{I as R,V as S}from"./index-b4068522.js";import{A as k,u as A,e as r,r as N,o as L,a as P,w as s,C as e,F as z}from"./vue-libs-a0ef9506.js";import{c as E,t as V,a as y}from"./use-translate-7ec0e456.js";import{n as F,t as d,w as O}from"./with-install-5cd181dc.js";import{H as x,f as U}from"./constant-a81ffd37.js";import{s as g}from"./function-call-fc2cf3cd.js";import"./use-height-52e9e1f4.js";import"./on-popup-reopen-a0d16524.js";import"./index-f26f74fc.js";import"./mount-component-0f063ef5.js";import"./use-expose-8d780f8a.js";import"./index-c3dae538.js";import"./use-touch-2d22ae5a.js";import"./use-lazy-render-2608d07a.js";import"./index-263e536f.js";import"./interceptor-cab67930.js";import"./index-31a73367.js";const[D,i]=E("nav-bar"),H={title:String,fixed:Boolean,zIndex:F,border:d,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:d},K=k({name:D,props:H,emits:["clickLeft","clickRight"],setup(a,{emit:t,slots:l}){const o=A(),m=I(o,i),u=c=>t("clickLeft",c),n=c=>t("clickRight",c),B=()=>l.left?l.left():[a.leftArrow&&r(R,{class:i("arrow"),name:"arrow-left"},null),a.leftText&&r("span",{class:i("text")},[a.leftText])],_=()=>l.right?l.right():r("span",{class:i("text")},[a.rightText]),h=()=>{const{title:c,fixed:p,border:b,zIndex:w}=a,v=V(w),T=a.leftArrow||a.leftText||l.left,C=a.rightText||l.right;return r("div",{ref:o,style:v,class:[i({fixed:p}),{[U]:b,"van-safe-area-top":a.safeAreaInsetTop}]},[r("div",{class:i("content")},[T&&r("div",{class:[i("left"),a.clickable?x:""],onClick:u},[B()]),r("div",{class:[i("title"),"van-ellipsis"]},[l.title?l.title():c]),C&&r("div",{class:[i("right"),a.clickable?x:""],onClick:n},[_()])])])};return()=>a.fixed&&a.placeholder?m(h):h()}}),M=O(K),f=M,ct=k({__name:"index",setup(a){const t=y({"zh-CN":{useSlot:"使用插槽",showBack:"返回上级",rightButton:"右侧按钮"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>g(t("back")),o=()=>g(t("button"));return(m,u)=>{const n=N("demo-block");return L(),P(z,null,[r(n,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(n,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:o},null,8,["title","left-text"])]),_:1},8,["title"]),r(n,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:o},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(n,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(S),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{ct as default};
