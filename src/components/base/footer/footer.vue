<template>
<div class="k_footer">
	<div class="k_footer_box">
		<div 
			class="item"
			v-for= "(item, index ) in tab_data"
			:class = "{active:index == select_index}"
			@click = "goto(index,item.path)"
		>
			<i class="iconfont" :class="item.icon"></i>
			<p>{{item.title}}</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			tab_data:[
				{id: 0,title:'主页',path:"/home",icon:'icon-home'},
				{id: 1,title:'产品',path:"/product",icon:'icon-apps'},
				{id: 2,title:'新闻',path:"/news",icon:'icon-ticket_fill'},
				{id: 3,title:'个人',path:"/users",icon:'icon-peoplefill'},
			],
			select_index: 0,
		}
	},
	methods: {
		goto(index,path) {
			this.select_index = index
			this.$router.push({
				path: path
			})
		}
	}
}
</script>

<style scoped lang="less">
// 配置选中颜色
@select_color: #26a2ff;

.k_footer{
	height: 50px;
	.k_footer_box{
		display: flex;
		color: #666;
		.item{
			flex: 1;
			text-align: center;
			i{
				font-size: 24px;
			}
		}
		.active{
			color: @select_color; 
		}
	}
}
</style>
