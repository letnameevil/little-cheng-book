<script setup>
import { $api_exportTemplate, $api_importTemplate } from "@/api/common";
import { UploadFilled, Download } from "@element-plus/icons-vue";
const uploadRef = ref();
const dialogVisible = ref(true);
const fileList = ref([]);
const limitFileNumber = ref(1);

const handleOnExceed = () => {
  ElMessage.info(`每次只允许上传${limitFileNumber.value}个文件`);
};

/**
 * 下载模板
 * */
const handleDownTemplate = async () => {
  const data = await $api_exportTemplate("/signalLogConfig/template");
  const a = window.document.createElement("a");
  const link = window.URL.createObjectURL(data);
  a.href = link;
  a.download = "测试文件.xlsx";
  a.click();
};

// 手动上传
const handleSubmit = async () => {
  if (fileList.value.length >= 1) {
    const rawFile = fileList.value[0].raw;
    const formData = new FormData();
    formData.append("file", rawFile);
    //  调接口，传文件
    const ret = await $api_importTemplate(
      "/signalLogConfig/importSignalLogConfig",
      formData,
    );
  }
};
</script>

<template>
  <el-button type="primary">上传</el-button>
  <!-- 弹窗 -->
  <el-dialog v-model="dialogVisible" draggable width="500">
    <el-card shadow="never">
      <el-upload
        ref="uploadRef"
        drag
        :limit="limitFileNumber"
        :on-exceed="handleOnExceed"
        v-model:file-list="fileList"
        :auto-upload="false"
      >
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">拖动文件或者 <em>点击上传</em></div>
      </el-upload>
      <el-button
        type="success"
        :icon="Download"
        plain
        @click="handleDownTemplate"
      >
        下载模板
      </el-button>
      <el-button
        type="primary"
        :icon="UploadFilled"
        plain
        @click="handleSubmit"
      >
        上传
      </el-button>
    </el-card>
  </el-dialog>
</template>
