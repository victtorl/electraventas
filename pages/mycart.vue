<template>

  <div class="pt-[180px] w-full flex justify-center">
    <div class="w-full px-6 lg:px-16  font-manrope 3xl:w-maxdesk 3xl:px-0">
      <section class=" py-8 antialiased dark:bg-gray-900 md:py-16  ">
        <div class="mx-auto   px-4 2xl:px-0 ">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl ">Resumen cotización</h2>

          <div class=" md:gap-6 lg:flex lg:items-start xl:gap-x-8 ">


            <div class="mx-auto w-full">
              <!-- items cart -->
              <div class="flex flex-col gap-y-6 ">
                <div v-for="item in cartST.items"
                  class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a class="shrink-0 md:order-1  flex items-center px-6">
                      <img class="h-20 w-20 dark:hidden" :src="item.imagen" alt="imac image" />
                      <img class="hidden h-20 w-20 dark:block" :src="item.imagen" alt="imac image" />
                    </a>


                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                      <div class="flex items-center">
                        <button @click="cartST.updateQuantity(item.id,item.quantity-1)" type="button"
                          id="decrement-button" data-input-counter-decrement="counter-input"
                          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h16" />
                          </svg>
                        </button>
                        <p
                          class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                          {{ item.quantity }}
                        </p>
                        <button @click="cartST.updateQuantity(item.id,item.quantity+1)" type="button"
                          id="increment-button" data-input-counter-increment="counter-input"
                          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>

                    </div>

                    <div
                      class="w-full min-w-0 flex flex-col justify-between space-y-4 md:order-2 md:max-w-[200px]  px-6">
                      <a class="text-base font-medium text-gray-900 hover:underline dark:text-white  ">{{ item.nombre
                        }}</a>

                      <div class="flex items-center gap-4 ">

                        <button @click="cartST.removeItem(item.id)" type="button" class="inline-flex items-center ">
                          <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6" />
                          </svg>
                          <span
                            class="text-sm font-medium text-red-500 hover:underline dark:text-red-500">Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end items cart -->
            </div>



            <div class="mx-auto  w-full" id="element-to-print">
              <div
                class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">Lista detallada</p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dh class="flex items-center justify-between gap-4">
                      <dt class="text-base font-medium text-gray-900 dark:text-white w-64 ">Nombre</dt>
                      <dt class="text-base font-medium text-gray-900 dark:text-white  w-16 "> Medida</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white w-16 ">Cantidad</dd>
                    </dh>
                    <dl class="flex items-center justify-between gap-4 " v-for="item in cartST.items">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 w-64 ">{{item.nombre}}</dt>
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400   w-16 "> {{item.medida}}</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white w-16 text-end ">{{ item.quantity }}
                      </dd>
                    </dl>
                  </div>

                  <dl
                    class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total items</dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">{{ cartST.totalItems }}</dd>
                  </dl>
                </div>

                <a href="#"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                  to Checkout</a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> o </span>
                  <NuxtLink to="/productos" title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Agregar otros productos
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>


  </div>

  <!-- <button class="w-64 h-12 px-4 py-2 bg-red-500" @click="savepdf">opcion PDF</button> -->
  <!-- <button class="w-64 h-12 px-4 py-2 bg-green-dark" @click="sendToWhatsApp">Opcion Wsp</button> -->
  <div class="w-full  flex justify-end pb-8">
    <div class="w-full px-6 lg:px-16  flex justify-center font-manrope 3xl:w-maxdesk 3xl:px-0" v-if="cartST.totalItems>0" >
      <div @click="abrirModal"
        class="home-two-btn-bg w-64  rounded-2xl py-3.5 group   flex flex-row justify-center items-center bg-elecktraamarillo hover:bg-elecktranegro cursor-pointer text-black mt-2.5 before:bg-it-black after:bg-it-black">
        <span 
          class="relative z-10 text-base font-semibold text-black transition-all duration-300 group-hover:text-elecktraamarillo  font-inter">
          Enviar Cotización
        </span>
      </div>
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

              <div class="absolute -top-0 right-0 md:-top-0 md:-right-0 cursor-pointer hover:bg-elecktraamarillo z-20 hover:rounded-lg"
                @click="cerrarModal">

                <div class=" ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </div>

              </div>


              <div class="isolate bg-white px-6  lg:px-8 ">
                <div
                  class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                  aria-hidden="true">
                  <div
                    class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="mx-auto max-w-2xl text-center py-4">
                  <p class="mt-2 text-lg/8 text-gray-600">Completa los campos para enviar tu cotización
                  </p>
                </div>

                <form action="#" method="POST" class="mx-auto  max-w-xl ">
                  <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Nombres</label>
                      <div class="mt-2.5">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" required v-model="stateform.nombre"
                          :class="{ 'border-red-500 border-2': v$.nombre.$errors.length }"
                          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6"/>
                        </div>
                    </div>
                    <div>
                      <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Apellidos</label>
                      <div class="mt-2.5">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" required v-model="stateform.apellido"
                        :class="{ 'border-red-500 border-2': v$.apellido.$errors.length }"
                          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
                        </div>
                    </div>
 
                    <div class="sm:col-span-2">
                      <label for="email" class="block text-sm/6 font-semibold text-gray-900">Correo</label>
                      <div class="mt-2.5">
                        <input type="email" name="email" id="email" autocomplete="email" required  v-model="stateform.email"
                        :class="{ 'border-red-500 border-2': v$.email.$errors.length }"
                          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Teléfono</label>
                      <div class="relative mt-2.5">

                        <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" required v-model="stateform.telefono"
                        :class="{ 'border-red-500 border-2': v$.telefono.$errors.length }"
                          class="block w-full rounded-md border-0 px-3.5 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-10" >
                    <button type="submit"  @click="sendToWhatsApp"
                      class="block w-full rounded-md bg-main-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">COTIZAR</button>
                  </div>
                </form>

              </div>

            </div>


          </div>
        </div>
      </UCard>
    </UModal>
  </div>
  <!-- modal end -->



