<template>
 <div id="share-index-box">
   <div class="iconfont icon-arrow-left" @click="jumpHome('/home')"></div>

   <div class="enroll">
    <p class="hello">Hello !</p>
    <p class="sign_up">Sign Up to your account</p>
   </div>
   <ul class="continue">
     <li>
        <div>
            <img src="../../assets/img/google.png" style="width:25px;height:25px;"/>
            <span>Continue with Google</span>
        </div>
     </li>
     <li>
        <div>
            <img src="../../assets/img/f111.png" style="width:40px;height:40px;"/>
            <span>Continue with Facebook</span>
        </div>
     </li>
     <li>
        <div>
            <img src="../../assets/img/phone.png" style="width:25px;height:25px;"/>
            <span @click="jumpHome('/Register')">Continue with Phone</span>
        </div>
     </li>
     <li>
        <div>
            <img src="../../assets/img/email.png" style="width:25px;height:25px;"/>
            <span @click="jumpHome('/Register')">Continue with Email</span>
        </div>
     </li>
   </ul>
   <div class="select">
    <span class="select_L">Already have an account? </span>
    <span class="select_R" @click="jumpHome('/sign_in')">Sign in</span>
   </div>
 </div>
</template>

<script setup>
 import {ref} from 'vue';
 import {useRouter} from 'vue-router';
 const router = useRouter();

 const jumpHome = (path) =>{
   router.push(path);
 };

// const skip=ref(0);
// const text=ref(""); 

</script>

<style lang="scss" scoped>
 #share-index-box{
   font-family: PingFang SC-Bold,PingFang SC;
   width:100%;
   height:100vh;
   background-color:rgb(255, 255, 255);
   >.icon-arrow-left{
      width:100%;
      height:30px;
      padding:20px;
      font-size:20px;
      color: #303030;
   }
   .enroll{
    width:100%;
    margin:70px 0;
    display:flex;
    // justify-content:center;
    flex-direction:column;
    align-items:center;
    .hello{
        font-size:50px;
        font-weight:bolder;
        color:black;
        padding-bottom:12px;
    }
    .sign_up{
        font-size:18px;
        font-weight:bold;
        color:black;
    }
   }
   .continue{
    margin-top:80px;
    width:100%;
    padding:0 15px;
    display:grid;
    grid-template-rows:repeat(4,1fr);
    grid-gap:10px;
    li{
       width:100%;
       height:50px;
       border:1px solid black;
       border-radius:5px;
       display:flex;
       justify-content:center;
       align-items:center;
       >div{
          display:flex;
          align-items:center;
          img{
            margin-right:5px;
          }
          span{
            font-weight:bold;
            color: #000;
            font-size:14px;
          }
       }
    }
   }
   .select{
    width:100%;
    margin-top:30px;
    display:flex;
    justify-content:center;
    align-items:center;
     .select_L{
        color:rgb(157, 157, 157);
        font-size:12px;
        font-weight:bold;
        margin-right:10px;
     }
     .select_R{
        color:#303030;
        font-weight:bold;
        font-size:12px;
     }
   }
 }
</style>