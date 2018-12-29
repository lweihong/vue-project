import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import member from '@/components/member/member'
import search from '@/components/search/search'
import shopcar from '@/components/shopcar/shopcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/member',
      name: 'Member',
      component: member
    },
    {
      path: '/search',
      name: 'Search',
      component: search
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: shopcar
    }
  ]
})
