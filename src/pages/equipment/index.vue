<script setup>
import { $api_getTreeList } from "@/api/equipment";
import Tree from "./component/Tree.vue";
import RightPlane from "./component/right-plane.vue";

/**
 * 切换设备和记录的变量
 *
 **/
const switchValue = ref(true);
const catalogId = ref(0);
/**
 * 获取设备树
 **/
const treeList = ref([]);
const loadTreeList = async () => {
  const { data } = await $api_getTreeList();
  treeList.value = data;
  catalogId.value = data[0]?.id || 0;
};

loadTreeList();

// 点击其他节点时出发的事件
const handleNodeClick = (payload) => {
  catalogId.value = payload.id;
};

const reloadData = () => {
  loadTreeList();
};
</script>

<template>
  <el-card style="height: calc(100vh - 74px)">
    <el-container style="height: 100%">
      <el-aside width="180px" class="side-container" style="overflow-y: hidden">
        <Tree
          :tree-list="treeList"
          :catalogId="catalogId"
          @handleNodeClick="handleNodeClick"
          @reloadData="reloadData"
        />
      </el-aside>
      <el-main>
        <el-scrollbar height="calc(100vh - 74px)">
          <div style="display: flex; flex-direction: row-reverse">
            <el-switch
              v-model="switchValue"
              inline-prompt
              active-text="设备"
              inactive-text="记录"
              class="switch-styles"
              style="
                --el-switch-on-color: #13ce66;
                --el-switch-off-color: #ff4949;
              "
            />
          </div>
          <right-plane :switchValue="switchValue" :catalogId="catalogId" />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-card>
</template>

<style scoped lang="scss">
.el-main {
  overflow-y: auto;
  padding: 0;
}

.side-container {
  overflow-y: hidden;
  margin-right: 10px;
}
</style>
