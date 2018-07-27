<template>
  <el-footer class="footer_bottom">
    <el-row>
      <el-col :span="6" :class="{footer_active:1 == ins}" @click.native="showMsg"><i class="fa fa-commenting-o"></i>消息</el-col>
      <el-col :span="6" :class="{footer_active:2 == ins}" @click.native="showTxl"><i class="fa fa-address-book-o"></i>通讯录</el-col>
      <el-col :span="6" :class="{footer_active:3 == ins}" @click.native="showFind"><i class="fa fa-soccer-ball-o"></i>发现</el-col>
      <el-col :span="6" :class="{footer_active:4 == ins}" @click.native="showMine"><i class="fa fa-user-circle-o"></i>我的</el-col>
    </el-row>
  </el-footer>
</template>
<script>
export default {
  data() {
    return {
      ins: sessionStorage.getItem("ins")
    };
  },
  methods: {
    showMsg() {
      if (this.ins === 1) {
        return false;
      }
      // 判断是否登录
      if (this.$store.state.isLogin === "false") {
        this.$router.push({
          path: "/"
        });
        return false;
      }
      this.ins = 1;
      this.$store.commit("ins", 1);
      this.$router.push({
        path: "/demo1"
      });
    },
    showTxl() {
      if (this.ins === 2) {
        return false;
      }
      // 判断是否登录
      if (this.$store.state.isLogin === "false") {
        this.$router.push({
          path: "/"
        });
        return false;
      }
      this.ins = 2;
      this.$store.commit("ins", 2);
      this.$router.push({
        path: "/demo2"
      });
    },
    showFind() {
      if (this.ins === 3) {
        return false;
      }
      // 判断是否登录
      if (this.$store.state.isLogin === "false") {
        this.$router.push({
          path: "/"
        });
        return false;
      }
      this.ins = 3;
      this.$store.commit("ins", 3);
      this.$router.push({
        path: "/demo3"
      });
    },
    showMine() {
      if (this.ins === 4) {
        return false;
      }
      // 判断是否登录
      if (this.$store.state.isLogin === "false") {
        this.$router.push({
          path: "/"
        });
        return false;
      }
      this.ins = 4;
      this.$store.commit("ins", 4);
      this.$router.push({
        path: "/demo4"
      });
    }
  },
  mounted: function() {}
};
</script>
<style>
.footer_bottom {
  background: #333;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: #03ccbb;
  padding: 0;
}
</style>
