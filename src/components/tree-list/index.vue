<script setup>
const Props = defineProps({
  treeList: {
    type: Array,
    default: () => [],
  },
  catalogId: {
    default: 0,
  },
});
const emit = defineEmits(["handleNodeClick", "reloadData"]);

const treeRef = ref(null);
const filterText = ref("");

watch(filterText, (val) => {
  treeRef.value.filter(val);
});

watch(
  () => Props.catalogId,
  (newValue) => {
    nextTick(() => {
      treeRef.value.setCurrentKey(newValue);
    });
  },
);

const filterNode = (value, data) => {
  if (!value) return true;
  return data.name.includes(value);
};

const handleNodeClick = (data) => {
  emit("handleNodeClick", data);
};

const defaultProps = {
  children: "children",
  label: "name",
};
</script>

<template>
  <div class="tree-container">
    <el-input
      class="search-input"
      v-model="filterText"
      placeholder="请输入关键字进行过滤搜索"
    />
    <el-scrollbar height="calc(100% - 35px)">
      <el-tree
        ref="treeRef"
        highlight-current
        node-key="id"
        :data="treeList"
        :props="defaultProps"
        @current-change="handleNodeClick"
        :filter-node-method="filterNode"
      />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  margin-bottom: 10px;
}
.tree-container {
  height: 100%;
}
</style>
