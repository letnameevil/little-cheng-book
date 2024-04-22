export default {
  install(app) {
    const modulesList = import.meta.glob("@/common-components/**/*.vue", {
      eager: true,
    });
    for (const key in modulesList) {
      const startIdx = key.lastIndexOf("/");
      const lastIdx = key.lastIndexOf(".");
      const componentName = key.slice(startIdx + 1, lastIdx);
      app.component(componentName, modulesList[key].default);
    }
  },
};
