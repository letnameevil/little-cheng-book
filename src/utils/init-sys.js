import g from "@/utils/init-common-com";
import router from "@/router";
import pinia from "@/stores/pinia";
import { useToolStore } from "@/stores/tools";
import i18n from "@/lang/index.js";
/**
 * 初始化系统的一些操作
 * */
import { $api_getLanguage } from "@/api/common";
import { handleLangListAdd } from "@/utils/inti-i18nlist";
/**
 * 语言初始化
 **/
async function initLanguage() {
  const { data } = await $api_getLanguage();
  const toolStore = useToolStore(pinia);
  if (data && data.length === 0) {
    // 假设后端没有返回语言，那么默认就为中文
    toolStore.languageList = [
      {
        name: "中文",
        code: "zh-CN",
      },
    ];
  } else {
    toolStore.languageList = data;
  }
  window.languageList = handleLangListAdd(data);
  toolStore.toggleLanguage();
}

async function initSys(app) {
  await initLanguage();
  app.use(pinia);
  app.use(g);
  app.use(router);
  app.use(i18n);
  app.mount("#app");
}

export default initSys;
