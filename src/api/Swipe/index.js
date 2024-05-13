//   https://minibk.tlkgame.site/api/get_sys_config_by_type?type=1

import axiosParams from '../../utils/axios/index';

export function Swipe(params){
    return axiosParams({
        url:'/api/get_sys_config_by_type',
        method:'get',
        params,
    })
}