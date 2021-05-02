import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contest from '../components/Contest.vue'
import AddContest from '@/components/AddContest.vue'
import AddType from '@/components/AddType.vue'
import Form_normal_wm from '@/components/Form_normal_wm'
import Register from '@/components/Register'
import Form_normal_m from '@/components/Form_normal_m'
import Form_junior_wm from '@/components/Form_junior_wm'
import Form_junior_m from '@/components/Form_junior_m'
import Form_master_wm from '@/components/Form_master_wm'
import Form_master_m from '@/components/Form_master_m'
import Showlist from '@/components/Showlist'
import Showlist_normal_w from '@/components/Showlist_normal_w'
import Showlist_junior_m from '@/components/Showlist_junior_m'
import Showlist_junior_w from '@/components/Showlist_junior_w'
import Showlist_master_m from '@/components/Showlist_master_m'
import Showlist_master_w from '@/components/Showlist_master_w'
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
    path: '/register/:data/:data1',
    name: 'addregister',
    component: Register
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
    path: '/showlist/:data/:data1/:data2',
    name: 'showlist',
    component: Showlist
  },
  {
    path: '/showlist2/:data/:data1/:data2',
    name: 'showlist2',
    component: Showlist_normal_w
  },
  {
    path: '/showlist3/:data/:data1/:data2',
    name: 'showlist3',
    component: Showlist_junior_m
  },
  {
    path: '/showlist4/:data/:data1/:data2',
    name: 'showlist4',
    component: Showlist_junior_w
  },
  {
    path: '/showlist5/:data/:data1/:data2',
    name: 'showlist5',
    component: Showlist_master_m
  },
  {
    path: '/showlist6/:data/:data1/:data2',
    name: 'showlist6',
    component: Showlist_master_w
  },
  {
    path: '/form_normal_m/:data/:data1/:data2',
    name: 'form_normal_m',
    component: Form_normal_m
  },
  {
    path: '/form_normal_wm/:data/:data1/:data2',
    name: 'form_normal_wm',
    component: Form_normal_wm
  },
  {
    path: '/form_junior_wm/:data/:data1/:data2',
    name: 'form_junior_wm',
    component: Form_junior_wm
  },
  {
    path: '/form_junior_m/:data/:data1/:data2',
    name: 'form_junior_m',
    component: Form_junior_m
  },
  {
    path: '/form_master_wm/:data/:data1/:data2',
    name: 'form_master_wm',
    component: Form_master_wm
  },
  {
    path: '/form_master_m/:data/:data1/:data2',
    name: 'form_master_m',
    component: Form_master_m
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
