import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
import News from '@/components/news/news'
import Article from '@/components/article/article'
import Aboutus from '@/components/aboutus/aboutus'

import Users from '@/components/users/users'
import EditUsers from '@/components/users/edit_user'
import EditPhone from '@/components/users/edit_phone'
import EditUsername from '@/components/users/edit_username'
import EditPassword from '@/components/users/edit_password'

import Recharge from '@/components/recharge/recharge'

import Login from '@/components/login/login'
import ForGet from '@/components/login/forget_pass'
import Sign from '@/components/login/sign_up'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/product', component: Product},
    {path: '/news', component: News},
    {path: '/article', component: Article},
    {path: '/aboutus', component: Aboutus},

    {path: '/users', component: Users},
    {path: '/edituser', component: EditUsers},
    {path: '/editphone', component: EditPhone},
    {path: '/editusername', component: EditUsername},
    {path: '/editpassword', component: EditPassword},

    {path: '/recharge', component: Recharge},

    {path: '/login', component: Login},
    {path: '/forget_pass', component: ForGet},
    {path: '/sign', component: Sign},
  ]
})
