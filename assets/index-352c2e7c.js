import{T as g}from"./index-d95103da.js";import{I as C}from"./index-b4068522.js";import{C as T}from"./index-a792186e.js";import{a as _,R as x}from"./index-13883d5e.js";import{B as k}from"./index-df6e00e8.js";import{A as f,e as o,u as V,r as h,o as v,c as y,w as S,C as c}from"./vue-libs-a0ef9506.js";import{c as b,a as w}from"./use-translate-7ec0e456.js";import{u as I,w as L}from"./with-install-5cd181dc.js";import{s as p}from"./function-call-fc2cf3cd.js";import"./constant-a81ffd37.js";import"./index-f26f74fc.js";import"./use-route-ed093b71.js";import"./Checker-f03a1afb.js";import"./index-31a73367.js";import"./mount-component-0f063ef5.js";import"./use-expose-8d780f8a.js";import"./index-c3dae538.js";import"./use-touch-2d22ae5a.js";import"./use-lazy-render-2608d07a.js";import"./on-popup-reopen-a0d16524.js";import"./index-263e536f.js";import"./interceptor-cab67930.js";const[A,a,B]=b("contact-list"),N={list:Array,addText:String,modelValue:I,defaultTagText:String},R=f({name:A,props:N,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const i=(e,d)=>{const u=()=>{t("update:modelValue",e.id),t("select",e,d)},s=()=>o(x,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(C,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,d)}},null),m=()=>{const l=[`${e.name}，${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(g,{type:"primary",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(T,{key:e.id,isLink:!0,center:!0,class:a("item"),titleClass:a("item-title"),onClick:u},{icon:r,title:m,"right-icon":s})};return()=>o("div",{class:a()},[o(_,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(i)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(k,{round:!0,block:!0,type:"primary",class:a("add"),text:n.addText||B("addContact"),onClick:()=>t("add")},null)])])}}),D=L(R),E=D,nt=f({__name:"index",setup(n){const t=w({"zh-CN":{add:"新增",edit:"编辑",list:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000"}],select:"选择",defaultTagText:"默认"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),i=V("1"),e=()=>{p(t("add"))},d=s=>{p(t("edit")+s.id)},u=s=>{p(t("select")+s.id)};return(s,r)=>{const m=h("demo-block");return v(),y(m,{title:c(t)("basicUsage")},{default:S(()=>[o(c(E),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=l=>i.value=l),list:c(t)("list"),"default-tag-text":c(t)("defaultTagText"),onAdd:e,onEdit:d,onSelect:u},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{nt as default};