</template>




<script setup>
import { FwbButton, FwbModal } from 'flowbite-vue'
import html2pdf from 'html2pdf.js'
import { useVuelidate } from '@vuelidate/core'
import { required,helpers,email } from '@vuelidate/validators'

const cartST=useCartStore()





function savepdf(){
  html2pdf(document.getElementById('element-to-print')),{
    margin:1,
    filename:'i-was-html.pdf'
  }

}

//modal
const estadomodal = ref(false)

function cerrarModal() {
  estadomodal.value = false
  unselectVariant() //quita la seleccion de variante
}
function abrirModal() {
  // console.log(itemcart.value);     
  estadomodal.value = true
}

//formulario

const stateform=reactive({
  nombre:'',
  apellido:'',
  email:'',
  telefono:''
})

const rules = computed(() => {
    return {
        nombre: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        apellido: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        email: {
            required: helpers.withMessage('Ingrese un correo', required),
             email: helpers.withMessage('Ingrese un correo válido', email),
            // $autoDirty: true ,
        },
        telefono: {
            required: helpers.withMessage('Ingrese una contraseña', required),
            // $autoDirty: true ,
        },
    }
})

const v$ = useVuelidate(rules, stateform);


//SEND DETAIL CARRITO
   const sendToWhatsApp=()=> {
    v$.value.$touch();
    if (!v$.value.$error) {
    const cartST=useCartStore()
      let message = `🛒 *Detalle del Carrito de Compras:*\n *Nombre: ${stateform.nombre} ${stateform.apellido}* \n *Correo: ${stateform.email}*\n *Mobil: ${stateform.telefono}*\n`;
      cartST.items.forEach(item => {
        message += `${item.nombre} || ${item.codigo} ||  X${item.quantity}\n`;
      });
      message += `\n*Total productos: ${cartST.totalItems}*`;

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "+51941103001"; // Número con código de país  //
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      cartST.clearCart()
      window.open(whatsappUrl, "_blank");
    }
   }
  


</script>