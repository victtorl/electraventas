
<template>
    <div class="bg-red-900">
               <!-- Hero section -->
      <div class="relative isolate overflow-hidden h-full xl:h-[100vh] bg-blackgio pt-16 lg:pt-0 flex justify-center">
        <!-- <h1 class="text-xl text-red-500">{{ mainbanner?mainbanner.slides[currentIn].pictureUrl:''}}</h1> -->
        <img :src="`${mainbanner? mainbanner.slides[currentIn].pictureUrl:''}`" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50 zoom-img" />
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#090809] to-[#010012] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
        <div class="px-auto px-6 lg:px-16 sm:py-16 lg:py-36 2xl:py-72 3xl:py-96 w-full 3xl:w-maxdesk 3xl:bg-invisible">
          <div class="sm:mt-0 justify-center items-center pt-16 sm:pt-0 md:pt-16">
            <div class="text-left pb-4 xl:pb-12">
              <p
                class="text-sm sm:text-base lg:text-2xl xl:text-2xl xl:leading-8 xl:max-w-2xl font-medium text-white font-monse">
                {{
                mainbanner
                ? mainbanner.phrase
                : ""
                }}
              </p>
            </div>
          </div>

          <div class="mx-auto flex flex-col md:flex-row gap-y-4 xl:gap-x-4">
            <div class="bg-[#13CE66] py-2 xl:py-6 flex flex-col justify-center px-8 xl:w-64">
              <p class="font-monse font-bold text-base xl:text-lg text-[#47525E]">
                {{
                mainbanner
                ? mainbanner.items[0].title
                : ""
                }}
              </p>
              <p class="h-auto xl:h-28 w-52 mt-2 text-xs xl:text-sm font-monse text-[#47525E] font-bold">
                {{
                mainbanner
                ? mainbanner.items[0].description
                : ""
                }}
              </p>
              <!-- <div class="flex flex-row items-center gap-x-4 ">
                                <img class="h-8  w-auto" src="../assets/imgs/onda-de-sonido.png" alt="">
                                <p class="text-sm font-monse  xl:text-base  text-white font-bold">Audio</p>
                            </div> -->
            </div>

            <span class="flex flex-col md:flex-row">
              <div v-for="item in mainbanner
                  ? mainbanner.items.slice(1)
                  : []" class="bg-[#13CE66] py-2 xl:py-6 px-8 xl:w-64 flex flex-col mb-4 lg:mb-0 justify-center">
                <p class="font-monse font-bold text-base xl:text-lg text-[#47525E]">
                  {{ item.title }}
                </p>
                <p class="h-auto xl:h-28 w-52 mt-2 text-xs xl:text-sm font-monse text-[#47525E] font-bold">
                  {{ item.description }}
                </p>
                <!-- <div class="flex flex-row items-center gap-x-4 ">
                                    <img class="h-8  w-auto" src="../assets/imgs/onda-de-sonido.png" alt="">
                                    <p class="text-sm font-monse  xl:text-base  text-white font-bold">Audio</p>
                                </div> -->
              </div>
              <!-- primer video  del landing -->

              <div @click="
                  abreModalvideoOnly(
                    mainbanner
                      ? mainbanner.videoUrl
                      : ''
                  )
                " class="cursor-pointer xl:w-80 xl:h-full sm:w-full mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                <div class="relative h-full">
                  <!-- //AQUI HACER REFERENCIA A LA PRIMERA IMAGEN QEU SE MUESTRA EN EL HEADER 
                                    infopageST. -->

                  <img class="w-full h-64 xl:h-full object-cover pb-4 md:pb-0" :src="
                      mainbanner
                        ? mainbanner.videoPictureUrl
                        : ''
                    " alt="" />
                  <img class="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="../assets/imgs/youtube.png" alt="" />
                </div>
              </div>
            </span>
          </div>
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

      <!-- Agenda cita -->
      <div class="bg-blackgio pt-4 xl:pt-0 3xl:flex 3xl:justify-center w-full" id="#agendarcita">
        <div
          class="mx-6 lg:mx-16 3xl:mx-0 gap-x-4 flex flex-col justify-center lg:justify-start lg:flex-row bg-invisible 3xl:w-maxdesk">
          <div class="w-full sm:w-auto pb-2 lg:pb-0" v-motion-slide-visible-left>
            <span class="relative">
              <img class="h-64 w-64 object-cover" src="../assets/imgs/conversation-coach.png" alt="" />
            </span>
          </div>

          <div class="sm:text-center flex justify-center items-center">
            <span class="items-start">
              <h2
                class="font-medium font-monse text-justify text-white text-sm leading-5 lg:text-lg max-w-3xl lg:leading-7">
                Agenda una cita con nosotros para recibir orientación o
                inscríbete ahora a nuestro proceso de admisión para próximos
                ciclos formativos de elearning o presencial.
              </h2>
              <span class="w-full flex flex-row gap-x-2 mt-4 mb-6 lg:mb-0">
                <button type="button"
                  class="rounded-md bg-transparent transition ease-in-out delay-50 hover:bg-blackgioscuro px-6 py-2.5 text-base lg:text-xl font-normal text-white shadow-sm border-2 border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  <Calendly></Calendly>
                </button>
                <button type="button" @click="goTo('#contactanos')"
                  class="rounded-md bg-verdegio transition ease-in-out delay-50 hover:bg-verdeoscuro px-6 py-2.5 text-base lg:text-xl font-normal text-blackgio shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Admision
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div class="w-[100vw] h-[100vh] bg-orange-300">
asdsad
      </div>
    </div>
</template>
<script setup>
const mainbanner=ref(false)


</script>