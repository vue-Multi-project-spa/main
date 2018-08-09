import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import P from '@/components/p'

const r404 = {
    path: '*',
    component: P
}

Vue.use(Router)

export {
  r404
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/404',
      component: P
    }
  ]
})
