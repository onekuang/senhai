<template>
<div class="order_flow ab_full">
	<div class="serch_box">
		<Search 
			ref='searchBox' 
			@query="son_getquery"
			@search="son_search"
		/>
	</div>
	<BScroll class="box_wrapper" ref="scroll"><div>
		<div class="flow_list_wrapper">
				<ul class="order_des">
					<li class="des_item" 
						v-for= "item in flow_data"
						@click="goto(item.id)"
					>
						<div class="key">卡号</div>
						<div class="val">{{item.num}}</div>
					</li>
				</ul>
		</div>
	<!-- <div class="list_wrapper">
		<ul>
			<li class="list_item" v-for='item in listdata'>
				<div class="center">
					<p>卡号:  <span>{{item.num}}</span></p>
					<p>IMSI:  <span>{{item.IMSI}}</span></p>
					<p>ICCID:  <span>{{item.ICCID}}</span></p>
					<p>状态: <span>{{item.status}}</span></p>
					<p>激活时间: <span>{{item.time}}</span></p>
				</div>
				<div class="right">
					<p>剩余流量<br><span>{{item.flow}}</span></p>
				</div>
			</li>
		</ul>
	</div> -->
</div></BScroll>
</div>
</template>

<script>
import Search from '../base/search/search.vue'
import BScroll from '../base/scroll/scroll'
export default {
	data() {
		return {
			query: '',
			origin_flow_data:[
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
			],
			flow_data:[
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
				{id:'1',num:'12345123451234512345'},
				{id:'1',num:'23452345234523452345'},
				{id:'1',num:'33479234792347923479'},
				{id:'1',num:'23479234792347923479'},
				{id:'1',num:'23478234782347823478'},
			],
			listdata:[
				{id:1,num:1234567890123,IMSI:1234567890123,ICCID:1234567890123,
					status:'正常使用',time:'2012-12-22',flow:'52178.22M'
				},
				{id:1,num:1234567890123,IMSI:1234567890123,ICCID:1234567890123,
					status:'停机',time:'2012-12-22',flow:'234.24M'
				},
			]
		}
	},
	watch: {
		query: function(n ,o ) {
			this._search(n)
		}
	},
	methods: {
		son_getquery(val) {
			this.query = val
		},
		son_search() {
			if(this.query == '') {
				return;
			}
		},
		goto(id) {
			this.$router.push({
				path: `/carddetail?id=${id}`
			})
		},
		// 搜索
		_search(val) {
			let that = this;
			let arr = []
			this.origin_flow_data.forEach(function(item, index) {
				if(item.num.search(eval("/"+val + "/")) == 0) {
				  let new_arr = that.origin_flow_data[index]
					arr.push(new_arr)
					// console.log(new_arr)
				}
			})
			that.flow_data = arr;
		}
	},
	components: {
		Search,BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.box_wrapper{
	top: 45px;
}
.serch_box{
	padding: 4px;
	background: #eee;
}
.flow_list_wrapper{
	.order_des{
	    // margin-top: 20px;
	    margin: 4px;
	    .des_item{
	        display: flex;
	        width: 100%;
	        height: 40px;
	        line-height: 40px;
	        padding: 0 12px;
	        background: #fff;
	        .key{
	            width: 100px;
	            color: #666;
	        }
	        .val{
	            flex: 1;
	            text-align: right;
	            font-size: 15px;
	        }
	    }
	}
}
.list_wrapper{
	ul{padding: 4px;}
	.list_item{
		display: flex;
		height: 160px;
		background: #fff;
		padding: 0 8px;
		margin-bottom: 12px;
		border-radius: 4px;
		.left{
			width: 60px;
			flex: 0 0 60px;
			text-align: center;
			img{
				margin-top: 20px;
				border-radius: 50%;
			}
		}
		.center{
			flex: 1;
			padding-left: 8px;
			>p{
				height: 20px;
				margin: 10px 0;
				color: #666;
			}
			>p:nth-of-type(1){
				span{
					color: #000;
				}
			}
			>p:nth-of-type(2){
				
			}
			>p:nth-of-type(3){
			}
		}
		.right{
			margin-right: 12px;
			height: 120px;
			width: 120px;
			flex: 0 0 120px;
			margin-top: 20px;
			text-align: center;
			font-size: 14px;
			padding-top: 30px;
			color: #eee;
			border-radius: 50%;
			background: #56b7ff;
			span{
				display: inline-block;
				margin-top: 8px;
				font-size: 18px;
				font-weight: 600;
				color: #fff;
			}
		}	
	}	
}
</style>
