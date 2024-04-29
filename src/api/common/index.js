import { evRequest } from "..";

/**
 * 获取当前系统语言接口
 **/
export const $api_getLanguage = () => {
  return evRequest.get({
    url: "/dict/getLanguages",
    isLoading: true,
  });
};

/**
 * 获取已经存在语言列表
 **/
export const $api_getLangByKey = (key) => {
  return evRequest.get({
    url: "/i18n/listByKey",
    params: {
      key,
    },
    isLoading: true,
  });
};

/**
 * 导出模板
 * */
export const $api_exportTemplate = (url) => {
  return evRequest.post({
    url,
    isLoading: true,
    responseType: "blob",
  });
};

/**
 ** 上传模板
 */

export const $api_importTemplate = (url, data) => {
  return evRequest.post({
    url,
    data,
    isLoading: true,
  });
};
