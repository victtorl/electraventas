import{ac as I,r as y,e as c,l as q,B as o}from"./BYYVRIDN.js";const S=I("cart",()=>{const a=y(JSON.parse(localStorage.getItem("cartItemsElektra")||"[]")),l=c(()=>a.value.reduce((e,t)=>e+t.price*t.quantity,0)),u=c(()=>a.value.reduce((e,t)=>e+t.quantity,0)),d=e=>{const t=a.value.find(i=>i.id===e.id);t?t.quantity+=1:a.value.push({...e,quantity:1}),s()},m=(e,t)=>{const i=a.value.find(n=>n.id===e.id);i?i.quantity=i.quantity+t:a.value.push({...e,quantity:t}),s()},r=e=>{const t=a.value.findIndex(n=>n.id===e);t!==-1&&a.value.splice(t,1);const i=o();u.value<=0&&i.back(),s()},f=(e,t)=>{const i=a.value.find(n=>n.id===e);if(i&&(i.quantity=t,i.quantity<=0)){r(e);const n=o();u.value<=0&&n.back()}s()},v=()=>{a.value=[],s()},s=()=>{localStorage.setItem("cartItemsElektra",JSON.stringify(a.value))};return q(a,s,{deep:!0}),{items:a,totalPrice:l,totalItems:u,addItem:d,removeItem:r,updateQuantity:f,addSeveralItems:m,clearCart:v}});export{S as u};
