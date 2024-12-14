// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    },
  },
  modules:[
    '@vueuse/nuxt',
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
    'vue3-carousel-nuxt',
    'nuxt-swiper',
    "dayjs-nuxt"
  ],
  
})