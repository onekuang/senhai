import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
import Users from '@/components/users/users'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/product', component: Product},
    {path: '/users', component: Users}
  ]
})
