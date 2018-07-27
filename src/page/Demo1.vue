<template>
<el-container id="wraper">
  <el-container>
    <button @click="goDemo1">跳转1</button>
    <router-link to="/demo2">去demo2</router-link>
    <div id="point"></div>
  </el-container>
  <el-main>
    <div id="chart_box"></div>
  </el-main>
</el-container>
</template>


<script>
import Vue from "vue";
import Echarts from "echarts";
import { messageData } from "@/api/getData";
export default {
  data() {
    return {
      goDemo1: function() {
        alert("11");
      }
    };
  },
  created: () => {},
  mounted: function() {
    var self = this;
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount("#point");

    // echarts展示
    let echarts_box = document.querySelector("#chart_box");

    let option = {
      title: {
        text: '城市GDP值',
        left: 'center',
        textStyle:{
          color: 'red',
          align: 'center'
        },
        // link: self.$router.push({path:"/demo2"}),
        // target: 'blank'
      },
      legend: {
        right: 0,
        top: '30px',
        data: ["上海", "北京", "武汉"]
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: [
          "2018-01",
          "2018-02",
          "2018-03",
          "2018-04",
          "2018-05",
          "2018-06",
          "2018-07",
          "2018-08",
          "2018-09",
          "2018-10",
          "2018-11",
          "2018-12"
        ]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: function(a) {
            a = +a;
            return isFinite(a) ? Echarts.format.addCommas(+a / 1000) : "";
          }
        }
      },
      dataZoom: [
        {
          type: "slider",
          show: false,
          xAxisIndex: 0,
          start: 20,
          end: 80
        },
        {
          type: "inside",
          xAxisIndex: 0,
          start: 20,
          end: 80
        }
      ],
      series: [
        {
          name: "上海",
          type: "line",
          smooth: true,
          symbol: "none",
          data: [820, 932, 901, 934, 1290, 730, 820, 901, 634, 990, 1030, 1520]
        },
        {
          name: "武汉",
          type: "line",
          smooth: true,
          symbol: "none",
          data: [1820,1932,1901,1934,2290,2330,720,501,1034,2090,1630,620]
        },
        {
          name: "北京",
          type: "line",
          smooth: true,
          symbol: "none",
          data: [920, 332, 801, 1034, 990, 230, 820, 980, 1332, 1801, 634, 390]
        }
      ]
    };
    Echarts.init(echarts_box).setOption(option);

    // 消息数据请求
    messageData().then(res => {});
  }
};

// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} 超级 {{alias}}</p>",
  data: function() {
    return {
      firstName: "你是——",
      lastName: "很牛的——",
      alias: "——怪物！"
    };
  }
});
</script>
<style scoped>
#wraper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#chart_box {
  width: 100%;
  height: 300px;
  border: 1px solid;
  box-sizing: border-box;
}
</style>
