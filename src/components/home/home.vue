<template>
<div class="home">
<BScroll class="box_wrapper" ref="scroll">
<div>
	<div class="jd_layout">
	    <!-- 头部搜索部分 -->
        <!-- <header class="jd_header">
        	<div class="jd_header_box">
        		<a href="#" class="icon_logo"></a>
        		<form action="#">
        			<span class="icon_search"></span>
        			<input type="search" placeholder="请输入搜索内容"/>
        		</form>
        		<a href="#" class="login">登录</a>
        	</div>
        </header> -->
        <!-- /头部搜索部分 -->
			
	    <!-- 轮播图部分 -->
	    <swipe
	    	v-model="index"
	      style="text-align: center; line-height: 80px; height: 200px; background: #eee;"
	      :autoplayTime = autoplayTime
	    > 
	      <swipe-item style="height: 200px; line-height: 200px">
	      	<img src="../../assets/images/jd/banner1.jpg" width="100%" height=200>
	      </swipe-item>
	      <swipe-item style="height: 200px; line-height: 200px">
	      	<img src="../../assets/images/jd/banner2.jpg" width="100%" height=200>
	      </swipe-item>
	      <swipe-item style="height: 200px; line-height: 200px">
	      	<img src="../../assets/images/jd/banner3.jpg" width="100%" height=200>
	      </swipe-item>
	    </swipe>
	    <!-- /轮播图部分 -->

	    <!-- nav导航部分 -->
	    <nav class="jd_nav">
	    	<ul>
	    		<li>
	    			<router-link to='/product' tag='a'>
	    				<img src="../../assets/icon_png/4.png" >
	    				<p>产品中心</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/rechargelist' tag='a'>
	    				<img src="../../assets/icon_png/3.png" >
	    				<p>充值记录</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/recharge' tag='a'>
	    				<img src="../../assets/icon_png/2.png" >
	    				<p>流量充值</p>
	    			</router-link></li>
	    		<li><router-link to='/aboutus' tag='a'>
	    				<img src="../../assets/icon_png/1.png" >
	    				<p>关于我们</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/case' tag='a'>
	    				<img src="../../assets/icon_png/8.png" >
	    				<p>行业案例</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/news' tag='a'>
	    				<img src="../../assets/icon_png/7.png" >
	    				<p>新闻动态</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/hexin' tag='a'>
	    				<img src="../../assets/icon_png/6.png" >
	    				<p>核心优势</p>
	    			</router-link>
	    		</li>
	    		<li><router-link to='/product' tag='a'>
	    				<img src="../../assets/icon_png/5.png" >
	    				<p>分类查询</p>
	    			</router-link>
	    		</li>
	    	</ul>
	    </nav>
	    <!-- /nav导航部分 -->

	    <!-- 商品活动区块 -->
	    <main class="jd_product">
	    	<section class="jd_product_box jd_secondkill">
	    		<div class="product_top">
	    			<h3>热门推荐</h3>
	    		</div>
	    		<div class="product_bot">
	    			<ul class="clearfix">
	    				<li>
	    					<a href="#">
	    					    <div class="img_box"><img src="../../assets/1.png" ></div> 
	    					    <p class="now_price">物联卡</p>
	    					    <p class="old_price">&yen;200.00</p>
	    					</a>      					
	    				</li>
	    				<li>        					
	    					<a href="#">
	    					    <div class="img_box"><img src="../../assets/3.png" ></div> 
	    					    <p class="now_price">陶瓷卡</p>
	    					    <p class="old_price">&yen;200.00</p>
	    					</a>        					     
	    				</li>
	    				<li>
	    					<a href="#">
	    					    <div class="img_box"><img src="../../assets/4.png" ></div> 
	    					    <p class="now_price">贴片卡</p>
	    					    <p class="old_price">&yen;200.00</p>
	    					</a> 
	    				</li>
	    			</ul>
	    		</div>
	    	</section>
	   <!--  	<section class="jd_product_box jd_pd">
	    		<div class="product_top">
	    			<h3>产品中心</h3>
	    		</div>
	    		<div class="product_bot clearfix">
	    			<router-link to="/product" class="p_left b_right"><img src="../../assets/images/case/006_02.jpg" ></router-link>
	    			<router-link to="/product" class="p_right b_bottom"><img src="../../assets/images/case/006_01.jpg" ></router-link>
	    			<router-link to="/product" class="p_right"><img src="../../assets/images/case/006_03.jpg" ></router-link>
	    		</div>
	    	</section> -->

	    	
	    	<section class="jd_product_box jd_pd">
	    		<div class="product_top">
	    			<h3>公司简介</h3>
	    		</div>
	    		<div class="product_bot clearfix">
	    			<router-link to="/aboutus" class="">
	    				<img src="../../assets/images/about_banner.jpg" >
	    			</router-link>
	    		</div>
	    	</section>
	    	
	    	<section class="jd_product_box jd_pd">
	    		<div class="product_top">
	    			<h3>精选案例</h3>
	    		</div>
	    		<div class="product_bot clearfix">
	    			<router-link to="/case" class="p_right b_left"><img src="../../assets/case1.jpg" ></router-link>
	    			<router-link to="/case"  class="p_left b_bottom"><img src="../../assets/case3.jpg" ></router-link>
	    			<router-link to="/case"  class="p_left"><img src="../../assets/case2.jpg" ></router-link>
	    		</div>
	    	</section>

	    	<section class="jd_product_box jd_pd">
	    		<div class="product_top">
	    			<h3>合作伙伴</h3>
	    		</div>
	    		<div class="k_link_box">
	    			<a href=""><img src="../../assets/images/case/hz_01.jpg" width="100%"></a>
	    			<a href=""><img src="../../assets/images/case/hz_02.jpg" width="100%"></a>
	    			<a href=""><img src="../../assets/images/case/hz_03.jpg" width="100%"></a>
	    		</div>
	    	</section>
	    </main>
	    <!-- /商品活动区块 -->
	</div>
</div>
</BScroll>
</div>
</template>

<script>
import api from '../../assets/api/api.js'
import BScroll from '../base/scroll/scroll'
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
			title: 'home',
		}
	},
	components: {
		BScroll,
	}
}

</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.box_wrapper{
	top: 0;
}
.home{
	/* 头部搜索部分 */
	.jd_header {
		width: 100%;
		height: 40px;
		z-index: 999;
	}
	.jd_header .jd_header_box {
		max-width: 640px;
		min-width: 300px;
		height: 40px;
		margin: 0 auto;
		position: relative;
		background: rgb(224, 49, 58);
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
		// text-decoration: line-through;
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
	.k_link_box{
		display: flex;
		flex-wrap: wrap;
		a{
			width: 33%;
			flex: 0 0 33%;
		}
	}
}
</style>
