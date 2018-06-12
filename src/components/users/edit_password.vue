<template>
<div class="edit_password">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="mail">
		<mt-field label="新密码" type="password" placeholder="请输入新密码" v-model="password1" />
		<mt-field label="确认密码" type="password" placeholder="请输入确认密码" v-model="password2" />
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
			<mt-button type='danger'  style='width: 100%;' @click.native="push_form">
				确定更改
			</mt-button>
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
			password1 : '',
			password2 : '',
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
		push_form() {
			if(!kk.is_password(this.password1, this)){return}
			if(this.password1 !== this.password2) {
			  this.$toast('两次密码不一致')
			  return
			}
			if(!kk.is_mobile(this.mobile,this)){return}
			if(this.code == ''){
				this.$toast('验证码错误')
				return
			}

			console.log('请求')
		},
		getcode() {
		  if(!kk.is_mobile(this.mobile,this)){return}

		  let that = this
		  this.code_disabled = true
		  let time = setInterval(()=>{
		    that.code_time--
		    if(that.code_time <= 0){
		      window.clearInterval(time);
		      that.code_disabled = false
		      that.code_time = 60
		    }
		  },1000)

		  console.log('get code...')
		},
	},
	components: {
		BScroll,
		Button,Field ,
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
</style>
