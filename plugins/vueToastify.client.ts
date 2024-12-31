import Vue3Toastify, { toast, type ToastContainerOptions  } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 3500,position: toast.POSITION.TOP_RIGHT, clearOnUrlChange: false  } as ToastContainerOptions);

  return {
    provide: { toast },
  };
})