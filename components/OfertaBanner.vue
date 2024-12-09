<template>
    <div  class="w-full flex pt-8 justify-center bg-white text-elecktranegro">
        <div class="w-full px-auto px-6 lg:px-16 font-manrope 3xl:w-maxdesk 3xl:px-0 flex flex-col  lg:flex-row text-center items-center">
            <p v-motion-pop-visible class="text-3xl font-bold font-manrope w-[500px] text-start  "  >Revisa nuestras ofertas</p>
            <div class="w-full bordet-t-2 border-2 border-elecktraamarillo" ></div>
        </div>
    </div>
    <div  class="w-full flex py-8 justify-center bg-white text-black">
        <div class="w-full px-auto px-6 lg:px-16 font-manrope 3xl:w-maxdesk 3xl:px-0 flex flex-col lg:flex-row  items-center">
            <!-- start oferta -->
            <div class="flex lg:flex-col items-center gap-x-4 my-4 lg:my-0  xl:w-64" >
                <div class="" >
                    <img src="/assets/landing-imgs/oferta/oferta.jpeg" class=" w-full  " alt="">
                </div>
                <div class=" w-64"  >
                    <p class="font-bold text-[24px] text-elecktranegro py-4" >La oferta termina en</p>
                    <div>
                    <ClientOnly>
                        <vue-countdown :time="diferenciaMilisegundosDesdeHoy(realmana)" v-slot="{ days, hours, minutes, seconds }">
                          
                            <div class="flex flex-row gap-x-3 text-[#D9D9D9] justify-between ">
                                <div class="flex flex-col items-center text-black bg-white border-2 border-elektraplomo/50 rounded-lg px-2">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ days }}</p>
                                        <!-- <p class=" absolute text-4xl -top-4 -right-3 "></p> -->
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        dias
                                    </div>
                                </div>
                                <div class="flex flex-col items-center text-black bg-white border-2 border-elektraplomo/50 rounded-lg px-2">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ hours }}</p>
                                        <!-- <p class=" absolute text-4xl -top-4 -right-3 "></p> -->
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        horas
                                    </div>
                                </div>
                                <div class="flex flex-col items-center text-black bg-white border-2 border-elektraplomo/50 rounded-lg px-2">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ minutes }}</p>
                                        <!-- <p class=" absolute text-4xl -top-4 -right-3 "></p> -->
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        mins
                                    </div>
                                </div>
                                <div class="flex flex-col items-center text-black bg-white border-2 w-[50px] border-elektraplomo/50 rounded-lg px-2">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ seconds }}</p>
                                        <!-- <p class=" absolute text-4xl -top-4 -right-3 ">.</p> -->
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        seg
                                    </div>
                                </div>
                            </div>
                        </vue-countdown>
                    </ClientOnly>
                </div>
                </div>
            </div>
            <!-- end oferta -->


  

            <OfertaSlider/>
                <!-- end group card -->
            </div>
       

    </div>

</template>

<script setup>

const hoy = new Date();
const manana = new Date(hoy);
const realmana= ref(manana.setDate(hoy.getDate() + 1))


function diferenciaMilisegundosDesdeHoy(fecha) {
    // Convertir la fecha proporcionada a una instancia de Date
    const fechaProporcionada = new Date(fecha);
    const fechaActual = new Date();

    // Calcular la diferencia en milisegundos
    const diferencia = fechaProporcionada - fechaActual;

    // Si la diferencia es menor a 0, retorna 0
    return Math.max(diferencia, 0);
}

</script>


<style>
.gradienteoferta{
    background: rgb(248,1,0);
background: linear-gradient(90deg, rgba(248,1,0,1) 38%, rgba(188,9,0,1) 86%);
}

</style>