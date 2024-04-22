import { defineStore } from "pinia";

export const useSideStore = defineStore("sidebar", () => {
  const isCollapse = ref(false);

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
  };

  return {
    isCollapse,
    toggleCollapse,
  };
});
