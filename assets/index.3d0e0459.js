import{c as b,N as w,n as y,L as A,l as N}from"./use-translate.a029ce72.js";import{c as f,n as _,w as $}from"./with-install.1dc27775.js";import{u as R}from"./use-touch.e8c4f7e8.js";import{L as B}from"./index.cacc54a3.js";import{A as I,u as v,H as M,x as U,e as l,q as Y}from"./vue-libs.d5ee895a.js";const[q,r,C]=b("pull-refresh"),x=50,F=["pulling","loosing","success"],G={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:_,successDuration:f(500),animationDuration:f(300)},X=I({name:q,props:G,emits:["change","refresh","update:modelValue"],setup(a,{emit:d,slots:n}){let u;const g=v(),m=v(),H=w(g),e=M({status:"normal",distance:0,duration:0}),i=R(),P=()=>{if(a.headHeight!==x)return{height:`${a.headHeight}px`}},h=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,k=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing",d("change",{status:e.status,distance:t})},T=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||C(t)},p=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return F.includes(t)&&c.push(l("div",{class:r("text")},[T()])),t==="loading"&&c.push(l(B,{class:r("loading")},{default:T})),c},E=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},S=t=>{u=A(H.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{h()&&S(t)},L=t=>{if(h()){u||S(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(N(t),o(k(s.value)))}},D=()=>{u&&i.deltaY.value&&h()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),d("update:modelValue",!0),Y(()=>d("refresh"))):o(0))};return U(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?E():o(0,!1)}),y("touchmove",L,{target:m}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:g,class:r()},[l("div",{ref:m,class:r("track"),style:t,onTouchstartPassive:V,onTouchend:D,onTouchcancel:D},[l("div",{class:r("head"),style:P()},[p()]),(s=n.default)==null?void 0:s.call(n)])])}}}),Q=$(X);export{Q as P};
