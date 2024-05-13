import axios from 'axios';
import {getItem} from '../../common/auth';
//创建一个新的axios对象
const newParams=axios.create({
    baseURL:'https://minibk.tlkgame.site/',
    timeout:50000,
    headers:{},
});

newParams.interceptors.request.use(
    (request)=>{
        console.log(request,'全局请求前拦截')
        let token = getItem('token');
        if(token) {
            request.headers['token'] = `Bearer ${token}`;
            // request.headers['token'] = 'Bearer ' + token;
        }
        
        return request;
    },
    (err)=>{}
);
newParams.interceptors.response.use(
    (res)=>{
        console.log(res,'全局响应后拦截')
        return res;
    },
    (err)=>{}
)

// export function get(url,params){
//     return axios.get(url,{
//         params
//     })
// };   
export function get(url,params){
    return newParams.get(url,{
        params
    })
}; // 用的创建新的axios对象中的


// export function post(url,data){
//     return axios.post(url,data,{})
// };
export function post(url,data){
    return newParams.post(url,data,{})
};

// export function put(url,data){
//     return axios.put(url,data)
// };
export function put(url,data){
    return newParams.put(url,data)
};

// export function del(url){
//     return axios.delete(url)
// };
export function del(url){
    return newParams.delete(url)
};

