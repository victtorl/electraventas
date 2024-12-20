<template>



  <div class="w-full  flex-1  max-w-full bg-white overflow-hidden lg:pl-4">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(slide, idx) in proST.groupOfertas" :key="idx" style="height: auto;">


          <div class="rounded overflow-hidden flex  w-64 shadow-lg bg-white border-2 border-elektraplomo/50  flex-col ">
           
            <ProductCart
            :codigo="slide.data.codigo"
            :nombre="slide.data.nombre"
            :marca="slide.data.marca"
            :oferta="slide.data.oferta"
            :medida="slide.data.medida"
            :imagen="slide.data.imagenes[0]"
            :fichatecnica="slide.data.fichatecnica"
            :id="slide.id"
            :quantity="slide.quantity"
            />
          </div>




        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>



</template>

<script setup lang="ts">
import { getAllProducts } from '~/firebase'

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








const proST=useProductStore()
  ///LLENAR LOS PRODUCTOS AL MONTAR EL COMPONENTE
  onMounted(() => {
    getAllProducts()
  })






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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
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



.box-button {
  background-color: black;
  color: white;
}
.box-button:hover {
  background-color:#ffcc03;
  color: black;
}
.box-button:hover .icon-svg {
  fill: black !important;
}

.icon-svg {
  fill: white;
}



</style>