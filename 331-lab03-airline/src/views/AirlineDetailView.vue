<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Airline } from '@/types'
import AirlineService from '@/services/AirlineService'
import { useRouter } from 'vue-router'

const airline = ref<Airline | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  airlineId: {
    type: String,
    required: true
  }
})
const router = useRouter()

onMounted(() => {
  AirlineService.getAirline(props.airlineId)
    .then(response => {
      airline.value = response.data
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        router.push({ name: 'not-found', params: { resource: 'airline' } })
      } else {
        console.error('There was an error!', error)
      }
    })
})
</script>

<template>
  <div v-if="airline">
    <h1>{{ airline.name }}</h1>
    <p>Country: {{ airline.country }}</p>
    <p>Website: <a :href="airline.website" target="_blank">{{ airline.website }}</a></p>
    <p>Slogan: {{ airline.slogan }}</p>
  </div>
</template>
