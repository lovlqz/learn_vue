import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/page/Demo1'
import demo2 from '@/page/Demo2'
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
      }]
    }
  ]
})
