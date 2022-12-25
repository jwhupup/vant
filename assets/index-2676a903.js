import{A as B,D as k,R as M,e as t,u as b,r as y,o as E,a as R,w as g,C as a,h as I,t as F,F as O}from"./vue-libs-a0ef9506.js";import{c as $,H as A,a as H}from"./use-translate-7ec0e456.js";import{m as j,c as _,a as q,w as G}from"./with-install-5cd181dc.js";import{B as h}from"./constant-a81ffd37.js";import{V as N}from"./index-b4068522.js";import"./index-f26f74fc.js";const[J,V,z]=$("pagination"),w=(l,n,i)=>({number:l,text:n,active:i}),K={mode:j("multi"),prevText:String,nextText:String,pageCount:_(0),modelValue:q(0),totalItems:_(0),showPageSize:_(5),itemsPerPage:_(10),forceEllipses:Boolean},L=B({name:J,props:K,emits:["change","update:modelValue"],setup(l,{emit:n,slots:i}){const d=k(()=>{const{pageCount:e,totalItems:o,itemsPerPage:s}=l,m=+e||Math.ceil(+o/+s);return Math.max(1,m)}),P=k(()=>{const e=[],o=d.value,s=+l.showPageSize,{modelValue:m,forceEllipses:U}=l;let f=1,x=o;const S=s<o;S&&(f=Math.max(m-Math.floor(s/2),1),x=f+s-1,x>o&&(x=o,f=x-s+1));for(let c=f;c<=x;c++){const D=w(c,c,c===m);e.push(D)}if(S&&s>0&&U){if(f>1){const c=w(f-1,"...");e.unshift(c)}if(x<o){const c=w(x+1,"...");e.push(c)}}return e}),p=(e,o)=>{e=A(e,1,d.value),l.modelValue!==e&&(n("update:modelValue",e),o&&n("change",e))};M(()=>p(l.modelValue));const C=()=>t("li",{class:V("page-desc")},[i.pageDesc?i.pageDesc():`${l.modelValue}/${d.value}`]),u=()=>{const{mode:e,modelValue:o}=l,s=i["prev-text"],m=o===1;return t("li",{class:[V("item",{disabled:m,border:e==="simple",prev:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>p(o-1,!0)},[s?s():l.prevText||z("prev")])])},v=()=>{const{mode:e,modelValue:o}=l,s=i["next-text"],m=o===d.value;return t("li",{class:[V("item",{disabled:m,border:e==="simple",next:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>p(o+1,!0)},[s?s():l.nextText||z("next")])])},r=()=>P.value.map(e=>t("li",{class:[V("item",{active:e.active,page:!0}),h]},[t("button",{type:"button","aria-current":e.active||void 0,onClick:()=>p(e.number,!0)},[i.page?i.page(e):e.text])]));return()=>t("nav",{role:"navigation",class:V()},[t("ul",{class:V("items")},[u(),l.mode==="simple"?C():r(),v()])])}}),Q=G(L),T=Q,ae=B({__name:"index",setup(l){const n=H({"zh-CN":{title2:"简单模式",title3:"显示省略号",title4:"自定义按钮",prevText:"上一页",nextText:"下一页"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),i=b(1),d=b(1),P=b(1),p=b(1);return(C,u)=>{const v=y("demo-block");return E(),R(O,null,[t(v,{title:a(n)("basicUsage")},{default:g(()=>[t(a(T),{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=r=>i.value=r),"total-items":24,"items-per-page":5,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title2")},{default:g(()=>[t(a(T),{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=r=>d.value=r),"page-count":12,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title3")},{default:g(()=>[t(a(T),{modelValue:P.value,"onUpdate:modelValue":u[2]||(u[2]=r=>P.value=r),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title4")},{default:g(()=>[t(a(T),{modelValue:p.value,"onUpdate:modelValue":u[3]||(u[3]=r=>p.value=r),"total-items":125,"show-page-size":5},{"prev-text":g(()=>[t(a(N),{name:"arrow-left"})]),"next-text":g(()=>[t(a(N),{name:"arrow"})]),page:g(({text:r})=>[I(F(r),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{ae as default};
