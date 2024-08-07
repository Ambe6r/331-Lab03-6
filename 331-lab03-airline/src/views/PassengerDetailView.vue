<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'
import { useRouter, RouterLink } from 'vue-router'

const passenger = ref<Passenger | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const router = useRouter()

onMounted(() => {
  PassengerService.getPassenger(props.id)
    .then(response => {
      if (response.data) {
        passenger.value = response.data
      } else {
        // Handle case where data is empty
        router.push({ name: 'not-found', params: { resource: 'passenger' } })
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        router.push({ name: 'not-found', params: { resource: 'passenger' } })
      } else {
        console.error('There was an error!', error)
      }
    })
})
</script>

<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <p>Trips: {{ passenger.trips }}</p>
    <RouterLink :to="{ name: 'airline-detail-view', params: { airlineId: passenger.airline[0]._id } }">
      View Airline Details
    </RouterLink>
    <RouterView />
  </div>
</template>
