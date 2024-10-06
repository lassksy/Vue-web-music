import request from "./request";

//获取账号信息
export function accountInfo() {
    return request.get(`/user/account`)
  }
  