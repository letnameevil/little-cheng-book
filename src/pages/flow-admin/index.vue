<script setup>
import { Graph } from "@antv/x6";

const graph = ref(null);

/**
 * 初始化画布并且创建画布实例
 **/
const initGraph = () => {
  graph.value = new Graph({
    container: document.getElementById("x6-chart"),
    autoResize: true,
    grid: {
      visible: true,
    },
  });
};

onMounted(() => {
  initGraph();
  graph.value.addNode({
    shape: "rect",
    x: 100,
    y: 40,
    width: 100,
    height: 40,
  });
});
</script>

<template>
  <el-card>
    <div class="x6-container">
      <div id="x6-chart"></div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.x6-container {
  height: 600px;
}
</style>
