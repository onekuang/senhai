import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/product', component: Product}
  ]
})
