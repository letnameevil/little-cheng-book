export const handleLangListAdd = (langList = []) => {
  const list = [];
  langList.forEach((it) => {
    list.push({
      label: it.value,
      value: "",
      language: it.code,
      languageName: it.name,
    });
  });
  return list;
};

// 用于回显
const handleLangListEdit = (langList = []) => {
  const list = [];
  langList.forEach((it) => {
    list.push({
      id: it.id,
      key: it.key,
      label: it.languageName,
      value: it.value,
      language: it.language,
      version: it.version,
    });
  });
  return list;
};
window.handleLangListEdit = handleLangListEdit;
