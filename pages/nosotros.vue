<template>

  <div class="pt-10 sm:pt-16 lg:pt-[180px]" >
    <QuienesSomos/>
  </div>


<section class="w-full   flex justify-center "  >
      <div class="w-full px-6 lg:px-16  font-manrope 3xl:w-maxdesk 3xl:px-0  ">
        <div class="grid grid-cols-3 gap-3 md:grid-cols-6 gap-y-10  ">
          <div class="col-span-3 #ffcc03">
            <div class="max-w-[476px]">
              <div>
              <h1 class="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                Misión
              </h1>
              <p class="pt-5 text-elecktranegro sm:pt-10">
                Ofrecer suministros eléctricos de alta calidad a los distintos sectores industriales a nivel nacional, buscando mejores soluciones para satisfacer las necesidades de nuestros clientes.
              </p>
             </div>

            </div>

          </div>
          
          <div class="col-span-3 #ffcc03">
            <div class="max-w-[476px]">
              <div>
              <h1 class="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                Visión
              </h1>
              <p class="pt-5 text-elecktranegro sm:pt-10">
                Posicionarnos como una empresa proveedora de suministros eléctricos a nivel nacional.
              </p>
             </div>
  
            </div>

          </div>
          
                     
          
        </div>
      </div>
      
</section>




