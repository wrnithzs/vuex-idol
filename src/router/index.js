import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateEvent from '../components/CreateEvent.vue'
import Artist from '../components/Artist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateEvent',
    component: CreateEvent
  },
  {
    path: '/artist',
    name: 'Artist',
    component: Artist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
