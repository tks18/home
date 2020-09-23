import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Careers from '../views/careers.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
