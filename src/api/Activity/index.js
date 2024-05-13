// https://minibk.tlkgame.site/api/activity/list
import axiosParams from '../../utils/axios/index';

export function Activity(){
    return axiosParams({
        url:'/api/activity/list',
        method:'get',
       
    }) 
};