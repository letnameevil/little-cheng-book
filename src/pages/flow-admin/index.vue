<script setup>
import TreeList from "@/components/tree-list/index.vue";
import { $api_getTreeList } from "@/api/equipment";
import { $api_getEquipmentList } from "@/api/equipment";
/**
 * 获取设备树
 **/
const catalogId = ref(0);
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

// 右侧数据
const formInline = ref({});

const tableList = ref([]);
const loadTableList = async () => {
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
</script>

<template>
  <el-card>
    <el-row :gutter="10">
      <el-col :span="4">
        <TreeList
          :tree-list="treeList"
          :catalogId="catalogId"
          @handleNodeClick="handleNodeClick"
        />
      </el-col>
      <el-col :span="20">
        <el-card shadow="never">
          <template #header>
            <el-form
              label-width="auto"
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="关键字">
                <el-input
                  v-model="formInline.user"
                  placeholder="输入关键字查询"
                  clearable
                />
              </el-form-item>
              <el-form-item label="全目录搜索">
                <el-checkbox v-model="formInline.checked1" label="是" border />
              </el-form-item>
              <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </template>
          <el-table :data="[]" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
