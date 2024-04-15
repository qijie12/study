import axios from 'axios';
import { getItem } from '../../common/auth';

const baseURL = 'https://minibk.tlkgame.site/';

const axiosParams = axios.create({
  baseURL,
  timeout: 60000, // 默认超时时间，单位毫秒
  headers: {}, // 设置公共请求头
});

//request 请求前拦截
axiosParams.interceptors.request.use(
  (config) => {
    let token = getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {}
);
//response 响应后拦截
//处理业务(code)异常 业务状态码异常 
//例:400(参数异常) 401(权限异常) 404(路径地址异常) 405(请求类型异常) 500(服务器异常)
axiosParams.interceptors.response.use(
  (response) => {
    console.log(response, 'response-----------');
    return response.data;
  },
  (err) => {}
);

export default axiosParams;
