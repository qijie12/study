import axios from 'axios';
import { getItem } from '../../common/auth';

const baseURL = 'https://minibk.tlkgame.site/';

const axiosParams = axios.create({
  baseURL,
  timeout: 60000, // 默认超时时间，单位毫秒
  headers: {}, // 设置公共请求头
});

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

axiosParams.interceptors.response.use(
  (response) => {
    console.log(response, 'response-----------');
    return response.data;
  },
  (err) => {}
);

export default axiosParams;
