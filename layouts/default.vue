<template>
  <div >
    <HeaderBase :classHeaderBase="claseheaderbase"></HeaderBase>
    <HeaderWhite :classHeaderWhite="claseheaderwhite" />
    <div class="pt-[60px] lg:pt-0 xl:min-h-[calc(100vh-380px)] ">
      <ClientOnly>
        <slot/>
      </ClientOnly>
    </div>
      <FooterBase />
  </div>
</template>



<script setup lang="ts" >

import { useWindowScroll } from "@vueuse/core";

const { width, height } = useWindowSize();
const { x, y } = useWindowScroll({ behavior: "smooth" });


const routeST = useRouteParam();
const route = useRoute();
const claseheaderbase = ref("");
const claseheaderwhite = ref("hidden");

function selectStyleOnLoad() {
  routeST.setrouteparam(route.name); //setear la ruta para poder plaicar los estilos
  if (width.value >= 1024) {
    //clases para el header a partir de lg
    if (routeST.routeparam == "index") {
      claseheaderbase.value = "bg-transparent";
    } else {
      //si la ruta es diferente index sea blog o slug-blog
      claseheaderbase.value = "bg-gray-900";
    }
  } else {
    //clases para el header en mobiles
    claseheaderbase.value = "bg-gray-900";
  }
}

watch(
  () => route.path,
  (newRoute) => {
    selectStyleOnLoad(); //cambios de estilo al cambiar ala ruta
  }
);

onMounted(() => {
  selectStyleOnLoad();
});





watch(
  () => y.value,
  () => {
    if (width.value >= 1024) {
      if (routeST.routeparam == "index") {
        if (y.value < getPosition("#agendarcita")) {
        }

        if (y.value > getPosition("#agendarcita")) {
          //aparicion de HeaderWhite y esconder el HeaderBase
          claseheaderbase.value = "bg-transparent hidden";
          claseheaderwhite.value = "";
        } else {
          if (y.value == 0) {
            claseheaderbase.value = "bg-transparent";
            claseheaderwhite.value = "hidden";
          }
          if (y.value > 1) {
            // console.log(y.value);
            claseheaderbase.value = "hidden";
          }
        }
      } else {
        claseheaderbase.value = "bg-gray-900";
        claseheaderwhite.value = "hidden";
      }
    }
  }
);

watch(
  () => width.value,
  () => {
    console.log(width.value);

    selectStyleOnLoad(); //cambios de estilo al cambiar ala ruta
  }
);


//loader
const loadervisible=ref(true)
const initialize = () => {
  loadervisible.value=false
};
onMounted(() => initialize());

</script>

