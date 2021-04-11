import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contest from '../components/Contest.vue'
import AddContest from '@/components/AddContest.vue'
import AddType from '@/components/AddType.vue'
import Form_test from '@/components/Form_test'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contest',
    name: 'createcontest',
    component: Contest
  },
  {
    path: '/addcontest',
    name: 'addcontestname',
    component: AddContest
  },
  {
    path: '/addcontest/:data/:data1',
    name: 'addtype',
    component: AddType
  },
  {
    path: '/contest/form',
    name: 'form',
    component: Form_test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
