<template>

    <div class=" w-full h-full   relative  ">

        <form class="max-w-md mx-auto">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <!-- <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div> -->
                <!-- <input type="search" id="default-search" 
                    class="block outline-none w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Busca tus plantas favoritas.." required /> -->
                <!-- <button type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
            </div>
        </form>

        <!-- RESULTADOS PARA -->
        <!-- <div class="overflow-hidden rounded-md bg-white shadow mt-3 ">
            <ul
                class=" focus:ring-4  focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm flex items-start px-4 py-2 font-josefS ">
                Resultados para {{ props.findword }}..</ul>
            <ul role="list" class=" ">
                <li v-for="entry in filteredData" :key="entry.id"
                    class="px-4 py-1.5 cursor-pointer hover:bg-[#568030] flex items-start font-lato font-normal"
                    @click="buscarXTermino(entry.name,entry.slug)">
                    <img src="~/assets/icons-gneric/lupaazul.svg" class="w-4 h-4" alt="" srcset="">
                    <p class="pl-2 font-normal" v-if="props.findword !== ''">
                        {{ entry.name }}
                    </p>
                </li>
            </ul>
        </div> -->

        <div class="overflow-hidden rounded-md bg-white shadow mt-3 ">
            <ul
                class=" focus:ring-4  focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm flex items-start px-4 py-2 font-josefS ">
                Sugerencias</ul>
            <ul role="list" class=" ">
                <li v-for="entry in filteredItems" :key="entry.id"
                    class="px-4 py-1.5 cursor-pointer hover:bg-elecktraamarillo flex items-start font-lato font-normal"
                    @click="mostrarResultados(entry.data.nombre)"
                    >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z" fill="#0F172A"/>
                    </svg>
                    <p class="pl-2 font-normal">
                        {{ entry.data.nombre }}
                    </p>
                </li>
            </ul>
        </div>


    </div>
</template>

<script setup >
const props = defineProps({
    findword: String
})

const prodST=useProductStore()

const emit = defineEmits(['sendinfo'])


const items=ref(prodST.groupProducts)



const filteredItems = computed(() => {
  if(props.findword==''){
    return items.value.slice(0,2)
  }else{
    return items.value.filter((item) =>
    item.data.nombre.toLowerCase().includes(props.findword.toLowerCase()))
  }
});





</script>