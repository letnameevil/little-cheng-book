<script setup>
import svgList from "./skill-icons/skill-icons.json";
import { useRoute } from "vue-router";
const Route = useRoute();
console.log("Route", Route);
</script>

<template>
  <div class="icon-show-page">
    <div class="svg-card" v-for="it in svgList" :key="it.name">
      <svg-icon size="1.5em" :iconName="it.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-show-page {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.svg-card {
  padding: 10px;
}

.svg-card:hover {
  cursor: pointer;
  box-shadow: 0 0 5px #9a9898;
}
</style>
