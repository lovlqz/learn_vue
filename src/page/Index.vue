<template>
  <el-container class="container_wrapper">
    <demo-head></demo-head>
    <el-container>
      <router-view></router-view>
    </el-container>
    <demo-foot></demo-foot>
  </el-container>
</template>
<script>
import demoHead from "../components/Header";
import demoFoot from "../components/Footer";
export default {
  data() {
    return {
      title: "llqllq"
    };
  },
  components: {
    demoHead,
    demoFoot
  }
};
</script>
<style lang="less" scoped>
  .container_wrapper{
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>

