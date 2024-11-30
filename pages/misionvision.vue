<template>
    <div class="overflow-hidden py-24 sm:py-32  w-full flex  justify-center">
      <div class="w-full px-auto px-6 lg:px-16 py-4  3xl:w-maxdesk 3xl:px-0 pt-24">

        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 pb-12 lg:mx-0 lg:max-w-none " >
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">Quienes Somos</p>
              <p class="mt-6 text-lg/8 text-gray-600">Somos una empresa que nace bajo la dirección de los socios fundadores, 
                que, a partir de trabajos por más de 13 años en distintos proyectos eléctricos con C & C Electroingenieria S.A.C.
                 a nivel nacional, vieron la necesidad de los clientes de tener un proveedor eléctrico de confianza, que brinde 
                 todos los materiales eléctricos de calidad y con envíos rápidos a todo el Perú.</p>
              <p class="mt-6 text-lg/8 text-gray-600">
              Sabemos que la prontitud de respuestas es fundamental para nuestros clientes; es por eso que, pensando en ellos,
                nace Trading Electric C & C S.A.C., una empresa proveedora de suministros eléctricos que brindará asesoría personalizada,
                respuestas rápidas y sobre todo a precios competitivos, siempre con una mejora continua en nuestros procesos, 
                contribuyendo al crecimiento de nuestro país.
              </p>
              
        </div>

        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Mision</p>
              <p class="mt-6 text-lg/8 text-gray-600">Ofrecer suministros eléctricos de alta calidad a los distintos sectores industriales a nivel nacional, buscando mejores soluciones para satisfacer las necesidades de nuestros clientes.</p>
              
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Vision</p>
              <p class="mt-6 text-lg/8 text-gray-600">Posicionarnos como una empresa proveedora de suministros eléctricos a nivel nacional.</p>
    
            </div>
          </div>
          <img src="~/assets/landing-imgs/valoresEmpresa.jpg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>

        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  pb-12 lg:mx-0 lg:max-w-none mt-6 lg:mt-0" >
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Valores</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none ">
                <div v-for="valor in valors" :key="valor.name" class="relative 2xl:pl-9">
                  <dt class="flex gap-x-2 font-semibold text-gray-900 ">
                    <div class="w-6 h-6 rounded-full bg-purple-700 mb-4" ></div>
                    <p>{{ valor.name }}</p>
                  </dt>
                  {{ ' ' }}
                  <dd class="inline pl-9">{{ valor.description }}</dd>
                </div>
              </dl>
        </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
  
  const valors = [
    {
      name: 'Confianza',
      description:
        'Garantizamos relaciones basadas en la seguridad, transparencia y cumplimiento de compromisos.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Resonsabilidad.',
      description: 'Actuamos con compromiso y seriedad en cada acción, asumiendo las consecuencias de nuestras decisiones.',
      icon: LockClosedIcon,
    },
    {
      name: 'Honestidad.',
      description: 'Promovemos la verdad y la integridad en todas nuestras interacciones.',
      icon: ServerIcon,
    },
    {
      name: 'Trabajo en equipo.',
      description: 'Fomentamos la colaboración y la unión de talentos para alcanzar objetivos comunes.',
      icon: ServerIcon,
    },
    {
      name: 'Lealtad.',
      description: 'Valoramos la fidelidad y el respeto hacia nuestros clientes, colaboradores y socios.',
      icon: ServerIcon,
    },
  ]
  </script>