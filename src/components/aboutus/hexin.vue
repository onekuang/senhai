<template>
<div class="aboutus ab_full">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="banner">
		<img src="../../assets/images/youshi.jpg" width="100%" @load="imgload">
	</div>
<div class="article_box">
 <!-- <h1 class="title">核心优势</h1> -->
 <div class="content">
 		<h4>三网合作:</h4>
 		<p>移动、联通、电信三大运营商战略合作伙伴，支持运营商直签，可提供终端补贴政策导入。	</p>
 		<h4>多卡种选择:</h4>
 		<p>提供普通卡、贴片卡、工业卡等多种类型物联网卡，同时对物联网卡的生命周期进行全面管理，跨越试用期、沉默期、使用期。</p>
 		<h4>灵活低价:</h4>
 		<p>极具优势的资费计划，提供季度、半年、全年套餐包以及流量池共享方案。</p>
 		<h4>运营支撑:</h4>
 		<p>高数据运算能力、高吞吐量、高并发量的系统级服务。提供物联网卡的流量查询、充值续费、续费统计、账单管理、短信下发和数据统计等运营开放能力</p>
 		<h4>0风险试用:</h4>
 		<p>推出全新申请免费试用，让您先体验后合作。我们承诺，所有物联网卡均是运营商原卡，假一赔十，真正的0风险试用。</p>
 </div>

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
		imgload() {
			this.$refs.scroll.refresh()
		}
	},
	components: {
		BScroll,
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.aboutus{
	.article_box{
		background: #fff;
		padding: 12px;
		.p1{
			font-size: 16px;

		}
	}
	.title{
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 16px;
	}
	.time{
		font-size: 16px;
		margin-bottom: 14px;
	}
	.content{
		font-size: 18px;
		h4{
			margin-top: 20px;
			margin-bottom: 8px;
			i{
				margin-right: 8px;
			}
		}
		p{
			font-size: 16px;
			text-indent: 20px;
			margin-bottom: 16px;
			color: #999;
		}
	}
}
</style>
