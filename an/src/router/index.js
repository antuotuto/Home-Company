import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import welcomeMan from '@/components/welcomeMan'
import Goodthing from '@/components/Goodthing'
import designCode from '@/components/designCode'
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
import meetingOne5 from '@/pages/meetingOne5'
import meetingOne6 from '@/pages/meetingOne6'
import colorful from '@/components/colorful'
import chairman from '@/components/chairman/chairman'
import chairman0 from '@/components/chairman/chairman0'
import chairman1 from '@/components/chairman/chairman1'


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
    },
    {
      path: '/meetingOne5',
      name: 'meetingOne5',
      component: meetingOne5
    },
    {
      path: '/meetingOne6',
      name: 'meetingOne6',
      component: meetingOne6
    },
    {
      path: '/colorful',
      name: 'colorful',
      component: colorful
    },
    {
      path: '/designCode',
      name: 'designCode',
      component: designCode
    },
    {
      path: '/chairman',
      name: 'chairman',
      component: chairman,
      children:[
        {
          path:'/chairman/',
          name:'chairman0',
          component: chairman0
        },
        {
          path:'/chairman/chairman1',
          name:'chairman1',
          component: chairman1
        }
      ]
    }

  ]
})
