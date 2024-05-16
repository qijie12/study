// https://minibk.tlkgame.site/api/get_sys_config_by_type?type=16

import axiosParams from '../../utils/axios/index';

export function homeList(params){
    return axiosParams ({
        url:'/api/get_sys_config_by_type',
        method:'get',
        params,
    })
}