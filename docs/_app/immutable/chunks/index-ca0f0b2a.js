function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function k(t){return t()}function D(){return Object.create(null)}function p(t){t.forEach(k)}function q(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(I(e,n))}function lt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,l){if(r){const c=B(e,n,i,l);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function J(){v=!0}function K(){v=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:R(1,r,g=>e[n[g]].claim_order,s))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const l=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(l.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[u],a)}}function Q(t,e){if(v){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){v&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function ht(){return C(" ")}function mt(){return C("")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){Y(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function gt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function xt(t){return tt(t," ")}function bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $t(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function vt(t,e){return new t(e)}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Nt(t){y().$$.on_mount.push(t)}function At(t){y().$$.after_update.push(t)}function St(t){y().$$.on_destroy.push(t)}function Ct(t,e){return y().$$.context.set(t,e),e}function jt(t){return y().$$.context.get(t)}const d=[],M=[],$=[],L=[],O=Promise.resolve();let A=!1;function P(){A||(A=!0,O.then(z))}function Tt(){return P(),O}function S(t){$.push(t)}const N=new Set;let b=0;function z(){const t=m;do{for(;b<d.length;){const e=d[b];b++,h(e),et(e.$$)}for(h(null),d.length=0,b=0;M.length;)M.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];N.has(n)||(N.add(n),n())}$.length=0}while(d.length);for(;L.length;)L.pop()();A=!1,N.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Mt(){_.r||p(_.c),_=_.p}function nt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function kt(t){t&&t.c()}function qt(t,e){t&&t.l(e)}function it(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(k).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(S)}function rt(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(d.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,i,r,l,c,o=[-1]){const u=m;h(t);const s=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,g,...j)=>{const T=j.length?j[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=T)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](T),a&&ct(t,f)),g}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){J();const f=X(e.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),K(),z()}h(u)}class Ht{$destroy(){rt(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Tt as A,w as B,st as C,Q as D,lt as E,wt as F,at as G,_t as H,ft as I,ot as J,pt as K,Ct as L,St as M,Et as N,jt as O,M as P,Ht as S,ht as a,dt as b,xt as c,Mt as d,mt as e,nt as f,Dt as g,U as h,Bt as i,At as j,V as k,gt as l,X as m,yt as n,Nt as o,$t as p,C as q,tt as r,ut as s,Lt as t,bt as u,vt as v,kt as w,qt as x,it as y,rt as z};