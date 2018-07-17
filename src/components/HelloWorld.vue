<template>
  <div class="login_wrap">
    <el-form :label-position="labelPosition" class="form_wrap" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
      <el-form-item style="margin-top:22px;" prop="name">
        <el-input placeholder="请输入用户名" v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item prop="secrit">
        <el-input placeholder="请输入密码" type="password" v-model="formLabelAlign.secrit" ></el-input>
      </el-form-item>
      <div class="btn_wrapper">
        <el-button size="small" @click="submit_userInfo('formLabelAlign')" type="success" :loading="if_loading">登录</el-button>
        <el-button size="small" type="info">取消</el-button>
      </div>
    </el-form>
    <div id="mydiv"></div>
  </div>
</template>

<script>
const userInfo = {
  username: "liqizheng",
  password: "123"
};
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
          { required: true, message: "请选择活动区域", trigger: "change" },
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
