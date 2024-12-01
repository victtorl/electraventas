<template>
    <header class=" fixed inset-x-0  top-0 z-50 bg-white  font-manrope" :class="props.classHeaderWhite">
        <!-- <button class="w-64 h-10 bg-red-500" @click="getSignals">hola como estas</button> -->
        <HeaderContact/>
        <span class="w-full flex justify-center items-center" >
        <nav class="flex items-center justify-between h-24 px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  " aria-label="Global">
            <!-- <div class="flex lg:flex-1" @click="goToInicio">
                <NuxtLink to="/" class="-m-1.5 p-1.5 " @click="mobileMenuOpen = false">
                    <span class="sr-only">Your Company</span>
                    <img class="h-16  ml-0 lg:ml-6 xl:ml-10 " src="~/assets/imgs/ESDEPORTE2.png" alt="" />
                </NuxtLink>
            </div> -->
            <div class="flex lg:flex-1" @click="goToInicio">
                <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                    <span class="sr-only">Your Company</span>
                    <img class="h-16  lg:hidden xl:block xl:h-16   " src="~/assets/imgs/tec_logo_y.png" alt="" />
                </NuxtLink>
            </div>

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
                    class="text-base lg:text-lg  font-semibold leading-6 text-black hover:underline   cursor-pointer">
                    Inicio
                </NuxtLink>
                <NuxtLink  to="/nosotros"
                    class="text-base lg:text-lg  font-semibold leading-6 text-black hover:underline   cursor-pointer">
                    Nosotros
                </NuxtLink>
                <NuxtLink  to="/productos"
                    class="text-base lg:text-lg  font-semibold leading-6 text-black hover:underline   cursor-pointer">
                    Productos
                </NuxtLink>
                <NuxtLink @click="goTo('#marcas')" to="/"
                    class="text-base lg:text-lg  font-semibold leading-6 text-black hover:underline   cursor-pointer">
                    Marcas
                </NuxtLink>
                <NuxtLink @click="goTo('#ofertas')" to="/"
                    class="text-base lg:text-lg  font-semibold leading-6 text-black hover:underline   cursor-pointer">
                    Oferta
                </NuxtLink>
   

                <NuxtLink to="/contacto"  target="_blank">
                    <button type="button"
                        class="border-[1.5px] border-primary hover:border-yellow-400  px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
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

const navigation = [
    { name: 'Especializaciones', href: '/' },
    { name: 'Articulos', href: '/blog/123' },
    { name: 'Blog trainig', href: '/blog' },
    { name: 'Directorio', href: '/' },
    { name: 'ESFITNES', href: '/' },
]

const getSignals = async () => {
    const { data, error } = await useNuxtApp().$apiClient.getWebPage();
    console.log(data);
    console.log('hola');

}



const props = defineProps({
    classHeaderWhite:String
})

</script>


<style>
    .transition-op{
    opacity: 0;
    transition: opacity 3s ease-in;
    }
</style>