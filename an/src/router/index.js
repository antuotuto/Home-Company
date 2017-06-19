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
import press from '@/pages/press'
import meetingOne from '@/pages/meetingOne'
import meetingOn from '@/pages/meetingOn'
import meetingOne4 from '@/pages/meetingOne4'
import meetingOne1 from '@/pages/meetingOne1'
import meetingOne2 from '@/pages/meetingOne2'
import meetingOne3 from '@/pages/meetingOne3'


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
    },
    {
      path: '/press',
      name: 'press',
      component: press
    },
    {
      path: '/meetingOn',
      name: 'meetingOn',
      component: meetingOn
    },
    {
      path: '/meetingOne',
      name: 'meetingOne',
      component: meetingOne
    },
    {
      path: '/meetingOne4',
      name: 'meetingOne4',
      component: meetingOne4
    },
    {
      path: '/meetingOne1',
      name: 'meetingOne1',
      component: meetingOne1
    },
    {
      path: '/meetingOne2',
      name: 'meetingOne2',
      component: meetingOne2
    },
    {
      path: '/meetingOne3',
      name: 'meetingOne3',
      component: meetingOne3
    }
  ]
})
