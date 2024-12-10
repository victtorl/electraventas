import { defineStore } from "pinia";



interface IdetailProduct {
  createdAt:string,
  pictureUrl:string,
  gallery:[{
    url:string
  }],
  group:[{
    url:string,
    id:string,
    name:string,
  }]
  id:string
  price:number
  
  name:string,
  description:string,
  relatedProducts:[{
    price:number,
    name:string,
    slug:string,
    pictureUrl:string
  }],

}

export const useDetailProduct=defineStore("detailproduct-store-elektra",() => {

  // const detailproduct = ref({} as IdetailProduct);
    const detailproduct = ref<IdetailProduct>(JSON.parse(localStorage.getItem('detailProductElektra') as string) || {} as IdetailProduct);


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