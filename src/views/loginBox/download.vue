<template>
  <div id="share-download-box">
    <div class="download_top">
      <span class="iconfont icon-arrow-left" @click="jump_home"></span>
      <span class="download_title">APP download</span>
      <span></span>
    </div>
    <div class="download_con"></div>
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
  }
}
</style>