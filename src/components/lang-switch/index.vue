<script setup>
import { useToolStore } from "@/stores/tools";
/**
 * 当前语言列表
 **/

const toolStore = useToolStore();

const handleCommand = (command) => {
  toolStore.toggleLanguage(command);
};
</script>

<template>
  <el-dropdown @command="handleCommand">
    <icon-cil:language class="language-switch" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="it in toolStore.languageList"
          :key="it.code"
          :command="it.code"
          :disabled="toolStore.currentLanguage === it.code"
        >
          {{ it.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.language-switch {
  cursor: pointer;
  width: 25px;
  height: 25px;
}
</style>
