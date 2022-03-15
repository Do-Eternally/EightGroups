import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.98:3000/",
  timeout: 60000, //5s后响应超时
});

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    config.withCredentials = true;
    console.log(config);
    if (getToken()) {
      config.headers.authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // const { status } = error.response;
    // if (status === 401) {
    //   Notify({ type: "warning", message: "未授权，请先登录" });
    //   // 直接打回登录页面
    //   window.location.href = "#/login";
    // }
    return Promise.reject(error);
  }
);

//   封装get请求
export const get = (url, params) => instance.get(url, { params });

// 封装post请求
export const post = (url, data) => instance.post(url, data);

export default instance;
