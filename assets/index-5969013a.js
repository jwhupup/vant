import{d as S,o as k,N as I,I as P,e as $,t as O,n as R,c as T,O as B,s as u,L as N}from"./use-translate-7ec0e456.js";import{L as V,I as H,A as L,u as z,H as A,D as m,x as C,e as p}from"./vue-libs-a0ef9506.js";import{n as D,m as E,c as x,w as j}from"./with-install-5cd181dc.js";function F(o,f){if(!S||!window.IntersectionObserver)return;const c=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{o.value&&c.observe(o.value)},l=()=>{o.value&&c.unobserve(o.value)};V(l),H(l),k(n)}const[M,U]=T("sticky"),Z={zIndex:D,position:E("top"),container:Object,offsetTop:x(0),offsetBottom:x(0)},_=L({name:M,props:Z,emits:["scroll","change"],setup(o,{emit:f,slots:c}){const n=z(),l=I(n),e=A({fixed:!1,width:0,height:0,transform:0}),i=m(()=>P(o.position==="top"?o.offsetTop:o.offsetBottom)),w=m(()=>{const{fixed:t,height:d,width:s}=e;if(t)return{width:`${s}px`,height:`${d}px`}}),b=m(()=>{if(!e.fixed)return;const t=$(O(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),g=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!n.value||B(n))return;const{container:t,position:d}=o,s=u(n),y=N(window);if(e.width=s.width,e.height=s.height,d==="top")if(t){const r=u(t),a=r.bottom-i.value-e.height;e.fixed=i.value>s.top&&r.bottom>0,e.transform=a<0?a:0}else e.fixed=i.value>s.top;else{const{clientHeight:r}=document.documentElement;if(t){const a=u(t),v=r-a.top-i.value-e.height;e.fixed=r-i.value<s.bottom&&r>a.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<s.bottom}g(y)};return C(()=>e.fixed,t=>f("change",t)),R("scroll",h,{target:l,passive:!0}),F(n,h),()=>{var t;return p("div",{ref:n,style:w.value},[p("div",{class:U({fixed:e.fixed}),style:b.value},[(t=c.default)==null?void 0:t.call(c)])])}}}),q=j(_),Q=q;export{q as S,Q as V};
