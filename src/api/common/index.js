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
