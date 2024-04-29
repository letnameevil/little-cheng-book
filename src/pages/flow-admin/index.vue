<script setup>
import SelectBox from "./components/select-box.vue";
const dialogVisible = ref(false);

const list = ref([]);

const btnClick = () => {
  list.value = [
    {
      id: 15080,
      createUser: "1123598821738675201",
      createTime: "2024-04-10 16:16:46",
      updateUser: "1123598821738675201",
      updateTime: "2024-04-10 16:16:46",
      version: 0,
      name: "yqf-cs-001",
      nameEnglish: "yqf-cs-001",
      nameKey: 672358,
      nameI18nList: null,
      code: "yqf-cs-001",
      catalogId: 2151,
      type: "",
      typeName: null,
      remark: "cs",
      isVirtual: " ",
      language: null,
      searchType: null,
      checked1: null,
      deviceSignalLogConfigList: null,
      pid: null,
      catalogIdLink: "2151,",
      catalogCodeLink: null,
      belongTo: "",
      belongToName: null,
      signalLogConfigName: null,
      catalogNameList: null,
      businessType: null,
    },
    {
      id: 15081,
      createUser: "1123598821738675201",
      createTime: "2024-04-11 10:13:16",
      updateUser: "1123598821738675201",
      updateTime: "2024-04-11 10:13:16",
      version: 0,
      name: "yqf-cs-002",
      nameEnglish: "yqf-cs-002",
      nameKey: 672359,
      nameI18nList: null,
      code: "yqf-cs-002",
      catalogId: 2151,
      type: "",
      typeName: null,
      remark: "yqf-cs-002",
      isVirtual: " ",
      language: null,
      searchType: null,
      checked1: null,
      deviceSignalLogConfigList: null,
      pid: null,
      catalogIdLink: "2151,",
      catalogCodeLink: null,
      belongTo: "",
      belongToName: null,
      signalLogConfigName: null,
      catalogNameList: null,
      businessType: null,
    },
  ];
  dialogVisible.value = true;
};

const getRowData = (payload) => {
  console.log("payload", payload);
  dialogVisible.value = false;
  list.value = [];
};
</script>

<template>
  <div class="flow-admin-page">
    <el-button @click="btnClick"> 点击测试 </el-button>
    <el-dialog v-model="dialogVisible" draggable width="1000">
      <SelectBox
        @getRowData="getRowData"
        :showDataList="list"
        :isMultiple="true"
      ></SelectBox>
    </el-dialog>
  </div>
</template>
