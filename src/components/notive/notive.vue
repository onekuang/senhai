<template>
<div class="notive ab_full">
<BScroll 
	class="box_wrapper" 
	ref="scroll" 
	:pullup = "true"
	@scrollToEnd='onscroll' 
>
<div>
  <div class="box" v-for='(item, index) in notive_data' @click='goto_article(index)'>
  	<div class="info" id="notive_list">
  		<h3 class="title">{{item.title}}</h3>
  		<p class="time">2002-11-22</p>
  		<p class="description">{{item.info}}</p>
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
			start_page:1,
			end_page:3,
			notive_data:[
				{id:1,title:'公告提醒',time:'2002-11-22',info:'森海时代公众号,今天上线啦..撒花.'},
				{id:2,title:'到期提醒',time:'2002-11-22',info:'卡号:xxxx -xxxx -xxxx -xxxx,将于2001-12-22即将过期,请及时充值,避免停机.'},
				{id:3,title:'成功提醒',time:'2002-11-22',info:'卡号:xxxx -xxxx -xxxx -xxxx,充值成功,现在余额xxx元.'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
				{id:3,title:'titile',time:'2002-11-22',info:'descrition..'},
			]
		}
	},
	methods: {
		goto_article(index) {
			this.$router.push({
				path: `/article?id=${index}`
			})
		},
		onscroll() {
			if(this.start_page == this.end_page){
				this.$refs.scroll.$emit('infinitescroll.loadedDone'); 
				return
			}
			this.notive_data.push({id:1,title:'上拉加载',time:'2002-11-22',info:'descrition..'},)
			this.start_page ++;
			this.$refs.scroll.$emit('infinitescroll.finishLoad'); 
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.notive{
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
			min-width: 60%;
			padding: 8px;
			.title{
				margin-top: 6px;
				.ell();
			}
			.time{
				margin: 8px 0;
				color: #888;
				font-size: 12px;
			}
			.description{
				font-size: 14px;
				line-height: 24px;
				color: #888;
			}
		}
	}
}
</style>
