<script setup>
const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const onSubmit = () => {
  console.log("submit!");
};

const dialogVisible = ref(true);

const tableData = new Array(100).fill({
  date: "2016-05-03",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
});
</script>

<template>
  <el-card>
    <el-form
      label-width="auto"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="名称">
        <el-input
          v-model="formInline.user"
          placeholder="输入名称查询"
          clearable
        />
      </el-form-item>
      <el-form-item label="名称">
        <el-input
          v-model="formInline.user"
          placeholder="输入名称查询"
          clearable
        />
      </el-form-item>
      <el-form-item label="编码">
        <el-select
          v-model="formInline.region"
          placeholder="选择编码查询"
          clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="formInline.date"
          type="date"
          placeholder="请选择日期"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- 内容区域 -->
  <el-card style="margin-top: 4px">
    <el-table :data="tableData" border height="calc(100vh - 260px)">
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="address" label="Address" align="center" />
    </el-table>
    <template #footer>
      <div class="demo-pagination-block">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          background
          small
          layout=" prev, pager, next, jumper,total, sizes,"
          :total="400"
        />
      </div>
    </template>
  </el-card>
</template>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
