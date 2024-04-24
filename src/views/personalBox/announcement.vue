<template>
  <div id="share-announ-box">
    <div class="announTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Announcement</b>
      <span></span>
    </div>

    <div class="announCon">
      <div class="visit">
        <p class="visitTit">⭐️⭐️To visit our official website</p>
        <p class="visitCon">
          ⭐️⭐️To visit our official website, be sure to use the link
          below,https:lkgame.xyz// Please remember! Make sure not provide
          personal data and personal transactions in any form and for any reason
          to other parties on behalf of LURSSENVIP. Our side does not make
          private chats or calls to all members. Please inform all
          Referrals/other Members about this to avoid fraud. Thank you for your
          attention and cooperation.
        </p>
        <p class="visitTime">
          <span class="time">2024-04-02 19:42:13</span>
          <span class="iconfont icon-youjiantou" @click="showRight"> </span>
        </p>
        <van-popup
          z-index="2"
          v-model:show="showRight"
          close-on-click-overlay="true"
          position="right"
          :style="{ width: '90%', height: '100%' }"
        >
          <van-nav-bar
            title="Announcement"
            left-arrow
            @click-left="onClickLeft"
          />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showRight = () => {};
const onClickLeft = () =>{ 
    history.back();
}
</script>

<style lang="scss">
#share-announ-box {
  width: 100vw;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  .announTop {
    width: 100%;
    height: 46px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 15px;
    > b {
      font-size: 14px;
      color: #594735;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    > .icon-arrow-left {
      color: #303030;
      font-weight: 900;
    }
  }
  .announCon {
    width: 100%;
    padding: 10px 16px 0 16px;
    .visit {
      padding: 15px;
      width: 100%;
      height: 108px;
      background: #fbfbfc;
      border-radius: 10px;
      box-shadow: 1px 8px 12px #0000001a;
      .visitTit {
        color: #594735;
        font-size: 16px;
      }
      .visitCon {
        color: #8c8e87;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px 0;
      }
      .visitTime {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
          color: #8c8e87;
          font-size: 12px;
        }
      }
    }
  }
}
</style>