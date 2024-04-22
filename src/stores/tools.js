import { defineStore } from "pinia";
import Storage from "@/utils/storage";
import i18n from "@/lang";

export const useToolStore = defineStore("tool", () => {
  const languageList = ref([]);
  const currentLanguage = ref("");

  /**
   * 设置当前语言编码
   **/
  const toggleLanguage = (langCode) => {
    const storageCode = Storage.getItem("langCode");

    if (langCode) {
      currentLanguage.value = langCode;
    } else {
      console.log("languageList.value", languageList.value);
      if (
        storageCode &&
        languageList.value.map((it) => it.code).includes(storageCode)
      ) {
        currentLanguage.value = storageCode;
      } else {
        currentLanguage.value = languageList.value[0].code;
      }
    }
    i18n.global.locale = currentLanguage.value;
    Storage.setItem("langCode", currentLanguage.value);
  };

  return {
    currentLanguage,
    languageList,
    toggleLanguage,
  };
});
