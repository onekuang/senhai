<template>
<div class="news ab_full">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="banner">
		<img src="../../assets/images/news_banner.jpg" width="100%" @load="imgload">
	</div>
  <div class="box" v-for='(item, index) in news_data' @click='goto_article(index)'>
  	<div class="img">
  		<img src="../../assets/3.png" width="100" height="100">
  	</div>
  	<div class="info">
  		<h3 class="title">新卡上市新卡上市新卡上市新卡上市新卡上市</h3>
  		<p class="time">2022年12月22日</p>
  		<p class="description">到这里其实绘制底部选项卡和webview模实原理是一样的，也可以在manifest.json中配置，但是考虑到水平中央的图标涉及屏幕分辨率动态计算目前放在首页plusReady事件中配置，也给开发者一种可以手动绘制view控件的方法，如果你想在非首页采用这种方法呢</p>
  	</div>
  </div>


	
</div>
</BScroll>
</div>

</template>

<script>
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			news_data:[
				{id:1,title:'title',time:'2022年12月22日',info:'descrition..'},
				{id:2,title:'title',time:'2022年12月22日',info:'descrition..'},
				{id:3,title:'title',time:'2022年12月22日',info:'descrition..'},
				{id:3,title:'title',time:'2022年12月22日',info:'descrition..'},
			]
		}
	},
	methods: {
		goto_article(index) {
			this.$router.push({
				path: `/article?id=${index}`
			})
		},
		imgload() {
			this.$refs.scroll.refresh()
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.news{
	.banner{
		padding: 8px;
		img{
			border-radius: 8px;
			box-shadow: 1px 1px 4px 2px rgba(0,0,0,.5);
		}
	}
	.box{
		background: #fff;
		margin-bottom: 8px;
		padding: 6px;
		display: flex;
		.img{
			width: 120px;
			flex: 0 0 120px;
			text-align: center;
			padding-top: 10px;
		}
		.info{
			flex: 1;
			.title{
				margin-top: 6px;
				max-width: 65%;
				.ell();
			}
			.time{
				margin: 8px 0;
				color: #888;
				font-size: 12px;
			}
			.description{
				font-size: 14px;
				text-indent: 1em;
				line-height: 24px;
				height: 48px;
				text-overflow:ellipsis; 
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 2;
				overflow: hidden;
			}
		}
	}
}
</style>
