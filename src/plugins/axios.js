import axios from "axios";
import qs from 'qs'

axios.defaults.withCredentials = true 

axios.defaults.baseURL= 'https://netease-cloud-music-api-backup-eight.vercel.app/'

//请求拦截

axios.interceptors.request.use(
    config => {
        if (config.meth === 'post' && !(config.data instanceof FormData)) {
            config.headers = {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
            config.data = qs.stringify(config.data , {arrayFormat: 'repeat'})
        }
        return config
    } , error => {
        return Promise.reject(error)
    }

)

//响应拦截
axios.interceptors.response.use(
    res =>  {
        //可在这里根据返回到状态码做一些拦截操作
        return res
    } , err => {
        return Promise.resolve(err)
    }
)
//导出
export default axios;