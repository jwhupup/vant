import{_ as Ae,p as Re,c as Te,e as De,a as Ie}from"./use-translate-7ec0e456.js";import{u as V,x as re,A as ye,M as Le,R as je,I as Me,e as d,B as Ve,F as ae,q as _e,r as Ne,o as ue,a as pe,w as b,C as u,h as q,t as W,d as ge,b as Be}from"./vue-libs-a0ef9506.js";import{I as qe}from"./index-b4068522.js";import{P as We,V as Ue}from"./index-c3dae538.js";import{m as ne,b as Fe,n as He,t as G,u as Xe,w as Ye}from"./with-install-5cd181dc.js";import{f as $e}from"./constant-a81ffd37.js";import{V as U}from"./index-df6e00e8.js";import{V as ze}from"./index-8236d4f8.js";import{V as Ge}from"./index-1b850917.js";import{V as Je,a as Ke}from"./index-7293920b.js";import{s as Qe}from"./function-call-fc2cf3cd.js";import"./index-f26f74fc.js";import"./use-expose-8d780f8a.js";import"./use-touch-2d22ae5a.js";import"./use-lazy-render-2608d07a.js";import"./on-popup-reopen-a0d16524.js";import"./index-263e536f.js";import"./interceptor-cab67930.js";import"./use-route-ed093b71.js";import"./index-31a73367.js";import"./index-a792186e.js";import"./use-id-97e5b872.js";import"./Picker-54c57304.js";import"./index-e1967d2a.js";import"./index-d2ebfe9e.js";import"./use-refs-81a99117.js";import"./index-5969013a.js";import"./mount-component-0f063ef5.js";function C(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ce(t){var e=C(t).Element;return t instanceof e||t instanceof Element}function P(t){var e=C(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Oe(t){if(typeof ShadowRoot>"u")return!1;var e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var H=Math.round;function ie(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ze(){return!/^((?!chrome|android).)*safari/i.test(ie())}function Q(t,e,o){e===void 0&&(e=!1),o===void 0&&(o=!1);var n=t.getBoundingClientRect(),r=1,i=1;e&&P(t)&&(r=t.offsetWidth>0&&H(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&H(n.height)/t.offsetHeight||1);var l=ce(t)?C(t):window,c=l.visualViewport,s=!Ze()&&o,f=(n.left+(s&&c?c.offsetLeft:0))/r,a=(n.top+(s&&c?c.offsetTop:0))/i,h=n.width/r,v=n.height/i;return{width:h,height:v,top:a,right:f+h,bottom:a+v,left:f,x:f,y:a}}function xe(t){var e=C(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function et(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function tt(t){return t===C(t)||!P(t)?xe(t):et(t)}function R(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((ce(t)?t.ownerDocument:t.document)||window.document).documentElement}function ot(t){return Q(te(t)).left+xe(t).scrollLeft}function T(t){return C(t).getComputedStyle(t)}function le(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function nt(t){var e=t.getBoundingClientRect(),o=H(e.width)/t.offsetWidth||1,n=H(e.height)/t.offsetHeight||1;return o!==1||n!==1}function rt(t,e,o){o===void 0&&(o=!1);var n=P(e),r=P(e)&&nt(e),i=te(e),l=Q(t,r,o),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((R(e)!=="body"||le(i))&&(c=tt(e)),P(e)?(s=Q(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=ot(i))),{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function at(t){var e=Q(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function fe(t){return R(t)==="html"?t:t.assignedSlot||t.parentNode||(Oe(t)?t.host:null)||te(t)}function Se(t){return["html","body","#document"].indexOf(R(t))>=0?t.ownerDocument.body:P(t)&&le(t)?t:Se(fe(t))}function K(t,e){var o;e===void 0&&(e=[]);var n=Se(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),i=C(n),l=r?[i].concat(i.visualViewport||[],le(n)?n:[]):n,c=e.concat(l);return r?c:c.concat(K(fe(l)))}function it(t){return["table","td","th"].indexOf(R(t))>=0}function de(t){return!P(t)||T(t).position==="fixed"?null:t.offsetParent}function st(t){var e=/firefox/i.test(ie()),o=/Trident/i.test(ie());if(o&&P(t)){var n=T(t);if(n.position==="fixed")return null}var r=fe(t);for(Oe(r)&&(r=r.host);P(r)&&["html","body"].indexOf(R(r))<0;){var i=T(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ke(t){for(var e=C(t),o=de(t);o&&it(o)&&T(o).position==="static";)o=de(o);return o&&(R(o)==="html"||R(o)==="body"&&T(o).position==="static")?e:o||st(t)||e}var F="top",Z="bottom",z="right",_="left",Ee="auto",ct=[F,Z,z,_],Pe="start",ee="end",lt=[].concat(ct,[Ee]).reduce(function(t,e){return t.concat([e,e+"-"+Pe,e+"-"+ee])},[]),ft="beforeRead",ut="read",pt="afterRead",dt="beforeMain",vt="main",mt="afterMain",ht="beforeWrite",wt="write",bt="afterWrite",se=[ft,ut,pt,dt,vt,mt,ht,wt,bt];function yt(t){var e=new Map,o=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){o.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(c){if(!o.has(c)){var s=e.get(c);s&&r(s)}}),n.push(i)}return t.forEach(function(i){o.has(i.name)||r(i)}),n}function gt(t){var e=yt(t);return se.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function Ot(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,i){return r.replace(/%s/,i)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',xt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',ve=["name","enabled","phase","fn","effect","requires","options"];function St(t){t.forEach(function(e){[].concat(Object.keys(e),ve).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":se.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+se.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+ve.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(xt,String(e.name),n,n))})})})}function kt(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function Et(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function Ce(t){return t.split("-")[1]}function Pt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ct(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,i=n?Ce(n):null,l=e.x+e.width/2-o.width/2,c=e.y+e.height/2-o.height/2,s;switch(r){case F:s={x:l,y:e.y-o.height};break;case Z:s={x:l,y:e.y+e.height};break;case z:s={x:e.x+e.width,y:c};break;case _:s={x:e.x-o.width,y:c};break;default:s={x:e.x,y:e.y}}var f=r?Pt(r):null;if(f!=null){var a=f==="y"?"height":"width";switch(i){case Pe:s[f]=s[f]-(e[a]/2-o[a]/2);break;case ee:s[f]=s[f]+(e[a]/2-o[a]/2);break}}return s}var me="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",At="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",he={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Rt(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,i=r===void 0?he:r;return function(c,s,f){f===void 0&&(f=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},he,i),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},h=[],v=!1,w={state:a,setOptions:function(S){var p=typeof S=="function"?S(a.options):S;x(),a.options=Object.assign({},i,a.options,p),a.scrollParents={reference:ce(c)?K(c):c.contextElement?K(c.contextElement):[],popper:K(s)};var y=gt(Et([].concat(n,a.options.modifiers)));a.orderedModifiers=y.filter(function(E){return E.enabled});{var k=kt([].concat(y,a.options.modifiers),function(E){var B=E.name;return B});if(St(k),oe(a.options.placement)===Ee){var g=a.orderedModifiers.find(function(E){var B=E.name;return B==="flip"});g||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var m=T(s),A=m.marginTop,I=m.marginRight,X=m.marginBottom,Y=m.marginLeft;[A,I,X,Y].some(function(E){return parseFloat(E)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return N(),w.update()},forceUpdate:function(){if(!v){var S=a.elements,p=S.reference,y=S.popper;if(!we(p,y)){console.error(me);return}a.rects={reference:rt(p,ke(y),a.options.strategy==="fixed"),popper:at(y)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(E){return a.modifiersData[E.name]=Object.assign({},E.data)});for(var k=0,g=0;g<a.orderedModifiers.length;g++){if(k+=1,k>100){console.error(At);break}if(a.reset===!0){a.reset=!1,g=-1;continue}var m=a.orderedModifiers[g],A=m.fn,I=m.options,X=I===void 0?{}:I,Y=m.name;typeof A=="function"&&(a=A({state:a,options:X,name:Y,instance:w})||a)}}},update:Ot(function(){return new Promise(function(O){w.forceUpdate(),O(a)})}),destroy:function(){x(),v=!0}};if(!we(c,s))return console.error(me),w;w.setOptions(f).then(function(O){!v&&f.onFirstUpdate&&f.onFirstUpdate(O)});function N(){a.orderedModifiers.forEach(function(O){var S=O.name,p=O.options,y=p===void 0?{}:p,k=O.effect;if(typeof k=="function"){var g=k({state:a,name:S,instance:w,options:y}),m=function(){};h.push(g||m)}})}function x(){h.forEach(function(O){return O()}),h=[]}return w}}var J={passive:!0};function Tt(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,l=n.resize,c=l===void 0?!0:l,s=C(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach(function(a){a.addEventListener("scroll",o.update,J)}),c&&s.addEventListener("resize",o.update,J),function(){i&&f.forEach(function(a){a.removeEventListener("scroll",o.update,J)}),c&&s.removeEventListener("resize",o.update,J)}}var Dt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Tt,data:{}};function It(t){var e=t.state,o=t.name;e.modifiersData[o]=Ct({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Lt={name:"popperOffsets",enabled:!0,phase:"read",fn:It,data:{}},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:H(e*r)/r||0,y:H(o*r)/r||0}}function be(t){var e,o=t.popper,n=t.popperRect,r=t.placement,i=t.variation,l=t.offsets,c=t.position,s=t.gpuAcceleration,f=t.adaptive,a=t.roundOffsets,h=t.isFixed,v=l.x,w=v===void 0?0:v,N=l.y,x=N===void 0?0:N,O=typeof a=="function"?a({x:w,y:x}):{x:w,y:x};w=O.x,x=O.y;var S=l.hasOwnProperty("x"),p=l.hasOwnProperty("y"),y=_,k=F,g=window;if(f){var m=ke(o),A="clientHeight",I="clientWidth";if(m===C(o)&&(m=te(o),T(m).position!=="static"&&c==="absolute"&&(A="scrollHeight",I="scrollWidth")),m=m,r===F||(r===_||r===z)&&i===ee){k=Z;var X=h&&m===g&&g.visualViewport?g.visualViewport.height:m[A];x-=X-n.height,x*=s?1:-1}if(r===_||(r===F||r===Z)&&i===ee){y=z;var Y=h&&m===g&&g.visualViewport?g.visualViewport.width:m[I];w-=Y-n.width,w*=s?1:-1}}var E=Object.assign({position:c},f&&jt),B=a===!0?Mt({x:w,y:x}):{x:w,y:x};if(w=B.x,x=B.y,s){var $;return Object.assign({},E,($={},$[k]=p?"0":"",$[y]=S?"0":"",$.transform=(g.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",$))}return Object.assign({},E,(e={},e[k]=p?x+"px":"",e[y]=S?w+"px":"",e.transform="",e))}function Vt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,l=i===void 0?!0:i,c=o.roundOffsets,s=c===void 0?!0:c;{var f=T(e.elements.popper).transitionProperty||"";l&&["transform","top","right","bottom","left"].some(function(h){return f.indexOf(h)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var a={placement:oe(e.placement),variation:Ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,be(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,be(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var _t={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Vt,data:{}};function Nt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},i=e.elements[o];!P(i)||!R(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(l){var c=r[l];c===!1?i.removeAttribute(l):i.setAttribute(l,c===!0?"":c)}))})}function Bt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},l=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),c=l.reduce(function(s,f){return s[f]="",s},{});!P(r)||!R(r)||(Object.assign(r.style,c),Object.keys(i).forEach(function(s){r.removeAttribute(s)}))})}}var qt={name:"applyStyles",enabled:!0,phase:"write",fn:Nt,effect:Bt,requires:["computeStyles"]},Wt=[Dt,Lt,_t,qt],Ut=Rt({defaultModifiers:Wt});function Ft(t,e,o){var n=oe(t),r=[_,F].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,l=i[0],c=i[1];return l=l||0,c=(c||0)*r,[_,z].indexOf(n)>=0?{x:c,y:l}:{x:l,y:c}}function Ht(t){var e=t.state,o=t.options,n=t.name,r=o.offset,i=r===void 0?[0,0]:r,l=lt.reduce(function(a,h){return a[h]=Ft(h,e.rects,i),a},{}),c=l[e.placement],s=c.x,f=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=l}var Xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ht};const Yt=(t,e)=>{const o=V(t());return re(t,n=>{n!==o.value&&(o.value=n)}),re(o,n=>{n!==t()&&e(n)}),o},[$t,j]=Te("popover"),zt=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],Gt={show:Boolean,theme:ne("light"),overlay:Boolean,actions:Fe(),trigger:ne("click"),duration:He,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:Xe,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},Jt=ye({name:$t,props:Gt,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const i=V(),l=V(),c=V(),s=Yt(()=>t.show,p=>e("update:show",p)),f=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},De({},Xt,{options:{offset:t.offset}})]}),a=()=>l.value&&c.value?Ut(l.value,c.value.popupRef.value,f()):null,h=()=>{_e(()=>{s.value&&(r?r.setOptions(f()):r=a())})},v=p=>{s.value=p},w=()=>{t.trigger==="click"&&(s.value=!s.value)},N=(p,y)=>{p.disabled||(e("select",p,y),t.closeOnClickAction&&(s.value=!1))},x=()=>{s.value&&t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&(s.value=!1)},O=(p,y)=>o.action?o.action({action:p,index:y}):[p.icon&&d(qe,{name:p.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),d("div",{class:[j("action-text"),$e]},[p.text])],S=(p,y)=>{const{icon:k,color:g,disabled:m,className:A}=p;return d("div",{role:"menuitem",class:[j("action",{disabled:m,"with-icon":k}),A],style:{color:g},tabindex:m?void 0:0,"aria-disabled":m||void 0,onClick:()=>N(p,y)},[O(p,y)])};return Le(()=>{h(),je(()=>{var p;i.value=(p=c.value)==null?void 0:p.popupRef.value})}),Me(()=>{r&&(r.destroy(),r=null)}),re(()=>[s.value,t.offset,t.placement],h),Ae([l,i],x,{eventName:"touchstart"}),()=>{var p;return d(ae,null,[d("span",{ref:l,class:j("wrapper"),onClick:w},[(p=o.reference)==null?void 0:p.call(o)]),d(We,Ve({ref:c,show:s.value,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":v},n,Re(t,zt)),{default:()=>[t.showArrow&&d("div",{class:j("arrow")},null),d("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(S)])]})])}}}),Kt=Ye(Jt),M=Kt,Qt={class:"demo-popover-box"},Zt=ge("div",{class:"demo-popover-refer"},null,-1),Ro=ye({__name:"index",setup(t){const e=Ie({"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",uncontrolled:"非受控模式",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",uncontrolled:"Uncontrolled",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"].map(f=>({text:f,value:f})),n=V({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=V(!1),i=V("top"),l=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},c=f=>{setTimeout(()=>{n.value.placement=!0,i.value=f.selectedValues[0]})},s=f=>Qe(f.text);return(f,a)=>{const h=Ne("demo-block");return ue(),pe(ae,null,[d(h,{title:u(e)("basicUsage")},{default:b(()=>[d(u(M),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:u(e)("actions"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(u(M),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:u(e)("actions"),onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(h,{title:u(e)("placement")},{default:b(()=>[d(u(ze),{"is-link":"",readonly:"",name:"picker",label:u(e)("choosePlacement"),onClick:l},null,8,["label"]),d(u(Ue),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:b(()=>[ge("div",Qt,[d(u(M),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:u(e)("shortActions"),placement:i.value,onSelect:s},{reference:b(()=>[Zt]),_:1},8,["show","actions","placement"])]),d(u(Ge),{columns:u(o),"show-toolbar":!1,onChange:c},null,8,["columns"])]),_:1},8,["show"])]),_:1},8,["title"]),d(h,{title:u(e)("actionOptions")},{default:b(()=>[d(u(M),{show:n.value.showIcon,"onUpdate:show":a[4]||(a[4]=v=>n.value.showIcon=v),actions:u(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(u(M),{show:n.value.disableAction,"onUpdate:show":a[5]||(a[5]=v=>n.value.disableAction=v),actions:u(e)("actionsDisabled"),onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(h,{title:u(e)("customContent")},{default:b(()=>[d(u(M),{show:n.value.customContent,"onUpdate:show":a[7]||(a[7]=v=>n.value.customContent=v),placement:"top-start",onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("customContent")),1)]),_:1})]),default:b(()=>[d(u(Je),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:b(()=>[(ue(),pe(ae,null,Be(6,v=>d(u(Ke),{key:v,icon:"photo-o",text:u(e)("option"),onClick:a[6]||(a[6]=w=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),d(h,{title:u(e)("uncontrolled")},{default:b(()=>[d(u(M),{actions:u(e)("actions"),placement:"top-start",onSelect:s},{reference:b(()=>[d(u(U),{type:"primary"},{default:b(()=>[q(W(u(e)("uncontrolled")),1)]),_:1})]),_:1},8,["actions"])]),_:1},8,["title"])],64)}}});export{Ro as default};
