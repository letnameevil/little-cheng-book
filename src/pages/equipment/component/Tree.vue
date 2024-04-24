<script setup>
import { nextTick } from "vue";
import { $api_addTreeList, $api_delTreeList } from "@/api/equipment";
import { $api_getLangByKey } from "@/api/common";
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
  console.log("data", data);
  emit("handleNodeClick", data);
};

const defaultProps = {
  children: "children",
  label: "name",
};

/**
 *
 *  弹窗相关
 * */
const isShowDialog = ref(false);

const dialogForm = ref({
  pid: null,
  remark: "",
});

const dialogFormRules = ref({
  value: [{ required: true, message: "请输入", trigger: "blur" }],
  code: [{ required: true, message: "请输入", trigger: "blur" }],
});

const handleAdd = () => {
  dialogForm.value.pid = Props.catalogId;
  dialogForm.value.nameI18nList = window.languageList;
  isShowDialog.value = true;
};

const handleEdit = async () => {
  const currentNode = treeRef.value.getCurrentNode();
  const { data: data = [] } = await $api_getLangByKey(currentNode.nameI18nKey);
  const tempList = window.handleLangListEdit(data);
  dialogForm.value = currentNode;
  dialogForm.value.nameI18nList = tempList;
  isShowDialog.value = true;
};

const handleDelete = () => {
  const currentNode = treeRef.value.getCurrentNode();
  console.log("currentNode.id", currentNode.id);
  ElMessageBox.confirm("确认删除该数据？", "警告", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      const data = await $api_delTreeList(currentNode.id);
      // console.log("data", data);
      if (data.code === 200) {
        ElMessage.success("操作成功");
        emit("reloadData");
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除",
      });
    });
};

const dialogFormRef = ref();
const handleDialogSubmit = () => {
  dialogFormRef.value.validate(async (valid) => {
    if (valid) {
      const data = await $api_addTreeList({
        ...dialogForm.value,
      });
      if (data.code === 200) {
        isShowDialog.value = false;
        ElMessage.success("操作成功");
        emit("reloadData");
      }
    }
  });
  // 表单校验
};
</script>

<template>
  <div class="tree-container">
    <div class="fl-c-b">
      <el-button type="primary" round plain @click="handleAdd">新增</el-button>
      <el-button type="warning" round plain @click="handleEdit">编辑</el-button>
      <el-button type="danger" round plain @click="handleDelete"
        >删除</el-button
      >
    </div>
    <el-input
      class="search-input"
      v-model="filterText"
      placeholder="请输入关键字进行过滤搜索"
    />
    <el-scrollbar height="calc(100vh - 126px)">
      <el-tree
        ref="treeRef"
        highlight-current
        node-key="id"
        style="max-width: 600px"
        :data="treeList"
        :props="defaultProps"
        @current-change="handleNodeClick"
        :filter-node-method="filterNode"
      />
    </el-scrollbar>
  </div>
  <!-- 弹窗 -->
  <el-dialog
    v-model="isShowDialog"
    title="新增"
    draggable
    @close="() => dialogFormRef.resetFields()"
    width="500px"
  >
    <el-form
      ref="dialogFormRef"
      :model="dialogForm"
      :rules="dialogFormRules"
      label-width="auto"
    >
      <el-form-item label="父级">
        <el-tree-select
          clearable
          v-model="dialogForm.pid"
          :props="defaultProps"
          highlight-current
          node-key="id"
          :data="treeList"
          check-strictly
          :render-after-expand="false"
        />
      </el-form-item>
      <el-form-item label="编码" prop="code">
        <el-input v-model="dialogForm.code" placeholder="请输入编码" />
      </el-form-item>

      <el-form-item
        :label="lang.label + '名称'"
        v-for="(lang, idx) in dialogForm.nameI18nList"
        :prop="'nameI18nList.' + idx + '.value'"
        :rules="dialogFormRules.value"
        :key="lang.language"
      >
        <el-input v-model="lang.value" placeholder="请输入名称" />
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="dialogForm.remark"
          :rows="4"
          type="textarea"
          placeholder="请输入备注"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button type="primary" @click="handleDialogSubmit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.search-input {
  margin: 10px 0;
}
.tree-container {
  height: 100%;
}
</style>
