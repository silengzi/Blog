import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Article from '../views/article/index.vue'
import Detail from '@/views/article/detail/Detail.vue'
import Portfolio from '../views/portfolio/index.vue'
import About from '../views/about/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
