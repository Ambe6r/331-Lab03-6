<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passenger } from '@/types'
import { useRouter, RouterLink } from 'vue-router'

const props = defineProps<{
    passenger: Passenger
}>()
const { passenger } = toRefs(props)
</script>

<template>
    <p>Trips: {{ passenger.trips }}</p>
</template>
