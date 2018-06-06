<template>
<div class="users">
<mt-header title="个人中心"></mt-header>
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="mail">

		<!-- 个人信息展示 -->
		<div class="userinfo_box">
			<div class="userinfo_box_item">
				<div class="avatar">
					<img src="../../assets/images/test.png" height="80" width="80">
				</div>
				<div class="k_username">
					<p class="p1">白色曲章</p>
					<p class="p2">手机：13421936693</p>
					<!-- <span class="span1">
						<i class="iconfont icon-crownfill"></i>普通会员
					</span> -->
				</div>
				<div class="user_setting">
					<router-link class="k_setting" to='/' tag='a'>
						<i class="iconfont icon-shezhi"></i>
						<span>帐号管理</span>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 个人信息展示 end-->

		<!-- 快速入口 -->
		<div class="speed_import_box">
			<router-link class="item" tag='div' to='/'>
				<i class="iconfont icon-iconset0292"></i>
				<p>快速充值</p>
			</router-link>
			<router-link class="item" tag='div' to='/'>
				<i class="iconfont icon-lianjie"></i>
				<p>快速充值</p>
			</router-link>
			<router-link class="item" tag='div' to='/'>
				<i class="iconfont icon-wodedingdan"></i>
				<p>快速充值</p>
			</router-link>
			<router-link class="item" tag='div' to='/'>
				<i class="iconfont icon-yaoqingma"></i>
				<p>快速充值</p>
			</router-link>
		</div>
		<!-- 快速入口 end -->
		

		<mt-cell  title="个人信息"  to="##"  is-link  value="带链接" />
		<mt-cell  title="充值记录"  to="##"  is-link  value="带链接" />
		<mt-cell  title="流量查询"  to="##"  is-link  value="带链接" />
		<br>
		<mt-cell  title="关于我们"  to="##"  is-link  value="带链接" />

		<br>
		<mt-cell  title="退出登录"  @click.native='logout' />
	</div>
</div>
</BScroll>
</div>
</template>

<script>
import { Header, Cell } from 'mint-ui';	
import api from '../../assets/api/api.js'
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {

		}
	},
	methods: {
		logout() {
			console.log('注销')
		}
	},
	components: {
		BScroll,
		'k_head' 	: Header,
		'k_cell' 	: Cell,
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.users{
	.mail{
		
	}
}
</style>
