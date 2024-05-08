import axiosParams from '../../utils/axios/index';

// https://minibk.tlkgame.site/api/wheel/get_wheel_list?wheel_template

export function Turnlate(params){
    return axiosParams({
        url:'/api/wheel/get_wheel_list',
        method:'get',
        data:params,
    })
}