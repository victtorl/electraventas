<template>
<div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap -mx-4">
        <!-- Product Images -->
        <div class="w-full md:w-1/2 px-4 mb-8">
            <div class="flex justify-center" >
                <img :src="detailST.detailproduct.data.imagenes[imgindex]" alt="Product"
                class="w-full h-auto lg:w-96 lg:h-96 object-fill  rounded-lg shadow-md mb-4" id="mainImage">
            </div>

          <div class="flex gap-4 py-4 justify-center overflow-x-auto">
            <img v-for="(img,i) in detailST.detailproduct.data.imagenes" :src="img" alt="Thumbnail 1"
                          class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                          @click="changeImage(i)">
          </div>
        </div>
  
        <!-- Product Details -->
        <div class="w-full md:w-1/2 px-4">
          <h2 class="text-3xl font-bold mb-2">{{ detailST.detailproduct.data.nombre }}</h2>
          <p class="text-gray-600 mb-4">{{ detailST.detailproduct.data.marca }}</p>
   
          <!-- <div class="mb-4">
            <span class="text-2xl font-bold mr-2">$349.99</span>
            <span class="text-gray-500 line-through">$399.99</span>
          </div> -->
          <!-- <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1detailST.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd" />
            </svg>
            <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
          </div> -->
          <p class="text-gray-700 mb-6">{{ detailST.detailproduct.data.description }}</p>
  
          <div class="mb-6 flex flex-col lg:flex-row justify-between items-center">
            <div class=" bg-elecktraamarillo rounded-l-full p-2 w-72 flex justify-center items-center gap-x-4" >
                <button
                            class="w-8 h-8 bg-elektraplomo rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                <h3 class="text-lg font-semibold ">Consulta disponibilidad</h3>
            </div>
            <div class="text-lg font-bold ">
                Stock disponible
            </div>
          </div>
  
          <!-- <div class="mb-6">
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" value="1"
                          class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div> -->
  
          <div class="flex space-x-4 mb-6">
            <button
                          class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                          Cotiza este producto
                      </button>
            <NuxtLink  :to="detailST.detailproduct.data.fichatecnica" target="_blank"
                          class="bg-gray-200 flex gap-2 items-center cursor-pointer text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                          <div class="w-8 h-8" >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C4.34314 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H19C20.6569 23 22 21.6569 22 20V10C22 9.73478 21.8946 9.48043 21.7071 9.29289L13.7071 1.29292C13.6114 1.19722 13.4983 1.1229 13.3753 1.07308C13.2572 1.02527 13.1299 1 13 1H6ZM12 3H6C5.44771 3 5 3.44771 5 4V20C5 20.5523 5.44772 21 6 21H19C19.5523 21 20 20.5523 20 20V11H13C12.4477 11 12 10.5523 12 10V3ZM18.5858 9.00003L14 4.41424V9.00003H18.5858Z" fill="#000000"></path> </g></svg>
                          </div>
                          Ver ficha técnica
                      </NuxtLink>
          </div>
  
          <div>
            <h3 class="text-lg font-semibold mb-2">Caracteristicas de producto:</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>{{ detailST.detailproduct.data.codigo }}</li>
              <li>{{ detailST.detailproduct.data.marca }}</li>
              <li>{{ detailST.detailproduct.data.medida }}</li>
              <li class="text-lg font-bold underline" v-if="detailST.detailproduct.data.oferta" >Este producto esta en oferta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
</div>
</template>

<script setup>

 const detailST=useDetailProduct()

const imgindex=ref(0)

function changeImage(index) {
         imgindex.value=index
}
</script>