import{T as B,r as p,f as k,e as c,g as C,h as R,l as T,F as ft,k as J,U as vt,p as N,j as P,V as pt,B as mt,W as gt,v as ht,n as M,X as Xe,Y as he,_ as Ze,Z as ke,$ as yt,a0 as bt,o as Z,D as Ae,w as X,c as $e,K as ve,z as pe,G as me,E as wt,y as de,b as Se,a as Le,a1 as Et}from"./DadJ2JtW.js";import{c as Je,w as Tt,i as ae,S as z,P as ge,N as W,T as $t,t as St,l as xe,a as F,b as Lt,s as Ft,d as Ct,e as _e}from"./Bkdz60Gj.js";import{f as Pe,u as Oe,k as kt}from"./CUI8rZyQ.js";import{A as j,o as E,u as G,i as je,N as De,a as At,S as q,T as Pt,s as Ot}from"./BNe6Rz00.js";function Ve(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ne(){let e=[],t={addEventListener(a,n,l,r){return a.addEventListener(n,l,r),t.add(()=>a.removeEventListener(n,l,r))},requestAnimationFrame(...a){let n=requestAnimationFrame(...a);t.add(()=>cancelAnimationFrame(n))},nextFrame(...a){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...a)})},setTimeout(...a){let n=setTimeout(...a);t.add(()=>clearTimeout(n))},microTask(...a){let n={current:!0};return Ve(()=>{n.current&&a[0]()}),t.add(()=>{n.current=!1})},style(a,n,l){let r=a.style.getPropertyValue(n);return Object.assign(a.style,{[n]:l}),this.add(()=>{Object.assign(a.style,{[n]:r})})},group(a){let n=ne();return a(n),this.add(()=>n.dispose())},add(a){return e.push(a),()=>{let n=e.indexOf(a);if(n>=0)for(let l of e.splice(n,1))l()}},dispose(){for(let a of e.splice(0))a()}};return t}function Dt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let I=[];Dt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&I[0]!==t.target&&(I.unshift(t.target),I=I.filter(a=>a!=null&&a.isConnected),I.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function et(e,t,a,n){Je.isServer||B(l=>{e=e??window,e.addEventListener(t,a,n),l(()=>e.removeEventListener(t,a,n))})}var te=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(te||{});function Bt(){let e=p(0);return Tt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function tt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let n=E(a);n instanceof HTMLElement&&t.add(n)}return t}var at=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(at||{});let _=Object.assign(k({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:p(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:n}){let l=p(null);n({el:l,$el:l});let r=c(()=>ae(l)),i=p(!1);C(()=>i.value=!0),R(()=>i.value=!1),Ht({ownerDocument:r},c(()=>i.value&&!!(e.features&16)));let o=Mt({ownerDocument:r,container:l,initialFocus:c(()=>e.initialFocus)},c(()=>i.value&&!!(e.features&2)));Nt({ownerDocument:r,container:l,containers:e.containers,previousActiveElement:o},c(()=>i.value&&!!(e.features&8)));let s=Bt();function u(g){let m=E(l);m&&(w=>w())(()=>{G(s.value,{[te.Forwards]:()=>{ge(m,W.First,{skipElements:[g.relatedTarget]})},[te.Backwards]:()=>{ge(m,W.Last,{skipElements:[g.relatedTarget]})}})})}let d=p(!1);function b(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function f(g){if(!i.value)return;let m=tt(e.containers);E(l)instanceof HTMLElement&&m.add(E(l));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(nt(m,w)||(d.value?ge(E(l),G(s.value,{[te.Forwards]:()=>W.Next,[te.Backwards]:()=>W.Previous})|W.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&z(g.target)))}return()=>{let g={},m={ref:l,onKeydown:b,onFocusout:f},{features:w,initialFocus:y,containers:H,...$}=e;return T(ft,[!!(w&4)&&T(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Oe.Focusable}),j({ourProps:m,theirProps:{...t,...$},slot:g,attrs:t,slots:a,name:"FocusTrap"}),!!(w&4)&&T(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Oe.Focusable})])}}}),{features:at});function Rt(e){let t=p(I.slice());return J([e],([a],[n])=>{n===!0&&a===!1?Ve(()=>{t.value.splice(0)}):n===!1&&a===!0&&(t.value=I.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(n=>n!=null&&n.isConnected))!=null?a:null}}function Ht({ownerDocument:e},t){let a=Rt(t);C(()=>{B(()=>{var n,l;t.value||((n=e.value)==null?void 0:n.activeElement)===((l=e.value)==null?void 0:l.body)&&z(a())},{flush:"post"})}),R(()=>{t.value&&z(a())})}function Mt({ownerDocument:e,container:t,initialFocus:a},n){let l=p(null),r=p(!1);return C(()=>r.value=!0),R(()=>r.value=!1),C(()=>{J([t,a,n],(i,o)=>{if(i.every((u,d)=>(o==null?void 0:o[d])===u)||!n.value)return;let s=E(t);s&&Ve(()=>{var u,d;if(!r.value)return;let b=E(a),f=(u=e.value)==null?void 0:u.activeElement;if(b){if(b===f){l.value=f;return}}else if(s.contains(f)){l.value=f;return}b?z(b):ge(s,W.First|W.NoScroll)===$t.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function Nt({ownerDocument:e,container:t,containers:a,previousActiveElement:n},l){var r;et((r=e.value)==null?void 0:r.defaultView,"focus",i=>{if(!l.value)return;let o=tt(a);E(t)instanceof HTMLElement&&o.add(E(t));let s=n.value;if(!s)return;let u=i.target;u&&u instanceof HTMLElement?nt(o,u)?(n.value=u,z(u)):(i.preventDefault(),i.stopPropagation(),z(s)):z(n.value)},!0)}function nt(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function jt(e){let t=vt(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Vt(e,t){let a=e(),n=new Set;return{getSnapshot(){return a},subscribe(l){return n.add(l),()=>n.delete(l)},dispatch(l,...r){let i=t[l].call(a,...r);i&&(a=i,n.forEach(o=>o()))}}}function Ut(){let e;return{before({doc:t}){var a;let n=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-n.clientWidth},after({doc:t,d:a}){let n=t.documentElement,l=n.clientWidth-n.offsetWidth,r=e-l;a.style(n,"paddingRight",`${r}px`)}}}function Wt(){return St()?{before({doc:e,d:t,meta:a}){function n(l){return a.containers.flatMap(r=>r()).some(r=>r.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=ne();o.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>o.dispose()))}let r=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",o=>{if(o.target instanceof HTMLElement)try{let s=o.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),d=e.querySelector(u);d&&!n(d)&&(i=d)}catch{}},!0),t.addEventListener(e,"touchstart",o=>{if(o.target instanceof HTMLElement)if(n(o.target)){let s=o.target;for(;s.parentElement&&n(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(o.target,"touchAction","none")}),t.addEventListener(e,"touchmove",o=>{if(o.target instanceof HTMLElement){if(o.target.tagName==="INPUT")return;if(n(o.target)){let s=o.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),t.add(()=>{var o;let s=(o=window.scrollY)!=null?o:window.pageYOffset;r!==s&&window.scrollTo(0,r),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function It(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function qt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let Y=Vt(()=>new Map,{PUSH(e,t){var a;let n=(a=this.get(e))!=null?a:{doc:e,count:0,d:ne(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let n={doc:e,d:t,meta:qt(a)},l=[Wt(),Ut(),It()];l.forEach(({before:r})=>r==null?void 0:r(n)),l.forEach(({after:r})=>r==null?void 0:r(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Y.subscribe(()=>{let e=Y.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let n=t.get(a.doc)==="hidden",l=a.count!==0;(l&&!n||!l&&n)&&Y.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&Y.dispatch("TEARDOWN",a)}});function Yt(e,t,a){let n=jt(Y),l=c(()=>{let r=e.value?n.value.get(e.value):void 0;return r?r.count>0:!1});return J([e,t],([r,i],[o],s)=>{if(!r||!i)return;Y.dispatch("PUSH",r,a);let u=!1;s(()=>{u||(Y.dispatch("POP",o??r,a),u=!0)})},{immediate:!0}),l}let Fe=new Map,ee=new Map;function ze(e,t=p(!0)){B(a=>{var n;if(!t.value)return;let l=E(e);if(!l)return;a(function(){var i;if(!l)return;let o=(i=ee.get(l))!=null?i:1;if(o===1?ee.delete(l):ee.set(l,o-1),o!==1)return;let s=Fe.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,Fe.delete(l))});let r=(n=ee.get(l))!=null?n:0;ee.set(l,r+1),r===0&&(Fe.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:a}={}){let n=p(null),l=ae(n);function r(){var i,o,s;let u=[];for(let d of e)d!==null&&(d instanceof HTMLElement?u.push(d):"value"in d&&d.value instanceof HTMLElement&&u.push(d.value));if(t!=null&&t.value)for(let d of t.value)u.push(d);for(let d of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(n))||d.contains((s=(o=E(n))==null?void 0:o.getRootNode())==null?void 0:s.host)||u.some(b=>d.contains(b))||u.push(d));return u}return{resolveContainers:r,contains(i){return r().some(o=>o.contains(i))},mainTreeNodeRef:n,MainTreeNode(){return a!=null?null:T(Pe,{features:Oe.Hidden,ref:n})}}}let lt=Symbol("ForcePortalRootContext");function Gt(){return P(lt,!1)}let Ge=k({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:a}){return N(lt,e.force),()=>{let{force:n,...l}=e;return j({theirProps:l,ourProps:{},slot:{},slots:t,attrs:a,name:"ForcePortalRoot"})}}}),rt=Symbol("StackContext");var Be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Be||{});function Kt(){return P(rt,()=>{})}function Qt({type:e,enabled:t,element:a,onUpdate:n}){let l=Kt();function r(...i){n==null||n(...i),l(...i)}C(()=>{J(t,(i,o)=>{i?r(0,e,a):o===!0&&r(1,e,a)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&r(1,e,a)}),N(rt,r)}function Xt(e){let t=ae(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let a=t.getElementById("headlessui-portal-root");if(a)return a;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}const Re=new WeakMap;function Zt(e){var t;return(t=Re.get(e))!=null?t:0}function Ke(e,t){let a=t(Zt(e));return a<=0?Re.delete(e):Re.set(e,a),a}let Jt=k({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let n=p(null),l=c(()=>ae(n)),r=Gt(),i=P(ot,null),o=p(r===!0||i==null?Xt(n.value):i.resolveTarget());o.value&&Ke(o.value,f=>f+1);let s=p(!1);C(()=>{s.value=!0}),B(()=>{r||i!=null&&(o.value=i.resolveTarget())});let u=P(He,null),d=!1,b=gt();return J(n,()=>{if(d||!u)return;let f=E(n);f&&(R(u.register(f),b),d=!0)}),R(()=>{var f,g;let m=(f=l.value)==null?void 0:f.getElementById("headlessui-portal-root");!m||o.value!==m||Ke(o.value,w=>w-1)||o.value.children.length>0||(g=o.value.parentElement)==null||g.removeChild(o.value)}),()=>{if(!s.value||o.value===null)return null;let f={ref:n,"data-headlessui-portal":""};return T(pt,{to:o.value},j({ourProps:f,theirProps:e,slot:{},attrs:a,slots:t,name:"Portal"}))}}}),He=Symbol("PortalParentContext");function xt(){let e=P(He,null),t=p([]);function a(r){return t.value.push(r),e&&e.register(r),()=>n(r)}function n(r){let i=t.value.indexOf(r);i!==-1&&t.value.splice(i,1),e&&e.unregister(r)}let l={register:a,unregister:n,portals:t};return[t,k({name:"PortalWrapper",setup(r,{slots:i}){return N(He,l),()=>{var o;return(o=i.default)==null?void 0:o.call(i)}}})]}let ot=Symbol("PortalGroupContext"),_t=k({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:a}){let n=mt({resolveTarget(){return e.target}});return N(ot,n),()=>{let{target:l,...r}=e;return j({theirProps:r,ourProps:{},slot:{},attrs:t,slots:a,name:"PortalGroup"})}}});var ea=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ea||{});let Me=Symbol("DialogContext");function it(e){let t=P(Me,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,it),a}return t}let ce="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ta=k({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ce},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){var r,i;let o=(r=e.id)!=null?r:`headlessui-dialog-${je()}`,s=p(!1);C(()=>{s.value=!0});let u=!1,d=c(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(u||(u=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=p(0),f=xe(),g=c(()=>e.open===ce&&f!==null?(f.value&F.Open)===F.Open:e.open),m=p(null),w=c(()=>ae(m));if(l({el:m,$el:m}),!(e.open!==ce||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===ce?void 0:e.open}`);let y=c(()=>s.value&&g.value?0:1),H=c(()=>y.value===0),$=c(()=>b.value>1),V=P(Me,null)!==null,[le,re]=xt(),{resolveContainers:K,mainTreeNodeRef:oe,MainTreeNode:ie}=zt({portals:le,defaultContainers:[c(()=>{var v;return(v=Q.panelRef.value)!=null?v:m.value})]}),be=c(()=>$.value?"parent":"leaf"),se=c(()=>f!==null?(f.value&F.Closing)===F.Closing:!1),we=c(()=>V||se.value?!1:H.value),Ee=c(()=>{var v,h,S;return(S=Array.from((h=(v=w.value)==null?void 0:v.querySelectorAll("body > *"))!=null?h:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(E(oe))&&L instanceof HTMLElement))!=null?S:null});ze(Ee,we);let A=c(()=>$.value?!0:H.value),x=c(()=>{var v,h,S;return(S=Array.from((h=(v=w.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(L=>L.contains(E(oe))&&L instanceof HTMLElement))!=null?S:null});ze(x,A),Qt({type:"Dialog",enabled:c(()=>y.value===0),element:m,onUpdate:(v,h)=>{if(h==="Dialog")return G(v,{[Be.Add]:()=>b.value+=1,[Be.Remove]:()=>b.value-=1})}});let O=kt({name:"DialogDescription",slot:c(()=>({open:g.value}))}),D=p(null),Q={titleId:D,panelRef:p(null),dialogState:y,setTitleId(v){D.value!==v&&(D.value=v)},close(){t("close",!1)}};N(Me,Q);let Ie=c(()=>!(!H.value||$.value));Lt(K,(v,h)=>{v.preventDefault(),Q.close(),ht(()=>h==null?void 0:h.focus())},Ie);let qe=c(()=>!($.value||y.value!==0));et((i=w.value)==null?void 0:i.defaultView,"keydown",v=>{qe.value&&(v.defaultPrevented||v.key===At.Escape&&(v.preventDefault(),v.stopPropagation(),Q.close()))});let Ye=c(()=>!(se.value||y.value!==0||V));return Yt(w,Ye,v=>{var h;return{containers:[...(h=v.containers)!=null?h:[],K]}}),B(v=>{if(y.value!==0)return;let h=E(m);if(!h)return;let S=new ResizeObserver(L=>{for(let Te of L){let ue=Te.target.getBoundingClientRect();ue.x===0&&ue.y===0&&ue.width===0&&ue.height===0&&Q.close()}});S.observe(h),v(()=>S.disconnect())}),()=>{let{open:v,initialFocus:h,...S}=e,L={...a,ref:m,id:o,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":D.value,"aria-describedby":O.value},Te={open:y.value===0};return T(Ge,{force:!0},()=>[T(Jt,()=>T(_t,{target:m.value},()=>T(Ge,{force:!1},()=>T(_,{initialFocus:h,containers:K,features:H.value?G(be.value,{parent:_.features.RestoreFocus,leaf:_.features.All&~_.features.FocusLock}):_.features.None},()=>T(re,{},()=>j({ourProps:L,theirProps:{...S,...a},slot:Te,attrs:a,slots:n,visible:y.value===0,features:De.RenderStrategy|De.Static,name:"Dialog"})))))),T(ie)])}}}),aa=k({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:n}){var l;let r=(l=e.id)!=null?l:`headlessui-dialog-panel-${je()}`,i=it("DialogPanel");n({el:i.panelRef,$el:i.panelRef});function o(s){s.stopPropagation()}return()=>{let{...s}=e,u={id:r,ref:i.panelRef,onClick:o};return j({ourProps:u,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}});function na(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function Ce(e,...t){e&&t.length>0&&e.classList.add(...t)}function fe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ne=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ne||{});function la(e,t){let a=ne();if(!e)return a.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[r,i]=[n,l].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return r!==0?a.setTimeout(()=>t("finished"),r+i):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Qe(e,t,a,n,l,r){let i=ne(),o=r!==void 0?na(r):()=>{};return fe(e,...l),Ce(e,...t,...a),i.nextFrame(()=>{fe(e,...a),Ce(e,...n),i.add(la(e,s=>(fe(e,...n,...t),Ce(e,...l),o(s))))}),i.add(()=>fe(e,...t,...a,...n,...l)),i.add(()=>o("cancelled")),i.dispose}function U(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Ue=Symbol("TransitionContext");var ra=(e=>(e.Visible="visible",e.Hidden="hidden",e))(ra||{});function oa(){return P(Ue,null)!==null}function ia(){let e=P(Ue,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function sa(){let e=P(We,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let We=Symbol("NestingContext");function ye(e){return"children"in e?ye(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function st(e){let t=p([]),a=p(!1);C(()=>a.value=!0),R(()=>a.value=!1);function n(r,i=q.Hidden){let o=t.value.findIndex(({id:s})=>s===r);o!==-1&&(G(i,{[q.Unmount](){t.value.splice(o,1)},[q.Hidden](){t.value[o].state="hidden"}}),!ye(t)&&a.value&&(e==null||e()))}function l(r){let i=t.value.find(({id:o})=>o===r);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:r,state:"visible"}),()=>n(r,q.Unmount)}return{children:t,register:l,unregister:n}}let ut=De.RenderStrategy,dt=k({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){let r=p(0);function i(){r.value|=F.Opening,t("beforeEnter")}function o(){r.value&=~F.Opening,t("afterEnter")}function s(){r.value|=F.Closing,t("beforeLeave")}function u(){r.value&=~F.Closing,t("afterLeave")}if(!oa()&&Ft())return()=>T(ct,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},n);let d=p(null),b=c(()=>e.unmount?q.Unmount:q.Hidden);l({el:d,$el:d});let{show:f,appear:g}=ia(),{register:m,unregister:w}=sa(),y=p(f.value?"visible":"hidden"),H={value:!0},$=je(),V={value:!1},le=st(()=>{!V.value&&y.value!=="hidden"&&(y.value="hidden",w($),u())});C(()=>{let A=m($);R(A)}),B(()=>{if(b.value===q.Hidden&&$){if(f.value&&y.value!=="visible"){y.value="visible";return}G(y.value,{hidden:()=>w($),visible:()=>m($)})}});let re=U(e.enter),K=U(e.enterFrom),oe=U(e.enterTo),ie=U(e.entered),be=U(e.leave),se=U(e.leaveFrom),we=U(e.leaveTo);C(()=>{B(()=>{if(y.value==="visible"){let A=E(d);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Ee(A){let x=H.value&&!g.value,O=E(d);!O||!(O instanceof HTMLElement)||x||(V.value=!0,f.value&&i(),f.value||s(),A(f.value?Qe(O,re,K,oe,ie,D=>{V.value=!1,D===Ne.Finished&&o()}):Qe(O,be,se,we,ie,D=>{V.value=!1,D===Ne.Finished&&(ye(le)||(y.value="hidden",w($),u()))})))}return C(()=>{J([f],(A,x,O)=>{Ee(O),H.value=!1},{immediate:!0})}),N(We,le),Ct(c(()=>G(y.value,{visible:F.Open,hidden:F.Closed})|r.value)),()=>{let{appear:A,show:x,enter:O,enterFrom:D,enterTo:Q,entered:Ie,leave:qe,leaveFrom:Ye,leaveTo:v,...h}=e,S={ref:d},L={...h,...g.value&&f.value&&Je.isServer?{class:M([a.class,h.class,...re,...K])}:{}};return j({theirProps:L,ourProps:S,slot:{},slots:n,attrs:a,features:ut,visible:y.value==="visible",name:"TransitionChild"})}}}),ua=dt,ct=k({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n}){let l=xe(),r=c(()=>e.show===null&&l!==null?(l.value&F.Open)===F.Open:e.show);B(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=p(r.value?"visible":"hidden"),o=st(()=>{i.value="hidden"}),s=p(!0),u={show:r,appear:c(()=>e.appear||!s.value)};return C(()=>{B(()=>{s.value=!1,r.value?i.value="visible":ye(o)||(i.value="hidden")})}),N(We,o),N(Ue,u),()=>{let d=Pt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return j({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[T(ua,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...b,...d},n.default)]},attrs:{},features:ut,visible:i.value==="visible",name:"Transition"})}}});const da={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},ca={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},fa=Xe(he.ui.strategy,he.ui.card,da),va=k({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=_e("card",ke(e,"ui"),fa),n=c(()=>yt(bt(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:a,cardClass:n}}});function pa(e,t,a,n,l,r){return Z(),Ae(wt(e.$attrs.onSubmit?"form":e.as),me({class:e.cardClass},e.attrs),{default:X(()=>[e.$slots.header?(Z(),$e("div",{key:0,class:M([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[ve(e.$slots,"header")],2)):pe("",!0),e.$slots.default?(Z(),$e("div",{key:1,class:M([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[ve(e.$slots,"default")],2)):pe("",!0),e.$slots.footer?(Z(),$e("div",{key:2,class:M([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[ve(e.$slots,"footer")],2)):pe("",!0)]),_:3},16,["class"])}const Ta=Ze(va,[["render",pa]]),ma=Xe(he.ui.strategy,he.ui.modal,ca),ga=k({components:{HDialog:ta,HDialogPanel:aa,TransitionRoot:ct,TransitionChild:dt},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:n}=_e("modal",ke(e,"ui"),ma,ke(e,"class")),l=c({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),r=c(()=>e.transition?{...a.value.transition}:{});function i(s){if(e.preventClose){t("close-prevented");return}l.value=s,t("close")}const o=()=>{t("after-leave")};return Ot(()=>Et()),{ui:a,attrs:n,isOpen:l,transitionClass:r,onAfterLeave:o,close:i}}});function ha(e,t,a,n,l,r){const i=de("TransitionChild"),o=de("HDialogPanel"),s=de("HDialog"),u=de("TransitionRoot");return Z(),Ae(u,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:X(()=>[Se(s,me({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:X(()=>[e.overlay?(Z(),Ae(i,me({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:X(()=>[Le("div",{class:M([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):pe("",!0),Le("div",{class:M(e.ui.inner)},[Le("div",{class:M([e.ui.container,!e.fullscreen&&e.ui.padding])},[Se(i,me({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:X(()=>[Se(o,{class:M([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:X(()=>[ve(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const $a=Ze(ga,[["render",ha]]);export{$a as _,Ta as a};