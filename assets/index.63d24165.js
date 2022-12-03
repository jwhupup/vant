import{c as x,e as P,J as i,p as k}from"./use-translate.a029ce72.js";import{c as n,w as g}from"./with-install.1dc27775.js";import{s as C,a as r,f as V,p as v}from"./utils.0aca3e16.js";import{P as S}from"./index.7dc9d2c4.js";import{A as T,u as p,D as H,x as s,e as M,B as N}from"./vue-libs.d5ee895a.js";const[y]=x("time-picker"),A=P({},C,{minHour:n(0),maxHour:n(23),minMinute:n(0),maxMinute:n(59),minSecond:n(0),maxSecond:n(59),columnsType:{type:Array,default:()=>["hour","minute"]}}),I=T({name:y,props:A,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:m,slots:l}){const o=p(a.modelValue),u=H(()=>a.columnsType.map(e=>{const{filter:c,formatter:t}=a;switch(e){case"hour":return r(+a.minHour,+a.maxHour,e,t,c);case"minute":return r(+a.minMinute,+a.maxMinute,e,t,c);case"second":return r(+a.minSecond,+a.maxSecond,e,t,c);default:return[]}}));s(o,e=>{i(e,a.modelValue)||m("update:modelValue",e)}),s(()=>a.modelValue,e=>{e=V(e,u.value),i(e,o.value)||(o.value=e)},{immediate:!0});const d=(...e)=>m("change",...e),f=(...e)=>m("cancel",...e),h=(...e)=>m("confirm",...e);return()=>M(S,N({modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,columns:u.value,onChange:d,onCancel:f,onConfirm:h},k(a,v)),l)}}),R=g(I);export{R as T};
