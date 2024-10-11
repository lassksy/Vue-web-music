import axios from "axios";
import request from "./request"



// 获取二维码 Key
export function qrCodeLoginKey(timestamp: string | number) {
  return request.get(`/login/qr/key?timestamp=${timestamp}&t=${new Date().getTime()}`);
}

// 获取二维码图片
export function qrCodeLoginImg(key: string) {
  return request.get(`/login/qr/create?qrimg=true&key=${key}&t=${new Date().getTime()}`);
}

// 检查二维码状态
export function qrCodeLoginCheck(key: string, timestamp: string | number) {
  return request.get(`/login/qr/check?key=${key}&timestamp=${timestamp}&t=${new Date().getTime()}`);
}

// 手机号登录
export function loginCellphone(phone: string, password: string, countrycode: string = '') {
  return request.get(`/login/cellphone?phone=${phone}&password=${password}&countrycode=${countrycode}&t=${new Date().getTime()}`);
}

// 邮箱登录
export function loginEmail(email: string, password: string) {
  return request.get(`/login?email=${email}&password=${password}&t=${new Date().getTime()}`);
}


// 游客登录，携带时间戳
export function guestLogin() {
  const timestamp = new Date().getTime(); // 获取当前时间戳
  return request.get(`/register/anonimous`, {
    params: {
      timestamp: timestamp
    }
  });
}

//获取登录状态
export function loginStatus() {
  return request.get(`/login/status`)
}



//刷新登录
export function refreshLogin() {
  return request.get(`/login/refresh`)
}

//退出登录
export function logOut() {
  return request.get(`/logout`)
}