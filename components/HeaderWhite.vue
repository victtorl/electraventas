<template>
    <header class="hidden lg:block fixed inset-x-0  top-0 z-40 bg-elecktraamarillo  " :class="props.classHeaderWhite">
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

     <!-- buscador dispositivo grandes-->
      <div>
        <BuscadorGozu/>
      </div>
      <!-- end buscador dispositivo grande  -->

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
                    Ofertas
                </NuxtLink>

                <NuxtLink to="/contacto" >
                    <div class="home-two-btn-bg py-3.5 group bg-elecktranegro border-elecktraamarillo w-fit  cursor-pointer">
                    <span class="relative z-10 text-base lg:text-lg font-semibold text-white transition-all duration-300 group-hover:text-elecktranegro  font-inter">
                        Contacto
                    </span>
                    </div>
                </NuxtLink>

                <NuxtLink to="/mycart" >
                <div class="relative w-16" >
                    <div class="w-10" >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                <div class="absolute text-elecktraamarillo bg-elecktranegro border-[2px] border-elecktranegro rounded-full flex justify-center items-center w-8 h-8 -top-3 -right-0 " >{{cartST.totalItems}}</div>
                </div>
                </NuxtLink>

            </div>

        </nav>
        </span>

    </header>
</template>

<script setup lang="ts">
import {goTo,goToInicio} from '~/utils/utils'


const cartST=useCartStore()

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