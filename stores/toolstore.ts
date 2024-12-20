import { defineStore } from "pinia";


export const useTools=defineStore("tools-store",() => {

   const slug = ref('');
   
   function setslug(routep: any) {
        slug.value=routep
    }

    function clearslug() {
    slug.value =''
    }



    // Función para obtener el valor de localStorage o establecer el valor por defecto
    const cargarSelectVariantLocalStorage = (): number => {
      const storedValue = localStorage.getItem('elektra-variant');
      return storedValue !== null ? parseInt(storedValue, 10) : 1;
    };
  
    // Estado inicial
    const selectvariant = ref(cargarSelectVariantLocalStorage());
  
    // Función para actualizar el estado y sincronizar con localStorage
    const setselectvariant = (newValue: number) => {
      selectvariant.value = newValue;
      localStorage.setItem('elektra-variant', newValue.toString());
    };

   return{
    slug,
    setslug,
    clearslug,

    selectvariant,setselectvariant,
   }
  
})