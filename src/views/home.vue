<template>
  <div id="all">
    <div class="top">
      <img class="download" src="../assets/img/download (2).png" />
      <div class="topUp">
        <img src="../assets/img/money.png" />
        <b>₹140.00</b>
        <span class="iconfont icon-jiahao"></span>
      </div>
      <div class="head">
        <img class="Mich" src="../assets/img/head.png" />
        <div class="vipbox">
          <img class="iconVip" src="../assets/img/background.png" />
          <span>VIP 4</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../assets/img/swiper.png" /></van-swipe-item>
        <van-swipe-item><img src="../assets/img/swiper2.png" /></van-swipe-item>
      </van-swipe>

      <!-- <van-notice-bar
        left-icon="volume-o"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />

      <van-popover
        v-model:show="showPopover"
        :actions="actions"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">浅色风格</van-button>
        </template>
      </van-popover>

      <van-button type="primary">主要按钮</van-button>

      <van-progress :percentage="50" /> -->
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showPopover = ref(false);

const active = ref(0);

// 通过 actions 属性来定义菜单选项
const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
const onSelect = (action) => showToast(action.text);
</script>

<style lang="scss">
#all {
  background-color: #fff;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
  }
  .top {
    height: 52px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .download {
      height: 30px;
      width: 30px;
    }
    .topUp {
      height: 30px;
      width: 150px;
      background-color: #f9f9f9;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px;
      img {
        height: 25px;
        width: 30px;
      }
    }
    .head {
      position: relative;
      padding-top: 10px;
      height: 52px;
      .Mich {
        width: 30px;
        height: 30px;
      }
      .vipbox {
        position: absolute;
        bottom: 4px;
        left: -3px;
        height: 14px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconVip {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0px;
          left: 0px;
          z-index: 1;
        }
        span {
          z-index: 11;
          font-size: 10px;
          white-space: nowrap;
          color: #fff;
        }
      }
    }
  }
  hr {
    margin: 0;
    padding: 0;
  }
  .swiper {
    width: 100%;
    height: 170px;
    padding: 15px 15px 0 15px;

    .my-swipe {
      //   padding: 10px;
      width: 100%;
      height: 100%;
      .van-swipe-item {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>