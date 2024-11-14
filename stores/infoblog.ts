import { defineStore } from "pinia";



interface IBlog{
  docs:any,
  totalDocs:any,
  limit:any,
  totalPages:any,
  page:any,
  pagingCounter:any,
  hasPrevPage:any,
  hasNextPage:any,
  prevPage:any,
  nextPage:any,
}

export const useInfoblog=defineStore("infoblog-store",() => {

  const infoblog = ref({} as IBlog);


  function llenarDatos(itm:IBlog){
      infoblog.value = itm    
  }

  function limpiarDatos(){
      infoblog.value= {} as IBlog
  }



 

    
   return{
      infoblog,
      limpiarDatos,
      llenarDatos,  
   }
  
})