import{a as g}from"./Picker-54c57304.js";import{w as k}from"./with-install-5cd181dc.js";import{V as x}from"./index-e2e77e78.js";import{V as C}from"./index-682bee87.js";import{a as _}from"./use-translate-7ec0e456.js";import{s as d}from"./function-call-fc2cf3cd.js";import{A as T,u as c,o as f,c as S,w as u,e as l,C as e,D as w,r as R,a as U,F as $}from"./vue-libs-a0ef9506.js";import"./use-expose-8d780f8a.js";import"./index-31a73367.js";import"./use-touch-2d22ae5a.js";import"./constant-a81ffd37.js";import"./index-e1967d2a.js";import"./use-id-97e5b872.js";import"./use-route-ed093b71.js";import"./index-d2ebfe9e.js";import"./on-popup-reopen-a0d16524.js";import"./use-refs-81a99117.js";import"./index-5969013a.js";import"./index-f26f74fc.js";import"./interceptor-cab67930.js";import"./utils-ddb47dd6.js";import"./index-1b850917.js";import"./mount-component-0f063ef5.js";import"./index-b4068522.js";import"./index-c3dae538.js";import"./use-lazy-render-2608d07a.js";import"./index-263e536f.js";const N=k(g),b=N,j=T({__name:"SelectDateTime",setup(V){const t=_({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期"},"en-US":{date:"Date",time:"Time",title:"Title"}}),a=c(["12","00"]),n=c(["2022","06","01"]),o=new Date(2020,0,1),r=new Date(2025,5,1),D=()=>{d(`${n.value.join("/")} ${a.value.join(":")}`)},m=()=>{d("cancel")};return(s,p)=>(f(),S(e(b),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:D,onCancel:m},{default:u(()=>[l(e(C),{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=i=>n.value=i),"min-date":e(o),"max-date":e(r)},null,8,["modelValue","min-date","max-date"]),l(e(x),{modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=i=>a.value=i)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),P=T({__name:"SelectTimeRange",setup(V){const t=_({"zh-CN":{startTime:"开始时间",endTime:"结束时间",title:"预约时间"},"en-US":{startTime:"Start Time",endTime:"End Time",title:"Title"}}),a=c(["12","00"]),n=c(["13","00"]),o=()=>{d(`${a.value.join(":")} - ${n.value.join(":")}`)},r=()=>{d("cancel")};return(D,m)=>(f(),S(e(b),{title:e(t)("title"),tabs:[e(t)("startTime"),e(t)("endTime")],onConfirm:o,onCancel:r},{default:u(()=>[l(e(x),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=s=>a.value=s)},null,8,["modelValue"]),l(e(x),{modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=s=>n.value=s)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),z=T({__name:"SelectDateRange",setup(V){const t=_({"zh-CN":{startDate:"开始日期",endDate:"结束日期",title:"预约日期"},"en-US":{startDate:"Start Date",endDate:"End Date",title:"Title"}}),a=c(["2022","06","01"]),n=c(["2023","06","01"]),o=new Date(2020,0,1),r=new Date(2025,5,1),D=w(()=>new Date(Number(a.value[0]),Number(a.value[1])-1,Number(a.value[2]))),m=()=>{d(`${a.value.join("/")} - ${n.value.join("/")}`)},s=()=>{d("cancel")};return(p,i)=>(f(),S(e(b),{title:e(t)("title"),tabs:[e(t)("startDate"),e(t)("endDate")],onConfirm:m,onCancel:s},{default:u(()=>[l(e(C),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=v=>a.value=v),"min-date":e(o),"max-date":e(r)},null,8,["modelValue","min-date","max-date"]),l(e(C),{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=v=>n.value=v),"min-date":e(D),"max-date":e(r)},null,8,["modelValue","min-date","max-date"])]),_:1},8,["title","tabs"]))}}),ie=T({__name:"index",setup(V){const t=_({"zh-CN":{selectDateTime:"选择日期时间",selectDateRange:"选择日期范围",selectTimeRange:"选择时间范围"},"en-US":{selectDateTime:"Select Date Time",selectDateRange:"Select Date Range",selectTimeRange:"Select Time Range"}});return(a,n)=>{const o=R("demo-block");return f(),U($,null,[l(o,{card:"",title:e(t)("selectDateTime")},{default:u(()=>[l(j)]),_:1},8,["title"]),l(o,{card:"",title:e(t)("selectDateRange")},{default:u(()=>[l(z)]),_:1},8,["title"]),l(o,{card:"",title:e(t)("selectTimeRange")},{default:u(()=>[l(P)]),_:1},8,["title"])],64)}}});export{ie as default};
