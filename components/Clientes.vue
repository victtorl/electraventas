<template>
    <div class="flex  justify-center w-full font-manrope text-white text-md" id="#agendarcita" >
      <div class="px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0  flex justify-between flex-col items-center ">
        
        <span class="flex justify-center items-center gap-x-2">
            <span class="w-16 h-1 border-2 border-blue-600"></span>
            <p class=" text-[32px] ">Nuestros clientes confian en nosotros</p>
        </span>
        <!-- <h4 class="text-sm sm:text-base lg:text-2xl xl:text-3xl xl:leading-8 pt-4 font-bold text-black " >Nuestros clientes C&C</h4>
        <p class="" >Contamos con una gran variedad de clientes satisfechos con nuestros servicios y productos brindados con la mejor calidad.</p> -->

        <div>
            <LogoSliderFour/>
        </div>
        <NuxtLink to="/blog">
            <button type="button"
                class="border-[1.5px] border-white  hover:bg-blue-600 hover:border-yellow-400 text-white px-0 lg:px-2 xl:px-4  py-2 text-base lg:text-sm xl:text-xl font-normal  text-blackgio shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out delay-50 hover:bg-verdeoscuro ">
                Ser un nuevo cliente
            </button>
        </NuxtLink>

      </div>
    </div>
</template>

