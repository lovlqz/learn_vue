import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/page/Demo1'
import demo2 from '@/page/Demo2'
import demo3 from '@/page/Demo3'
import demo4 from '@/page/Demo4'
import indexV from '@/page/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      component: indexV,
      children: [{
        path: '/demo1',
        name: 'demo1',
        component: demo1,
        meta: ['demo1']
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: demo2,
        meta: ['demo2']
      },
      {
        path: '/demo3',
        name: 'demo3',
        component: demo3,
        meta: ['demo3']
      },
      {
        path: '/demo4',
        name: 'demo4',
        component: demo4,
        meta: ['demo4']
      }]
    }
  ]
})
