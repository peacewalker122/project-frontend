import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyAndData from '../views/PrivacyAndData.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/privacy-and-data',
    name: 'privacy-and-data',
    component: PrivacyAndData
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
