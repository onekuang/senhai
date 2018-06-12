<template>
<div class="aboutus ab_full">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="banner">
		<img src="../../assets/images/aboutus.jpg" width="100%" @load="imgload">
	</div>
<div class="article_box">
 <h1 class="title">深圳市森海时代科技有限公司</h1>
 <p class="p1">&nbsp;&nbsp;深圳市森海时代科技有限公司，成立于2014年。<br>
 	我司专业为各行业提供通讯设备服务，经过近三年的努力，已拥有一支优秀的服务团队，具有丰富的物联网项目合作经验。在物联卡的推广销售中，与广大智能硬件、物联网设备、移动电子产品厂商及专业级运营平台建立起良好的合作关系，有丰富的终端客户群体。<br><br>
 	我们的目标：提供行业更优质的服务，努力成为用户最满意的通讯服务企业。<br><br>
 	我们的理念：诚信为本，实力为先，全心全意为客户服务；本公司秉承服务至上，实力为本的经营理念，以专业的技术服务能力；专业的服务团队。保障用户的使用稳定。 <br><br>
 	公司经营至今，已经积累了大量物联网生态链相关人脉。我们目前拥有一个了解市场的专业团队。对于通讯模块的市场，远程市场，金融市场都有一定的了解的市场团队；有自己的技术团队。<br><br>
 	我们的主要合作伙伴：深圳市锐恩斯科技有限公司（做远程设备）；随行付（深圳）有限公司；深圳市远航电子等等。
 </p>
 <div class="content">
 		<h4><i class="iconfont icon-ticket_fill"></i>主营：</h4>
 		<p>物联网卡，物联网产品联网解决方案，三网4G物联卡，贴片卡，工业级物联卡，陶瓷卡，NB卡。
 			一点接入，全网服务，丰富的号段，安全的通信管理，高质量的网络。
 		</p>
 		<h4><i class="iconfont icon-dizhi3"></i>地址：</h4>
 		<p>深圳市龙华区龙胜路万通综合楼505</p>
 		<h4><i class="iconfont icon-peoplefill"></i>联系人：</h4>
 		<p>任经理</p>
 		<h4><i class="iconfont icon-dianhua"></i>电话：</h4>
 		<p><a href="tel:0755-36957418">0755-36957418</a></p>
 		<h4><i class="iconfont icon-shouji"></i>手机：</h4>
 		<p><a href="tel:17768081744">17768081744</a></p>
 </div>

 <!-- map -->
	<k_map />

</div>

</div></BScroll>
</div>
</template>

<script>
import BScroll from '../base/scroll/scroll'
import k_map from '../base/map/map'
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
		BScroll,k_map
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
			line-height: 26px;
			color: #999;
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
