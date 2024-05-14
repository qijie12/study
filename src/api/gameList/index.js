// https://minibk.tlkgame.site/api/game/all-game-list-v2
import axiosParams from '../../utils/axios/index';
export function gameList(){
    return axiosParams({
        url:'/api/game/all-game-list-v2',
        method:'get'
    })
}