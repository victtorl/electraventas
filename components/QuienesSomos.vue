<template>
    <div class="flex justify-center w-full text-pretty bg-white font-manrope  text-md " id="#nosotros" >
      <div class="px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  flex justify-between ">
        <div class="flex flex-col lg:flex-row  w-full ">
            <div class="  lg:w-[50%]  " >
                <img src="https://cycelectroingenieria.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-04-16-at-2.12.26-PM-2-qta49y9ke6bmgr3ybdefvatbvmmqgi114oklr4h6y8.jpeg"
                 class="w-full h-auto p-0 lg:pr-16 p"alt="" srcset="">
            </div>
            <div class=" flex flex-col justify-center" >

                <div class="flex items-center  gap-x-2" >
                    <span class="w-16  h-1 border-2 border-elecktranegro" ></span>
                    <p v-motion-pop-visible class="text-3xl font-bold"> Sobre TEC</p>
                </div>
                <h4 class="text-sm sm:text-base lg:text-2xl xl:text-3xl xl:leading-8 pt-4 font-bold text-white " >¿Quiénes somos?</h4>
                <p  class=" text-sm sm:text-base lg:text-[16px] lg:w-[560px] py-4" >
                    Somos una empresa que nace bajo la dirección de los socios 
                    fundadores, que, a partir de trabajos por más de 13 años en
                     distintos proyectos eléctricos con C & C Electroingenieria S.A.C. 
                     a nivel nacional, vieron la necesidad de los clientes de tener un proveedor
                     eléctrico de confianza, que brinde todos los materiales eléctricos de calidad 
                     y con envíos rápidos a todo el Perú. 
                </p>

                <div class="border-l-2 border-elecktranegro">
                    <p
                     class="p-6 text-sm sm:text-base lg:text-[16px] lg:w-[560px]"   
                    >
                    Sabemos que la prontitud de respuestas es fundamental para nuestros clientes; 
                    es por eso que, pensando en ellos, nace Trading Electric C & C S.A.C., una empresa proveedora 
                    de suministros eléctricos que brindará asesoría personalizada, respuestas rápidas y sobre todo
                     a precios competitivos, siempre con una mejora continua en nuestros procesos, contribuyendo al 
                     crecimiento de nuestro país.
                    </p>
                </div>

                <NuxtLink to="/nosotros">
                                <button type="button"
                                    class="border-2 rounded-xl bg-elecktraamarillo text-elecktranegro hover:bg-elecktranegro hover:text-white  mt-8 px-2 lg:px-2 xl:px-6 py-3  text-base lg:text-sm xl:text-md font-medium  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                                    Ver todo sobre nosotros
                                </button>
                </NuxtLink>
            </div>
        </div>
      </div>
    </div>
</template>