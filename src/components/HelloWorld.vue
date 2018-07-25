<template>
  <div class="login_wrap">
    <el-form :label-position="labelPosition" @keyup.enter.native="submit_userInfo('formLabelAlign')" class="form_wrap" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
      <el-form-item class="input_wrapper" style="margin-top:22px;" prop="name">
        <el-input placeholder="请输入用户名" v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item class="input_wrapper" prop="secrit">
        <el-input placeholder="请输入密码"  type="password" v-model="formLabelAlign.secrit" ></el-input>
      </el-form-item>
      <el-form-item class="btn_wrapper">
        <el-button style="width:100%;"  size="small"  @click="submit_userInfo('formLabelAlign')" type="success" :loading="if_loading">登录</el-button>
      </el-form-item>
    </el-form>
    <div id="mydiv"></div>
  </div>
</template>

<script>
import { loginData } from "@/api/getData";

export default {
  data() {
    return {
      if_loading: false,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        secrit: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 1, max: 16, message: "长度在 1 到 16 个字符", trigger: "blur" }
        ],
        secrit: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 6, message: "长度在 6 个字符以上", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    var config = {
      vx: 4, //点x轴速度,正为右，负为左
      vy: 4, //点y轴速度
      height: 2, //点高宽，其实为正方形，所以不宜太大
      width: 2,
      count: 100, //点个数
      color: "121, 162, 185", //点颜色
      stroke: "130,255,255", //线条颜色
      dist: 6000, //点吸附距离
      e_dist: 8000, //鼠标吸附加速距离
      max_conn: 10 //点到点最大连接数
    };
    //调用
    CanvasParticle(config);
  },
  methods: {
    submit_userInfo: function(formName) {
      var self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          loginData().then(res => {
            let userArr = res.user,
              errUsername = true,
              errPassword = true;
            userArr.map(userInfo => {
              if (userInfo.username == self.formLabelAlign.name) {
                errUsername = false;
              }
              if (userInfo.password == self.formLabelAlign.secrit) {
                errPassword = false;
              }
            });

            if (errUsername) {
              self.$message({
                showClose: true,
                message: "用户名错误！",
                customClass: "tipMsg",
                type: "error"
              });
              return false;
            }
            if (errPassword) {
              self.$message({
                showClose: true,
                message: "用户密码错误！",
                customClass: "tipMsg",
                type: "error"
              });
              return false;
            }
            if (!errUsername && !errPassword) {
              const loading = self.$loading({
                lock: true,
                // text: 'Loading',
                spinner: "el-icon-loading",
                customClass: "loading_icon",
                background: "rgba(0, 0, 0, 0.5)"
              });
              self.if_loading = true;
              setTimeout(function() {
                if ("/demo1" === -1) {
                  return;
                }
                self.$router.push({
                  path: "demo1",
                  params: {
                    name: self.formLabelAlign.name,
                    psw: self.formLabelAlign.password
                  }
                });
                loading.close();
              }, 2000);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  height: 100%;
  width: 100%;
  position: relative;
}
.form_wrap {
  width: 80%;
  height: 208px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 0 40px;
  z-index: 999;
  overflow: hidden;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-size: 14px
}
.btn_wrapper {
  display: flex;
  justify-content: center;
}
#mydiv {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    to top right,
    #39dca000 0%,
    #7e4ac3f2 25%,
    #363994 35%,
    #633694 75%,
    #d83bff 100%
  );
}
</style>
<style>
.btn_wrapper .el-form-item__content {
  width: 100%;
}
.input_wrapper input{
  line-height:14px;
  padding: 13px 5px;
  box-sizing: border-box;
  caret-color: #000000;
}

</style>

