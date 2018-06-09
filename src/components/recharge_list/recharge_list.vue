<template>
<div class="order_recharge ab_full">
<BScroll class="box_wrapper" ref="scroll"><div>

<div class="list_wrapper">
	<ul>
		<li class="list_item" v-for='n in 10' @click='goto'>
			<div class="left">
				<img src="../../assets/01.jpg" width="60" height="60">
			</div>
			<div class="center">
				<p>卡号:  <span>3456789012345</span></p>
				<p>时间: <span>2018-12-05 08:34:25</span></p>
				<p>订单: <span>1234567890123456</span></p>
			</div>
			<div class="right">
				<p>-<span>100元</span></p>
			</div>
		</li>
	</ul>
</div>





</div></BScroll>
</div>
</template>

<script>
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {

		}
	},
	methods: {
		goto() {
			this.$router.push({
				path: `/orderdetail`
			})
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');

.list_wrapper{
	ul{padding: 4px;}
	.list_item{
		display: flex;
		height: 100px;
		background: #fff;
		padding: 0 8px;
		margin-bottom: 12px;
		border-radius: 4px;
		.left{
			width: 60px;
			flex: 0 0 60px;
			text-align: center;
			img{
				margin-top: 20px;
				border-radius: 50%;
			}
		}
		.center{
			flex: 1;
			padding-left: 8px;
			>p{
				height: 20px;
				margin: 10px 0;
				color: #666;
			}
			>p:nth-of-type(1){
				span{
					color: #000;
				}
			}
			>p:nth-of-type(2){
				
			}
			>p:nth-of-type(3){
			}
		}
		.right{
			width: 80px;
			flex: 0 0 80px;
			text-align: center;
			font-size: 18px;
			padding-top: 30px;
				color: green;

			span{
				font-weight: 600;
			}
		}	
	}	
}
</style>
