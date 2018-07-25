<template>
  <el-footer class="footer_bottom">
    <el-row>
      <el-col :span="6"><i class="fa fa-comment-o"></i>消息</el-col>
      <el-col :span="6"><i class="fa fa-comment-o"></i>通讯录</el-col>
      <el-col :span="6"><i class="fa fa-comment-o"></i>发现</el-col>
      <el-col :span="6"><i class="fa fa-comment-o"></i>我的</el-col>
    </el-row>
  </el-footer>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted:function(){
    }
  }
</script>
<style>
  .footer_bottom{
    background: #333;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    color:#03ccbb;
    padding: 0;
  }
</style>
