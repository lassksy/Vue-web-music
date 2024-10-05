import axios from "axios";
import request from "./request"



export function qrCodeLoginKey(timestamp: string | number){
    return request.get('/login/qr/key?timestamp='+timestamp)
}


export function qrCodeLoginImg(key: string){
    return request.get('/login/qr/create?qrimg=true&key='+key)
}

export function qrCodeLoginCheck(key: string,timestamp: string | number){
    return request.get('/login/qr/check?key='+key+'&timestamp='+timestamp)
}

// export const loginCellphone = async (data: { phone: any; password: any; countrycode: any; }) => {
//   return axios.get('/login/cellphone', {
//     params: {
//       phone: data.phone,
//       password: data.password,
//       countrycode: data.countrycode || ''
//     }

//   });

// };
//手机号登录
export function loginCellphone(phone: string, password: string, countrycode: string = '') {
  return request.get(`/login/cellphone?phone=${phone}&password=${password}&countrycode=${countrycode}`);
}


//邮箱登录
export function loginEmail(email: string, password: string) {
  return request.get(`/login?email=${email}&password=${password}`);
}


//游客登录
export function guestLogin() {
  return request.get(`/register/anonimous`)
} 

//获取登录状态
export function loginStatus() {
  return request.get(`/login/status`)
}



//刷新登录
export function refreshLogin() {
  return request.get(`/login/refresh`)
}

//推出登录
export function logOut() {
  return request.get(`/logout`)
}