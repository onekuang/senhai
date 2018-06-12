import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'
import Case from '@/components/case/case'
import News from '@/components/news/news'
import Article from '@/components/article/article'
import Aboutus from '@/components/aboutus/aboutus'
import Hexin from '@/components/aboutus/hexin'
import Notive from '@/components/notive/notive'

import Users from '@/components/users/users'
import UsersInfo from '@/components/users/userinfo'
import EditUsers from '@/components/users/edit_user'
import EditPhone from '@/components/users/edit_phone'
import EditUsername from '@/components/users/edit_username'
import EditPassword from '@/components/users/edit_password'

import Seek from '@/components/seek/seek'

import Recharge from '@/components/recharge/recharge'
import RechargeList from '@/components/recharge_list/recharge_list'
import FlowList from '@/components/flow_list/flow_list'
import OrderDetail from '@/components/order_detail/order_detail'
import CardDetail from '@/components/order_detail/card_detail'

import Login from '@/components/login/login'
import ForGet from '@/components/login/forget_pass'
import Sign from '@/components/login/sign_up'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/product', component: Product},
    {path: '/case', component: Case},
    {path: '/news', component: News},
    {path: '/article', component: Article},
    {path: '/aboutus', component: Aboutus},
    {path: '/hexin', component: Hexin},
    {path: '/notive', component: Notive},
    {path: '/seek', component: Seek},

    {path: '/users', component: Users},
    {path: '/userinfo', component: UsersInfo},
    {path: '/edituser', component: EditUsers},
    {path: '/editphone', component: EditPhone},
    {path: '/editusername', component: EditUsername},
    {path: '/editpassword', component: EditPassword},

    {path: '/recharge', component: Recharge},
    {path: '/rechargelist', component: RechargeList},
    {path: '/flowlist', component: FlowList},
    {path: '/orderdetail', component: OrderDetail},
    {path: '/carddetail', component: CardDetail},

    {path: '/login', component: Login},
    {path: '/forget_pass', component: ForGet},
    {path: '/sign', component: Sign},
  ]
})
