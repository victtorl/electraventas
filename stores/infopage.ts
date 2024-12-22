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



  const groupOfertas = ref([] as Array<{}|any|IProduct>);

  function llenarOfertas(itm:IProduct){
      groupOfertas.value = groupOfertas.value.concat(itm)
  }

  function limpiarOfertas(){
      groupOfertas.value=[]
  }


  const prodsFilter = ref<IProduct[]>(loadFiltersFromLocalStorage());

  function llenarprodsFilter(itm:IProduct){
    prodsFilter.value = prodsFilter.value.concat(itm)
    saveFiltersToLocalStorage()
  }
  function limpiarprodsFilter(){
    prodsFilter.value=[]
    saveFiltersToLocalStorage()
  }

  // Función para cargar productos filtrados desde localStorage
  function loadFiltersFromLocalStorage(): IProduct[] {
    const storedProdsF = localStorage.getItem('prods-filter-elektra');
    return storedProdsF ? JSON.parse(storedProdsF) : [];
  }
  // Función para sincronizar productos filtrados en localStorage
  function saveFiltersToLocalStorage() {
    localStorage.setItem('prods-filter-elektra', JSON.stringify(prodsFilter.value));
  }


  function filterOfertxMarca(name:any){
    limpiarprodsFilter()
    groupProducts.value.map(u=>{
      if(u.data.marca==name){
        llenarprodsFilter(u)
      }
    })
    
  }

  interface Ichunk{
    title:string,
    description:string
  }

  interface Iinfopage{
    contacto:{
      correo:string,
      direccion:string,
      facebook:string,
      fechaloferta:string
      instagram:string,
      telefono:string,
      urlyoutube:string
    },
    mision:string,
    vision:string,
    itemsvalores:[Ichunk],
    itemsconfianza:[Ichunk]
  }
/////////INFORMACION DE LA PAGINA
const infopage = ref<Iinfopage>(JSON.parse(localStorage.getItem('infopage-elektra') as string) || {} as Iinfopage);


function llenarInfopage(itm:Iinfopage){
    infopage.value = itm   
      watch(infopage, (newValue) => {
        localStorage.setItem('infopage-elektra', JSON.stringify(newValue));
      }, { deep: true });
}

function limpiarInfopage(){
    infopage.value= {} as Iinfopage
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

        groupOfertas,
        llenarOfertas,
        limpiarOfertas,

        prodsFilter,
        llenarprodsFilter,
        limpiarprodsFilter,

        filterOfertxMarca,

        infopage,
        limpiarInfopage,
        llenarInfopage

  }
  
})