<template>
<div class="edit_username">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="mail">
		<mt-field label="昵称" placeholder="请输入新昵称" v-model="username" />
		<br><br>
		<div class="btn_box">
			<mt-button type='danger'  style='width: 100%;' @click.native='change'>确定更改</mt-button>
		</div>
	</div>
</div>
</BScroll>
</div>
</template>

<script>
import {kk} from '../../common/js/k_form.js'
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
		change() {
			if(!kk.is_username(this.username,this)){return}
			// if(this.username == ''){
			// 	this.$toast('昵称不能为空')
			// 	return
			// }
			console.log('request')
		}
	},
	components: {
		BScroll,
		Button,Field
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
</style>
