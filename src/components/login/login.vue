<template>
<div class="login">
  
  <mt-field label="手机号" placeholder="请输入手机号" type="text" v-model="mobile" />
  <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" />
  <br>
  <!-- 注册和忘记密码入口 -->
  <div class="btn_box">
    <router-link class ="span1" to='/sign'>
      没有帐号?<strong>点击注册</strong>
    </router-link>
    <router-link class="span2" to="/forget_pass">
      <strong>忘记密码?</strong>
    </router-link>
    <div class="clear"></div>
  </div>
  <br><br>



  <div class="btn_box">
    <mt-button type='danger'  style='width: 100%;' @click.native="login()">登录</mt-button>
  </div>
</div>
</template>

<script>
import {kk} from '../../common/js/k_form.js'
import { Field } from 'mint-ui';
export default {
  data() {
    return {
      mobile:'',
      password:''
    }
  },
  created() {
  },
  methods: {
    login() {
      if(!kk.is_mobile(this.mobile,this)) {return;}
      if(!kk.is_password(this.password, this)){return}

      console.log('请求')
    }
  },
  components: {
    Field
  }
}
</script>

<style scoped lang="less">
@import url('../../assets/less/config.less');
.span1{
  float: left;
  strong{
    color: #FF5252;
  }
}
.span2{
  float: right;
  color: #FF5252;
}
</style>
