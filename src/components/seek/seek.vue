<template>
<div class="seek">
	<div class="seek_box">
		<mt-field v-model="seek_text" placeholder="请输入卡号/ICCID号码"/>
	</div>
	<br>
	<mt-button size="large" type="danger" @click="seek_data">立即查询</mt-button>
	<!-- <div class="seek_btn_box">
		<button class="seek_btn"><i class="iconfont icon-sousuo" /></button>
	</div> -->
</div>
</template>

<script>
import { Field, Button } from 'mint-ui';
export default {
	data() {
		return {
			seek_text:''
		}
	},
	methods: {
		seek_data() {
			if(this.seek_text == ''){
				this.$toast('内容不能为空')
				return
			}
			console.log(this.seek_text)
		}
	},
	components: {
		Field,Button
	}
}
</script>

<style scoped lang="less">
.seek{
	padding: 40px 8px 0;
	.seek_box{
		border: 2px solid #ef4f4f;
		// padding: 1px;
		border-radius: 4px;
		background: #ef4f4f;		
	}
}
.seek_btn_box{
	text-align: center;
	margin-top: 150px;
	.seek_btn{
		display: inline-block;
		background: #ff7f16;
		padding: 16px;
		border-radius: 50%;
		border: none;
		box-shadow: 1px 1px 4px 2px #eee;
		i{
			font-size: 36px;
			color: #fff;
		}
	}
}

</style>
