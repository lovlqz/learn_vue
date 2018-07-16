<template>
 <div id="wraper">
    <button @click="goDemo1">跳转1</button>
    <router-link to="/demo2">去demo2</router-link>
    <div id="point"></div>
  </div>
</template>


<script>
import Vue from "vue";
export default {
  data() {
    return {
      goDemo1: function () {
        alert('11');
      }
    };
  },
  mounted: function() {
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount("#point");
  }
};

// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} 超级 {{alias}}</p>",
  data: function() {
    return {
      firstName: "你是——",
      lastName: "很牛的——",
      alias: "——怪物！"
    };
  }
});
</script>
<style>
#wraper {
  height: 100vh;
}
</style>
