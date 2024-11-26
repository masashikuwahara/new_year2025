import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LastYearView from '@/views/LastYearView.vue'
import FunnyCatView from '@/views/FunnyCatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lastyear',
      name: 'lastyear',
      component: LastYearView,
    },
    {
      path: '/cat',
      name: 'cat',
      component: FunnyCatView,
    },
  ],
})

export default router
