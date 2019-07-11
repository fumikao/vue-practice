import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import YearConverter from '@/components/YearConverter'
import Janken from '@/components/Janken'
import Bitcoin from '@/components/Bitcoin'
import Qiita from '@/components/Qiita'

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
    },
    {
      path: '/bitcoin',
      name: 'Bitcoin',
      component: Bitcoin
    },
    {
      path: '/qiita',
      name: 'Qiita',
      component: Qiita
    }
  ]
})
