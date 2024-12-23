import { defineStore } from "pinia";

interface IAllsearch{

}
interface IMooreSearch{
   
}
export const useSearchStore=defineStore("search-store",() => {

   const word = ref('');
   
   function setword(param: any) {
        word.value=param
    }

    function clearword() {
    word.value =''
    }


    //store para guardar toda la data de busquedas
    const allsearch = ref({} as IAllsearch);
    function fillAllSearch(itm:IAllsearch){
      allsearch.value = itm    
    }
    function cleanAllSearch(){
      allsearch.value= {} as IAllsearch
    }

    //store para guardar solo los ms buscados
    const mooresearch = ref({} as IMooreSearch);
    function fillMooreSearch(itm:IMooreSearch){
      mooresearch.value = itm    
    }
    function cleanMooreSearch(){
      mooresearch.value= {} as IMooreSearch
    }

   return{
    word,
    setword,
    clearword,

    allsearch,
    fillAllSearch,
    cleanAllSearch,

    mooresearch,
    fillMooreSearch,
    cleanMooreSearch
   }
  
})
