<script setup>
import { useSideStore } from "@/stores/toggle-sidebar";
/**
 * 组件
 **/
import NavCom from "./nav-com.vue";
import OptCom from "./opt-com.vue";
const sideStore = useSideStore();
</script>

<template>
  <div class="header-container fl-c-b">
    <div class="icon-container">
      <icon-uis:right-indent-alt
        class="left"
        v-if="sideStore.isCollapse"
        @click="sideStore.toggleCollapse"
      />
      <icon-uis:left-indent-alt
        class="right"
        v-else
        @click="sideStore.toggleCollapse"
      />
    </div>
    <!-- 中间面包屑内容 -->
    <div class="title-container">
      <NavCom />
    </div>
    <!-- 右侧操作按钮 -->
    <div class="opt-container">
      <OptCom />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100%;
}

.icon-container {
  display: flex;
  height: 100%;
  align-items: center;
  .left,
  .right {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
}

.title-container {
  flex: 1;
  box-sizing: border-box;
  padding: 0 6px;
}
</style>
