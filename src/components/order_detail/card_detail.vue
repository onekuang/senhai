<template>
<div class="card_detail">
	<div class="order_wrapper" id="order_info">		
		<div class="order_top">
			<h2>详情</h2>
		</div>

		<div class="order_des">
            <div class="des_item">
                <div class="key">物联卡号</div>
                <div class="val">1234567890123</div>
            </div>
            <div class="des_item">
                <div class="key">企业ID</div>
                <div class="val">1234567890123</div>
            </div>
			<div class="des_item">
				<div class="key">IMSI</div>
				<div class="val">1234567890123</div>
			</div>
			<div class="des_item">
				<div class="key">ICCID</div>
				<div class="val">1234567890123</div>
			</div>
            <div class="des_item">
                <div class="key">物联卡状态</div>
                <div class="val">正常使用</div>
            </div>
            <div class="des_item">
                <div class="key">开户日期</div>
                <div class="val">2015-12-12 08:08:08</div>
            </div>
			<div class="des_item">
				<div class="key">激活日期</div>
				<div class="val">2015-12-12 08:08:08</div>
			</div>
			<div class="des_item">
                <div class="key">已用流量</div>
                <div class="val">2312.22M</div>
            </div>
            <div class="des_item">
                <div class="key">剩余流量</div>
                <div class="val">2312.22M</div>
            </div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
  created() {
    this._getdata()
  },
  methods: {
    _getdata() {
      let id = this.$route.query.id
      console.log(id)
    }
  }
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.order_wrapper{
        padding: 8px 8px 20px;
        background: #fff;
        .order_top{
            text-align: left;
            h2{
                margin-top: 16px;
                font-size: 20px;
            }
            .cound{
                font-weight: 700;
                font-size: 24px;
                margin: 16px 0 10px;
            }
            .status{
                font-size: 15px;
                color: #999;
            }
        }
        .order_des{
            margin-top: 20px;
            .des_item{
                display: flex;
                width: 100%;
                height: 40px;
                line-height: 40px;
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
</style>
