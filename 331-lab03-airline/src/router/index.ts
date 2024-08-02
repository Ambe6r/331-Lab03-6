import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import PassengerDetailView from '@/views/PassengerDetailView.vue'
import AirlineDetailView from '@/views/AirlineDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        perPage: parseInt(route.query.perPage?.toString() || '10')
      })
    },
    {
      path: '/passenger/:id',
      name: 'passenger-detail-view',
      component: PassengerDetailView,
      props: true,
      children: [
        {
          path: 'airline/:airlineId',
          name: 'airline-detail-view',
          component: AirlineDetailView,
          props: true
        }
      ]
    }


  ]
})

export default router
