import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Article from '../views/article/index.vue'
import Detail from '@/views/detail/index.vue'
import Portfolio from '../views/portfolio/index.vue'
import About from '../views/about/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
    props: true,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    props: true,
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    props: true,
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
