<template>
 <div id="share-notice-box">
   <div class="noticeTop">
    <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
    <b>message</b>
    <span></span>
   </div>
 </div>
</template>

<script setup>  
import {ref} from 'vue';
import {useRouter} from 'vue-router';
// import {Notice} from '../api/Notice';

// const call_notice = async()=>{
//     let res =await Notice();
//     console.log(res,'notice........')
//     router.push('/me')
// };
const router=useRouter();
const jumpMe =()=>{
    router.back()
};
</script>

<style lang="scss">
 #share-notice-box{
    width: 100vw;
    height:100vh;
    font-family: PingFang SC-Bold, PingFang SC;
    background:#ffffff;
    .noticeTop{
        width:100%;
        height:46px;
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        padding:0 15px;
        >b{
            font-size:14px;
            color:#303030;
            position:absolute;
            left:50%;
            transform:translateX(-50%);
        }
        >.icon-arrow-left{
            color:#303030;
            font-weight:900;
        }
    }
 }
</style>