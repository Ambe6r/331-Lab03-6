import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import PassengerDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import AirlineDetailView from '@/views/AirlineDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import nProgress from 'nprogress'
import PassengerService from '@/services/PassengerService'
import { usePassengerStore } from '@/stores/passenger'

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
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = to.params.id as string
        const passengerStore = usePassengerStore()
        return PassengerService.getPassenger(id)
        .then((response) => {
          passengerStore.setPassenger(response.data)
        }).catch((error) => {
          if (error.response && error.response.status === 404) {
            router.push({ name: 'not-found', params: { resource: 'passenger' } })
          } else {
            console.error('There was an error!', error)
          }
        })
      },
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true,
          //children: [
            //{
              //path: 'airline/:airlineId',
              //name: 'airline-detail-view',
              //component: AirlineDetailView,
              //props: true
            //}
          //]
        },
        {
          path: 'airline/:airlineId',
              name: 'airline-detail-view',
              component: AirlineDetailView,
              props: true

        },
        {
          path: '/event/:id/register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        },
        {
          path: '/event/:id/edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        },
      ]

    },
    //{
      //path: '/passenger/:id',
      //name: 'passenger-detail-view',
      //component: PassengerDetailView,
      //props: true,
      //children: [
        //{
          //path: 'airline/:airlineId',
          //name: 'airline-detail-view',
          //component: AirlineDetailView,
          //props: true
        //}
      //]
    //},
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      props: { resource: 'page' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  nProgress.start()
})
router.afterEach(() => {
  nProgress.done()
})

export default router
