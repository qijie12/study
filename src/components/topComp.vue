<template>
  <div id="share-topComp-box">
    <div class="box-top">
      <span class="iconfont icon-cuowu"></span>
      <img src="../assets/img/logo-dice.png" />
      <div class="top_title">
        <b>LURSSENVIP</b>
        <p>Online gaming at your fingertips</p>
      </div>
      <div class="top_button" @click="jump_download"><span>Download</span></div>
    </div>

    <div class="box-bottom">
      <span></span>
      <div class="bottom_title">
        <img class="title_img" src="../assets/img/logo-dice.png" />
        <b>LURSSENVIP</b>
      </div>
      <img class="bottom_flag" src="../assets/img/flag-img.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const jump_download = () => {
  router.push("/download");
};
</script>

<style lang="scss">
#share-topComp-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  flex: 1;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 88px;
  .box-top {
    height: 48px;
    width: 100%;
    padding: 6px 0 6px 6px;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    > .icon-cuowu {
      font-size: 20px;
      padding: 0 12px 0 4px;
    }
    > img {
      height: 36px;
      width: 36px;
    }
    .top_title {
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 34px;
      > b {
        color: #000;
        font-size: 14px;
      }
      > p {
        font-size: 10px;
        color: #676767;
      }
    }
    .top_button {
      width: 94px;
      height: 30px;
      background: linear-gradient(#fe8a8a 0, #ee3838 100%);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      margin-right: 6px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .box-bottom {
    padding: 0 12px;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fad9d5;
    position: relative;
    .bottom_title {
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .title_img {
        width: 22px;
        height: 22px;
      }
      > b {
        padding-left: 10px;
        color: #323233;
        font-size: 15px;
      }
    }
    .bottom_flag {
      width: 24px;
      height: 24px;
    }
  }
}
</style>