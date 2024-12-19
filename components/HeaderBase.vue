<template>
    <header class="fixed   inset-x-0  top-0 z-50 font-manrope " :class="props.classHeaderBase">
        <!-- <button class="w-64 h-10 bg-red-500" @click="getSignals">hola como estas</button> -->
        <HeaderContact />
        <span class="flex w-full items-center justify-center bg-elecktranegro ">
            <nav class="flex items-center justify-between p-6 h-24  px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  "
                aria-label="Global">

                <!-- menu hamburguesa start -->
                <div class="flex lg:hidden ">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <img src="~/assets/icons/menuOpen.svg" class="w-12 h-12" alt="" srcset="">
                    </button>
                </div>
                <!-- menu ham burguesa end -->

                <!-- logo only mobile start -->
                <div class="flex lg:hidden items-center " @click="goToInicio">
                    <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                        <img class="h-8 w-28 pl-2    " src="~/assets/imgs/tec_logo_y_notitle.png" alt="" />
                    </NuxtLink>
                </div>
                <!-- logo only mobile end -->


                <!-- buscador mobile -->
                <div class="lg:hidden ">
                    <UDropdown :items="itemsbusqsugest" :disabled="true" v-model:open="open"
                        :popper="{ placement: 'bottom-start' }"
                        :ui="{ width: 'w-full px-4  ', rounded: 'rounded-md', item: { rounded: 'rounded-none', active: 'bg-white' } }">
                        <div class="w-full mx-3 relative flex items-center" @click="gestionApertura">
                            <div class="absolute  left-3 flex ">
                                <svg width="20" height="20" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z"
                                        fill="#0F172A" />
                                </svg>
                            </div>

                            <input type="text" name="Buscar" id="Buscar" placeholder="Buscar" v-model="buscarpalabra"
                                @keyup.enter="mostrarResultados"
                                class="block w-full rounded-full border-0 py-0.5 placeholder:text-sm pr-24 text-gray-700 font-normal shadow-sm ring-1 ring-inset pl-9 ring-gray-300  placeholder:text-gray-400 focus:ring-1 border-none outline-none 0 font-lato sm:text-sm sm:leading-6" />


                        </div>
                        <template #getting-started>
                            <BusquedaComp :findword="buscarpalabra" />
                        </template>
                    </UDropdown>
                </div>
                <!-- end buscador mobile -->

                <!-- icono carrito mobile start-->
                <NuxtLink to="/mycart" class="lg:hidden">
                    <div class="relative w-16">
                        <div class="w-8">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                                        stroke="#ffcc03" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        <div
                            class="absolute text-elecktranegro text-[11px] bg-elecktraamarillo border-[2px] border-elecktraamarillo rounded-full flex justify-center items-center w-6 h-6 -top-3 right-2 ">
                            {{ cartST.totalItems }}</div>
                    </div>
                </NuxtLink>
                <!-- icono carrito mobile end-->


                <!-- logo dispositivos grandes start -->
                <div class="hidden lg:flex items-center " @click="goToInicio">
                    <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                        <img class="h-16  lg:hidden xl:block xl:h-16   " src="~/assets/imgs/tec_logo2.png" alt="" />
                    </NuxtLink>
                </div>
                <!-- logo dispositivos grandes end-->


                <!-- buscador dispositivo grande start-->
                <div class="hidden lg:block">
                    <UDropdown :items="itemsbusqsugest" :disabled="true" v-model:open="open"
                        :popper="{ placement: 'bottom-start' }"
                        :ui="{ width: 'w-full md:w-[36rem]', rounded: 'rounded-none',item:{rounded:'rounded-none',active:'bg-white'} }">
                        <div class="w-full relative flex items-center" @click="gestionApertura">
                            <div class="absolute  left-3 flex ">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z"
                                        fill="#0F172A" />
                                </svg>
                            </div>

                            <input type="text" name="Buscar" id="Buscar" placeholder="Buscar" v-model="buscarpalabra"
                                @keyup.enter="mostrarResultados"
                                class="block w-full rounded-full border-0 py-2.5 pr-24 text-gray-700 font-normal shadow-sm ring-1 ring-inset pl-12 ring-gray-300  placeholder:text-gray-400 focus:ring-1 border-none outline-none 0 font-lato sm:text-sm sm:leading-6" />


                        </div>
                        <template #getting-started>
                            <BusquedaComp :findword="buscarpalabra" />
                        </template>
                    </UDropdown>
                </div>
                <!-- buscador dispositivo grande end-->





                <!-- lista de opcione en dispositivo grandes start -->
                <div class="hidden  lg:flex lg:justify-end  justify-center items-center  lg:gap-x-4 ">

                    <NuxtLink to="/"
                        class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                        Inicio
                    </NuxtLink>
                    <NuxtLink to="/nosotros"
                        class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                        Nosotros
                    </NuxtLink>
                    <NuxtLink to="/productos"
                        class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                        Productos
                    </NuxtLink>
                    <NuxtLink to="/marcas"
                        class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                        Marcas
                    </NuxtLink>
                    <NuxtLink to="/ofertas"
                        class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                        Ofertas
                    </NuxtLink>

                    <NuxtLink to="/contacto" target="_blank">
                        <button type="button"
                            class="border-[1.5px] border-white rounded-md hover:bg-white hover:text-black text-white px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                            Contacto
                        </button>
                    </NuxtLink>


                    <NuxtLink to="/mycart">
                        <div class="relative w-16">
                            <div class="w-10">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                                            stroke="#ffcc03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="absolute text-elecktranegro bg-elecktraamarillo border-[2px] border-elecktraamarillo rounded-full flex justify-center items-center w-8 h-8 -top-3 -right-0 ">
                                {{ cartST.totalItems }}</div>
                        </div>
                    </NuxtLink>





                </div>
                <!-- lista de opcione en dispositivo grandes start -->
            </nav>
        </span>

        <Dialog v-if="mobileMenuOpen" as="div" class="lg:hidden  " @close="mobileMenuOpen = false"
            :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50 bg-elecktranegro opacity-40" @click="mobileMenuOpen=false" />
            <DialogPanel v-motion-slide-visible-left :duration="200" :delay="100"
                class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-blackgio px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-elecktraamarillo">
                <div class="flex items-center  justify-between">
                    <button type="button" class="-m-2.5 rounded-md p-2.5 mt-2 text-gray-700"
                        @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>

                        <img src="~/assets/icons/menuClose.svg" class="w-7 h-7" alt="" srcset="">
                    </button>
                    <NuxtLink to="/" class="-m-1.5 p-1.5 mt-4" @click="mobileMenuOpen = false">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 " src="~/assets/imgs/tec_logo_b.png" alt="" />
                    </NuxtLink>

                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">

                        <!-- ACORDEON MOBILE START -->

                        <div class="space-y-2 py-6 flex flex-col font-manrope text-elecktranegro text-xl">


                                <div id="accordion-nested-parent"  data-accordion="collapse">

                                    <!-- inicio start -->
                                    <h2 id="accordion-collapse-heading-0">
                                        <button type="button" @click="goInico" 
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl focus:ring-[1px] bg-elecktranegro focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                            data-accordion-target="#accordion-collapse-body-0" aria-expanded="false"
                                            aria-controls="accordion-collapse-body-0">
                                            <span>Inicio</span>
                                            <!-- <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg> -->
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-0" class="hidden"
                                        aria-labelledby="accordion-collapse-heading-0">
                                        <!-- <div
                                            class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            hola
                                        </div> -->
                                    </div>
                                    <!-- inicio end -->


                                    <!-- nosotros start -->
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" @click="goNosotros"
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-[1px] bg-elecktranegro focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                            data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                                            aria-controls="accordion-collapse-body-1">
                                            <span>Nosotros</span>
                                            <!-- <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg> -->
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden"
                                        aria-labelledby="accordion-collapse-heading-1">
                                        <!-- <div
                                            class="p-5 border border-b-1 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            mundo
                                        </div> -->

                                    </div>
                                    <!-- nosotros end -->


                                    <!-- productos start -->
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button"
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-[1px] bg-elecktranegro focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                            aria-controls="accordion-collapse-body-2">
                                            <span>Productos</span>
                                            <svg data-accordion-icon class="w-4 h-4 rotate-180 shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden"
                                        aria-labelledby="accordion-collapse-heading-2">
                                        <div
                                            class="p-5 border border-b-0  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <!-- Nested accordion -->
                                            <div id="accordion-nested-collapse" data-accordion="collapse">
                                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 bg-white "
                                                    aria-labelledby="dropdownBottomButton">
                                                    <li v-for="item in options">
                                                        <a href="#"
                                                            class="block text-lg  px-4 py-2 text-elecktranegro hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ item.text }}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- End: Nested accordion -->
                                        </div>
                                    </div>
                                    <!-- productos end -->

      

                                    <!-- marcas start -->
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" @click="goMarcas"
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-[1px] bg-elecktranegro focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                            data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
                                            aria-controls="accordion-collapse-body-3">
                                            <span>Marcas</span>
                                            <!-- <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg> -->
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden"
                                        aria-labelledby="accordion-collapse-heading-3">
                                        <!-- <div
                                            class="p-5 border border-b-1 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            mundo
                                        </div> -->

                                    </div>
                                    <!-- marcas end -->



                                    <!-- ofertas start -->
                                    <h2 id="accordion-collapse-heading-4">
                                        <button type="button" @click="goOfertas"
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-b-xl  focus:ring-[1px] bg-elecktranegro focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                            data-accordion-target="#accordion-collapse-body-4" aria-expanded="false"
                                            aria-controls="accordion-collapse-body-4">
                                            <span>Ofertas</span>
                                            <!-- <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg> -->
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-4" class="hidden"
                                        aria-labelledby="accordion-collapse-heading-4">
                                        <!-- <div
                                            class="p-5 border border-b-1 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            mundo
                                        </div> -->
                                    </div>
                                    <!-- ofertas end -->


            
                                </div>


                           




