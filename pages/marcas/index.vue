<template>

    <div class="pt-12 sm:pt-16  lg:pt-44 px-auto px-6 lg:px-16 w-full font-manrope 3xl:w-maxdesk 3xl:px-0 py-10" >



      <h1 className="px-5 bg-elecktraamarillo border  text-elecktranegro font-medium rounded-[30px] w-fit mx-auto">
           Principales marcas
        </h1>
        <h2 className="max-w-[747px] font-semibold text-24 sm:text-[30px] text-main-black text-center mx-auto my-5">
          Explore los productos que ofrecemos en cada marca
        </h2>

        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5  xl:gap-x-8">
      <li v-for="file in images" :key="file.source" class="relative  p-2">
        <span @click="filterProdsbyMarc(file.name)" >
        <div  class="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img :src="file.img" alt="" class="pointer-events-none  h-44  object-scale-down group-hover:opacity-75" />
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for titulo</span>
          </button>
        </div>
        <p class="pointer-events-none mt-2 block truncate font-manrope text-md font-medium w-full text-center text-gray-900">{{ file.name }}</p>
        </span>
      </li>
    </ul>

    </div>

  </template>
  
  <script setup>

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
import { getAllProducts } from '~/firebase'

const router=useRouter()

const prodST=useProductStore()

const images=ref([
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

onMounted(() => {
  getAllProducts()
})

const filterProdsbyMarc=(name) => {
  prodST.filterOfertxMarca(name)
  router.push(`/marcas/${name}`)
}
  </script>