<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  iconName: {
    type: String,
    require: true,
    default: "ep:circle-check-filled",
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: "1em",
  },
});
</script>

<template>
  <Icon
    :icon="iconName"
    :style="{
      color: color,
      width: size,
      height: size,
    }"
  />
</template>
