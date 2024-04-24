import axios from "axios";
import Storage from "@/utils/storage";
let loadingInstance = null;

class EvRequest {
  constructor(options = {}) {
    this.axiosInstance = axios.create(options);
    this.axiosInstance.interceptors.request.use(
      (req) => {
        if (Storage.getItem("userInfo")) {
          req.headers["Blade-Auth"] =
            "bearer " + Storage.getItem("userInfo").access_token;
        }
        return req;
      },
      (err) => {
        loadingInstance?.close();
      },
    );
    this.axiosInstance.interceptors.response.use(
      (res) => {
        loadingInstance?.close();
        return res.data;
      },
      (err) => {
        ElMessage({
          message: err.response.data.msg,
          type: "error",
        });
        loadingInstance?.close();
      },
    );
  }

  request(options = {}) {
    const { isLoading } = options;
    if (isLoading)
      loadingInstance = ElLoading.service({
        text: "loading...",
        background: "#cccccc50",
      });

    return this.axiosInstance(options);
  }

  get(options = {}) {
    return this.request({
      method: "GET",
      ...options,
    });
  }

  post(options = {}) {
    return this.request({
      method: "POST",
      ...options,
    });
  }

  delete(options = {}) {
    return this.request({
      method: "DELETE",
      ...options,
    });
  }
}

export default EvRequest;
