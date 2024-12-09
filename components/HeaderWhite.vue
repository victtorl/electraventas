<template>
    <header class=" fixed inset-x-0  top-0 z-50 bg-elecktraamarillo  font-manrope" :class="props.classHeaderWhite">
        <!-- <button class="w-64 h-10 bg-red-500" @click="getSignals">hola como estas</button> -->
        <HeaderContactWhite/>
        <span class="w-full flex justify-center items-center" >
         <nav class="flex items-center justify-between p-6 h-24   px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  " aria-label="Global">
            <!-- <div class="flex lg:flex-1" @click="goToInicio">
                <NuxtLink to="/" class="-m-1.5 p-1.5 " @click="mobileMenuOpen = false">
                    <span class="sr-only">Your Company</span>
                    <img class="h-16  ml-0 lg:ml-6 xl:ml-10 " src="~/assets/imgs/ESDEPORTE2.png" alt="" />
                </NuxtLink>
            </div> -->
            <div class="flex lg:flex items-center    " @click="goToInicio">
                <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                    <img class="h-16  lg:hidden xl:block xl:h-16   " src="~/assets/imgs/tec_logo_b.png" alt="" />
                </NuxtLink>
            </div>

              <!-- buscador -->
      <div>
          <UDropdown :items="itemsbusqsugest"  :disabled="true" v-model:open="open"
              :popper="{ placement: 'bottom-start' }"
              :ui="{ width: 'w-full md:w-[36rem]', rounded: 'rounded-none',item:{rounded:'rounded-none',active:'bg-white'} }">
              <div class="w-full relative flex items-center" @click="gestionApertura">
                  <div class="absolute  left-3 flex ">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z" fill="#0F172A"/>
                        </svg>
                  </div>

                  <input type="text" name="Buscar" id="Buscar" placeholder="Buscar" v-model="buscarpalabra"  @keyup.enter="mostrarResultados"
                      class="block w-full rounded-full border-0 py-2.5 pr-24 text-gray-700 font-normal shadow-sm ring-1 ring-inset pl-12 ring-gray-300  placeholder:text-gray-400 focus:ring-1 border-none outline-none 0 font-lato sm:text-sm sm:leading-6" />


              </div>
              <template #getting-started>
                  <BusquedaComp :findword="buscarpalabra" />
            </template>
          </UDropdown>
      </div>
      <!-- end buscador  -->

            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    @click="mobileMenuOpen=true">
                    <span class="sr-only">Open main menu</span>
                    <img src="~/assets/icons/menuOpen.svg" class="w-10 h-10" alt="" srcset="">
                </button>
            </div>

            <div class="hidden  lg:flex lg:justify-end  justify-center items-center  lg:gap-x-4">
                <NuxtLink @click="goToInicio" to="/"
                    class="text-base lg:text-lg  font-semibold leading-6 text-elecktranegro hover:underline   cursor-pointer">
                    Inicio
                </NuxtLink>
                <NuxtLink  to="/nosotros"
                    class="text-base lg:text-lg  font-semibold leading-6 text-elecktranegro hover:underline   cursor-pointer">
                    Nosotros
                </NuxtLink>
                <NuxtLink  to="/productos"
                    class="text-base lg:text-lg  font-semibold leading-6 text-elecktranegro hover:underline   cursor-pointer">
                    Productos
                </NuxtLink>
                <NuxtLink  to="/marcas"
                    class="text-base lg:text-lg  font-semibold leading-6 text-elecktranegro hover:underline   cursor-pointer">
                    Marcas
                </NuxtLink>
                <NuxtLink  to="/ofertas"
                    class="text-base lg:text-lg  font-semibold leading-6 text-elecktranegro hover:underline   cursor-pointer">
                    Oferta
                </NuxtLink>
                <NuxtLink to="/contacto"  target="_blank">
                    <button type="button"
                        class="border-[1.5px] rounded-lg border-primary bg-elecktranegro text-white hover:bg-elecktraamarillo hover:text-elecktranegro  px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                        Contacto 
                    </button>
                </NuxtLink>

            </div>

        </nav>
        </span>

    </header>
</template>

<script setup lang="ts">
import {goTo,goToInicio} from '~/utils/utils'

const mobileMenuOpen = ref(false)

const router = useRouter()


function dirigiraInicio() {
    router.push('/')
    goToInicio()
}

function dirigiraServicios() {
    router.push('/')
    goTo('#servicios')
}

function dirigiraEspecializaciones(){
    router.push('/')
   goTo('#especializaciones')   
}

function dirigiraProgramas() {
    router.push('/')
    goTo('#programas')
}

function dirigiraContactanos() {
    router.push('/')
    goTo('#contactanos')
}

function dirigiraArticulos() {
    router.push('/')
    goTo('#articulos')
}






const props = defineProps({
    classHeaderWhite:String
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


</script>


<style>
    .transition-op{
    opacity: 0;
    transition: opacity 3s ease-in;
    }
</style>