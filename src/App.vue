<template>
  <div id="app">
    <router-view/>
<!--     <mt-tabbar v-model="selected">
      <mt-tab-item id="/">
        <img slot="icon" src="./assets/images/home.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="/product">
        <img slot="icon" src="./assets/images/goods.png">
        产品
      </mt-tab-item>
      <mt-tab-item id="/news">
        <img slot="icon" src="./assets/images/goods.png">
        新闻
      </mt-tab-item>
      <mt-tab-item id="/users">
        <img slot="icon" src="./assets/images/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar> -->
    <div class="footer">
      <k_footer></k_footer>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
import k_footer from './components/base/footer/footer'
export default {
  name: 'App',
  data() {
  	return {
  		selected: '/'
  	}
  },
  methods: {
  },
  watch: {
  	selected: function(val) {
  		this.$router.push({
  			path: val
  		})
  	}
  },
  components: {
  	Tabbar,
  	TabItem,
    k_footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #8A8A8A;
}
.footer{
  height: 50px;
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
