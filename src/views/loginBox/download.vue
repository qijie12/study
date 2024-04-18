<template>
  <div id="share-download-box">
    <div class="download_top">
      <span class="iconfont icon-arrow-left" @click="jump_home"></span>
      <span class="download_title">APP download</span>
      <span></span>
    </div>
    <div class="download_con">
      <div class="con_img">
        <img src="../../assets/img/logo-dice.png"/>
      </div>
      <div class="con_title">
        <span> Download </span>
        <b>LURSSENVIP</b>
        <span> APP</span>
      </div>
      <div class="con_introduce">
        <i>Online gaming at your fingertips</i>
      </div>
      <div class="system">
         <div class="ios"><span>iOS</span></div>
         <div class="android"><span>Android</span></div>
      </div>
      <div class="con_games">
        <img src="../../assets/img/download_game.png"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const jump_home = () => {
  router.push("/home");
};
</script>

<style lang="scss">
#share-download-box {
  width: 100%;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  .download_top {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .download_title {
      color: #594735;
      font-weight: bold;
      font-size: 14px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .download_con {
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/img/download_img.png");
    background-size: cover;
    padding-top:10px;
    .con_img{
      margin:0 auto;
      width:120px;
      height:120px;
      background:#ffffff;
      border-radius:15px;
      overflow:hidden;
      >img{
        width:100%;
        height:100%;
      }
    }
    .con_title{
      padding-top:15px;
      display:flex;
      justify-content:center;
      font-size:24px;
      >span{
        color:#000000;
        font-weight:bold;
      }
      >b{
        padding:0 5px;
        color:#ff5454;
      }
    }
    .con_introduce{
      padding-top:5px;
      text-align:center;
      font-size:14px;
      color:#00000080;
    }
    .system{
      margin-top:30px;
      width:100%;
      padding:0 35px;
      display:flex;
       .ios,.android{
        width:144px;
        height:48px;
        border-radius:30px;
        background:linear-gradient(90deg, #7080a4 0%, #4a537d 100%);
        color:#ffffff;
        font-weight:bold;
        font-size:15px;
        display:flex;
        justify-content:center;
        align-items:center;
       }
       .android{
        margin-left:15px;
        background:linear-gradient(90deg, #25c66f 0%, #00874e 100%);
       }

    }
    .con_games{
      width:100%;
      display:flex;
      justify-content:center;
    }
  }
}
</style>