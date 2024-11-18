<template>
    <div class="flex justify-center w-full font-manrope text-white text-md"  >
      <div class="px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0 bg-blue-500 flex justify-between ">
        <div class="flex flex-col lg:flex-row  w-full ">
            <div class=" bg-blue-800 lg:w-[50%]" >
                <img src="https://cycelectroingenieria.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-04-16-at-2.12.26-PM-2-qta49y9ke6bmgr3ybdefvatbvmmqgi114oklr4h6y8.jpeg"
                 class="w-full h-auto p-10 lg:pr-16 p"alt="" srcset="">
            </div>
            <div class="bg-red-800 flex flex-col justify-center" >

                <div class="flex items-center gap-x-2" >
                    <span class="w-16 h-1 border-2 border-red-600" ></span>
                    <p>sobre nosotros c&c</p>
                </div>
                <h4 class="text-sm sm:text-base lg:text-2xl xl:text-3xl xl:leading-8 pt-4 font-bold text-black " >¿Quiénes somos?</h4>
                <p  class=" text-sm sm:text-base lg:text-[16px] lg:w-[560px] py-4" >
                Somos una empresa del rubro eléctrico y electromecánico 
                con un claro compromiso para con nuestros clientes ofreciendoles 
                las mejores soluciones, al mejor tiempo con un excelente trabajo 
                en equipo.
                </p>

                <div class="border-l-2 border-blue-500">
                    <p
                     class="p-6 text-sm sm:text-base lg:text-[16px] lg:w-[560px]"   
                    >Apostamos por el desarrollo y transformación conjunta,
                    que nos impulsa a brindar las soluciones más óptimas 
                    para cada necesidad existente. Por ello, trabajamos 
                    con profesionalismo y dinamismo, brindando los mejores
                    estándares de calidad y seguridad, siempre de la mano 
                    de nuestros colaboradores-expertos.</p>
                </div>

                <NuxtLink to="/blog">
                                <button type="button"
                                    class="border-2 rounded-xl border-blue-600 mt-8 px-2 lg:px-2 xl:px-6 py-3  text-base lg:text-sm xl:text-md font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                                    Ver todo sobre nosotros
                                </button>
                </NuxtLink>
            </div>
        </div>
      </div>
    </div>
</template>