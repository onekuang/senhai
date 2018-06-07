<template>
<div class="forget">
<BScroll class="box_wrapper" ref="scroll">
<div>
  <div class="mail">
    <mt-field label="新 密 码 ：" type="password" placeholder="请输入新密码" v-model="password1" />
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
      <mt-button type='danger'  style='width: 100%;'>
        确定更改
      </mt-button>
    </div>
  </div>
</div>
</BScroll>
</div>
</template>

<script>
import { Field, Button  } from 'mint-ui'; 
import api from '../../assets/api/api.js'
import BScroll from '../base/scroll/scroll'
export default {
  data() {
    return {
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
      console.log('get code...')
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
