<template>
<div class="edit_username">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="mail">
		<mt-field label="昵称" placeholder="请输入新昵称" v-model="username" />
		<br><br>
		<div class="btn_box">
			<mt-button type='danger'  style='width: 100%;'>确定更改</mt-button>
		</div>
	</div>
</div>
</BScroll>
</div>
</template>

<script>
import { Field, Button  } from 'mint-ui';	
import api from '../../assets/api/api.js'
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			username 	: '',
		}
	},
	methods: {
	},
	components: {
		BScroll,
		Button,
		'k_field' 	: Field ,
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
</style>
