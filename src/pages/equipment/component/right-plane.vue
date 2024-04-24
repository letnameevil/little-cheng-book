<script setup>
import { $api_getEquipmentList, $api_getLogList } from "@/api/equipment";

const Props = defineProps({
  switchValue: {
    type: Boolean,
    default: true,
  },
  catalogId: {
    required: true,
    default: false,
  },
});

const formInline = ref({
  checked1: true,
});
const onSubmit = () => {};

const paginationChange = (payload) => {
  const { page, size } = payload;
  pageConfig.value.page = page;
  pageConfig.value.size = size;
  loadList();
};

const pageConfig = ref({
  page: 1,
  size: 10,
  total: 0,
});

/**
 * 获取设备列表
 **/
const logEquipmentList = ref([]);
const loadEquipmentList = async () => {
  const { data } = await $api_getEquipmentList({
    catalogId: Props.catalogId,
    checked1: formInline.value.checked1,
    current: pageConfig.value.page,
    page: pageConfig.value.page,
    size: pageConfig.value.size,
  });
  pageConfig.value.total = data.total || 0;
  logEquipmentList.value = data.records || [];
};

/**
 * 获取记录列表
 **/
const loadLogList = async () => {
  const { data } = await $api_getLogList({
    catalogId: Props.catalogId,
    current: pageConfig.value.page,
    page: pageConfig.value.page,
    size: pageConfig.value.size,
  });

  pageConfig.value.total = data.total || 0;
  logEquipmentList.value = data.records || [];
};

/**
 * 加载列表方法
 **/
const loadList = () => {
  if (Props.switchValue) {
    loadEquipmentList();
  } else {
    loadLogList();
  }
};

watch(
  [() => Props.switchValue, () => Props.catalogId],
  ([v1, v2]) => {
    if (v2) {
      loadList();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <el-card shadow="never">
    <el-form
      label-width="auto"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="编码">
        <el-input
          v-model="formInline.user"
          placeholder="输入编码查询"
          clearable
        />
      </el-form-item>
      <el-form-item label="说明">
        <el-input
          v-model="formInline.user"
          placeholder="输入说明查询"
          clearable
        />
      </el-form-item>
      <el-form-item label="全目录搜索">
        <el-checkbox v-model="formInline.checked1" label="是" border />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card shadow="never">
    <template #header>
      <el-button type="primary" plain>
        <el-icon class="el-icon--right">
          <icon-ep:plus />
        </el-icon>
        新增
      </el-button>
      <el-button type="success" plain>
        <el-icon class="el-icon--right">
          <icon-ep:upload />
        </el-icon>
        导入
      </el-button>
      <el-button type="info" plain>
        <el-icon class="el-icon--right">
          <icon-ep:download />
        </el-icon>
        导出
      </el-button>
      <el-button type="warning" plain>
        <el-icon class="el-icon--right">
          <icon-ep:refresh />
        </el-icon>
        同步到维修
      </el-button>
      <el-button type="danger" plain>
        <el-icon class="el-icon--right">
          <icon-ep:delete-filled />
        </el-icon>
        目录清空
      </el-button>
    </template>
    <el-table :data="logEquipmentList" style="width: 100%" border height="calc(100vh - 280px)">
      <el-table-column prop="name" label="设备编码" />
      <el-table-column prop="remark" label="说明" />
    </el-table>
    <template #footer>
      <Pagination
        @pagination-change="paginationChange"
        :total="pageConfig.total"
      />
    </template>
  </el-card>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 160px;
}
</style>
