import { defineStore } from "pinia";



interface IContent{
  courseList:any,
  postList:any,
  programList:any,
  services:any,
}

export const useInfopage=defineStore("infopage-store",() => {

  const infopage = ref({} as IContent);

   ///separar las cosas
   const courselist=ref(null)
   const postlist=ref(null)
   const programlist=ref(null)
   const services=ref(null)




  function llenarDatos(itm:IContent){
      infopage.value = itm
      //programas
      if(infopage.value){
          postlist.value=infopage.value.postList
          courselist.value=infopage.value.courseList
          programlist.value=infopage.value.programList
          services.value=infopage.value.services
      }
      
  }

  function limpiarDatos(){
      infopage.value= {} as IContent
  }



 

    
   return{
      infopage,
      limpiarDatos,
      llenarDatos,

      courselist,
      postlist,
      programlist,
      services
      
   }
  
})