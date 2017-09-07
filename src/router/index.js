import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/page/home')
    },
    {
    	path: '/item',
    	name: 'item',
    	component: () => import('@/page/item')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/page/score')
    }
  ]
})