<!-- 
                            <NuxtLink to="/contacto" @click="mobileMenuOpen=false">
                                <button type="button"
                                    class=" bg-elecktranegro text-white rounded-md mb-8 mt-4  px-8 lg:px-2 xl:px-4 py-2  text-lg font-bold lg:text-sm xl:text-xl   text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                                    Contactanos
                                </button>
                            </NuxtLink> -->

                        </div>

                        <!-- ACORDEON MOBILE END -->

                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
  
  <script setup >
  import { useCartStore } from '~/stores/cartstore';
  import {goTo, goToM} from '~/utils/utils'
  const mobileMenuOpen = ref(false)
  
  
  const cartST=useCartStore()
  
  
  
  
  const props = defineProps({
      classHeaderBase:String,
      absosticky:String
  })
  
  const itemsbusqsugest = [
      [{
          slot: 'getting-started'
      }]
  ]
  
  const buscarpalabra=ref('')
  watch(
    () => buscarpalabra.value,
    (newRoute) => {
      // getProductsFilterSearchutils(buscarpalabra.value,nuxtApp.$config.public.keyCPlanta,1,12)
      
    }
  )
  const open = ref(false)
  function gestionApertura(){
      open.value=true
  }
  async function mostrarResultados(){
      const searchST=useSearchStore()
      searchST.setword(buscarpalabra.value)
      getProductsFilterSearchutils(buscarpalabra.value,nuxtApp.$config.public.keyCPlanta,1,12)
       await navigateTo(`/search/?query=${searchST.word}`)
       open.value=false
  }
  
  
  const options = ref([
      { text: 'Herramientas para terminales y cables', value: 1 },
      { text: 'Mangas termocontraibles ', value: 2 },
      { text: 'Terminales de compresión', value: 3 },
      { text: 'Terminales sobremoldeados', value: 3 },
      { text: 'Cintillos y Espirales', value: 4 },
      { text: 'Enchufes y Tomas Industriales', value: 5 },
      { text: 'Térmicos', value: 6 },
      { text: 'Productos Rittal', value: 7 },
      { text: 'Phoenix Contact', value: 8 },
      { text: 'Canaletas y Riel Din ranuradas', value: 9 },
      { text: 'Cables', value: 10 },
      { text: 'Otros', value: 11 },
])
  

const router=useRouter()
const goInico=() => {
    router.push({ path: "/" })
    mobileMenuOpen.value=false
    
}

const goNosotros=() => {
    router.push({ path: "/nosotros" })
    mobileMenuOpen.value=false
}

const goProductos=() => {
    router.push({ path: "/" })
    mobileMenuOpen.value=false
}

const goMarcas=() => {
    router.push({ path: "/marcas" })
    mobileMenuOpen.value=false
}

const goOfertas=() => {
    router.push({ path: "/ofertas" })
    mobileMenuOpen.value=false
}
  
  </script>