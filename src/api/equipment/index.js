import { evRequest } from "..";

export const $api_getTreeList = () => {
  return evRequest.post({
    url: "/catalog/device/tree?type=device",
    data: {
      type: "device",
    },
  });
};
