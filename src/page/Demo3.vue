<template>
<el-container id="wraper">
  qweqwe
  <router-link to="/demo4">去demo4</router-link>
</el-container>
</template>
<script>
import Vue from "vue";
// import { messageData } from "@/api/getData";
export default {
  data() {
    return {

    };
  },
  method:{
      goDemo3: function() {
        alert("33");
      }
  }
};
</script>
