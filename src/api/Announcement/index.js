import axiosParams from '../../utils/axios/index';

export function Announcement(params){
    return axiosParams({
        url:'/api/message/get_user_message_count',
        method:'get',
        data:params,
    })
}

//  https://minibk.tlkgame.site/api/message/get_user_message_count?behavior=%7B%7D