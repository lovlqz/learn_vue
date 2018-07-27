<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeDestroy: function(){
    sessionStorage.clear()
  }
}
</script>

<style lang="less">
@import "./style/base";
body,html,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
