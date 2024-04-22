import { Base64 } from "js-base64";
import { evRequest } from "..";
import CryptoJS from "crypto-js";
/**
 * 登录需要用到的参数
 **/
let CLIENTID = "hats";
let CLIENTSECRET = "hats_secret";

const AuthorizationValue = `Basic ${Base64.encode(
  `${CLIENTID}:${CLIENTSECRET}`,
)}`;

/**
 * 登录接口获取用户信息
 **/
export const $api_login = (loginData) => {
  return evRequest.post({
    url: "/blade-auth/oauth/token",
    headers: {
      Authorization: AuthorizationValue,
      "Tenant-Id": "000000",
    },
    params: {
      username: loginData.username,
      password: CryptoJS.MD5(loginData.password),
      grant_type: "password",
      scope: "all",
      tenantId: "000000",
      accountType: 1,
    },
    isLoading: true,
  });
};

/**
 * 通过用户信息获取菜单权限码
 **/
export const $api_getAuthCode = () => {
  return evRequest.get({
    url: "/hats-biz/authorities",
  });
};
