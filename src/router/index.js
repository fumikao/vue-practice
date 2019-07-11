import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import YearConverter from '@/components/YearConverter'
import Janken from '@/components/Janken'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/year-converter',
      name: 'YearConverter',
      component: YearConverter
    },
    {
      path: '/janken',
      name: 'Janken',
      component: Janken
    }
  ]
})
