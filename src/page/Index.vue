<template>
<div>
  <demo-head></demo-head>
  <div id="wraper">
      <el-row style="height: 100%;">
      <el-col :span="3" style="min-height: 100%; background-color: #324057;">
        {{title}}
      </el-col>
      <el-col :span="21" style="height: 100%;overflow: auto;">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
  <demo-foot></demo-foot>
</div>
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
  },
};
</script>
<style lang="less" scoped>

</style>

