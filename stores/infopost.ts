import { defineStore } from "pinia";



interface IPost {
  title: any;
  layout: [
    {
      blockName: string;
      blockType: string;
      columns: any;
      mediaUrl:string
    }
  ];
  //   totalDocs:any,
  //   limit:any,
  //   totalPages:any,
  //   page:any,
  //   pagingCounter:any,
  //   hasPrevPage:any,
  //   hasNextPage:any,
  //   prevPage:any,
  //   nextPage:any,
}

export const useInfopost=defineStore("infopost-store",() => {

  const infopost = ref({} as IPost);


  function llenarDatos(itm:IPost){
      infopost.value = itm    
  }

  function limpiarDatos(){
      infopost.value= {} as IPost
  }

    
   return{
      infopost,
      limpiarDatos,
      llenarDatos,  
   }
  
})