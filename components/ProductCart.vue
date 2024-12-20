<template>

  <div class="border-2 border-elecktranegro/20  flex flex-col" >  
      <a
        class="font-medium text-lg leading-5 text-center hover:text-black transition duration-500 pt-2 ease-in-out inline-bloc ">
        {{ props.marca }}
      </a>
      <div class="relative"><a href="#">
          <img class="w-full h-36 sm:h-44     px-6 pt-6 mt-6 z-100"
            :src="props.imagen ? props.imagen : 'https://w7.pngwing.com/pngs/765/963/png-transparent-houseplant-silhouette-flowerpot-plant-silhouette-animals-monochrome-computer-wallpaper-thumbnail.png'"
            alt="">

        </a>
        <a v-if="props.oferta">
          <div
            class="flex items-center  text-xs absolute left-0 rounded-r-lg -top-2 right-0 bg-[#f91515] pl-2 sm:px-4 py-2 text-white font-semibold mt-3 mr-3 hover:bg-elecktraamarillo hover:text-black transition duration-500 ease-in-out">
            <div class="w-5 h-5">
              <svg fill="#FFFFFF" viewBox="0 -2.5 37 37" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>bomb</title>
                  <path
                    d="M33.228 7.928l3.284 0.464-2.92 1.546 2.117 1.934-3.065-0.387 1.897 3.945-3.795-2.862-3.139 3.79 1.46-4.717-4.599 2.475 3.211-3.48-0.22-0.856c-0.867 0.432-2.095 0.873-3.379 0.822-1.703 0-3.818-1.188-6.345-3.312 0 0-2.861-3.026-5.266-3.026-2.474 0-2.232 3.722-2.229 3.759h2.802v2.532c3.562 1.372 5.969 4.818 5.969 8.865 0 5.25-4.256 9.506-9.506 9.506s-9.505-4.258-9.505-9.508c0-4.046 2.469-7.493 6.031-8.865v-2.532h2.504c-0.003-0.019-0.288-2.744 1.15-4.256 0.767-0.806 1.704-1.209 2.813-1.209 3.337 0 6.332 3.512 6.332 3.512 2.195 1.884 3.985 2.825 5.37 2.825 0.562 0 1.706-0.354 2.294-0.549l-1.807-1.422 3.139 0.231-2.408-3.712 3.941 2.784 0.438-2.63 0.729 2.398 2.92-3.48-0.657 3.867 3.357-0.773-2.918 2.321z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="text-bold px-1 ">|</div>
            <p class="mt-0 text-xs sm:text-[16px] ">Oferta bomba</p>
          </div>
        </a>
      </div>
      <div class="px-2 w-full text-center  py-1 flex flex-col items-center justify-center ">
        <NuxtLink :to="`/productos/${props.id}`" @click="llenarDetalleProducto(props.id)"
          class="font-medium text-sm lg:text-lg h-10 leading-4 lg:leading-5 py-0 text-center hover:text-black cursor-pointer hover:underline transition duration-500 ease-in-out inline-block module line-clamp">
          {{ props.nombre }}
        </NuxtLink>

        <p class="text-gray-500 text-sm text-center">
          <span class=" text-xs sm:text-md font-bold ">Cod</span> {{ props.codigo }}
        </p>
        <p class="text-gray-500 text-sm text-center">
          <span class=" text-xs sm:text-md font-bold ">Unid</span> {{ props.medida }}
        </p>
        <p class="text-gray-500 text-sm text-center">
          <NuxtLink :to="props.fichatecnica" target="_blank" class="text-xs sm:text-sm lg:text-md font-bold text-elecktranegro underline cursor-pointer">
            Ver Ficha Técnica
          </NuxtLink>
        </p>
      </div>
      <div class="px-1 sm:px-6 py-3  flex flex-col gap-y-2    items-center justify-between sm:gap-x-1 bg-gray-100">

        <div class="hidden sm:block">
          <div type="button" @click="emit('actualizar-componente-externo')"
            class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">

            <span @click="minusQuantityItem()" class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  data-original="#000000"></path>
              </svg>
            </span>

            <span class="mx-2.5"> {{ cantstage }}</span>

            <span @click="addQuantityItem()" class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"></path>
              </svg>
            </span>

          </div>
        </div>

        <button @click="sendItemsToCart(props.id)"
          class="py-1  w-full sm:w-full   font-regular  border-[1.5px] box-button px-2 rounded-md  lg:mr-1 flex flex-row items-center justify-center">
          <span class="svg-container">
            <svg class="icon-svg" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 612 792"
              xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3.63568C3.80558 3.75 3.95425 3.86422 3.99803 4.02838L6.55576 13.6199C4.94178 14.0385 3.75 15.5051 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H5.37803C5.68691 15.6261 6.52034 15 7.5 15H18.7183C19.0051 15 19.2668 14.8364 19.3925 14.5785C20.5277 12.249 21.5183 9.83603 22.3527 7.35126C22.4191 7.15357 22.4002 6.93716 22.3005 6.75399C22.2008 6.57082 22.0294 6.43743 21.8273 6.38583C17.0055 5.15442 11.9536 4.5 6.75 4.5C6.39217 4.5 6.03505 4.5031 5.67868 4.50926L5.44738 3.64188C5.2285 2.82109 4.48515 2.25 3.63568 2.25H2.25Z" />
              <path
                d="M3.75 20.25C3.75 19.4216 4.42157 18.75 5.25 18.75C6.07843 18.75 6.75 19.4216 6.75 20.25C6.75 21.0784 6.07843 21.75 5.25 21.75C4.42157 21.75 3.75 21.0784 3.75 20.25Z" />
              <path
                d="M16.5 20.25C16.5 19.4216 17.1716 18.75 18 18.75C18.8284 18.75 19.5 19.4216 19.5 20.25C19.5 21.0784 18.8284 21.75 18 21.75C17.1716 21.75 16.5 21.0784 16.5 20.25Z" />
            </svg>
          </span>

          <p class="ml-1 text-xs sm:text-sm   "> Añadir a Cotizar</p>
        </button>



      </div>

  </div>


  <!-- /////modal -->
  <div class="w-full h-full ">
    <UModal v-model="estadomodal" fullscreen :ui="{ background: 'bg-dark-500 dark:bg-transparent' }">
      <UCard :ui="{
        base: 'h-full w-full flex flex-col',
        rounded: '',
        background: 'bg-dark-600 dark:bg-transparent',
        body: {
          base: 'grow'
        }
      }">

        <div class="flex items-center justify-between ">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          </h3>
        </div>

        <div class="w-full h-full grid grid-cols-1 place-items-center content-center ">

          <div class="w-[100%] md:w-[80%]  h-full ">

            <div class="w-full h-auto flex flex-col justify-start bg-white items-center py-0 md:py-4 md:pt-6 relative">

              <div class="absolute -top-8 right-0 md:-top-4 md:-right-8 cursor-pointer hover:bg-white hover:rounded-lg "
                @click="cerrarModal">

                <div class="w-8 h-8 ">
                  <svg width="full" height="full" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.78033 0.22199C1.48744 -0.0709041 1.01256 -0.0709041 0.71967 0.22199C0.426777 0.514883 0.426777 0.989757 0.71967 1.28265L2.43934 3.00232L0.71967 4.72199C0.426777 5.01488 0.426777 5.48976 0.71967 5.78265C1.01256 6.07554 1.48744 6.07554 1.78033 5.78265L3.5 4.06298L5.21967 5.78265C5.51256 6.07554 5.98744 6.07554 6.28033 5.78265C6.57322 5.48976 6.57322 5.01488 6.28033 4.72199L4.56066 3.00232L6.28033 1.28265C6.57322 0.989757 6.57322 0.514883 6.28033 0.22199C5.98744 -0.0709041 5.51256 -0.0709041 5.21967 0.22199L3.5 1.94166L1.78033 0.22199Z"
                      fill="#0F172A" />
                    <path
                      d="M1.78033 0.22199C1.48744 -0.0709041 1.01256 -0.0709041 0.71967 0.22199C0.426777 0.514883 0.426777 0.989757 0.71967 1.28265L2.43934 3.00232L0.71967 4.72199C0.426777 5.01488 0.426777 5.48976 0.71967 5.78265C1.01256 6.07554 1.48744 6.07554 1.78033 5.78265L3.5 4.06298L5.21967 5.78265C5.51256 6.07554 5.98744 6.07554 6.28033 5.78265C6.57322 5.48976 6.57322 5.01488 6.28033 4.72199L4.56066 3.00232L6.28033 1.28265C6.57322 0.989757 6.57322 0.514883 6.28033 0.22199C5.98744 -0.0709041 5.51256 -0.0709041 5.21967 0.22199L3.5 1.94166L1.78033 0.22199Z"
                      fill="#0F172A" />
                  </svg>
                </div>

              </div>



              <div class="flex flex-col justify-between items-start   gap-x-10 py-10" id="#interiores">
                <div class="hidden md:flex flex-row items-center justify-start  w-full px-8 gap-x-4  mt-0"
                  @click="cerrarModal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.25 12.0046C2.25 6.61986 6.61522 2.25464 12 2.25464C17.3848 2.25464 21.75 6.61986 21.75 12.0046C21.75 17.3894 17.3848 21.7546 12 21.7546C6.61522 21.7546 2.25 17.3894 2.25 12.0046ZM15.6103 10.1906C15.8511 9.85351 15.773 9.3851 15.4359 9.14434C15.0989 8.90358 14.6305 8.98165 14.3897 9.31871L11.1543 13.8483L9.53033 12.2243C9.23744 11.9314 8.76256 11.9314 8.46967 12.2243C8.17678 12.5172 8.17678 12.9921 8.46967 13.285L10.7197 15.535C10.8756 15.6909 11.0921 15.7703 11.3119 15.7521C11.5316 15.7339 11.7322 15.62 11.8603 15.4406L15.6103 10.1906Z"
                      fill="#0F172A" />
                  </svg>
                  <p class="font-josefS font-normal text-[#6B6969] text-sm md:text-xl lg:text-2xl py-6">Lo que incluyes
                    en tu cotización</p>
                </div>

                <div class="flex flex-row justify-between items-start    sm:gap-x-10  p-4 lg:p-10 ">
                  <span class="flex flex-row gap-x-1 xs:gap-x-3 h-28 ">
                    <img :src="props.imagen" alt="" srcset="">
                    <span class="flex flex-col  justify-between ">
                      <p
                        class="font-josefS font-bold text-graytitles text-xs xs:w-auto  lg:w-full xs:text-sm md:text-xl ">
                        {{ props.nombre }}
                      </p>
                    </span>
                  </span>
                  <span class="flex flex-col  place-items-end justify-between h-28">


                    <span class="flex flex-col md:flex-row justify-center items-end md:gap-x-6  ">
                      <div class="flex flex-col md:flex-row items-center">
                        <span @click="minusQuantityItemModal(props.id)"
                          class="cursor-pointer  p-2 rounded-lg border-2 border-elecktranegro/20">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"></path>
                          </svg>
                        </span>

                        <span class=" text-center w-8"> {{ cartST.items.find(u => u.id === props.id).quantity }}</span>

                        <span @click="addQuantityItemModal(props.id)"
                          class="cursor-pointer  p-2 rounded-lg border-2 border-elecktranegro/20">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"></path>
                          </svg>
                        </span>
                      </div>
                    </span>

                  </span>
                </div>


                <p class="w-full text-xs px-8 pb-2 text-[#A2A2A2] ">El producto seleccionado pueden agotarse
                  rápidamente. Cotizalos pronto.</p>
                <div class="flex flex-col lg:flex-row  gap-x-4 px-8 gap-y-4  w-full ">

                  <h2 @click="cerrarModal"
                    class="font-josefS w-full xl:w-96 font-bold text-lg md:text-2xl underline cursor-pointer  bg-white rounded-3xl h-10 text-slate-700  ">
                    Seguir comprando</h2>

                  <NuxtLink to="/mycart" @click="cerrarModal">
                    <button class="font-josefS w-full lg:w-96 font-bold text-sm md:text-xl bg-primaryc rounded-3xl h-10 text-black px-16
                                        bg-elecktraamarillo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryhov
                                    ">
                      Abrir Carrito
                    </button>
                  </NuxtLink>

                </div>

              </div>

            </div>


          </div>
        </div>
      </UCard>
    </UModal>
  </div>