<section id="features">
      <div class="mx-auto px-6 lg:px-16 w-full pt-6 lg:pt-10 font-manrope 3xl:w-maxdesk 3xl:px-0">
        <h1 class="px-5 bg-elecktraamarillo border-blue-sass/20 text-elecktranegro font-medium rounded-[30px] w-fit mx-auto">
          Nuestos valores fundamentales
        </h1>
        <h2 class="sm:text-32 text-24 font-semibold text-main-black mb-[32px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          En cada acción y decisión, enfocamos compromiso e integridad.
        </h2>
        <div class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 min-h-[303px] gap-[30px] mt-6 sm:mt-[70px]">
      
          <div v-for="item in infopST.infopage.itemsvalores" class="col-span-3 flex items-center h-[246px] relative mb-6">
            <div class="group hover:absolute border border-elecktraamarillo px-[29px] py-[30px] rounded-2xl bg-black  -right-0 h-[246px] hover:h-[290px] transition-all duration-300 hover:bg-elecktraamarillo/5 overflow-hidden h5-story_slider_active_card">
              <div class="">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_460_32152)">
                    <path
                      d="M22.5 45C33.9018 44.9305 43.165 35.7757 43.3687 24.3755C43.5724 12.9753 34.642 3.49542 23.25 3.01874V1.44824C23.2522 0.928027 22.9766 0.446197 22.527 0.184486C22.0973 -0.0653552 21.566 -0.0627718 21.1388 0.191236L17.2103 2.49299C16.7697 2.7586 16.5003 3.23552 16.5003 3.74999C16.5003 4.26446 16.7697 4.74137 17.2103 5.00699L21.1395 7.30874C21.5666 7.56229 22.0975 7.56487 22.527 7.31549C22.9766 7.05378 23.2522 6.57195 23.25 6.05174V4.51874C33.9147 4.92922 42.268 13.8368 41.9936 24.5058C41.7191 35.1749 32.9188 43.6411 22.2471 43.5027C11.5754 43.3642 2.99763 34.6726 3 24C3 23.5858 2.66421 23.25 2.25 23.25C1.83579 23.25 1.5 23.5858 1.5 24C1.51323 35.5925 10.9075 44.9868 22.5 45ZM18.0158 3.75974L21.75 1.57499L21.7658 3.67049C21.7591 3.69669 21.7539 3.72323 21.75 3.74999C21.754 3.78034 21.7601 3.81041 21.768 3.83999L21.7845 5.94899L18.0158 3.75974Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M2.36068 21.7418C2.39863 21.7477 2.43702 21.7504 2.47543 21.75C2.84674 21.7496 3.16184 21.4775 3.21643 21.1103C3.25243 20.8673 3.29143 20.6265 3.33793 20.3873C3.40693 19.9833 3.13883 19.5987 2.7359 19.5237C2.33296 19.4486 1.94443 19.711 1.86343 20.1128C1.81543 20.37 1.77118 20.6295 1.73293 20.8898C1.67197 21.2981 1.95257 21.679 2.36068 21.7418Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M3.14961 17.9572C3.33718 18.0237 3.5435 18.0129 3.72313 17.9272C3.90277 17.8416 4.04099 17.688 4.10736 17.5004C4.19386 17.2574 4.28436 17.0167 4.37886 16.7782C4.47827 16.5292 4.43733 16.2462 4.27146 16.0356C4.10559 15.8251 3.83999 15.719 3.57471 15.7574C3.30943 15.7957 3.08477 15.9727 2.98536 16.2217C2.88536 16.4782 2.78811 16.7374 2.69361 16.9994C2.62705 17.1869 2.63771 17.3931 2.72323 17.5727C2.80875 17.7524 2.96212 17.8906 3.14961 17.9572Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M4.7916 14.1405C4.96155 14.2442 5.16572 14.276 5.35915 14.229C5.55258 14.182 5.71939 14.0601 5.82285 13.89C5.97285 13.6455 6.1266 13.4048 6.2841 13.1678C6.51482 12.8236 6.42281 12.3575 6.0786 12.1268C5.73439 11.896 5.26832 11.9881 5.0376 12.3323C4.8666 12.5878 4.7011 12.847 4.5411 13.11C4.32577 13.4638 4.43792 13.9251 4.7916 14.1405Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M7.50035 11.1457C7.71201 11.1458 7.91386 11.0564 8.0561 10.8997C8.24735 10.6882 8.4446 10.4812 8.6456 10.2779C8.93742 9.98383 8.93557 9.50886 8.64148 9.21705C8.34738 8.92523 7.87241 8.92708 7.5806 9.22117C7.3631 9.44017 7.1511 9.66367 6.9446 9.89167C6.74515 10.1115 6.69408 10.4282 6.81433 10.6996C6.93459 10.9709 7.20355 11.1458 7.50035 11.1457Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M10.4996 8.43737C10.6601 8.43624 10.816 8.38366 10.9444 8.28737C11.1444 8.14087 11.3459 7.99812 11.5489 7.85912C11.8916 7.62654 11.9809 7.16013 11.7484 6.81737C11.5158 6.47461 11.0494 6.38529 10.7066 6.61787C10.4851 6.76787 10.2674 6.92212 10.0534 7.08062C9.78968 7.27218 9.67991 7.61212 9.78174 7.92172C9.88357 8.23132 10.1737 8.43972 10.4996 8.43737Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M13.6282 6.54222C13.7417 6.54214 13.8537 6.51651 13.9559 6.46722C14.1559 6.37022 14.3559 6.27672 14.5559 6.18672C14.8006 6.0774 14.9683 5.84587 14.9959 5.57934C15.0236 5.31282 14.9069 5.05179 14.6899 4.89459C14.4729 4.73739 14.1886 4.7079 13.9439 4.81722C13.7264 4.91472 13.5119 5.01447 13.2982 5.11722C12.983 5.26986 12.8154 5.62028 12.8944 5.96143C12.9734 6.30259 13.278 6.54367 13.6282 6.54222Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M9.75 35.25H35.25C35.6642 35.25 36 34.9142 36 34.5C36 34.0858 35.6642 33.75 35.25 33.75H33V18C33 17.1716 32.3284 16.5 31.5 16.5H30C29.1716 16.5 28.5 17.1716 28.5 18V33.75H27V21C27 20.1716 26.3284 19.5 25.5 19.5H24C23.1716 19.5 22.5 20.1716 22.5 21V33.75H21V24C21 23.1716 20.3284 22.5 19.5 22.5H18C17.1716 22.5 16.5 23.1716 16.5 24V33.75H15V28.5C15 27.6716 14.3284 27 13.5 27H12C11.1716 27 10.5 27.6716 10.5 28.5V33.75H9.75C9.33579 33.75 9 34.0858 9 34.5C9 34.9142 9.33579 35.25 9.75 35.25ZM30 18H31.5V33.75H30V18ZM24 21H25.5V33.75H24V21ZM18 24H19.5V33.75H18V24ZM12 28.5H13.5V33.75H12V28.5Z"
                      fill="#ffcc03"
                    />
                    <path
                      d="M10.6058 23.6332C10.7409 23.8605 10.9857 23.9998 11.2501 23.9999C11.3848 24.0002 11.5171 23.9636 11.6326 23.8942L30.3428 12.7859L30.0226 14.0677C29.9743 14.2607 30.0047 14.4651 30.1071 14.6357C30.2095 14.8063 30.3755 14.9293 30.5686 14.9774C30.6279 14.9926 30.6889 15.0001 30.7501 14.9999C31.0938 14.9996 31.3933 14.7656 31.4768 14.4322L32.2268 11.4322C32.2751 11.2392 32.2447 11.0348 32.1423 10.8642C32.0399 10.6936 31.8739 10.5706 31.6808 10.5224L28.6808 9.77245C28.4184 9.70049 28.1376 9.77629 27.9471 9.97053C27.7565 10.1648 27.6861 10.447 27.7631 10.7079C27.8401 10.9689 28.0524 11.1677 28.3178 11.2274L29.5178 11.5275L10.8668 22.6049C10.6958 22.7067 10.5722 22.8722 10.5233 23.065C10.4743 23.2579 10.504 23.4622 10.6058 23.6332Z"
                      fill="#ffcc03"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_460_32152">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1 class="text-18 font-semibold text-white group-hover:text-black mt-5 mb-2.5">
                {{ item.title }}
              </h1>
              <p class="text-paragraph line-clamp-3">
                {{ item.description }}
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="features">
      <div class="feature-section-wrapper bg-elecktranegro w-full pb-10 my-10 relative overflow-x-hidden">
        <div class="mx-auto px-6 lg:px-16 w-full font-manrope 3xl:w-maxdesk 3xl:px-0">
          <div class="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-[140px] items-center">
            <div class="w-full">
              <div class="mb-5 section-title-top-tag-two">
                <span>Our Cool Features</span>
              </div>
              <div class="mb-[50px]">
                <h2 class="font-semibold text-white text-24 sm:text-48">
                  ¿Porque confiar en nosotros?
                </h2>
              </div>
              <div class="w-full">
                <div v-for=" item in infopST.infopage.itemsconfianza" data-aos="fade-up" class="feature-item-h-4">
                  <div class="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div class="w-[30px]">
                     
                    </div>

                    <div class="flex-1">
                      <h3 class="mb-3 font-semibold leading-none text-white text-22">
                       {{item.title}}
                      </h3>
                      <p class="text-white opacity-50">
                       {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  class="feature-item-h-4"
                >
                </div>
               
              </div>
            </div>
            <div data-aos="fade-left" class="w-full">
              <div class="px-5 py-4 md:px-[74px] md:py-[67px] rounded-[20px] border border-[#231b2f] bg-elektraplomo">
                <img
                  src="/assets/imgs/confianza.jpg"
                  alt=""
                  class="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute z-10 shape-1 left-40 top-96">
          <img src="/assets/images/home-four/shape-1.webp" alt="" />
        </div>
        <div class="absolute z-10 shape-2 right-96 top-96">
          <img src="/assets/images/home-four/shape-2.webp" alt="" />
        </div>
        <div class="shape-3 absolute left-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-3.webp" alt="" />
        </div>
        <div class="shape-4 absolute right-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-4.webp" alt="" />
        </div>
      </div>
    </section>


</template>


<script setup>

const infopST=useProductStore()

const valores=ref([
  {
    title:'Confianza',
    description:'Construimos relaciones sólidas basadas en el respeto y la transparencia.'
  },
  {
    title:'Responsabilidad',
    description:'Cumplimos nuestros compromisos con dedicación y profesionalismo.'
  },
  {
    title:'Trabajo en equipo:',
    description:'Logramos más unidos, valorando la colaboración y las ideas.'
  },
  {
    title:'Honestidad',
    description:'Actuamos con integridad, manteniendo siempre la verdad como principio.'
  },
])

</script>