import { post } from "@/util/request";

export const reqPhoneReg = (data)=>post("/login/cellphone",data)
export const reqEmailreg = (data)=>post("/login",data)


