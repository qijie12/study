// https://minibk.tlkgame.site/api/wheel/get_wheel_list?wheel_template_id=1
import axiosParams from '../../utils/axios/index';

export function Activity(){
    return axiosParams({
        url:'/api/wheel/get_wheel_list',
        method:'get',
    }) 
};