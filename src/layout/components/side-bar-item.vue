<script setup>
import { useSideStore } from "@/stores/toggle-sidebar";
const sideStore = useSideStore();
defineProps({
  menuItem: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <template v-if="menuItem.children && menuItem.children.length > 0">
    <el-sub-menu :index="menuItem.key">
      <template #title>
        <svg-icon
          v-if="menuItem.icon"
          :icon="menuItem.icon"
          size="1.2em"
          style="margin-right: 4px"
        ></svg-icon>

        <!-- 如果菜单是展示模式，则需要加提示  -->
        <el-tooltip
          v-if="!sideStore.isCollapse"
          :content="menuItem.title"
          placement="right"
          effect="dark"
          :show-after="1000"
        >
          <span>{{ menuItem.title }}</span>
        </el-tooltip>
        <!-- 如果是折叠模式则不需要加 -->
        <span v-else>{{ menuItem.title }}</span>
      </template>
      <side-bar-item :menu-item="it" v-for="it in menuItem.children" />
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item :index="menuItem.key">
      <svg-icon
        v-if="menuItem.icon"
        :icon="menuItem.icon"
        size="1.2em"
        style="margin-right: 4px"
      ></svg-icon>
      <template #title>
        <!-- 如果菜单是展示模式，则需要加提示  -->
        <el-tooltip
          v-if="!sideStore.isCollapse"
          :content="menuItem.title"
          placement="right"
          effect="dark"
          :show-after="1000"
        >
          <span>{{ menuItem.title }}</span>
        </el-tooltip>
        <!-- 如果是折叠模式则不需要加 -->
        <span v-else>{{ menuItem.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss">
span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
</style>
