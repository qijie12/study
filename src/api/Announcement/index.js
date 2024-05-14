import axiosParams from '../../utils/axios/index';

export function Announcement(params){
    return axiosParams({
        url:'/api/get_self_notice_list',
        method:'get',
        data:params,
    })
}

//  https://minibk.tlkgame.site/api/get_self_notice_list?type=1