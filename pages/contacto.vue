<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div class="isolate bg-white px-6 py-24  sm:py-52 lg:px-8 ">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contácto</h2>
        <p class="mt-2 text-lg/8 text-gray-600">¡Contáctanos! Estamos aquí para ayudarte con lo que necesites.</p>
      </div>
      <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Nombre Completo</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" v-model="state.nombre" id="first-name" required autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
            </div>
            <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.nombre.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
              </div>
          </div>
          <div class="sm:col-span-2">
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">RUC O DNI</label>
            <div class="mt-2.5">
              <input type="number" inputmode="numeric" name="first-name" v-model="state.rucdni" id="first-name" required autocomplete="given-name" class="block w-full no-spinners rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
            </div>
            <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.rucdni.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
              </div>
          </div>

          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Correo</label>
            <div class="mt-2.5">
              <input type="email" name="email" v-model="state.correo" id="email" required autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
            </div>
            <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.correo.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Teléfono</label>
            <div class="relative mt-2.5"> 
              <input type="tel" name="phone-number" v-model="state.numerotelefono" id="phone-number" required autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo  sm:text-sm/6" />
            </div>
            <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.numerotelefono.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Mensaje(opcional)</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" v-model="messageta" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
            </div>
          </div>
          <!-- <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="agreed" :class="[agreed ? 'bg-main-black' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-elecktraamarillo']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </div>
            <SwitchLabel class="text-sm/6 text-gray-600">
              Acepto terminos y condiciones y
              {{ ' ' }}
              <a href="#" class="font-semibold text-main-black">privaciadad &nbsp;politicas</a>.
            </SwitchLabel>
          </SwitchGroup> -->
        </div>
        <div class="mt-10 w-full flex justify-center ">
          <!-- <button type="submit" class="block w-full rounded-md bg-main-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-elecktraamarillo">Enviar</button> -->
          <button @click="enviarFormulario" type=submit class="home-two-btn-bgblack py-2.5 px-4 w-full group bg-elecktraamarillo border-none   cursor-pointer">
          <span  class="relative z-10 text-base  font-semibold text-elecktranegro transition-all duration-300 group-hover:text-white  font-inter">
              Enviar
          </span>
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup="ts">
  import { ref } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import { helpers, required, email,minLength } from '@vuelidate/validators'
  import useVuelidate from '@vuelidate/core'
  
  const agreed = ref(false)



  const state=reactive({
    nombre:'',
    rucdni:'',
    correo:'',
    numerotelefono:'',
})

  const messageta=ref('')


const mustBeTrue = (value) => value == true



const rules = computed(() => {
    return {
        nombre: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        rucdni: {
            required: helpers.withMessage('Este campo es requerido', required),
             minLength: helpers.withMessage(' debe tener mínimo 8 caracteres', minLength(8)),
            // $autoDirty: true ,
        },

        correo: {
            required: helpers.withMessage('Ingrese un correo', required),
            email: helpers.withMessage('Ingrese un correo válido', email),
            // $autoDirty: true ,
        },
        numerotelefono: {
            required: helpers.withMessage('Ingrese un número de telefono', required),
            // $autoDirty: true ,
        },
    }
})

const v$ = useVuelidate(rules, state);


  const enviarFormulario=(e) => {
    //si todo march bien
    console.log(v$)
    v$.value.$touch();
    if (!v$.value.$error) {
        peticionAppScriptForm()
        e.preventDefault()
       state.nombre=""
       state.rucdni=""
       state.correo=""
       state.numerotelefono=""
       messageta.value=''
       v$.value.$reset()
       useNuxtApp().$toast.success("Se han registado tus datos con éxito")
       console.log('registrado con exito');
       

    }else{
        e.preventDefault();
        console.log('Errores');
        useNuxtApp().$toast.error("Complete los campos necesarios")
    }

}
  //en la configuración de google debe ser el autor con los datos con los que se ejecute y cualquier usuario not need
  function peticionAppScriptForm() {
    var url = "https://script.google.com/macros/s/AKfycbwAXFY1iIT4e_v_aYdyMwikICjdhVDz9xgvgHkCz9ABczMng5UtCTcWqwX3iparBCTT/exec";
                
    fetch(url, {
        mode: "no-cors",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:state.nombre,
            rucdni:state.rucdni,
            email:state.correo,
            phone: state.numerotelefono,
            msjta:messageta.value,
            word:'label_any_tec'
        })
    })
        .then(function (res) {
            console.log(res);
            return res
        })
        .then(function (res) {
            console.log(res.text());
        })
        .catch(function (error) {
            console.log('Request failure: ', error);
        });
}

  </script>



<style>
 .no-spinners {
         -moz-appearance: textfield;
      }
      
      .no-spinners::-webkit-outer-spin-button,
      .no-spinners::-webkit-inner-spin-button {
         -webkit-appearance: none;
         margin: 0;
      }
</style>