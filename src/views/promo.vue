<template>
  <div id="share-promo-box">
    <div class="promo_top">
      <div></div>
      <div class="top_con">
        <img src="../assets/img/logo-dice.png" />
        <span>LURSSENVIP</span>
      </div>
      <img class="top_img" src="../assets/img/flag-img.png" />
    </div>
    <div class="center_con">
      <div class="cen_img">
        <img src="../assets/img/turnplate.png" />
        <div class="cen_text">
          <span class="cen_time">2024-03-11 09:28:20~2024-04-30 20:09:56</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      <div class="cen_img">
        <img src="../assets/img/upload_live.png" />
        <div class="cen_text">
          <span class="cen_time">2024-04-10 08:00:00~2024-04-30 08:00:00</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bottomComp from "../components/bottomComp.vue";

const props = defineProps({
    
});
</script>

<style lang="scss">
#share-promo-box {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  .promo_top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #222222;
    position: relative;
    .top_con {
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      > img {
        width: 20px;
        height: 20px;
      }
      > span {
        padding-left: 8px;
        font-weight: bold;
        font-size: 15px;
      }
    }
    .top_img {
      width: 24px;
      height: 24px;
    }
  }
  .center_con {
    padding: 0 15px;
    .cen_img {
      width: 100%;
      border: 1px solid;
      border-color: #e5e7eb;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
      > img {
        width: 100%;
        height: 130px;
      }
      .cen_text {
        padding: 0 10px;
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .cen_time {
          color: red;
          font-size: 12px;
        }
        > .icon-youjiantou {
          color: rgb(100, 101, 101);
        }
      }
    }
  }
}
</style>