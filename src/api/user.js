import { post } from "@/util/request";
// import { get } from "@/util/request";

// 手机号登录接口
export const reqPhoneReg = (data) => post("/api/login/cellphone", data);
// 邮箱登录接口
export const reqEmailreg = (data) => post("/api/login", data);
// 二维码key生成接口
export const reqErweimaKey = (data) => post("/login/qr/key", data);
// 二维码生成接口
export const reqErweima = (data) => post("/login/qr/create", data);
// 二维码检测扫码状态接口
export const reqErweimaStop = (data) => post("/login/qr/create", data);
