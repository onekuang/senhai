<template>
<div class="recharge ab_full">
<BScroll class="box_wrapper" ref="scroll">
<div>

	<p class="pp">选择卡类型:</p>
<!-- 	<mt-field 
		label="卡类型：" 
		placeholder="请选择卡类型" 
		type="text" 
		v-model="card" 
		@click.native='_toggle'
	/> -->
	<div class="select_card">
		<!-- <span class="span1">卡类型：</span> -->
		<span class="span2" @click='_toggle'>{{card | defu}}</span>
	</div>
	<p class="pp">充流量:</p>
	<div class="money_select_box">
		<div class="money_select_box_item" 
			v-for='(item, index) in select_data'
			@click='get_moneydata(index,item.name)'
			:class='{active: index == indx}'
		>
			<p class="p1">{{item.name}}</p>
			<p class="p2">{{item.mes}}</p>
		</div>
	</div>
	<p class="pp">金额:</p>
	<div class="money_box">
		<p ><span>￥</span>{{money}}</p>
	</div>
	<div class="btn_box" style="background: #fff;">
	  <mt-button 
	  	type='danger'  
	  	style='width: 100%;'
	  	@click.native = 'send_form'
	  >
	    充值
	  </mt-button>
	</div>







</div></BScroll>
	<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
	</mt-actionsheet>
</div>
</template>

<script>
import { Field, Button, Actionsheet   } from 'mint-ui'; 
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			indx: -1,
			card: '0',
			money: 0,
			select_data:[
				{id:1,name:'100元',mes:'充值100送50'},
				{id:2,name:'200元',mes:'充值100送50'},
				{id:3,name:'300元',mes:'充值100送50'},
				{id:4,name:'500元',mes:'充值100送50'},
				{id:5,name:'1000元',mes:'充值100送50'},
			],
			sheetVisible:false,
			actions:[
				{name:'物联卡',method : (val => { this.card = val.name})},
				{name:'NB卡',method : (val => { this.card = val.name})},
				{name:'陶瓷卡',method : (val => { this.card = val.name})},
			]
		}
	},
	methods: {
		_toggle() {
			this.sheetVisible = true
		},
		get_moneydata(index,name) {
			this.indx = index
			this.money = name
		},
		send_form() {
			if(this.card == 0) {
				this.$toast('卡类型不能为空 ')
			}
			if(!this.money) {
				this.$toast('金额不能为 0 ')
				return
			}
			console.log(this.card)
			console.log(this.money)
		}
	},
	filters: {
		defu: function(val) {
			if(val == 0) {
				return '请选择卡类型'
			}else{
				return val
			}
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.recharge{
	background: #fff;
	.pp{
		padding: 12px;
		font-size: 16px;
		color: #888;
		background: #f5f5f5;
	}
	.select_card{
		display: flex;
		height: 60px;
		background: #fff;
		span{
			height: 60px;
			line-height: 60px;
			padding: 0 12px;
		}
		.span1{
			width: 80px;
			flex: 0 0 80px;
		}
		.span2{
			flex: 1;
			font-size: 18px;
		}
	}
	.money_select_box{
		padding: 8px 12px;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		.active{
			border-color: red !important;
			p{
				color: red!important;
			}
		}
		.money_select_box_item{
			flex: 0 0 30%;
			width: 30%;
			border: 1px solid #26a2ff;
			border-radius: 8px;
			margin: 8px 1.5% 12px;
			text-align: center;
			font-size: 18px;
			padding: 12px 0;
			background: #fff;
			.p1{
				font-size: 18px;
				font-weight: 600;
				color: #26a2ff;
			}
			.p2{
				font-size: 14px;
				margin-top: 6px;
				color: #26a2ff;
			}
		}		
	}
	.money_box{
		text-align: center;
		background: #fff;
		padding: 16px 0;
		p{
			font-size: 36px;
			color: #EF4F4F;
			font-weight: 900;
			span{
				font-size: 40px;
				// color: #EF4F4F;
			}
		}
	}
}

</style>
