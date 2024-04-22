<script setup>
import { useRoute } from "vue-router";
const Route = useRoute();
console.log("Route", Route);
</script>

<template>
  <div class="notfound-page">
    <div class="bg-container">
      <div class="button-container">
        <el-button style="width: 200px" type="warning">返回上一页</el-button>
        <el-button style="width: 200px" type="warning"> 回首页 </el-button>
      </div>
      <div class="svg-container">
        <div style="text-align: center">
          <icon-svg-spinners:bars-scale-middle class="svg-styles" />
        </div>
        <icon-fa6-solid:4 class="svg-styles" />
        <icon-healthicons:0 class="svg-styles" />
        <icon-fa6-solid:4 class="svg-styles" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notfound-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(./bg.jpg);
  background-size: 100% 100%;
}

.bg-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: #ffffff20;
}

.svg-container,
.button-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}

.button-container {
  top: 40%;
}

.svg-styles {
  width: 100px;
  height: 100px;
  color: #fd7a00;
}
</style>
