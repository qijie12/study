<template>
  <div id="share-hello-box">
    <div class="iconfont icon-arrow-left" @click="jump_home"></div>
    <div class="hello_title">
       <b>Hello !</b>
       <p>Sign Up to your account</p>
    </div>
    <ul>
      <li>
        <img src="../../assets/img/google.png" style="width:24px;height:24px;"/>
        <span>Continue with Google</span>
      </li>
      <li>
        <img src="../../assets/img/f111.png" style="width:40px;height:40px;"/>
        <span>Continue with Facebook</span>
      </li>
      <li>
        <img src="../../assets/img/phone.png" style="width:25px;height:25px;"/>
        <span>Continue with Phone</span>
      </li>
      <li>
        <img src="../../assets/img/email.png" style="width:25px;height:25px;"/>
        <span>Continue with Email</span>
      </li>
    </ul>
    <div class="account">
      <span class="account_L">Already have an account? </span>
      <span class="account_R" @click="jump_sign">Sign in</span>
    </div>
  </div>
</template>

<script setup>
 import {ref} from 'vue';
 import {useRoute,useRouter} from 'vue-router';
 const route = useRoute();//地址栏
 const router = useRouter()//路由地址
 const jump_sign = () => {
    router.push('/sign_in')
 };
 const jump_home=()=>{
  router.push('/home')
 }
</script>

<style lang="scss">
#share-hello-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 10vh;
  padding: 25px 15px 0 15px;
  >.icon-arrow-left{
    font-size:20px;
  }
   .hello_title{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:60px 0 85px 0;
    >b{
      font-size:50px;
    }
    >p{
      padding-top:10px;
      font-size:18px;
      font-weight:bold;
    }
  }
  >ul{
    width:100%;
    display:grid;
    grid-template-rows:repeat(4,1fr);
    grid-gap:10px;
    >li{
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      height:50px;
      border:1px solid #000000;
      border-radius:5px;
      font-weight:bold;
      font-size:14px;
      >img{
        margin-right:5px;
      }
    }
  }
  .account{
    display:flex;
    justify-content:center;
    padding-top:30px;
    font-size:12px;
    font-weight:bold;
    .account_L{
      color:#999;
    }
    .account_R{
      padding-left:10px;
      color:#303030;
    }
  }
}
</style>