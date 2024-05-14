// https://minibk.tlkgame.site/api/fund-list?page=1&limit=15&type=1&user_id=10007689

import axiosParams from '../../utils/axios/index';

export function depositDetails(params){
    return axiosParams({
        url:'/api/fund-list',
        method:'get',
        params,
    })
};