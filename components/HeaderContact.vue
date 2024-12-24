<template>
        <div class="hidden lg:flex justify-center text-elecktranegro bg-elecktraamarillo text-xs lg:text-sm  " >
          <div class="px-auto px-6 lg:px-16 w-full 3xl:w-maxdesk 3xl:px-0  flex flex-col items-center md:flex-row  justify-between">
            <ul class="flex gap-x-6 items-center justify-between text-center my-2" >
                <li class="flex flex-col lg:flex-row items-center gap-x-1  gap-y-2 h-16 md:h-auto" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 18.75C10.0858 18.75 9.75 19.0858 9.75 19.5C9.75 19.9142 10.0858 20.25 10.5 20.25H13.5C13.9142 20.25 14.25 19.9142 14.25 19.5C14.25 19.0858 13.9142 18.75 13.5 18.75H10.5Z" fill="#0F172A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.625 0.75C6.76104 0.75 5.25 2.26104 5.25 4.125V19.875C5.25 21.739 6.76104 23.25 8.625 23.25H15.375C17.239 23.25 18.75 21.739 18.75 19.875V4.125C18.75 2.26104 17.239 0.75 15.375 0.75H8.625ZM7.5 4.125C7.5 3.50368 8.00368 3 8.625 3H9.75V3.375C9.75 3.99632 10.2537 4.5 10.875 4.5H13.125C13.7463 4.5 14.25 3.99632 14.25 3.375V3H15.375C15.9963 3 16.5 3.50368 16.5 4.125V19.875C16.5 20.4963 15.9963 21 15.375 21H8.625C8.00368 21 7.5 20.4963 7.5 19.875V4.125Z" fill="#0F172A"/>
                    </svg>
                    <h4 class="w-36 md:w-auto font-manrope text-[15px]" >{{ contact.phone }}</h4>
                </li>
                <li class="flex flex-col lg:flex-row items-center gap-x-1  gap-y-2 h-16 md:h-auto" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.75 6.75232V17.2523C21.75 18.495 20.7426 19.5023 19.5 19.5023H4.5C3.25736 19.5023 2.25 18.495 2.25 17.2523V6.75232M21.75 6.75232C21.75 5.50968 20.7426 4.50232 19.5 4.50232H4.5C3.25736 4.50232 2.25 5.50968 2.25 6.75232M21.75 6.75232V6.99503C21.75 7.77637 21.3447 8.50176 20.6792 8.91126L13.1792 13.5266C12.4561 13.9717 11.5439 13.9717 10.8208 13.5266L3.32078 8.91126C2.65535 8.50177 2.25 7.77637 2.25 6.99503V6.75232" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 class="w-36 md:w-auto font-manrope text-[15px]" >{{ contact.email }}</h4>
                </li>

                <li class="flex flex-col lg:flex-row items-center gap-x-1  gap-y-2 h-16 md:h-auto" >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10.5116C15 12.1685 13.6569 13.5116 12 13.5116C10.3431 13.5116 9 12.1685 9 10.5116C9 8.85474 10.3431 7.5116 12 7.5116C13.6569 7.5116 15 8.85474 15 10.5116Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5 10.5116C19.5 17.6537 12 21.7616 12 21.7616C12 21.7616 4.5 17.6537 4.5 10.5116C4.5 6.36946 7.85786 3.0116 12 3.0116C16.1421 3.0116 19.5 6.36946 19.5 10.5116Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 class="w-36 md:w-auto font-manrope text-[15px]" > {{ contact.address }}</h4>
                </li>
            </ul>

            <ul class="flex gap-x-4 items-center justify-between w-full md:w-auto ">
                <li class="" >
                    
                    <a
              :href="contact.facebook"
              aria-label="facebook"
              target="blank"
              class="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-elecktranegro border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-elecktraamarillo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span class="relative z-10">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
                </li>
                <li class=""  >
                    <a
              :href="contact.instagram"
              target="blank"
              aria-label="instagram"
              class="w-[34px] h-[34px] rounded-full flex justify-center items-center border bg-elecktranegro border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-elecktraamarillo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span class="relative z-10 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
                </li>


            </ul>
          </div>
        </div>
</template>

<script setup>
const infopST=useProductStore()




const contact=ref({
  phone:'',
  email:'',
  address:'',
  facebook:'',
  instagram:''

})
watchEffect(() => {
  if(infopST.infopage.contacto){
    contact.value.phone=infopST.infopage.contacto.telefono
    contact.value.email=infopST.infopage.contacto.correo
    contact.value.address=infopST.infopage.contacto.direccion
    contact.value.facebook=infopST.infopage.contacto.facebook
    contact.value.instagram=infopST.infopage.contacto.instagram
  }else{
    console.log('cargando contenido');
  }
})


</script>