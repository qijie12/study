import axiosParams from '../../utils/axios/index';

// /api/game/all-game-list-v2 // 游戏
// /api/send_auth_verify_code?email=1237777788%40qq.com&type=email&use=2 // 发送验证码
// /api/register?name=&password=A12345678&area_code=%2B91&invite_code=&verify_code=9728&type=email&domain=www.tlkgame.site&email=1237777788%40qq.com // 注册

export function login(params) {
  return axiosParams({
    url: '/api/login',
    method: 'post',
    data: params,
  });
}





