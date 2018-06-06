<template>
<div class="start">
	<div class="jd_layout">
	    <!-- 头部搜索部分 -->
	    <header class="jd_header">
	    	<div class="jd_header_box">
	    		<a href="#" class="icon_logo"></a>
	    		<form action="#">
	    			<span class="icon_search"></span>
	    			<input type="search" placeholder="请输入搜索内容"/>
	    		</form>
	    		<a href="#" class="login">登录</a>
	    	</div>
	    </header>
	    <!-- /头部搜索部分 -->
			
	    <!-- 轮播图部分 -->
	    <swipe
	    	v-model="index"
	      style="text-align: center; line-height: 80px; height: 200px; background: #42b983;"
	      :autoplayTime = autoplayTime
	    >
	      <swipe-item style="height: 200px; line-height: 200px" 
	      	v-for="(item,index) in slide_data" :key='item.id'>
	      	<img src="../../assets/images/jd/l8.jpg" height=200>
	      </swipe-item>
	    </swipe>
	    <!-- /轮播图部分 -->

	    
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			index:0,
			slide_data:[
				{id:1,url:'xxx'},
				{id:2,url:'xxx'},
				{id:3,url:'xxx'}
			],
			autoplayTime:3000,
			title: 'start',
		}
	},
}

</script>

<style scoped lang="less">
.start{
	/* 头部搜索部分 */
	.jd_header {
		width: 100%;
		height: 40px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.jd_header .jd_header_box {
		max-width: 640px;
		min-width: 300px;
		height: 40px;
		margin: 0 auto;
		position: relative;
		background: rgba(0,0,0,.5);
	}
	.jd_header .jd_header_box .icon_logo {
		background-position: 0 -103px;
		width: 60px;
		height: 36px;
		display: block;
		position: absolute;
		top: 4px;
		left: 10px;
	}
	.jd_header form {
		width: 100%;
		height: 40px;
		padding-left: 75px;
		padding-right: 55px;
	}
	.jd_header form input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		margin-top: 5px;
		padding-left: 35px;
	}
	.jd_header form .icon_search {
		background-position: -60px -109px;
		width: 20px;
		height: 20px;
		display: block;
		position: absolute;
		top: 10px;
		left: 85px;
	}
	.jd_header .login {
		width: 50px;
	    height: 40px;
	    display: block;
	    text-align: center;
	    line-height: 40px;
	    font-size: 15px;
	    color: #fff;
	    position: absolute;
	    top: 0;
	    right: 0;
	}
	/* nav导航部分 */
	.jd_nav {
		width: 100%;
		height: 150px;
		padding: 0 3.125%;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
		padding-top: 11px;
	}
	.jd_nav ul {
		width: 100%;
	}
	.jd_nav ul li {
		width: 25%;
		height: 69px;
		float: left;
	}
	.jd_nav ul li a {
		display: block;
		height: 100%;
		width: 100%;
		text-align: center;
	}
	.jd_nav ul li a img {
		display: block;
		width: 40px;
		height: 40px;
		margin: 0 auto;
	}
	.jd_nav ul li a p {
		color: #666;
		font-size: 12px;
		margin-top: 6px;
	}

	/* 商品活动区块 */
	.jd_product {
		margin: 0 5px;
	}
	.jd_product .jd_product_box {
		margin-top: 8px;
		box-shadow: 0 0 1px 1px #e0e0e0;
		background-color: #fff;
	}
	.jd_product .jd_product_box .product_top {
		height: 32px;
		border-bottom: 1px solid #e0e0e0;
		position: relative;
	}
	.jd_product .jd_product_box .product_top.no_border {
		border-bottom: none;
	}
	.jd_product .jd_product_box .product_bot {

	}
	.jd_product .jd_product_box .product_top h3 {
		font-size: 15px;
		color: #666;
		font-weight: inherit;
		padding-left: 15px;
		line-height: 32px;
	}
	.jd_product .jd_product_box .product_top h3::before {
		content: " ";
		display: block;
		height: 12px;
		width: 3px;
		background-color: #d8505c;
		position: absolute;
		top: 10px;
		left: 8px;
	}


	/* 商品展示部分 */
	.jd_secondkill .product_bot {
		width: 100%;
	}
	.jd_secondkill .product_bot ul {
		width: 100%;
		padding: 10px 0;
	}
	.jd_secondkill .product_bot ul li {
		width: 33.333%;
		float: left;
	}
	.jd_secondkill .product_bot ul li a {
		width: 100%;
	}
	.jd_secondkill .product_bot ul li a .img_box {
		width: 100%;
		border-right: 1px solid #e0e0e0;
	}
	.jd_secondkill .product_bot ul li:last-child a .img_box {
		border-right: none;
	}
	.jd_secondkill .product_bot ul li a .img_box img {
		width: 64%;
		display: block;
		margin: 0 auto;
	}
	.jd_secondkill .product_bot ul li a .now_price {
		color: #d8505c;
		font-size: 13px;
		text-align: center;
		margin-top: 3px;
	}
	.jd_secondkill .product_bot ul li a .old_price {
		color: #888;
		font-size: 12px;
		text-align: center;
		text-decoration: line-through;
		margin-top: 3px;
	}

	.jd_product .jd_pd .product_bot {
		width: 100%;
	}
	.jd_product .jd_pd .product_bot .p_left {
		width: 50%;
		float: left;
	}
	.jd_product .jd_pd .product_bot .p_right {
		width: 50%;
		float: right;
	}
	.jd_product .jd_pd .product_bot .b_left {
		border-right: 1px solid #e0e0e0;
	}
	.jd_product .jd_pd .product_bot .b_right {
		border-right: 1px solid #e0e0e0;
	}
	.jd_product .jd_pd .product_bot .b_bottom {
		border-bottom: 1px solid #e0e0e0;
	}
	.jd_product .jd_pd .product_bot a img {
		width: 100%;
		display: block;
	}
}
</style>
