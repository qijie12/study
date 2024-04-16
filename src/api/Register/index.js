import axiosParams from '../../utils/axios/index';
// /api/register?name=&password=A12345678&area_code=%2B91&invite_code=&verify_code=9728&type=email&domain=www.tlkgame.site&email=1237777788%40qq.com 
export function Register(params) {
  return axiosParams({
    url: '/api/register',
    method: 'get',
    data: params,
  });
}


