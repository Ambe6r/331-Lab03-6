<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passenger } from '@/types'
import { useRouter, RouterLink } from 'vue-router'
import router from '@/router';

const props = defineProps<{
    passenger: Passenger
}>()
const { passenger } = toRefs(props)

const back = () => {
    router.back()
}

</script>

<template>
    <p>Trips: {{ passenger.trips }}</p>
    <button @click="back">Back</button>
</template>
