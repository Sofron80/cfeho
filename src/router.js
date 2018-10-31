import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'
import Docs from '@/views/Docs.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/articles', name: 'articles', component: Articles},
    {path: '/docs', name: 'docs', component: Docs},
    {path: '/profile', name: 'profile', component: Profile},
    {path: '/login', name: 'login', component: Login},
    {path: '/signup', name: 'signup', component: Signup},
    {path: '/logout', name: 'logout', beforeEnter:()=>{
      store.dispatch('logOut')
    }}
  ]
})

