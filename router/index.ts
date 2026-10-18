import AboutUsView from '@/views/AboutUsView.vue'
import CoffeeView from '@/views/CoffeeView.vue'
import HomeView from '@/views/HomeView.vue'
import NonCoffeeView from '@/views/NonCoffeeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: CoffeeView
    },
    {
      path: '/noncoffee',
      name: 'noncoffee',
      component: NonCoffeeView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView
    }
  ],
})

export default router
