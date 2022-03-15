import { post } from "@/util/request";
import { get } from "@/util/request";

export const reqPhoneReg = (data) => post("/api/login/cellphone", data);
export const reqEmailreg = (data) => post("/api/login", data);
