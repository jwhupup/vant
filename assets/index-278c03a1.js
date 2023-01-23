import{C as W}from"./index-95093031.js";import{A as P,e as o,D as m,u as g,x as _,M as X,j as ee,v as oe,q as ne,r as te,o as ae,c as se,w as U,C}from"./vue-libs-b2a2f6f9.js";import{c as F,i as j,V as q,r as G,s as z,a as ce}from"./use-translate-bcc9285c.js";import{t as D,b as M,m as L,c as ue,w as N,d as ie,a as I}from"./with-install-c0de7835.js";import{V as le}from"./index-4a7db624.js";import{u as re}from"./use-refs-06cfd58f.js";import{T as de,a as O}from"./index-2942c68e.js";import{E as me}from"./index-6baa0962.js";import{F as pe}from"./index-fbad952d.js";import{B as Y}from"./index-8ce4e927.js";import{C as he}from"./index-52ea8091.js";import{s as ge}from"./function-call-57778d4c.js";import"./use-route-efd4b866.js";import"./index-13130ea7.js";import"./index-3cdd9fde.js";import"./use-expose-52ca271b.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-e11a9c16.js";import"./interceptor-e1e3c393.js";import"./constant-a81ffd37.js";import"./use-id-92cebd14.js";import"./index-ce56f8fe.js";import"./index-2274e31b.js";import"./index-2bd2daba.js";import"./Checker-6e5a5705.js";import"./mount-component-23f5a3b8.js";const[ve,Z,R]=F("coupon-cell"),Ce={title:String,border:D,editable:D,coupons:M(),currency:L("¥"),chosenCoupon:ue(-1)};function be({coupons:e,chosenCoupon:t,currency:i}){const s=e[+t];if(s){let n=0;return j(s.value)?{value:n}=s:j(s.denominations)&&(n=s.denominations),`-${i} ${(n/100).toFixed(2)}`}return e.length===0?R("noCoupon"):R("count",e.length)}const fe=P({name:ve,props:Ce,setup(e){return()=>{const t=e.coupons[+e.chosenCoupon];return o(W,{class:Z(),value:be(e),title:e.title||R("title"),border:e.border,isLink:e.editable,valueClass:Z("value",{selected:t})},null)}}}),xe=N(fe),we=xe;function J(e){const t=new Date(e*1e3);return`${t.getFullYear()}.${q(t.getMonth()+1)}.${q(t.getDate())}`}const ye=e=>(e/10).toFixed(e%10===0?0:1),K=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[Be,r,H]=F("coupon"),De=P({name:Be,props:{chosen:Boolean,coupon:ie(Object),disabled:Boolean,currency:L("¥")},setup(e){const t=m(()=>{const{startAt:n,endAt:c}=e.coupon;return`${J(n)} - ${J(c)}`}),i=m(()=>{const{coupon:n,currency:c}=e;if(n.valueDesc)return[n.valueDesc,o("span",null,[n.unitDesc||""])];if(n.denominations){const u=K(n.denominations);return[o("span",null,[c]),` ${u}`]}return n.discount?H("discount",ye(n.discount)):""}),s=m(()=>{const n=K(e.coupon.originCondition||0);return n==="0"?H("unlimited"):H("condition",n)});return()=>{const{chosen:n,coupon:c,disabled:u}=e,h=u&&c.reason||c.description;return o("div",{class:r({disabled:u})},[o("div",{class:r("content")},[o("div",{class:r("head")},[o("h2",{class:r("amount")},[i.value]),o("p",{class:r("condition")},[c.condition||s.value])]),o("div",{class:r("body")},[o("p",{class:r("name")},[c.name]),o("p",{class:r("valid")},[t.value]),!u&&o(he,{class:r("corner"),modelValue:n},null)])]),h&&o("p",{class:r("description")},[h])])}}}),Q=N(De),[Te,d,x]=F("coupon-list"),ke={code:L(""),coupons:M(),currency:L("¥"),showCount:D,emptyImage:String,chosenCoupon:I(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:M(),showExchangeBar:D,showCloseButton:D,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:I(1),exchangeButtonText:String,displayedCouponIndex:I(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean},$e=P({name:Te,props:ke,emits:["change","exchange","update:code"],setup(e,{emit:t,slots:i}){const[s,n]=re(),c=g(),u=g(),h=g(0),w=g(0),l=g(e.code),T=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!l.value||l.value.length<e.exchangeMinLength)),k=()=>{const p=z(c).height,f=z(u).height+44;w.value=(p>f?p:G.value)-f},V=()=>{t("exchange",l.value),e.code||(l.value="")},$=a=>{ne(()=>{var p;return(p=s.value[a])==null?void 0:p.scrollIntoView()})},v=()=>o(me,{image:e.emptyImage},{default:()=>[o("p",{class:d("empty-tip")},[x("noCoupon")])]}),b=()=>{if(e.showExchangeBar)return o("div",{ref:u,class:d("exchange-bar")},[o(pe,{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),o(Y,{plain:!0,type:"primary",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:T.value,onClick:V},null)])},A=()=>{const{coupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.enabledTitle||x("enable"))+p;return o(O,{title:f},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${w.value}px`}},[a.map((B,E)=>o(Q,{key:B.id,ref:n(E),coupon:B,chosen:E===e.chosenCoupon,currency:e.currency,onClick:()=>t("change",E)},null)),!a.length&&v(),(y=i["list-footer"])==null?void 0:y.call(i)])]}})},S=()=>{const{disabledCoupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.disabledTitle||x("disabled"))+p;return o(O,{title:f},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${w.value}px`}},[a.map(B=>o(Q,{disabled:!0,key:B.id,coupon:B,currency:e.currency},null)),!a.length&&v(),(y=i["disabled-list-footer"])==null?void 0:y.call(i)])]}})};return _(()=>e.code,a=>{l.value=a}),_(G,k),_(l,a=>t("update:code",a)),_(()=>e.displayedCouponIndex,$),X(()=>{k(),$(e.displayedCouponIndex)}),()=>o("div",{ref:c,class:d()},[b(),o(de,{active:h.value,"onUpdate:active":a=>h.value=a,class:d("tab")},{default:()=>[A(),S()]}),o("div",{class:d("bottom")},[ee(o(Y,{round:!0,block:!0,type:"primary",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>t("change",-1)},null),[[oe,e.showCloseButton]])])])}}),Se=N($e),_e=Se,ao=P({__name:"index",setup(e){const t=ce({"zh-CN":{coupon:{name:"优惠券名称",reason:"优惠券不可用原因",description:"描述信息"},exchange:"兑换成功"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),i=(v=999999)=>String(Math.floor(Math.random()*v)+1),s=g(!1),n=g(-1),c=g([]),u=m(()=>({id:1,condition:`无门槛
最多优惠12元`,reason:"",value:150,name:t("coupon.name"),description:t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"})),h=m(()=>({...u.value,id:2,value:12,valueDesc:"8.8",unitDesc:"折"})),w=m(()=>({...u.value,id:3,reason:t("coupon.reason")})),l=m(()=>({...h.value,valueDesc:"1",unitDesc:"折",id:4,reason:t("coupon.reason")})),T=m(()=>[u.value,h.value,...c.value]),k=m(()=>[w.value,l.value]),V=v=>{s.value=!1,n.value=v},$=()=>{ge(t("exchange")),c.value.push({...u.value,id:i()})};return(v,b)=>{const A=te("demo-block");return ae(),se(A,{title:C(t)("basicUsage")},{default:U(()=>[o(C(we),{coupons:C(T),"chosen-coupon":n.value,onClick:b[0]||(b[0]=S=>s.value=!0)},null,8,["coupons","chosen-coupon"]),o(C(le),{show:s.value,"onUpdate:show":b[1]||(b[1]=S=>s.value=S),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:U(()=>[o(C(_e),{coupons:C(T),"chosen-coupon":n.value,"disabled-coupons":C(k),onChange:V,onExchange:$},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{ao as default};
