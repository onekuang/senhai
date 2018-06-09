<template>
<div class="case">
	<!-- <mt-header title="产品">
	</mt-header> -->
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

				<div class="itens" v-show='left_box_index == 0'>		
					<img src="../../assets/images/case/internet-traffic-scene1.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						后视镜、大屏导航器、车载MIFI、行车记录仪等车联网装置。
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 1'>		
					<img src="../../assets/images/case/internet-traffic-scene2.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						物流靶枪、POS机、智能手表、智能医药盒、智能自行车等终端设备。
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 2'>		
					<img src="../../assets/images/case/internet-traffic-scene3.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						充电桩、智能水表、智能电表、智能机械手臂、移动广告屏等工业级装置。
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 3'>		
					<img src="../../assets/images/case/internet-traffic-scene4.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						特殊区域安防监控，如旅游景点区域监控系统、施工工地监控等。
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 4'>		
					<img src="../../assets/images/case/internet-traffic-scene5.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						共享单车、共享雨伞、共享充电宝
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 5'>		
					<img src="../../assets/images/case/internet-traffic-scene6.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						停车场、充电桩、户外广告屏、路灯
					</div>
				</div>

				<div class="itens" v-show='left_box_index == 6'>		
					<img src="../../assets/images/case/internet-traffic-scene6.png" width="100%">
					<h3>场景描述</h3>
					<div class="p1">
						后视镜、大屏导航器、车载MIFI、行车记录仪等车联网装置。
					</div>
				</div>





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
				{id:1,name:'车载设备'},
				{id:2,name:'终端设备'},
				{id:3,name:'工业控制'},
				{id:4,name:'安防领域'},
				{id:5,name:'共享经济'},
				{id:6,name:'智慧城市'},
			],
			right_box: [
				{id:1,name:'物联网卡',img:''},
				{id:2,name:'贴片卡',img:''},
				{id:3,name:'陶瓷卡',img:''},
				{id:4,name:'NB卡',img:''},
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

.case {
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
				top: 0px;
				left: 0;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				.l_bs_item{
					min-height: 101%;
					background: #eee;
				}
			}			
			ul{
				.active{
					color: #E0313A;
					// border-bottom-color: #E0313A;
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
				top: 0px;
				left: 100px;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				.r_bs_item{
					min-height: 101%;
					background: #fff;
					padding: 6px;
					.banner{
						padding: 8px;
						img{
							border-radius: 8px;
							box-shadow: 1px 1px 4px 2px rgba(0,0,0,.5);
						}
					}
					.p1{
						margin-top: 20px;
						font-size: 16px;
						// font-weight: 600;
					}
					ul{
						padding: 12px;
						li{
							margin-top: 16px;
							margin-bottom: 16px;
							font-size: 14px;
							font-weight: 500;
						}
					}
				}
			}
		}
	}
}
</style>
