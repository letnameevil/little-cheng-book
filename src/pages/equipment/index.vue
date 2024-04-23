<script setup>
import { $api_getTreeList } from "@/api/equipment";
import Tree from "./component/Tree.vue";
import RightPlane from "./component/right-plane.vue";
/**
 * 获取设备树
 **/
const treeList = ref([]);
const loadTreeList = async () => {
  const { data } = await $api_getTreeList();
  treeList.value = data;
};
loadTreeList();
</script>

<template>
  <el-card style="height: calc(100vh - 72px)">
    <div class="equipment-page">
      <div class="page-left">
        <Tree :tree-list="treeList" />
      </div>
      <div class="page-right">
        <right-plane />
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.equipment-page {
  height: 100%;
  display: flex;
}

.page-left {
  width: 180px;
  height: calc(100vh - 82px);
  margin-right: 10px;
}

.page-right {
  flex: 1;
  height: calc(100vh - 82px);
}
</style>
