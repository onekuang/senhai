<template>
<div class="order_detail">
	<div class="order_wrapper" id="order_info">		
		<div class="order_top">
			<h2>深圳市森海时代科技有限公司</h2>
			<div class="cound">-100.00</div>
			<div class="status">交易成功</div>
		</div>

		<div class="order_des">
			<div class="des_item">
				<div class="key">商品说明</div>
				<div class="val">陶瓷卡</div>
			</div>
			<div class="des_item">
				<div class="key">支付方式</div>
				<div class="val">微信支付</div>
			</div>
			<div class="hr"></div>
			<div class="des_item">
				<div class="key">创建时间</div>
				<div class="val">2015-12-12 08:08:08</div>
			</div>
			<div class="des_item">
				<div class="key">订单号</div>
				<div class="val">12345678900</div>
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
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.order_wrapper{
        padding: 8px 8px 20px;
        background: #fff;
        .order_top{
        text-align: center;
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
