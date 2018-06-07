<template>
<div class="article">
<BScroll class="box_wrapper" ref="scroll">
<div>
<div class="article_box">

 <h1 class="title">我是个标题id={{id}}</h1>
 <p class="time">
 	{{k_time}}
 </p>
 <div class="content">
 		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repudiandae, commodi quae vitae minima. Tempore maxime consequatur mollitia, sunt laudantium harum veniam, excepturi, exercitationem sequi assumenda porro possimus modi repudiandae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
		<img src="../../assets/images/pro_banner2.jpg" alt="">
 		 atque dolore ad dolores esse sapiente numquam temporibus nemo, aperiam eligendi qui ea ullam iste laboriosam nostrum animi vel, laborum fugiat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vitae asperiores ea perspiciatis exercitationem. Doloremque perferendis sit recusandae accusamus inventore eligendi sint alias minus ducimus quo explicabo, aliquid delectus itaque?
		<img src="../../assets/images/pro_banner2.jpg" alt="">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tenetur dolore molestiae fuga fugit nihil, obcaecati alias eius, ratione maxime! Atque libero blanditiis voluptatibus consequuntur magni itaque, iste enim! Eligendi!lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quos, voluptates placeat at vero tempora sunt nisi facilis dolor repudiandae incidunt excepturi reiciendis error autem ut, nam molestias eos commodi.
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
			id:'',
			k_time:'2011-11-11 11:22:33',
		}
	},
	created() {
		this._getdata()
	},
	methods: {
		_getdata() {
			this.id = this.$route.query.id
		}
	},
	components: {
		BScroll,
	}
}
</script>

<style lang="less">
@import url('../../assets/less/config.less');
.article{
	padding: 8px;
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
		img{
			max-width: 100%;
		}
	}
}
</style>
