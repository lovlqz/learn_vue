<template>
  <div class="login_wrap">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名：">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="formLabelAlign.secrit"></el-input>
      </el-form-item>
      <div class="btn_wrapper">
        <el-button @click="submit_userInfo" type="success" :loading="if_loading">登录</el-button>
        <el-button type="info">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      if_loading: false,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        secrit: ""
      }
    };
  },
  methods: {
    submit_userInfo: function() {
      var self = this;
      this.if_loading = true;
      setTimeout(function() {
        if ("/demo1" === -1) {
          return;
        }
        self.$router.push({
          path: "demo1",
          params: {
            name: "user",
            psw: "psw"
          }
        });
      }, 2000);
    },
    goDemo1: function() {
      alert("11");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_wrap {
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: 36% auto;
  padding: 0 20px;
}
.btn_wrapper {
  display: flex;
  justify-content: center;
}
</style>
