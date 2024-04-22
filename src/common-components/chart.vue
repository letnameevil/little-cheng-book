<script setup>
import * as echarts from "echarts";
import { customAlphabet } from "nanoid";
const chartId = "chart-" + customAlphabet("abcdefghijklmnopqrstuvwxyz", 24)();
const myChart = shallowRef(null);

defineProps({});

/**
 * 初始化图表
 **/
const initChart = () => {
  myChart.value.setOption({
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      //   boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        connectNulls: true,
        data: [150, 230, 224, 218, null, 147, 260],
        type: "line",
      },
      {
        data: [1230, 30, 24, 218, 799, 187, 267],
        type: "line",
      },
      {
        data: [1440, 990, 24, 218, 799, 187, 267],
        type: "bar",
      },
    ],
  });
};

/**
 * 监听外部容器变化
 * */
const ob = () => {
  const reOb = new ResizeObserver((en) => {
    myChart.value.resize();
  });

  reOb.observe(document.querySelector(".chart-outer"));
};

onMounted(() => {
  myChart.value = echarts.init(document.getElementById(chartId));
  initChart();
  ob();
});
</script>

<template>
  <div class="chart-outer">
    <div :id="chartId" style="width: 100%; height: 100%"></div>
  </div>
</template>

<style scoped>
.chart-outer {
  width: 100%;
  height: 100%;
}
</style>
