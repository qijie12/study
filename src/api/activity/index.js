import axiosParams from '../../utils/axios/index'

export function activity(){
    return axiosParams({
        url:'/api/activity/list',
        method:'get',
    })
}