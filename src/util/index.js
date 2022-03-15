import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.1.98/",
  timeout: 60000,
});

export default instance;
