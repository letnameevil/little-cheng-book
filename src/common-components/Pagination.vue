<script setup>
const Props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  layout: {
    type: String,
    default: "prev, pager, next, jumper,total, sizes",
  },
});

const currentPage = ref(1);
const currentSize = ref(10);

const emits = defineEmits(["paginationChange"]);

const change = (page, size) => {
  emits("paginationChange", {
    page,
    size,
  });
};
</script>

<template>
  <div class="pagination-container" v-if="total > 0">
    <el-pagination
      @change="change"
      v-model:current-page="currentPage"
      v-model:page-size="currentSize"
      :page-sizes="[10, 20, 30, 40]"
      background
      small
      :layout="layout"
      :total="total"
    />
  </div>
</template>

<style scoped lang="scss">
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
