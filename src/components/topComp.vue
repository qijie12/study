<template>
  <div id="share-topComp-box">
    <div class="top">
      <img class="download" src="../assets/img/download (2).png" />

      <div class="topUp" v-for="(item, index) in topList" :key="index">
        <img :src="item.url" />
        <b>{{ item.num }}</b>
        <span class="iconfont icon-jiahao"></span>
      </div>
      <!-- <div class="topUp">
        <img src="../assets/img/money.png" />
        <b>₹140.00</b>
        <span class="iconfont icon-jiahao"></span>
      </div> -->
      <div class="head" v-for="(item, index) in headList" :key="index">
        <img :src="item.url" class="Mich" />
        <div class="vipbox">
          <img :src="item.src" class="iconVip" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      <!-- <div class="head">
        <img class="Mich" src="../assets/img/head.png" />
        <div class="vipbox">
          <img class="iconVip" src="../assets/img/background.png" />
          <span>VIP 4</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import money from "../assets/img/money.png";
import headPng from "../assets/img/head.png";
import background from "../assets/img/background.png";

const props =defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const topList = ref([
  {
    url: money,
    num: "₹140.00",
  },
]);
const headList = ref([
  {
    url: headPng,
    src: background,
    text: "VIP 4",
  },
]);
</script>

<style lang="scss">
#share-topComp-box {
  .top {
    flex:1;
    height: 52px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid #222222;
    background-color: rgb(255, 255, 255);
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
}
</style>