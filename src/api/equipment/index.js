import { evRequest } from "..";

/**
 * 设备树接口
 * */
export const $api_getTreeList = () => {
  return evRequest.post({
    url: "/catalog/device/tree?type=device",
    data: {
      type: "device",
    },
    isLoading: true,
  });
};

//
/**
 * 设备树新增接口
 */
export const $api_addTreeList = (data) => {
  return evRequest.post({
    url: "/catalog/device/saveOrUpdate",
    data: {
      type: "device",
      ...data,
    },
    isLoading: true,
  });
};

/**
 * 设备树删除接口
 **/
export const $api_delTreeList = (id) => {
  return evRequest.delete({
    url: "/catalog/device/delete/" + id,
    isLoading: true,
  });
};

/**
 * 设备列表接口
 **/
export const $api_getEquipmentList = (data) => {
  return evRequest.post({
    url: "/device/page",
    data,
    params: data,
    isLoading: true,
  });
};

/**
 * 记录列表接口
 **/
export const $api_getLogList = (data) => {
  return evRequest.post({
    url: "/tanzania/device/signalLogConfigPage",
    data,
    params: data,
    isLoading: true,
  });
};
