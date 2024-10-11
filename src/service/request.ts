import axios from "axios";
import { ElMessage } from 'element-plus';


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

// //响应拦截器
// instance.interceptors.response.use(
//   (response: any) => {
//     // 根据 API 返回的结构直接返回需要的部分
//     return response.data;
//   },
//   (error: any) => {
//     // 处理错误，根据不同的 HTTP 状态码给出不同的提示
//     if (error.response) {
//       // 请求成功发出且服务器有返回状态码，但状态码超出 2xx 范围
//       const status = error.response.status;

//       switch (status) {
//         case 400:
//           window.$message.error('请求错误（400）');
//           break;
//         case 401:
//           window.$message.error('未授权，请登录（401）');
//           break;
//         case 403:
//           window.$message.error('拒绝访问（403）');
//           break;
//         case 404:
//           window.$message.error('请求地址出错（404）');
//           break;
//         case 500:
//           window.$message.error('服务器内部错误（500）');
//           break;
//         default:
//           window.$message.error(`连接错误，状态码: ${status}`);
//       }
//     } else if (error.request) {
//       // 请求已发出，但没有收到响应
//       window.$message.error('服务器无响应，请稍后重试');
//     } else {
//       // 发生在请求设置过程中
//       window.$message.error('请求失败：' + error.message);
//     }

//     return Promise.reject(error); // 返回一个 rejected Promise 来处理错误
//   }
// );

export default instance;