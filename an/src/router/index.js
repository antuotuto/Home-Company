import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import welcomeMan from '@/components/welcomeMan'
import Goodthing from '@/components/Goodthing'
import Like from '@/components/Like'
import one from '@/components/one'
import talk from '@/pages/talk'
import talking from '@/pages/talking'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
    },
    {
      path: '/welcomeMan',
      name: 'welcomeMan',
      component: welcomeMan
    },
    {
      path: '/goodthing',
      name: 'goodthing',
      component: Goodthing
    },
    {
      path: '/like/:id',
      name: 'like',
      component: Like
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    },
    {
      path: '/talking/:id',
      name: 'talking',
      component: talking
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
