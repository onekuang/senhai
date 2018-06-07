<template>
<div class="article">
<BScroll class="box_wrapper" ref="scroll">
<div>
<div class="article_box">

 <h1 class="title">我是个标题</h1>
 <p class="time">
 	2011-11-11 11:22:33
 </p>
 <p class="content">
 		this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....
 		this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....
 		this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....
 		this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....
 		this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....this is content....
 </p>

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
.article{
	.article_box{
		background: #fff;
		padding: 12px;
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
		text-indent: 1em;
		font-size: 18px;
	}
}
</style>
