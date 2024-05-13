<template>
<div id="share-promotion-box">
  <van-nav-bar
  title="Promotion details"
  left-arrow
  @click-left="onClickLeft"
/>
<img src="../../assets/img/promotion.jpg"/>
</div>
</template>
  
<script setup>
import {ref, onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
const router =useRouter();
const route =useRoute();
 const onClickLeft=()=>{
    router.back()
 }

 onMounted(() => {
  console.log(route.query, 'query--------------')
 })
</script>

<style lang="scss">
#share-promotion-box{
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100%;
  background:#ffffff;
  .van-nav-bar{
     &::after{
            display:none;
        }
    .van-nav-bar__content{
       .van-nav-bar__left{
         .van-badge__wrapper{
            color:black;
         }     
       }
       .van-nav-bar__title{
            font-size:14px;
            color:#594735;
         }
    }
  }
  >img{
    width:100%;
    height:250px;
  }
}
</style>