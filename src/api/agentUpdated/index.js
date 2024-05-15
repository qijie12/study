// https://minibk.tlkgame.site/api/user/agent/trans?level=1&date=today

import axiosParams from '../../utils/axios/index';

export function agentUpdated(params){
    return axiosParams({
        url:'/api/user/agent/trans',
        method:'get',
        params,
    })
}