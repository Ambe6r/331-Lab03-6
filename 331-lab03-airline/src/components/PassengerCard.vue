<script setup lang="ts">
import { defineProps } from 'vue'
import { type Passenger } from '@/types'

defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <div class="passenger-details" @click="$router.push({ name: 'passenger-detail-view', params: { id: passenger._id } })">
    <h2>{{ passenger.name }}</h2>
    <span>{{ passenger.trips }} trips</span>
  </div>
</template>

<style scoped>
.passenger-details {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.passenger-details:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0 0 0 0.2);
}
</style>
