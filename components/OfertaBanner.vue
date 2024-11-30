<template>
    <div  class="w-full flex py-8 bg-yellow-600">
        <div class="w-full px-auto px-6 lg:px-16 font-manrope 3xl:w-maxdesk 3xl:px-0 flex flex-row">

            <!-- start oferta -->
            <div>
                <img src="/assets/landing-imgs/oferta/oferta.jpeg" class="" alt="">
                <div>
                    <p class="font-bold text-[24px] text-white" >Termina en</p>
                    <div>
                    <ClientOnly>
                        <vue-countdown :time="diferenciaMilisegundosDesdeHoy(realmana)" v-slot="{ days, hours, minutes, seconds }">
                          
                            <div class="flex flex-row gap-x-3 text-[#D9D9D9] ">
                                <div class="flex flex-col items-center">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ days }}</p>
                                        <p class=" absolute text-4xl -top-4 -right-3 ">.</p>
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        dias
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ hours }}</p>
                                        <p class=" absolute text-4xl -top-4 -right-3 ">.</p>
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        horas
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="text-xl sm:text-2xl font-bold relative ">
                                        <p class="">{{ minutes }}</p>
                                        <p class=" absolute text-4xl -top-4 -right-3 ">.</p>
                                    </div>
                                    <div class="text-xs sm:text-sm">
                                        mins
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
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

              <!-- start group card -->
            <div class=" w-full  grid grid-cols-1 lg:grid-cols-2" >
                <div v-for="item in 2" class="max-w-md mx-auto rounded-md overflow-hidden flex flex-row shadow-md hover:shadow-lg">
                    <div class="relative">
                        <img class="w-64 h-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image">
                        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                        </div>
                    </div>
                    <div class="p-4 w-full bg-white">
                        <h3 class="text-lg font-medium mb-2">Product Title</h3>
                        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div class="flex items-center justify-between">
                            <span class="font-bold text-lg">$19.99</span>
                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Ver producto
                        {{ mañana }}
                    </button>
                        </div>
                    </div>
                </div>

            </div>
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