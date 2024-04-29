<script setup>
import TreeList from "@/components/tree-list/index.vue";
import { $api_getTreeList } from "@/api/equipment";
import { $api_getEquipmentList } from "@/api/equipment";
import { watch } from "vue";

const emit = defineEmits(["getRowData"]);

const Props = defineProps({
  showDataList: {
    type: Array,
    default: () => [],
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
});

const selectList = ref([]);
watch(
  () => Props.showDataList,
  (newValue) => {
    console.log("newValue", newValue);
    selectList.value = newValue;
  },
  {
    immediate: true,
  },
);

// 点击其他节点时出发的事件
const handleNodeClick = (payload) => {
  catalogId.value = payload.id;
  loadTableList();
};

// 右侧数据
const formInline = ref({
  checked1: true,
});

const pageConfig = ref({
  page: 1,
  size: 10,
  total: 0,
});

const tableList = ref([]);
const loadTableList = async () => {
  const { data } = await $api_getEquipmentList({
    catalogId: catalogId.value,
    checked1: formInline.value.checked1,
    name: formInline.value.name,
    current: pageConfig.value.page,
    page: pageConfig.value.page,
    size: pageConfig.value.size,
  });
  tableList.value = data.records || [];
  pageConfig.value.total = data.total || 0;
};

/**
 * 获取设备树
 **/
const catalogId = ref(0);
const treeList = ref([]);
const loadTreeList = async () => {
  const { data } = await $api_getTreeList();
  treeList.value = data;
  catalogId.value = data[0]?.id || 0;
  await loadTableList(catalogId.value);
};

loadTreeList();

// 分页操作
const paginationChange = (payload) => {
  const { page, size } = payload;
  pageConfig.value.page = page;
  pageConfig.value.size = size;
  loadTableList();
};

/**
 * 右侧查询操作
 **/
const handleSearch = () => {
  loadTableList();
};

const handleReset = () => {
  formInline.value = {
    checked1: true,
  };
  loadTableList();
};

const handRowClick = (v1) => {
  // 代表点击的是下面的取消按钮
  if (v1 === "MultipleCancel") {
    return emit("getRowData");
  }

  if (v1 === "MultipleSubmit") {
    return emit("getRowData", selectList.value);
  }

  // 多选
  if (Props.isMultiple) {
    if (!selectList.value.find((it) => it.id === v1.id)) {
      selectList.value.push(v1);
    }
  } else {
    emit("getRowData", v1);
  }
};

const tagClose = (idx) => {
  selectList.value.splice(idx, 1);
};
</script>

<template>
  <el-card shadow="never" v-if="isMultiple">
    <el-tag
      @close="tagClose(idx)"
      style="margin: 0 2px"
      effect="plain"
      closable
      type="primary"
      v-for="(it, idx) in selectList"
      :key="it.id"
      >{{ it.name }}
    </el-tag>
  </el-card>
  <el-row :gutter="10">
    <el-col :span="5" style="max-height: 468px">
      <TreeList
        :tree-list="treeList"
        :catalogId="catalogId"
        @handleNodeClick="handleNodeClick"
      />
    </el-col>
    <el-col :span="19">
      <el-card shadow="never">
        <template #header>
          <el-form label-width="auto" :inline="true" :model="formInline">
            <el-form-item label="关键字">
              <el-input
                v-model="formInline.name"
                placeholder="输入关键字查询"
                clearable
              />
            </el-form-item>
            <el-form-item label="全目录搜索">
              <el-checkbox v-model="formInline.checked1" label="是" border />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </el-form>
        </template>
        <el-table
          :data="tableList"
          @row-dblclick="handRowClick"
          border
          highlight-current-row
          height="350px"
          style="width: 100%"
        >
          <el-table-column prop="name" label="设备编码" align="center" />
          <el-table-column prop="remark" label="说明" align="center" />
        </el-table>
        <template #footer>
          <Pagination
            @pagination-change="paginationChange"
            :total="pageConfig.total"
          />
        </template>
      </el-card>
    </el-col>
  </el-row>
  <div class="fl-c-c" style="margin-top: 10px" v-if="isMultiple">
    <el-button @click="handRowClick('MultipleCancel')">取消</el-button>
    <el-button
      type="primary"
      :disabled="selectList.length === 0"
      @click="handRowClick('MultipleSubmit')"
    >
      确认
    </el-button>
  </div>
</template>

<style scoped>
.el-input {
  --el-input-width: 160px;
}
</style>
