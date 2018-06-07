<template>
<div class="edit_phone">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="mail">
		<mt-field label="手机号" placeholder="请输入新手机号码" v-model="mobile" />
		<mt-field label="验证码" v-model="code">
			<mt-button 
				@click.native="getcode" 
				:disabled='code_disabled'>
				{{c_code}}
			</mt-button>
		</mt-field>
		<br><br>
		<div class="btn_box">
			<mt-button type='danger'  style='width: 100%;'>
				确定更改
			</mt-button>
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
			mobile 		: '',
			code 			: '',
			code_disabled: false,
			code_time : 60,
		}
	},
	computed: {
		c_code:function() {
			if(this.code_disabled) {
				return '获取(' + this.code_time + ')'
			}else{
				return '获取'
			}
		}
	},
	methods: {
		getcode() {
			console.log('get code...')
		}
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
