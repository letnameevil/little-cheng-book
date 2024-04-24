<script setup></script>

<template>
  <div class="box">
    <div class="box1"></div>
    <div class="box2">
      <el-table :data="[]" style="width: 100%" flexible>
              <el-table-column fixed prop="date" label="Date" width="150" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="city" label="City" width="320" />
              <el-table-column fixed prop="date" label="Date" width="150" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="city" label="City" width="320" />
            </el-table>
    </div>
  </div>
</template>

<style scoped>
.box {
  height: 700px;
  display: flex;
  background: #ccc;
}

.box1 {
  width: 190px;
}

.box2 {
  flex: 1;
  background-color: red;
}
</style>
