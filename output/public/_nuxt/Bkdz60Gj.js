import{o as E,u as L}from"./BNe6Rz00.js";import{v as T,T as I,r as N,e as m,j as M,p as $,C as q,ai as _,aj as b,X as D,ak as j,al as z,ae as K,k as R,A as w}from"./DadJ2JtW.js";var U=Object.defineProperty,G=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t,r)=>(G(e,typeof t!="symbol"?t+"":t,r),r);let H=class{constructor(){x(this,"current",this.detect()),x(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},h=new H;function S(e){if(h.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var V=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(V||{}),W=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(W||{}),X=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(X||{});function C(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var O=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(O||{});function F(e,t=0){var r;return e===((r=S(e))==null?void 0:r.body)?!1:L(t,{0(){return e.matches(y)},1(){let s=e;for(;s!==null;){if(s.matches(y))return!0;s=s.parentElement}return!1}})}function ce(e){let t=S(e);T(()=>{t&&!F(t.activeElement,0)&&Q(e)})}var J=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(J||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Q(e){e==null||e.focus({preventScroll:!0})}let B=["textarea","input"].join(",");function Y(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,B))!=null?r:!1}function Z(e,t=r=>r){return e.slice().sort((r,s)=>{let d=t(r),n=t(s);if(d===null||n===null)return 0;let u=d.compareDocumentPosition(n);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function de(e,t){return ee(C(),t,{relativeTo:e})}function ee(e,t,{sorted:r=!0,relativeTo:s=null,skipElements:d=[]}={}){var n;let u=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?n:document,i=Array.isArray(e)?r?Z(e):e:C(e);d.length>0&&i.length>1&&(i=i.filter(p=>!d.includes(p))),s=s??u.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(s))-1;if(t&4)return Math.max(0,i.indexOf(s))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=t&32?{preventScroll:!0}:{},l=0,c=i.length,g;do{if(l>=c||l+c<=0)return 0;let p=a+l;if(t&16)p=(p+c)%c;else{if(p<0)return 3;if(p>=c)return 1}g=i[p],g==null||g.focus(o),l+=f}while(g!==u.activeElement);return t&6&&Y(g)&&g.select(),2}function te(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function re(){return/Android/gi.test(window.navigator.userAgent)}function ne(){return te()||re()}function v(e,t,r){h.isServer||I(s=>{document.addEventListener(e,t,r),s(()=>document.removeEventListener(e,t,r))})}function oe(e,t,r){h.isServer||I(s=>{window.addEventListener(e,t,r),s(()=>window.removeEventListener(e,t,r))})}function fe(e,t,r=m(()=>!0)){function s(n,u){if(!r.value||n.defaultPrevented)return;let i=u(n);if(i===null||!i.getRootNode().contains(i))return;let f=function a(o){return typeof o=="function"?a(o()):Array.isArray(o)||o instanceof Set?o:[o]}(e);for(let a of f){if(a===null)continue;let o=a instanceof HTMLElement?a:E(a);if(o!=null&&o.contains(i)||n.composed&&n.composedPath().includes(o))return}return!F(i,O.Loose)&&i.tabIndex!==-1&&n.preventDefault(),t(n,i)}let d=N(null);v("pointerdown",n=>{var u,i;r.value&&(d.value=((i=(u=n.composedPath)==null?void 0:u.call(n))==null?void 0:i[0])||n.target)},!0),v("mousedown",n=>{var u,i;r.value&&(d.value=((i=(u=n.composedPath)==null?void 0:u.call(n))==null?void 0:i[0])||n.target)},!0),v("click",n=>{ne()||d.value&&(s(n,()=>d.value),d.value=null)},!0),v("touchend",n=>s(n,()=>n.target instanceof HTMLElement?n.target:null),!0),oe("blur",n=>s(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let A=Symbol("Context");var ae=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ae||{});function pe(){return ie()!==null}function ie(){return M(A,null)}function ge(e){$(A,e)}const me=(e,t,r,s,d=!1)=>{const n=q(),u=_(),i=m(()=>{var c;const a=b(t),o=b(r),l=b(s);return D((a==null?void 0:a.strategy)||((c=u.ui)==null?void 0:c.strategy),l?{wrapper:l}:{},a||{},d?j(u.ui,e,{}):{},o||{})}),f=m(()=>z(n,["class"]));return{ui:i,attrs:f}},P={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},k={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...P,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...k,option:{...k.option},arrow:{...P}});const ve=K("cart",()=>{const e=N(JSON.parse(localStorage.getItem("cartItemsElektra")||"[]")),t=m(()=>e.value.reduce((a,o)=>a+o.price*o.quantity,0)),r=m(()=>e.value.reduce((a,o)=>a+o.quantity,0)),s=a=>{const o=e.value.find(l=>l.id===a.id);o?o.quantity+=1:e.value.push({...a,quantity:1}),f()},d=(a,o)=>{const l=e.value.find(c=>c.id===a.id);l?l.quantity=l.quantity+o:e.value.push({...a,quantity:o}),f()},n=a=>{const o=e.value.findIndex(c=>c.id===a);o!==-1&&e.value.splice(o,1);const l=w();r.value<=0&&l.back(),f()},u=(a,o)=>{const l=e.value.find(c=>c.id===a);if(l&&(l.quantity=o,l.quantity<=0)){n(a);const c=w();r.value<=0&&c.back()}f()},i=()=>{e.value=[],f()},f=()=>{localStorage.setItem("cartItemsElektra",JSON.stringify(e.value))};return R(e,f,{deep:!0}),{items:e,totalPrice:t,totalItems:r,addItem:s,removeItem:n,updateQuantity:u,addSeveralItems:d,clearCart:i}});export{V as N,Z as O,ee as P,Q as S,W as T,ce as _,ae as a,fe as b,h as c,ge as d,me as e,F as f,P as g,O as h,S as i,ie as l,pe as s,te as t,ve as u,de as v,oe as w};