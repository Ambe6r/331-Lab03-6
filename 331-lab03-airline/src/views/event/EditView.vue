<script setup lang="ts">
import { toRefs } from 'vue';
import { type Passenger } from '@/types'
import { useRouter, RouterLink } from 'vue-router'
import { useMessageStore } from '@/stores/message';

const props = defineProps<{
    passenger: Passenger
    id: String
}>()
const { passenger } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {
    store.updateMessage('The update is in progress')
    setTimeout(() => {
        store.resetMessage()
    },5000)
router.push({ name: 'passenger-list-view', params: { id: props.passenger._id } })
}
</script>

<template>
    <p>Edit event here</p>
    <button @click="edit">Edit</button>
</template>
