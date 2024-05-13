import axiosParams from '../../utils/axios/index';

// https://minibk.tlkgame.site/api/wheel/get_wheel_list?wheel_template

// 正确写法
export function Turnlate(params){
    return axiosParams({
        url:'/api/wheel/get_wheel_list',
        method:'get',
        params,
    })
}

// 错误写法
// export function Turnlate(params){
//     return axiosParams({
//         url:'/api/wheel/get_wheel_list',
//         method:'get',
//         data: params, // get请求不需要带data
//     })
// }
