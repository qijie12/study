import axiosParams from '../../utils/axios/index';

//  https://minibk.tlkgame.site/api/message/get_user_message_count?behavior=%7B%7D

export function notice(){
    return axiosParams({
        url:'/api/message/get_user_message_count',
        method:'get',
    })
}