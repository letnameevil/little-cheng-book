<script setup>
const formInline = ref({});
const onSubmit = () => {};

const tableData = new Array(100).fill({
  date: "2016-05-03",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
});

const paginationChange = (payload) => {
  console.log("payload", payload);
};
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
      <el-button>
        <el-icon class="el-icon--right">
          <icon-ep:plus />
        </el-icon>
        新增
      </el-button>
      <el-button>
        <el-icon class="el-icon--right">
          <icon-ep:upload />
        </el-icon>
        导入
      </el-button>
      <el-button>
        <el-icon class="el-icon--right"> <icon-ep:download /> </el-icon>导出
      </el-button>
      <el-button>
        <el-icon class="el-icon--right">
          <icon-ep:refresh />
        </el-icon>
        同步到维修
      </el-button>
      <el-button>
        <el-icon class="el-icon--right"> <icon-ep:delete-filled /> </el-icon
        >目录清空
      </el-button>
    </template>
    <el-table :data="tableData" border height="calc(100vh - 250px)">
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="address" label="Address" align="center" />
    </el-table>
    <template #footer>
      <Pagination
        @pagination-change="paginationChange"
        v-bind="{
          total: 400,
        }"
      />
    </template>
  </el-card>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 160px;
}
</style>
