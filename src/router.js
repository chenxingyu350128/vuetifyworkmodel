import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/family',
      name: 'family',
      component: () => import( './views/family.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import( './views/service.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( './views/mine.vue')
    },


  ]
})
