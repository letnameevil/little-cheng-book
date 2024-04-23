<script setup>
defineProps({
  treeList: {
    type: Array,
    default: () => [],
  },
});

const treeRef = ref(null);
const filterText = ref("");
watch(filterText, (val) => {
  treeRef.value.filter(val);
});

const filterNode = (value, data) => {
  if (!value) return true;
  return data.name.includes(value);
};

const handleNodeClick = (data) => {
  console.log(data);
};

const defaultProps = {
  children: "children",
  label: "name",
};
</script>

<template>
  <div class="tree-container">
    <div class="fl-c-b">
      <el-button type="primary" round plain>新增</el-button>
      <el-button type="warning" round plain>编辑</el-button>
      <el-button type="danger" round plain>删除</el-button>
    </div>
    <el-input
      class="search-input"
      v-model="filterText"
      placeholder="Filter keyword"
    />
    <el-scrollbar height="calc(100vh - 126px)">
      <el-tree
        ref="treeRef"
        style="max-width: 600px"
        :data="treeList"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :filter-node-method="filterNode"
      />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  margin: 10px 0;
}
.tree-container {
  height: 100%;
}
</style>
