// https://minibk.tlkgame.site/api/get_sys_config_by_type?type=18

import axiosParams from '../../utils/axios/index';
export function gameSwipe(params){
    return axiosParams({
        url:'/api/get_sys_config_by_type',
        method:'get',
        params,
    })
}
