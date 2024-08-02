<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Airline } from '@/types'
import AirlineService from '@/services/AirlineService'

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

onMounted(() => {
    console.log('on detail view mounted')
  AirlineService.getAirline(props.airlineId)
    .then(response => {

      airline.value = response.data
    })
    .catch((error) => {
      console.error('There was an error fetching the event:', error)
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
