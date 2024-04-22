<script setup>
import { useRouter } from "vue-router";
import { useSideStore } from "@/stores/toggle-sidebar";
import SideBarItem from "./side-bar-item.vue";
const Router = useRouter();
const sideStore = useSideStore();

const arr = [
  {
    title: "目录一",
    key: "muluyi",
    icon: "skill-icons:ableton-dark",
    children: [
      {
        title: "目录一-一111111111策划刚回到家萨芬",
        key: "muluyiyiyi",
        children: [
          {
            title: "菜单一",
            key: "caidanyi",
          },
        ],
      },
    ],
  },
  {
    title: "图标管理",
    key: "icon-show",
    icon: "skill-icons:ableton-dark",
  },
  {
    title: "图表管理",
    key: "echart-show",
    icon: "skill-icons:ableton-dark",
  },
  {
    title: "表格管理",
    key: "form-config",
    icon: "skill-icons:ableton-dark",
  },
  {
    title: "流程管理",
    key: "flow-admin",
    icon: "skill-icons:ableton-dark",
  },
  {
    title: "目录二",
    key: "muluer",
    icon: "skill-icons:ableton-dark",
    children: [
      {
        title: "目录二-一",
        key: "muluyieryi",
        children: [
          {
            title: "目录二-一-一",
            key: "muluyieryi12323",
            children: [
              {
                title: "菜单ssss",
                key: "muluyieryi123ssss23",
              },
            ],
          },
        ],
      },
    ],
  },
];

const menuSelect = (v1) => {
  if (Router.hasRoute(v1)) {
    Router.push({
      name: v1,
    });
  } else {
    Router.push({
      path: v1,
    });
  }
};
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="sideStore.isCollapse"
    @select="menuSelect"
    :popper-offset="1"
    :collapse-transition="false"
  >
    <SideBarItem :menu-item="it" v-for="it in arr" :key="it.key" />
  </el-menu>
</template>

<style scoped lang="scss"></style>
