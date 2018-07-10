import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/login/login'
import home from '@/home/main'
import index from '@/myindex/index'
import slide from '@/slide/slide'
import vfor from '@/v-for/v-for'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vfor',
      component: vfor
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
