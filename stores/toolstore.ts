import { defineStore } from "pinia";


export const useTools=defineStore("tools-store",() => {

   const slug = ref('');
   
   function setslug(routep: any) {
        slug.value=routep
    }

    function clearslug() {
    slug.value =''
    }

   return{
    slug,
    setslug,
    clearslug,
   }
  
})