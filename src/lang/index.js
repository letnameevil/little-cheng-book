import { createI18n } from "vue-i18n";

const modulesList = import.meta.glob("./lang-list/*.js", {
  eager: true,
});

const messages = {};

for (const key in modulesList) {
  const startIdx = key.lastIndexOf("/");
  const lastIdx = key.lastIndexOf(".");
  const componentName = key.slice(startIdx + 1, lastIdx);
  messages[componentName] = modulesList[key].default;
}

const i18n = createI18n({
  fallbackLocale: "zh-CN",
  messages,
});

export default i18n;
