<script setup>
import { useToolStore } from "@/stores/tools";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import ru from "element-plus/dist/locale/ru.mjs";
const toolStore = useToolStore();

/**
 * 预判map
 **/
const langMap = {
  "zh-CN": zhCn,
  "en-US": en,
  ru: ru,
};
</script>

<template>
  <el-config-provider size="small" :locale="langMap[toolStore.currentLanguage]">
    <RouterView />
  </el-config-provider>
</template>
