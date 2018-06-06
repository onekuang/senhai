<template>
<div class="product">
	<mt-header title="产品">
	</mt-header>
<div class="pro_box">
	<div class="pro_left_box">
		<BScroll class='l_bs_box'>
		<div class="l_bs_item">
			<ul>
				<li 
					v-for='(item, index) in left_box' 
					:class="{active: index == left_box_index}"
					@click='toggle_item(index)'
				>
					{{item.name}}
				</li>
			</ul>
		</div>
		</BScroll>
	</div>
	<div class="pro_right_box">
		<BScroll class='r_bs_box' ref='r_scroll'>
			<div class="r_bs_item">
				<ul>
				<li v-for='n in 10'>
					<img src="../../assets/logo.png" width="60" height="60">
					<p>产品名</p>
				</li>
			</ul>
			</div>
		</BScroll>
	</div>
</div>

</div>
</template>

<script>
import { Header } from 'mint-ui';
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			left_box_index: 0,
			left_box: [
				{id:1,name:'item1'},
				{id:2,name:'item2'},
				{id:3,name:'item3'},
				{id:4,name:'item4'},
			]
		}
	},
	created() {

	},
	methods: {
		toggle_item(index) {
			this.left_box_index = index
		}
	},
	components: {
		BScroll,
		'k_head': Header
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');

.product {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 55px;
	.pro_box{
		display: flex;
		.pro_left_box{
			width: 100px;
			flex: 0 0 100px;
			// scroll
			.l_bs_box{
				width: 100px;
				position: fixed;
				top: 50px;
				left: 0;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				.l_bs_item{
					min-height: 101%
				}
			}
			ul{
				.active{
					color: #E0313A;
					border-bottom-color: #E0313A;
					background: #fff;
					border-top: #ccc;
				}
				li{
					height: 60px;
					line-height: 60px;
					padding-left: 8px;
					border-bottom: 1px solid #ccc;
					background: #eee;
					transition: all 0.3s;
				}
			}
		}
		.pro_right_box{
			flex: 1;
			margin-left: 4px;			
			.r_bs_box{
				position: fixed;
				top: 50px;
				left: 108px;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				.r_bs_item{
					min-height: 101%;
					ul{
						display: flex;
						flex-wrap: wrap;
						padding-top: 20px;
						li{
							flex: 0 0 33%;
							// height: 80px;
							padding: 6px 0 6px 0;
							text-align: center;
							margin-bottom: 12px;
							img{
								margin-bottom: 6px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
