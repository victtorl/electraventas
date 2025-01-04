<template>

  <div v-if="ofertaCaduca(props.oferta)" class="border-2 border-elecktranegro/20  flex flex-col" >  
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
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 433.961 433.961" xml:space="preserve" fill="#FFFFFF" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M166.362,164.256c-6.652-5.561-16.232-4.853-21.848,1.012c-1.426,0.898-2.81,1.911-3.934,3.273 c-5.876,7.121-4.098,18.236,2.754,24.053C161.142,207.712,184.21,179.175,166.362,164.256z"></path> <path d="M271.025,230.208c-1.112,0.154-2.158,0.503-3.204,0.849c-0.345,0.061-0.678,0.178-1.023,0.271 c-0.027,0.012-0.058,0.019-0.085,0.03c-3.777,1.057-7.353,3.951-9.358,7.973c-0.009,0.015-0.004,0.031-0.014,0.046 c-2.994,4.971-3.666,11.197-0.396,16.869c0.174,0.303,0.436,0.512,0.628,0.8c2.211,4.721,5.922,8.759,11.006,10.641 c11.87,4.391,25.442-3.255,26.639-16.189C296.44,238.324,283.46,228.489,271.025,230.208z"></path> <path d="M430.9,186.517c2.399-3.358,0.387-7.897-2.609-9.952c-11.774-8.072-29.615-17.682-45.254-20.936 c10.21-10.754,18.758-24.241,27.518-35.667c2.901-3.783-1.039-9.529-5.374-9.361c-7.976,0.308-15.957,0.555-23.928,0.966 c-7.531,0.388-15.91,1.977-23.346,0.517c-0.565-0.111-1.076-0.044-1.604-0.034c4.512-11.851,8.505-23.941,12.606-35.932 c2.102-6.15,5.733-15.511-2.468-19.109c-7.698-3.38-22.116,3.728-29.471,5.893c-6.136,1.807-12.277,3.854-18.369,6.014 c-1.033,0.27-2.062,0.541-3.093,0.811c1.507-15.139,2.098-30.348,1.211-45.567c-0.25-4.286-5.269-8.345-9.387-5.388 c-13.89,9.982-27.862,20.2-41.029,31.194c-4.819-15.143-10.132-30.177-15.387-45.132c-1.409-4.009-7.516-6.98-10.724-2.832 c-7.972,10.301-18.38,21.214-25.433,32.914c-8.332-11.934-19.085-22.988-28.485-32.77c-3.634-3.779-9.89-1.778-11.345,2.994 c-5.059,16.608-11.918,32.259-18.984,48.036c-3.485-2.927-7.035-5.804-10.306-8.796c-8.032-7.345-15.794-14.976-23.454-22.706 c-2.621-2.644-8.326-2.535-10.008,1.289c-4.672,10.64-3.177,23.02-2.341,34.378c0.316,4.304,0.347,10.025,1.039,15.513 c-12.926-4.998-26.006-9.678-38.888-14.562c-5.05-1.913-9.367,3.704-8.273,8.271c3.805,15.862,7.198,32.156,12.651,47.613 c-15.207-1.118-30.225-2.25-45.341-5.328c-5.315-1.082-10.795,4.547-7.478,9.724c7.921,12.349,16.566,25.532,26.627,36.982 c-4.399,1.662-8.693,3.745-12.882,5.568c-10.779,4.691-21.31,9.882-31.66,15.454c-5.179,2.789-4.494,9.961,0,12.908 c11.405,7.479,22.445,15.473,33.52,23.415c-11.231,8.982-22.236,18.229-33.836,26.758c-4.641,3.413-4.228,10.421,1.608,12.314 c9.106,2.954,18.157,6.066,27.114,9.445c5.038,1.9,10.075,4.268,15.183,6.299c-9.091,12.469-16.989,25.883-25.675,38.614 c-3.046,4.461,1.014,10.471,6.011,10.477c15.011,0.019,29.991,0.519,44.978,1.016c-3.381,13.788-6.416,27.669-9.892,41.437 c-1.206,4.765,3.391,10.561,8.597,8.6c9.866-3.718,19.732-7.434,29.6-11.152c2.839-1.07,6.697-2.025,10.368-3.314 c-2.31,16.337-1.896,33.52-3.342,49.779c-0.392,4.427,4.543,7.384,8.401,6.399c9.607-2.456,16.264-9.595,24.233-15.133 c5.307-3.686,11.561-6.567,17.194-10.063c3.578,14.977,9.709,29.851,13.639,44.552c1.682,6.304,9.598,6.486,12.984,1.697 c9.118-12.901,19.155-26.031,27.128-39.795c2.138,3.431,4.443,6.775,6.61,10.11c5.64,8.676,11.302,17.356,17.198,25.86 c2.721,3.927,9.602,5.099,12.045,0c6.074-12.683,11.712-25.714,16.999-38.841c3.311,3.661,6.732,7.138,10.06,10.1 c7.567,6.736,20.669,19.405,31.482,16.334c1.927-0.546,2.986-2.036,3.629-3.699c0.714-0.788,1.269-1.675,1.433-2.687 c2.867-17.58,5.188-35.734,5.017-53.647c5.187,2.663,10.764,4.804,16.012,6.875c9.934,3.921,19.915,7.722,29.874,11.575 c4.601,1.781,10.114-3.71,8.32-8.32c-3.65-9.371-7.337-18.677-10.317-28.292c-1.653-5.33-2.926-10.856-4.501-16.253l-0.34-4.626 c15.323,1.623,31.489,0.63,46.574,0.85c5.202,0.076,9.073-6.145,6.123-10.67c-7.596-11.662-14.967-25.865-24.271-37.151 c4.303-1.296,8.542-3.035,12.66-4.434c8.951-3.043,17.819-6.288,26.692-9.547c5.838-2.145,7.604-10.158,1.778-13.607 c-11.776-6.974-22.718-14.758-33.598-22.785C406.765,209.243,421.629,199.489,430.9,186.517z M139.49,223.502 c-3.415-1.653-6.861-3.819-10.361-6.933c-25.321-22.546-22.803-67.639,11.554-79.399c31.94-10.934,68.499,10.058,61.131,47.067 C195.664,215.121,166.665,224.006,139.49,223.502z M182.891,293.879c-7.434-0.236-14.949,0.287-22.27,0.892 c-4.311,0.356-8.894,0.662-13.415,1.258c40.837-51.728,72.055-108.062,105.152-164.243c6.096-0.35,12.175-0.884,18.276-1.585 C234.957,179.681,205.364,238.656,182.891,293.879z M273.054,294.853c-10.969,0.817-20.664-0.961-28.362-5.711 c-18.271-18.604-22.789-48.865-3.368-70.01c21.879-23.824,61.167-18.279,75.303,10.661 C331.913,261.085,304.676,292.496,273.054,294.853z"></path> <path style="stroke:#E71D73;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;" d="M269.77,372.764 c0.058,0,0.058-0.091,0-0.091"></path> </g> </g></svg>
            </div>
            <div class="text-bold px-1 ">|</div>
            <p class="mt-0 text-xs sm:text-[16px] ">Oferta especial</p>
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

              <div class="absolute -top-0 right-0 md:-top-0 md:-right-0 cursor-pointer hover:bg-elecktraamarillo  hover:rounded-lg"
                @click="cerrarModal">

                <div class=" ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
                      <div class="flex flex-row md:flex-row items-center">
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

const ofertaCaduca=(isofert) => {
   if(isofert){
     return isActiveOffer() 
   }else{
    return true
   }

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