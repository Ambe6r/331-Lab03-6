<script setup lang="ts">

import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';

const store = usePassengerStore()
const { passenger } = storeToRefs(store)

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
