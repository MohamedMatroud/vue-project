import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import load from '@/components/load'
import profile from '@/components/profile'
import newsfeed from '@/components/newsfeed'
import newsfeedMasonry from '@/components/newsfeedMasonry'
import postVersions from '@/components/postVersions'
Vue.use(Router)

export default new Router({
	mode:'history',
	
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/load',
      name: 'load',
      component: load
    },
     {
      path: '/profile',
      name: 'profile',
      component: profile
    },
     {
      path: '/newsfeed',
      name: 'newsfeed',
      component: newsfeed
    },
    {
      path: '/newsfeedMasonry',
      name: 'newsfeedMasonry',
      component: newsfeedMasonry
    },
     {
      path: '/postVersions',
      name: 'postVersions',
      component: postVersions
    },


  ]
})
