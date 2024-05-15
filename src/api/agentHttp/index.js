
// https://minibk.tlkgame.site/api/user/get_self_info
import axiosParams from '../../utils/axios/index';
export function agentHttp(){
    return axiosParams({
        url:'/api/user/get_self_info',
        method:'get',
    })
}