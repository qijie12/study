<template>
  <div id="share-info-box">
    <div class="infoTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>accountDetails</b>
      <span></span>
    </div>

    <ul class="information">
      <li>
        <img src="../../assets/img/person_img000.png" />
        <van-field  model-value="10000507" placeholder="ID">
            <template #right-icon>
                <span class="iconfont icon-fuzhi"></span>
            </template>
        </van-field>    
      </li>
      <li>
        <img src="../../assets/img/phone-img000.png" />
        <van-field label="+91" model-value="185458552" readonly placeholder="ID">
            <template #right-icon>
                <span class="iconfont icon-bianji"></span>
            </template>
        </van-field>
      </li>
      <li>
        <img src="../../assets/img/email-img000.png" />
        <van-field  model-value="133355455@qq.com" readonly placeholder="ID">
            
        </van-field>
      </li>
      <li>
        <img src="../../assets/img/password-img000.png" />
        <van-field   readonly placeholder="password">
            <template #right-icon>
                <span class="iconfont icon-bianji"></span>
            </template>
        </van-field>
      </li>
    </ul>
    <hr>

    <div class="infoCon">
      <p class="passwordTitle">Withdrawal password</p>
      <div class="passwordInput">
        <!-- <img src="../../assets/img/password_img000.png"/>
        <van-field   readonly placeholder="password">
            <template #right-icon>
                <span class="iconfont icon-bianji"></span>
            </template>
        </van-field> -->
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router';

const router =useRouter();

const jumpMe=()=>{
    router.push("/me")
};

</script>

<style lang="scss">
 #share-info-box{
   width:100vw;
   height:100vh;
   background:#ffffff;
   font-family: PingFang SC-Bold, PingFang SC;
   .infoTop{
    width:100%;
    height:46px;
    background:#ffffff;
    padding:0 15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    border-bottom:2px solid #e5e7eb;
    .icon-arrow-left{
        font-weight:bolder;
        font-size:18px;
        color:#000;
    }
    >b{
        font-size:14px;
        color:#303030;
        position:absolute;
        left:50%;
        transform:translateX(-50%);
    }
   }
   >.information{
     margin-top:10px;
     width:100%;
     padding:0 15px;
     display:grid;
     grid-template-rows:repeat(4,1fr);
     grid-gap:15px;
     >li{
        width:100%;
        height:51px;
        display:flex;
        >img{
            width:50px;
            height:50px;
            border-radius:5px;
            margin-right:10px;
        }
        .van-field{
            flex:1;
            background:#f1f1f1;
            display:flex;
            align-items:center;
        }
     }
   }
   >hr{
    margin-top:20px;
   }
   .infoCon{
    width:100%;
    padding:0 10px;
    .passwordTitle{
      padding:5px 0;  
      color:#303030;
      font-size:14px;
      font-weight:700;
    }
    .passwordInput{
        width:100%;
        height:51px;
        // display:flex;
        background:red;
         >img{
            width:50px;
            height:50px;
            border-radius:5px;
            margin-right:10px;
        }
        .van-field{
            flex:1;
            background:#f1f1f1;
            display:flex;
            align-items:center;
        }
    }
   }
 }
</style>