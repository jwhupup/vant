import{S as d}from"./use-translate.a029ce72.js";const g=d&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,m={event:"event",observer:"observer"};function w(t,e){if(!t.length)return;const r=t.indexOf(e);if(r>-1)return t.splice(r,1)}function b(t,e){if(t.tagName!=="IMG"||!t.getAttribute("data-srcset"))return;let r=t.getAttribute("data-srcset");const c=t.parentNode.offsetWidth*e;let o,a,h;r=r.trim().split(",");const u=r.map(n=>(n=n.trim(),o=n.lastIndexOf(" "),o===-1?(a=n,h=999998):(a=n.substr(0,o),h=parseInt(n.substr(o+1,n.length-o-2),10)),[h,a]));u.sort((n,i)=>{if(n[0]<i[0])return 1;if(n[0]>i[0])return-1;if(n[0]===i[0]){if(i[1].indexOf(".webp",i[1].length-5)!==-1)return 1;if(n[1].indexOf(".webp",n[1].length-5)!==-1)return-1}return 0});let f="",l;for(let n=0;n<u.length;n++){l=u[n],f=l[1];const i=u[n+1];if(i&&i[0]<c){f=l[1];break}else if(!i){f=l[1];break}}return f}const v=(t=1)=>d&&window.devicePixelRatio||t;function x(){if(!d)return!1;let t=!0;try{const e=document.createElement("canvas");e.getContext&&e.getContext("2d")&&(t=e.toDataURL("image/webp").indexOf("data:image/webp")===0)}catch{t=!1}return t}function I(t,e){let r=null,s=0;return function(...c){if(r)return;const o=Date.now()-s,a=()=>{s=Date.now(),r=!1,t.apply(this,c)};o>=e?a():r=setTimeout(a,e)}}function O(t,e,r){t.addEventListener(e,r,{capture:!1,passive:!0})}function E(t,e,r){t.removeEventListener(e,r,!1)}const S=(t,e,r)=>{const s=new Image;if(!t||!t.src)return r(new Error("image src is required"));s.src=t.src,t.cors&&(s.crossOrigin=t.cors),s.onload=()=>e({naturalHeight:s.naturalHeight,naturalWidth:s.naturalWidth,src:s.src}),s.onerror=c=>r(c)};class W{constructor({max:e}){this.options={max:e||100},this.caches=[]}has(e){return this.caches.indexOf(e)>-1}add(e){this.has(e)||(this.caches.push(e),this.caches.length>this.options.max&&this.free())}free(){this.caches.shift()}}export{W as I,b as a,E as b,v as g,g as h,S as l,m,O as o,w as r,x as s,I as t};
