<template>
<div class="users">
<!-- <mt-header title="个人中心"></mt-header> -->
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
					<p class="p1">奥斯里斯</p>
					<p class="p2">手机：13421936693</p>
					<span class="span1">
						<i class="iconfont icon-crownfill"></i>普通会员
					</span>
				</div>
				<div class="user_setting">
					<router-link class="k_setting" to='edituser' tag='a'>
						<i class="iconfont icon-shezhi"></i>
						<span>帐号管理</span>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 个人信息展示 end-->

		<!-- 快速入口 -->
		<div class="speed_import_box">
			<router-link class="item" tag='div' to='/recharge'>
				<i class="iconfont icon-iconset0292"></i>
				<p>快速充值</p>
			</router-link>
			<router-link class="item" tag='div' to='/recharge'>
				<i class="iconfont icon-lianjie"></i>
				<p>占位</p>
			</router-link>
			<router-link class="item" tag='div' to='/recharge'>
				<i class="iconfont icon-wodedingdan"></i>
				<p>占位</p>
			</router-link>
			<router-link class="item" tag='div' to='/recharge'>
				<i class="iconfont icon-yaoqingma"></i>
				<p>占位</p>
			</router-link>
		</div>
		<!-- 快速入口 end -->
		

		<mt-cell title="个人信息"  to="/userinfo"  is-link>
			<img slot="icon" src="../../assets/icon_png/user.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="充值记录" to="/rechargelist" is-link>
			<img slot="icon" src="../../assets/icon_png/recharge.png" width="24" height="24">
		</mt-cell>
		<mt-cell title="我的物联卡" to="/flowlist" is-link>
			<img slot="icon" src="../../assets/icon_png/liuliang.png" width="24" height="24">
		</mt-cell>
		<br>
		<mt-cell title="关于我们" to="/aboutus" is-link>
			<img slot="icon" src="../../assets/icon_png/about.png" width="24" height="24">
		</mt-cell>

		<br>
		<mt-cell  title="退出登录"  @click.native='logout'>
			<img slot="icon" src="../../assets/icon_png/logout.png" width="24" height="24">
		</mt-cell>
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
			this.$confirm({
				title: '确认注销?'
			})
			.then(res => {
				this.$router.push({
					path:'/'
				})	
			})
			.catch(fail => {
				console.log('取消')
			})
			return
			
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
</style>
