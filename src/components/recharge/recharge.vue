<template>
<div class="recharge">
	<mt-field label="金　额：" placeholder="请输入金额" type="number" v-model="money" style='border-bottom: 1px solid #ccc;' />
	<br>
	<div class="money_select_box">
		<span 
			v-for='item in select_data'
			@click='get_moneydata(item.name)'
		>
			{{item.name}}
		</span>
	</div>
	<br><br>
	<div class="btn_box">
	  <mt-button 
	  	type='danger'  
	  	style='width: 100%;'
	  	@click.native = 'send_form'
	  >
	    充值
	  </mt-button>
	</div>
</div>
</template>

<script>
import { Field, Button  } from 'mint-ui'; 
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			money: '',
			select_data:[
				{id:1,name:'100'},
				{id:2,name:'200'},
				{id:3,name:'300'},
				{id:4,name:'500'},
				{id:5,name:'1000'},
			]
		}
	},
	methods: {
		get_moneydata(name) {
			this.money = name;
		},
		send_form() {
			if(!this.money) {
				this.$toast('金额不能为 0 ')
				return
			}
			console.log(this.money)
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.money_select_box{
	padding: 12px;
	span{
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 12px 20px;
		margin-right: 8px;
		margin-bottom: 12px;
		font-size: 18px;
	}
}
</style>
