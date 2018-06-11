<template>
<div class="card_detail">
  <BScroll class="box_wrapper" ref="scroll" ><div>
	<div class="order_wrapper" id="order_info">		
		<div class="order_top">		
          <div class="box">
              <div class="wave"></div>
              <div class="top">
                  <h5>本月剩余流量</h5>
                  <p>500.99 <span>MB</span></p>                
              </div>
              <div class="bottom">
                  <p>已用流量: <span>1223.66</span>MB</p>
                  <!-- <p>短信使用: <span>233</span>条</p> -->
              </div>
          </div>
    <div class="tab">
      <div class="item">
        <p class="p1">剩余话费</p>
        <p class="p2"><span>200</span>元</p>
        <router-link class="span1" tag='span' to="/recharge">交话费</router-link>
      </div>
      <div class="item">
        <p class="p1">剩余语音</p>
        <p class="p2"><span>200</span>分钟</p>
      </div>
    </div>


    </div>


		<div class="order_des">
      <div class="des_item">
          <div class="key">物联卡状态</div>
          <div class="val">
            <span class="span1" :class="{success:status==1,error:status==-1,}">{{c_status}}</span>
          </div>
      </div>
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
          <div class="key">开户日期</div>
          <div class="val">2015-12-12</div>
      </div>
			<div class="des_item">
				<div class="key">激活日期</div>
				<div class="val">2015-12-12</div>
			</div>
		</div>

        <div class="order_btns">
            <!-- <p>以及造成欠费停机</p> -->

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
      status: -1
  	}
  },
  created() {
    this._getdata()
  },
  computed: {
    c_status: function(val) {
      if(this.status == -1) {return '已经停机'}
      if(this.status == 1) {return '正常使用'}
    }
  },
  methods: {
    _getdata() {
      let id = this.$route.query.id
      console.log(id)
    }
  },
  components: {
    BScroll
  }
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.order_wrapper{  
  background: #fff;
  .order_top{
      text-align: left;
      padding-top: 16px;
      background-image: url(../../assets/images/card_bg.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
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
  .tab{
    display: flex;
    // background: rgba(0,0,0,.2);
    margin-top: 6px;
    .item{
      flex: 1;
      height: 100px;
      text-align: center;
      color: #fff;
      .p1{
        // margin-top: 4px;
      }
      .p2{
        margin-bottom: 4px;
        span{
          font-size: 24px;
          font-weight: 600;
        }
      }
      .span1{
        color: #fff;
        // border: 1px solid #eee;
        background: rgba(0,0,0,.3);
        padding: 4px 16px;
        border-radius: 12px;
      }
    }
  }
  .order_des{
    padding: 8px 8px 20px;
      // border-top: 1px solid #eee;
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
              .span1{
                display: inline-block;
                padding: 0px 12px;
                border-radius: 8px;
                height: 24px;
                line-height: 24px;
                color: #fff;
                &.success{
                  background: #26A2FF;
                }
                &.error{
                  background: #EF4F4F;
                }
              }
          }
      }
  }
}
.box{
    width: 200px;
    height: 200px;
    margin: 0px auto;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    .top{
        width: 150px;
        text-align: center;
        color: #3daafc;
        position: absolute;
        z-index: 10;
        top: 30px;
        left: 50%;
        transform: translateX(-50%;);
        font-size: 18px;
        h5{
            font-weight: 400;
            color: #999;
        }
        p{
            margin-top: 0px;
            font-size: 30px;
            font-weight: 600;
        }
        span{
            font-size: 14px;
            font-weight: 400;
        }
    }
    .bottom{
        color: #fff;
        width: 150px;
        text-align: center;
        position: absolute;
        z-index: 10;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        p{
            font-size: 16px;
        }
        span{
          
        }
    }
}
.wave{
    width: 200px;
    height: 200px;
    background-color: #3daafc;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transform: translate3d(0,0,0);
}
.wave::before,.wave::after{
    content: "";
    width: 400px;
    height: 400px;
    position: absolute;
    top: -100%;
    left: -50%;
}
.wave::before{
    background-color: rgba(255,255,255,0.7);
    border-radius: 40%;
    //这两个伪类的外边框圆角都是经过推敲的，以达到视觉上完美的效果
    animation:10s rotate_before linear infinite;
}
.wave::after{
    // background-color: rgba(255,255,255,.1);
    background-color: #fff;
    border-radius: 46%;
    animation:10s rotate_after linear infinite;
}
@keyframes rotate_before{
    from{
        transform: translate(0%,-24%) rotate(0deg);
    }
    to{
        transform:translate(0%,-24%) rotate(360deg);
    }
}
@keyframes rotate_after{
    from{
        transform: translate(0%,-24%) rotate(0deg);
    }
    to{
        transform:translate(0%,-24%) rotate(30deg);
        //这两个的旋转角度也是经过事先过很多次，和上面的圆角配合，才有了很好的视觉效果
    }
}
</style>
