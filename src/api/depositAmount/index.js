// https://minibk.tlkgame.site/api/channel-list?user_level=3&user_id=10007689&channel_type=deposit&type=1

import axiosParams from '../../utils/axios/index';
export function depositAmount(params){
    return axiosParams({
        url:'/api/channel-list',
        method:'get',
        params,
    })
}