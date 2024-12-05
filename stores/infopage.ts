import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import {useStorage} from "@vueuse/core";
import { looseIndexOf } from '@vue/shared';

interface Iimages{
   imagenes:string
}

interface IProduct{
  nombre:string,
  marca:string,
  codigo:string
  medida:string,
  imagenes:Iimages[]
}



interface IEdProduct{
id:string,
data:IProduct
}



export const useProductStore=defineStore("products-store",() => {
 

  const productstore: Ref<IProduct[]> = ref(useStorage('products-store-ls', null, undefined, {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v)
    }
  }));


  function addProduct(itm:IProduct){
    if(productstore.value!=undefined){
      productstore.value = productstore.value.concat(itm)
    }else{
      productstore.value=[itm]
    }
        
  }
  function deleteProduct(index: number) {  
    if(productstore.value){
      const newArr= productstore.value.filter((u:any)=>looseIndexOf(productstore.value,u)!=index)
      productstore.value=newArr
    }
  }


  //Store para registrar un producto nuevo
  const newProduct: Ref<IProduct|null> =ref({} as IProduct) 
  
  ///creo qeu solo se va setear
  function setnewProduct(data: IProduct) {
    newProduct.value = {...newProduct.value, ...data}
  }
  
  function clearnewProduct() {
    newProduct.value = null;
  }





  const groupProducts = ref([] as Array<{}|any|IProduct>);

  function llenarProductos(itm:IProduct){
      groupProducts.value = groupProducts.value.concat(itm)
  }

  function limpiarProductos(){
      groupProducts.value=[]
  }







  return {
        productstore,
        addProduct,
        deleteProduct,

        newProduct,
        setnewProduct,
        clearnewProduct,

        groupProducts,
        llenarProductos,
        limpiarProductos,


  }
  
})