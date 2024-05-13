<template>
 <div id="share-axios-box">
    <button @click="getAsk">发送get请求</button><br>
    <button @click="postAsk">发送post请求</button><br>
    <button @click="call_getAsk">调用get请求</button><br>
 </div>
</template>

<script setup>
import axios from 'axios';
import {get} from '../../utils/axios/axiosExer';

const getAsk=()=>{
  axios.get("https://minibk.tlkgame.site/api/get_sys_config_by_type",{
     params:{
        type:19,
        a:'haha',
        b:1122
     },
     headers:{},
     timeout: 60000,
  })
  .then((res)=>{
    console.log(res,'get===============')
  })
  .catch((error) => {
    console.error(error); // 处理错误
  });
};
const postAsk=()=>{
    axios.post("https://minibk.tlkgame.site/api/login")
    .then((res)=>{
        console.log(res,'post----------------')
    })
    .catch((err)=>{})
    // axios.put()
    // axios.delete()
    
};

const call_getAsk=()=>{
    get("/api/get_sys_config_by_type",{})
    .then((res)=>{
        console.log(res,'call_get==========')
    })
}

</script>

<style>
#share-axios-box{

}
</style>