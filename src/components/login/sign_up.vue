<template>
<div class="forget">
<BScroll class="box_wrapper" ref="scroll">
<div>
  <div class="mail">
    <mt-field label="昵　　称：" type="text" placeholder="请输入昵称" v-model="username" />
    <mt-field label="密　　码：" type="password" placeholder="请输入新密码" v-model="password1" />
    <mt-field label="确认密码：" type="password" placeholder="请输入确认密码" v-model="password2" />
    <mt-field label="手 机 号 ：" placeholder="请输入新手机号码" v-model="mobile" />
    <mt-field label="验 证 码 ：" v-model="code">
      <mt-button 
        @click.native="getcode" 
        :disabled='code_disabled'>
        {{c_code}}
      </mt-button>
    </mt-field>
    <br><br>
    <div class="btn_box">
      <mt-button type='danger'  style='width: 100%;' @click.native='sign'>
        确定更改
      </mt-button>
    </div>
  </div>
</div>
</BScroll>
</div>
</template>

<script>
import {kk} from '../../common/js/k_form.js'
import { Field, Button  } from 'mint-ui'; 
import api from '../../assets/api/api.js'
import BScroll from '../base/scroll/scroll'
export default {
  data() {
    return {
      username  : '',
      password1 : '',
      password2 : '',
      mobile    : '',
      code      : '',
      code_disabled: false,
      code_time : 60,
    }
  },
  computed: {
    c_code:function() {
      if(this.code_disabled) {
        return '获取(' + this.code_time + ')'
      }else{
        return '获取'
      }
    }
  },
  methods: {
    getcode() {
      if(!kk.is_mobile(this.mobile,this)){return}

      let that = this
      this.code_disabled = true
      let time = setInterval(()=>{
        that.code_time--
        if(that.code_time <= 0){
          window.clearInterval(time);
          that.code_disabled = false
          that.code_time = 60
        }
      },1000)

      console.log('get code...')
    },
    sign() {
      if(!kk.is_username(this.username, this)){return;}
      if(!kk.is_password(this.password1, this)){return}
      if(this.password1 !== this.password2) {
        this.$toast('两次密码不一致');return;
      }
      if(!kk.is_mobile(this.mobile,this)){return}
      if(this.code == ''){return}
    }
  },
  components: {
    BScroll,
    Button,
    'k_field'   : Field ,
  }
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
</style>
