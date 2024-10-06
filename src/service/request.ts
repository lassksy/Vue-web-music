import axios from "axios";

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://netease-cloud-music-api-backup-eight.vercel.app/',
  withCredentials: true
});

// 发送 GET 请求
const sendGetRequest = async (url: any, params: any) => {
  try {
    const response = await instance.get(url, { params }); // GET 请求携带参数
    return response.data; // 返回数据
  } catch (error) {
    console.error('GET 请求错误:', error);
    throw error; // 处理或抛出错误
  }
};

// 发送 POST 请求
const sendPostRequest = async (url: any, data: any) => {
  try {
    const response = await instance.post(url, data); // POST 请求携带数据
    return response.data; // 返回数据
  } catch (error) {
    console.error('POST 请求错误:', error);
    throw error; // 处理或抛出错误
  }
};



//添加请求拦截器
instance.interceptors.request.use((config: any) => {
  return config;
}, (err: any) => {
  return Promise.reject(err);
});

//响应拦截器
instance.interceptors.response.use((data: any) => {
  return data;
}, (err: any) => {
  window.$message.error('网络错误');
  return Promise.reject(err);
});

export default instance;