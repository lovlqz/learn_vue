// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 使用element组件
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import 'font-awesome/css/font-awesome.css' // 引入字体图标
import Vuex from 'vuex' // vuex状态管理
import store from './vuex/store' // 状态公用js

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created () {
    if (!sessionStorage.getItem('isLogin')) {
      sessionStorage.setItem('isLogin', 'false')
    }
    this.$store.state.isLogin = sessionStorage.getItem('isLogin')

    if (!sessionStorage.getItem('ins')) {
      sessionStorage.setItem('ins', 0)
    }
  }
})
