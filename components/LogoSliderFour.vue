<template>

      <section class="max-w-full overflow-hidden flex flex-col py-16 justify-center items-center bg-main-gray "  >

          <!-- <p class="w-full text-center text-lg lg:text-[29px] py-8  font-bold text-black">
            ¡La confianza de nuestros clientes es nuestra mayor garantía!
          </p> -->
      <div class="flex items-center w-screen mx-auto theme-container">

        
        <div class="flex gap-5 lg:gap-[154px] w-full flex-col lg:flex-row">
          

          
          <div class="w-full  flex-1  max-w-full overflow-hidden">
            <ClientOnly>
              <swiper-container ref="containerRef" :init="false">
                <swiper-slide
                  v-for="(slide, idx) in slides"
                  :key="idx"
                  style="height: auto;"
                >
                  <div @click="filterProdsbyMarc(slide.name)">
                  <img
                    :src="slide.img"
                    alt="" class=" w-auto lg:w-[173px] lg:h-[83px]"
                  />
                </div>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

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


const containerRef = ref(null)

const swiper = useSwiper(containerRef,{
    slidesPerView: 4,
    spaceBetween: 40,
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
        slidesPerView: 4.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 50,
      },
    },
  })


onMounted(() => {
  console.log(swiper.instance)
})



const slides=ref([
{
        img:img1,
        name:'ABB'
    },
    {
        img:img2,
        name:'Bals'
    },
    {
        img:img3,
        name:'Hont'
    },
    {
        img:img4,
        name:'Indeco'
    },
    {
        img:img5,
        name:'Siemens'
    },
    {
        img:img6,
        name:'Phoenix'
    },
    {
        img:img7,
        name:'Rittal'
    },
    {
        img:img8,
        name:'Plastic'
    },
    {
        img:img9,
        name:'Starker'
    },
    {
        img:img10,
        name:'Schein'
    },
    {
        img:img11,
        name:'Woer'
    },

])


const router=useRouter()
const prodST=useProductStore()
const filterProdsbyMarc=(name:any) => {
  prodST.filterOfertxMarca(name)
  router.push(`/marcas/${name}`)
}


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