import axios from 'axios';

const baseURL = 'http://localhost:8080';
const instance = axios.create({baseURL})


// 添加响应拦截器
instance.interceptors.response.use(
    result=>{
        return result.data;
    },
    err=>{
        alert('服务异常');
        // 异步的状态转化成失败的状态
        return Promise.reject(err);
    }
)

export default instance;