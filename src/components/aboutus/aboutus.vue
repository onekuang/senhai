<template>
<div class="aboutus ab_full">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="banner">
		<img src="../../assets/images/aboutus.jpg" width="100%">
	</div>
<div class="article_box">
 <h1 class="title">深圳市森海时代科技有限公司</h1>
 <p class="p1">&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi porro iste cupiditate deleniti libero sunt? Eos placeat magni, non alias ut temporibus, in quae labore pariatur aliquid quibusdam quos delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error eveniet sunt cupiditate repudiandae fugiat laudantium, ratione, voluptas sit nemo inventore nulla debitis alias laborum saepe molestias vel architecto minus.
 </p>
 <div class="content">
 		<h4><i class="iconfont icon-ticket_fill"></i>主营：</h4>
 		<p>物联网卡，物联网产品联网解决方案，三网4G物联卡，贴片卡，工业级物联卡，陶瓷卡，NB卡。
 			一点接入，全网服务，丰富的号段，安全的通信管理，高质量的网络。
 		</p>
 		<h4><i class="iconfont icon-dizhi3"></i>地址：</h4>
 		<p>龙华区龙胜路万通综合楼505</p>
 		<h4><i class="iconfont icon-peoplefill"></i>联系人：</h4>
 		<p>任经理</p>
 		<h4><i class="iconfont icon-dianhua"></i>电话：</h4>
 		<p><a href="tel:0755-36957418">0755-36957418</a></p>
 		<h4><i class="iconfont icon-shouji"></i>手机：</h4>
 		<p><a href="tel:17768081744">17768081744</a></p>
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
		font-size: 16px;
		h4{
			margin-top: 20px;
			margin-bottom: 8px;
			i{
				margin-right: 8px;
			}
		}
		p{
			text-indent: 20px;
			margin-bottom: 16px;
		}
	}
}
</style>
