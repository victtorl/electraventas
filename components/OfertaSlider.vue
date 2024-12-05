<template>


    
        <div class="w-full  flex-1  max-w-full bg-elecktranegro overflow-hidden">
          <ClientOnly>
            <swiper-container ref="containerRef" :init="false">
              <swiper-slide
                v-for="(slide, idx) in slides"
                :key="idx"
                style="height: auto;"
              >


              <div  class="rounded overflow-hidden shadow-lg bg-white flex flex-col ">
        <a  class="font-medium text-lg leading-5 text-center hover:text-black transition duration-500 pt-2 ease-in-out inline-bloc">{{ marca }}</a>
        <div class="relative"><a href="#">
                <img class="w-full p-6 z-100"
                    src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    alt="">
                <!-- <div
                    class="hover:bg-transparent transition duration-300 absolute z-10 bottom-0 top-0 right-0 left-0 bg-elecktranegro opacity-25">
                </div> -->
            </a>
            <a href="#!">
                <div class="flex items-center text-xs absolute left-0 rounded-r-lg -top-2 right-0 bg-[#f98015]  px-4 py-2 text-white font-semibold mt-3 mr-3 hover:bg-elecktraamarillo hover:text-black transition duration-500 ease-in-out">
                    <div class="w-5 h-5">
                        <svg fill="#FFFFFF" viewBox="0 -2.5 37 37" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bomb</title> <path d="M33.228 7.928l3.284 0.464-2.92 1.546 2.117 1.934-3.065-0.387 1.897 3.945-3.795-2.862-3.139 3.79 1.46-4.717-4.599 2.475 3.211-3.48-0.22-0.856c-0.867 0.432-2.095 0.873-3.379 0.822-1.703 0-3.818-1.188-6.345-3.312 0 0-2.861-3.026-5.266-3.026-2.474 0-2.232 3.722-2.229 3.759h2.802v2.532c3.562 1.372 5.969 4.818 5.969 8.865 0 5.25-4.256 9.506-9.506 9.506s-9.505-4.258-9.505-9.508c0-4.046 2.469-7.493 6.031-8.865v-2.532h2.504c-0.003-0.019-0.288-2.744 1.15-4.256 0.767-0.806 1.704-1.209 2.813-1.209 3.337 0 6.332 3.512 6.332 3.512 2.195 1.884 3.985 2.825 5.37 2.825 0.562 0 1.706-0.354 2.294-0.549l-1.807-1.422 3.139 0.231-2.408-3.712 3.941 2.784 0.438-2.63 0.729 2.398 2.92-3.48-0.657 3.867 3.357-0.773-2.918 2.321z"></path> </g></svg>
                    </div>
                    <div class="text-bold px-1" >|</div>
                    <p class="mt-1 text-[16px]" >Oferta bomba</p>
                </div>
            </a>
        </div>
        <div class="px-6 py-4 mb-auto">
            <a href="#"
                class="font-medium text-lg leading-5 text-center hover:text-black transition duration-500 ease-in-out inline-block mb-2">
               {{ nombreprod }}
            </a>

            <p class="text-gray-500 text-sm text-center">
               <span class="text-md font-bold " >Cod</span> {{ codigo }}
            </p>
            <p class="text-gray-500 text-sm text-center">
               <span class="text-md font-bold " >Unid</span> {{ tipoUnidad }}
            </p>
        </div>
        <!-- <div class="px-6 py-3 flex flex-row items-center justify-between  bg-gray-100">
            <button href="#" class="py-1 text-xs w-20 font-regular bg-white border-[1.5px] hover:bg-elektraplomo/50 border-black/30 px-2 rounded-md text-gray-900 mr-1 flex flex-row items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3.63568C3.80558 3.75 3.95425 3.86422 3.99803 4.02838L6.55576 13.6199C4.94178 14.0385 3.75 15.5051 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H5.37803C5.68691 15.6261 6.52034 15 7.5 15H18.7183C19.0051 15 19.2668 14.8364 19.3925 14.5785C20.5277 12.249 21.5183 9.83603 22.3527 7.35126C22.4191 7.15357 22.4002 6.93716 22.3005 6.75399C22.2008 6.57082 22.0294 6.43743 21.8273 6.38583C17.0055 5.15442 11.9536 4.5 6.75 4.5C6.39217 4.5 6.03505 4.5031 5.67868 4.50926L5.44738 3.64188C5.2285 2.82109 4.48515 2.25 3.63568 2.25H2.25Z" fill="#0F172A"/>
                <path d="M3.75 20.25C3.75 19.4216 4.42157 18.75 5.25 18.75C6.07843 18.75 6.75 19.4216 6.75 20.25C6.75 21.0784 6.07843 21.75 5.25 21.75C4.42157 21.75 3.75 21.0784 3.75 20.25Z" fill="#0F172A"/>
                <path d="M16.5 20.25C16.5 19.4216 17.1716 18.75 18 18.75C18.8284 18.75 19.5 19.4216 19.5 20.25C19.5 21.0784 18.8284 21.75 18 21.75C17.1716 21.75 16.5 21.0784 16.5 20.25Z" fill="#0F172A"/>
                </svg>
                <p class="ml-1" >Cotizar</p>
            </button>
            <button href="#" class="py-1.5 text-xs w-20 font-regular bg-white border-[1.5px] hover:bg-elektraplomo/50 border-black/30 px-2 rounded-md text-gray-900 mr-1 flex flex-row justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z" fill="#0F172A"/>
                </svg>
                <p class="ml-1 text-md font-bold" >Ver</p>
            </button>
        </div> -->
    </div>


              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>



</template>

<script setup lang="ts">

import img1 from '~/assets/landing-imgs/logos-marcas/ABB_logo.svg.png'
import img2 from '~/assets/landing-imgs/logos-marcas/BALS.jpg'
import img3 from '~/assets/landing-imgs/logos-marcas/HONT.jpg'
import img4 from '~/assets/landing-imgs/logos-marcas/INDECO.png'
import img5 from '~/assets/landing-imgs/logos-marcas/Logo-Siemens.png'
import img6 from '~/assets/landing-imgs/logos-marcas/PhoenixContact.png'
import img7 from '~/assets/landing-imgs/logos-marcas/RITTAL.png'
import img8 from '~/assets/landing-imgs/logos-marcas/SBS.jpg'
import img9 from '~/assets/landing-imgs/logos-marcas/STARKER.png'
import img10 from '~/assets/landing-imgs/logos-marcas/Schneider-electric.png'
import img11 from '~/assets/landing-imgs/logos-marcas/WOER.jpg'


const nombreprod=ref('Espiral envolvente de 16mm en color negro ')
const marca=ref('Holrex')
const codigo=ref('1234654as')
const tipoUnidad=ref('X unid ')












const containerRef = ref(null)

const swiper = useSwiper(containerRef,{
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: false,
  navigation: {
    nextEl: ".h2-case-study-next",
    prevEl: ".h2-case-study-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
})


onMounted(() => {
console.log(swiper.instance)
})



const slides=ref([
{
  img:img1
},
{
  img:img2
},
{
  img:img3
},
{
  img:img4
},
{
  img:img5
},
{
  img:img6
},
{
  img:img7
},
{
  img:img8
},
{
  img:img9
},
{
  img:img10
},
{
  img:img11
},

])


</script>

<style>
swiper-slide {
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
height: 20vh;
font-size: 4rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;
}
</style>