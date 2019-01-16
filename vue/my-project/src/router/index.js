import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Goods from '@/pages/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/goods',
      component: Goods
    }
  ]
})
