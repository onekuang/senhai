<template>
<div class="edit_users">
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
					<p class="p1">白色曲章</p>
					<p class="p2">手机：13421936693</p>
					<span class="span1">
						<i class="iconfont icon-crownfill"></i>普通会员
					</span>
				</div>
				<div class="user_setting">
					<router-link class="k_setting" to='users' tag='a'>
						<i class="iconfont icon-peoplefill"></i>
						<span>个人中心</span>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 个人信息展示 end-->

		

		<mt-cell  title="修改头像"  to="/editusername"  is-link  />
		<mt-cell  title="修改昵称"  to="/editusername"  is-link  />
		<mt-cell  title="修改手机号码"  to="/editphone"  is-link  />
		<mt-cell  title="修改密码"  to="/editpassword"  is-link  />

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
.edit_users{
	.mail{
		
	}
}
</style>
