import axios from 'axios';
// 创建axios实例
const instance = axios.create({
  baseURL: 'https://netease-cloud-music-api-backup-eight.vercel.app/',
  method: 'get',
  withCredentials: true
});

//添加请求拦截器
instance.interceptors.request.use((config) => {
  return config;
}, err => {
  return Promise.reject(err);
});

//响应拦截器
instance.interceptors.response.use((data) => {
  return data;
}, err => {
  window.$message.error('网络错误');
  return Promise.reject(err);
});

export default instance;