<template>
    <div class="mx-7 lg:mx-24 bg-secundary h-[100%] pb-10 pt-[36px] lg:pt-0">

        <div class="border-b-[2px] border-colortextbold mx-7 lg:mx-20 pt-4 "></div>

        <carousel :items-to-show="itemsCarousel" :wrap-around="false" class="mt-4">
            <slide v-for="item in itemsstore" :key="item.id">
                <div class="flex flex-col items-center justify-center " >
                    <img :src="item.img" alt="" srcset="">
                  
                </div>
                
            </slide>

            <template #addons>
            <navigation />
            <pagination />
            </template>
        </carousel>

     

    </div>



</template>

<script setup>
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
import img1 from "~/assets/landing-imgs/tiendaimg1.png"
import img2 from "~/assets/landing-imgs/tiendaimg2.png"
import img3 from "~/assets/landing-imgs/tiendaimg3.png"
import img4 from "~/assets/landing-imgs/tiendaimg4.png"


const itemsCarousel=ref(1)

const sizeScreen = () => {
    if (screen.width >= 395 && screen.width < 640) {
        // console.log('es un telefono pequeño');
        
        itemsCarousel.value = 1;
    }
    if (screen.width >= 640 && screen.width < 768) {
        // console.log('es SM in tailwind');
        
        itemsCarousel.value = 1;
    }
    if (screen.width >= 768 && screen.width < 1024) {
        // console.log('es MD in tailwind');
        
        itemsCarousel.value = 2;
    }
    if (screen.width >= 1024 && screen.width < 1280) {
        // console.log('es LG in tailwind');
        
        itemsCarousel.value = 3;
    }
    if (screen.width >= 1280 && screen.width < 1536) {
        // console.log('es XL in tailwind');
        
        itemsCarousel.value = 4;
    }
    if (screen.width >= 1536 && screen.width < 1920) {
        // console.log('es "2XL" in tailwind');
        
        itemsCarousel.value = 4;
    }
    if (screen.width >= 1920) {
        //telefono pequeño
        // console.log('es HD in tailwind');
        
        itemsCarousel.value = 4;
    }
};

onMounted(() => {
    sizeScreen()
})

watch([width],()=>{
    sizeScreen()
})

const itemsstore=[
    {
        id:1,
        img:img1,
        title:'Oil Soap',
        price:5
    },
    {
        id: 1,
        img: img2,
        title: 'Oganic Soap',
        price: 5
    },
    {
        id:1,
        img:img3,
        title:'Glycerin Soap',
        price:5
    },
    {
        id: 1,
        img: img4,
        title: 'Olive oil Soap',
        price: 5
    },

    {
        id: 1,
        img: img4,
        title: 'Olive oil Soap',
        price: 5
    },

    {
        id: 1,
        img: img4,
        title: 'Olive oil Soap',
        price: 5
    },

    {
        id: 1,
        img: img4,
        title: 'Olive oil Soap',
        price: 5
    },
]

</script>

<style>
.pagination-container {
    display: flex;
}

.paginate-buttons {
    width: 10px;
    height: 1px;
    border-radius: 50px;
    cursor: pointer;
    background-color: rgb(29 78 216);
    color: #12c7c4;

    @media only screen and (min-width: 600px) {
        height: 40px;
        width: 40px;
        border-radius: 10px;
        cursor: pointer;
        background-color: rgb(29 78 216);
        border: 1px solid rgb(217, 217, 217);
        color: white;
    }
}

.paginate-buttons:hover {
    background-color: #86654b;
}

.active-page {
    @media only screen and (max-width: 600px) {
        background-color: #86654b;
        border: 2px solid #86654b;
        color: #1217c7;
    }

    @media only screen and (min-width: 600px) {
        background-color: #86654b;
        border: 1px solid #86654b;
        color: white;
    }
}

.active-page:hover {
    background-color: #86654b;
}

.carousel__prev {
    background-color: #86654b;
    color: white;
}

.carousel__next {
    background-color: #86654b;
    color: white;
}

/* mobiles */
@media only screen and (max-width: 600px) {
    .carousel__prev {
        background-color: #86654b;
        transform: translateY(-50px);
        color: white;
        width: 50px;
        height: 50px;

    }

    .carousel__next {
        background-color: #86654b;
        transform: translateY(-50px);
        color: white;
        width: 50px;
        height: 50px;
    }
}

/* desktop */
@media only screen and (max-width: 600px) {
    .carousel__prev {
        background-color: blu   e;
        color: white;
    }

    .carousel__next {
        background-color: #86654b;
        color: white;
    }
}



.carousel__prev:hover {
    background-color: #86654b;
    color: white;
    border-radius: 8px;
}

.carousel__next:hover {
    background-color: #86654b;
    color: white;
    border-radius: 8px;
}</style>