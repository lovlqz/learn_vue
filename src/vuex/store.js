import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    isLogin: 'false',
    ins: 0
  },
  mutations: {
    isLogin (state, msg) {
      state.isLogin = msg
      sessionStorage.setItem('isLogin', 'true')
    },
    ins (state, msg) {
      state.ins = msg
      sessionStorage.setItem('ins', msg)
    }
  }
})

export default store
