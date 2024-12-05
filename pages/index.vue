
<template>
    <div class="">

               <!-- Hero section -->
      <div class="relative isolate overflow-hidden h-[100vh] bg-blackgio pt-16 lg:pt-0 flex justify-center">
        <div class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50  zoom-img">
          <video-background 
              :src="gatobaila"
              style="max-height:100%; height: 100%;"
          >
            </video-background>
        </div>
       
        <div class="px-auto px-6 lg:px-16 w-full font-manrope 3xl:w-maxdesk 3xl:px-0 absolute bottom-[30%]  3xl:bg-invisible">

          <div class="sm:mt-0 justify-center items-center  " >
            <div class="text-left ">
              <p 
                class="text-sm sm:text-base lg:text-2xl xl:text-2xl xl:leading-8 xl:max-w-2xl font-medium text-white ">
                Que hacemos?
              </p>
            </div>
          </div>

          <div class="sm:mt-0 justify-center items-center pt-8 sm:pt-0 md:pt-8 ">
            <div class="text-left pb-4 xl:pb-8">
              <p  v-motion-slide-visible-left 
                class="text-sm sm:text-base lg:text-2xl xl:text-[40px] xl:leading-10 xl:max-w-3xl font-bold text-white ">
                <!-- Ofrecemos soluciones innovadoras -->
                Potencia, calidad y confianza: tus soluciones eléctricas al <span class="text-elecktraamarillo" >mejor precio garantizado.</span>
              </p>
            </div>
          </div>

          <div class="mx-auto  flex flex-col md:flex-row gap-y-4 xl:gap-x-4">
            <div class="  flex flex-col justify-center  ">
              <p class="font-monse font-bold text-base xl:text-lg text-white">
                <!-- De la mano de nuestros colaboradore con expertis y profesionalismo -->
                 Somos tu proveedor de confianza
              </p>
            </div>
          </div>


          <NuxtLink target="_blank" to="https://heyzine.com/flip-book/73f3a7acce.html" >
                    <button type="button"   
                        class=" hover:bg-elecktranegro hover:text-white font-medium translate-y-8 mt-6 bg-elecktraamarillo text-main-black rounded-lg   px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl   text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                        Revisa nuestro catálogo
                    </button>
          </NuxtLink>

        </div>



        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            " />
        </div>
      </div>

      <Propuesta/>
      <OfertaBanner/>

      <QuienesSomos/>

      <Clientes/>
   


    </div>
</template>
<script setup>
const mainbanner=ref(false)
import gatobaila from "~/assets/videos/corporativo.mp4"


</script>


<style>
.billoconfig{
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(57,57,51,1) 90%);
}

</style>