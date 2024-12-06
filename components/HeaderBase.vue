<template>
    
    <header class="fixed   inset-x-0  top-0 z-50 font-manrope " :class="props.classHeaderBase">
        <!-- <button class="w-64 h-10 bg-red-500" @click="getSignals">hola como estas</button> -->
        <HeaderContact/>
        <span class="flex w-full items-center justify-center">
        <nav class="flex items-center justify-between p-6 h-24 bg-elecktranegro px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  " aria-label="Global">
            

            <div class="flex lg:flex items-center " @click="goToInicio">
                <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                    <img class="h-16  lg:hidden xl:block xl:h-16   " src="~/assets/imgs/tec_logo2.png" alt="" />
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

            <div class="hidden bg lg:flex lg:justify-end  justify-center items-center  lg:gap-x-4 ">

                <NuxtLink @click="goToInicio" to="/"
                    class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                    Inicio
                </NuxtLink>
                <NuxtLink  to="/nosotros"
                    class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                    Nosotros
                </NuxtLink>
                <NuxtLink  to="/productos"
                    class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                    Productos
                </NuxtLink>
                <NuxtLink  to="/marcas"
                    class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                    Marcas
                </NuxtLink>
                <NuxtLink  to="/ofertas"
                    class="text-base lg:text-lg  font-semibold leading-6 text-white hover:underline   cursor-pointer">
                    Ofertas
                </NuxtLink>
   
                <NuxtLink to="/contacto"  target="_blank"  >
                    <button type="button"
                        class="border-[1.5px] border-white rounded-md hover:bg-white hover:text-black text-white px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                     Contacto
                    </button>
                </NuxtLink>

            </div>

            

        </nav>
        </span>

        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blackgio px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                        <span class="sr-only">Your Company</span>
                        <!-- <img class="w-16 h-16 " src="~/assets/imgs/tec_logo.png" alt="" /> -->
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>

                        <img src="~/assets/icons/menuClose.svg" class="w-10 h-10" alt="" srcset="">
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">

                        <div class="space-y-2 py-6">
                            <NuxtLink @click="inicioMobile" to="/"
                                class="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline">
                                Inicio
                            </NuxtLink>
                            <NuxtLink @click="serviciosMobile" to="/"
                                class="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline">
                                Nosotros
                            </NuxtLink>
                            <NuxtLink @click="especilizacionesMobile" to="/"
                                class="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline">
                                Servicios
                            </NuxtLink>
                            <NuxtLink @click="programasMobile" to="/"
                                class="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline">
                                Proyectos
                            </NuxtLink>
                            <NuxtLink @click="articulosMobile" to="/"
                                class="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline">
                                Programas
                            </NuxtLink>
                      
             

           
                            <NuxtLink to="/contacto" @click="mobileMenuOpen">
                                <button type="button"
                                    class="border-[1px]   px-2 lg:px-2 xl:px-4 py-2  text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                                    Contacto empresa
                                </button>
                            </NuxtLink>

                        </div>

                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup >
import {goTo, goToM} from '~/utils/utils'
const mobileMenuOpen = ref(false)





function inicioMobile() {
    mobileMenuOpen.value = false
    goToInicio()
}
function serviciosMobile() {
    mobileMenuOpen.value = false
    goToM('#servicios')
}
function articulosMobile() {
    mobileMenuOpen.value = false
    goToM('#articulos')
}
function contactanosMobile() {
    mobileMenuOpen.value = false
    goToM('#contactanos')
}
function especilizacionesMobile(){
    mobileMenuOpen.value = false
    goToM('#especializaciones')
}
function programasMobile() {
    mobileMenuOpen.value = false
    goToM('#programas')
}











const props = defineProps({
    classHeaderBase:String,
    absosticky:String
})




</script>