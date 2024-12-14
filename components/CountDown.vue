<template>
    <div
        class="flex justify-center items-center px-2 gap-6  w-full text-center  rounded-3xl lg:px-4  lg:my-1 text-secundary text-[10px] sm:text-base lg:text-xl font-comcnw">

        <div v-if="timeLeft >= 0" v-for="time in timerDisplay">
            <div class="flex flex-col text-[#D9D9D9] relative ">
                <div class="text-xl sm:text-2xl font-bold ">
                    <p class="">{{ time.value }}</p> 
                </div>
                <div class="text-xs sm:text-sm">
                    {{ time.label }} 
                </div>

                 <p v-if="time.label != 'mins'" class=" absolute text-4xl -top-2 -right-4 ">.</p>
                
            </div>
        </div>


        <p v-else class="  w-full">Evento Finalizado</p>

    </div>
</template>

<script setup lang="ts">
import { looseIndexOf } from '@vue/shared';
const dayjs = useDayjs()
const props = defineProps({
    eventAt: String
})
const formatISOnow = dayjs()

// pruebas
// console.log(  dayjs().format('YYYY-MM-DD')+'T'+new Date().toLocaleTimeString()+'Z')
// console.log(dayjs('2023-09-15T20:08:00.285Z').diff(formatISOnow, 'minutes'))



const timeLeft = computed(() => {
    return dayjs(props.eventAt).diff(formatISOnow, 'minutes')
})

const timer = reactive([
    // {
    //   label: 'años',
    //   value: Math.floor((((timeLeft.value / 60) / 24) / 30) / 12)
    // },
    {
        label: 'meses',
        value: Math.floor((((timeLeft.value / 60) / 24) / 30) % 12) + Math.floor((((timeLeft.value / 60) / 24) / 30) / 12) * 12
    },
    {
        label: 'días',
        value: Math.floor(((timeLeft.value / 60) / 24) % 30)
    },
    {
        label: 'horas',
        value: Math.floor((timeLeft.value / 60) % 24)
    },
    {
        label: 'mins',
        value: timeLeft.value % 60
    },
    {
        label: 'segs',
        value: timeLeft.value % 60
    }

])
const timerDisplay = computed(() => {
    return timer.filter(t => t.value > 0)
})
</script>

<style scoped></style>