</template>

<script setup>

const detailST = useDetailProduct()

const estadomodal = ref(false)

function cerrarModal() {
  estadomodal.value = false
  unselectVariant() //quita la seleccion de variante
}
function abrirModal() {
  // console.log(itemcart.value);     
  estadomodal.value = true
}


const props = defineProps({
  id: String,
  nombre: String,
  marca: String,
  quantity: Number,
  oferta: Boolean,
  medida: String,
  codigo: String,
  imagen: String,
  fichatecnica:String
})


const cartST = useCartStore()


const cantstage = ref(1)

function addQuantityItem() {
  cantstage.value = cantstage.value + 1
}

function minusQuantityItem() {
  cantstage.value = cantstage.value - 1
  if (cantstage.value < 1) {
    cantstage.value = 1
  }
}



function addQuantityItemModal(idprodselect) {

  let existItemSelectedInCart = cartST.items.find(u => u.id === idprodselect)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity + 1)
  }
}

function minusQuantityItemModal(idprodselect) {
  let existItemSelectedInCart = cartST.items.find(u => u.id === idprodselect)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity - 1)
  }
}


const itemcart = computed(() => {
  return {
    id: props.id,
    nombre: props.nombre,
    marca: props.marca,
    quantity: props.quantity,
    oferta: props.oferta,
    medida: props.medida,
    codigo: props.codigo,
    imagen: props.imagen

  }

})

function sendItemsToCart(idcart) {
  let existItemSelectedInCart = cartST.items.find(u => u.id === idcart)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity + cantstage.value)
    abrirModal()
  } else {
    cartST.addSeveralItems(itemcart.value, cantstage.value)
    abrirModal()
  }
  cantstage.value = 1

}





const llenarDetalleProducto = (idprod) => {
  const prodST = useProductStore()
  const aux = prodST.groupProducts.filter(u => u.id == idprod)
  detailST.llenarDatos(aux[0])

}

</script>


<style>
.module {
  /* width: 250px; */
  margin: 0 0 0.5em 0;
  overflow: hidden;
}

.module p {
  margin: 0;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>