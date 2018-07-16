<template>
 <div id="wraper">
    <span>{{name1}}</span>
    <button @click="goDemo2">跳转1</button>
    <router-link to="/">去首页</router-link>
    <div id="point"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      goDemo2: function() {
        alert('1222');
      },
      name1: "demo2333",
    };
  },
  mounted: function() {

  }
};

</script>
