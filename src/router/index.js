import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home/Home.vue'
import Layout from '@/layout/routerview/Layout'

import Home from './home'
import About from './about'
import Products from './products'
import News from './news'
import Contact from './contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      hidden: true,
      redirect: 'home',
      component: Layout,
      children: [
        Home,
        About,
        Products,
        News,
        Contact
      ]
    }
  ]
})
