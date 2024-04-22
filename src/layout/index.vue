<script setup>
import OutLet from "@/outlet/index.vue";
import Logo from "./components/logo.vue";
import SideBar from "./components/side-bar.vue";
import Header from "./components/header.vue";
import { useSideStore } from "@/stores/toggle-sidebar";
const sideStore = useSideStore();
</script>

<template>
  <div class="page-layout">
    <el-container>
      <el-aside :width="sideStore.isCollapse ? '50px' : '200px'">
        <!-- weblogo -->
        <Logo />
        <el-scrollbar height="calc(100vh - 50px)">
          <SideBar />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <Header />
        </el-header>
        <el-main>
          <el-scrollbar>
            <OutLet />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-container {
  width: 100vw;
  height: 100vh;
}

.el-aside {
  background-color: #eeeeee;
}

:deep(.el-menu) {
  border-right: none;
  background-color: transparent;
}

.el-menu.el-menu--vertical.el-menu--collapse.el-menu-vertical-demo {
  width: 50px;
}

:deep(.el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger) {
  padding: 14px 10px 14px 14px;
}

:deep(.el-menu-tooltip__trigger.el-tooltip__trigger.el-tooltip__trigger) {
  padding: 14px 10px 14px 14px;
}

.el-main {
  padding: 10px;
  overflow: hidden;
  background-color: #ebe7e7;
}

.el-aside {
  overflow: hidden;
}

.el-header {
  box-sizing: border-box;
  box-shadow: 0 0 2px #ccc;
}
</style>
