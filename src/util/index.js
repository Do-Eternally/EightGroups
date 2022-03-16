import axios from "axios";
const instance = axios.create({
  // baseURL: "http://192.168.1.98/",//已配置跨域代理，不需要baseURL
  timeout: 60000,
  withCredentials: true,
});
instance.interceptors.response.use(
  function (res) {
    return res.data; //优化ajax数据层次
  },
  (err) => {
    return Promise.reject(err);
  }
);
instance.interceptors.request.use(function (config) {
  // console.log(config);
  return config; //ajax请求
});
export default instance;
