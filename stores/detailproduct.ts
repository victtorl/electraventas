import { defineStore } from "pinia";


interface Iimages{
  imagenes:string
}

interface IdetailProduct{
//  nombre:string,
//  marca:string,
//  codigo:string
//  medida:string,
//  imagenes:Iimages[]
}

export const useDetailProduct=defineStore("detailproduct",() => {

  // const detailproduct = ref({} as IdetailProduct);
    const detailproduct = ref<IdetailProduct>(JSON.parse(localStorage.getItem('detailProduct-elektra') as string) || {} as IdetailProduct);


  function llenarDatos(itm:IdetailProduct){
      detailproduct.value = itm   
        watch(detailproduct, (newValue) => {
          localStorage.setItem('detailProduct-elektra', JSON.stringify(newValue));
        }, { deep: true });
  }

  function limpiarDatos(){
      detailproduct.value= {} as IdetailProduct
  }

    
   return{
      detailproduct,
      limpiarDatos,
      llenarDatos,  
   }
  
})