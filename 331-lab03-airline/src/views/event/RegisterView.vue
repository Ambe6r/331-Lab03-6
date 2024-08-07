<script setup lang="ts">
import { toRefs } from 'vue';
import { type Passenger } from '@/types'
import { useRouter, RouterLink } from 'vue-router'

const props = defineProps<{
    passenger: Passenger
    id: String
}>()
const { passenger } = toRefs(props)
const router = useRouter()
const register = () => {
    router.push({ name: 'passenger-detail-view'})
}

</script>

<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>
