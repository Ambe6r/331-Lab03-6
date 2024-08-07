<script setup lang="ts">

import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';

const store = usePassengerStore()
const { passenger } = storeToRefs(store)

</script>

<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <nav>
        <router-link :to="{ name: 'airline-detail-view', params: { airlineId: passenger.airline[0]._id } }">Airline Details</router-link>
             |
        <router-link :to="{ name: 'event-register-view' }">Register</router-link>
             |
        <router-link :to="{ name: 'event-edit-view' }">Edit</router-link>

    </nav>
    <RouterView :passenger="passenger"/>
  </div>
</template>
