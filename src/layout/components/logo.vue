<script setup>
import { useSideStore } from "@/stores/toggle-sidebar";
const sideStore = useSideStore();
</script>

<template>
  <div class="logo">
    <icon-logos:github style="width: 98%" v-if="!sideStore.isCollapse" />
    <icon-logos:github-octocat style="width: 100%" v-else />
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #51829b;
}
</style>
