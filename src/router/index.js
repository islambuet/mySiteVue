import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import('@/components/home/Home.vue') },  
  { path: '/about-me', name: 'AboutMe', component: () => import('@/components/about-me/AboutMe.vue') },  
  { path: '/privacy-policy-8-puzzle', name: 'Privacy8Puzzle', component: () => import('@/components/Privacy8Puzzle.vue') },  
  { path: '*',name:'NotFound',component: function () {return import('@/components/not_found/NotFound.vue')}}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
