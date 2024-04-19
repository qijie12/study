import axiosParams from '../../utils/axios/index'

export function Verification(){
    return axiosParams({
        url:'api/send_auth_verify_code',
        method:'post',
    })
}