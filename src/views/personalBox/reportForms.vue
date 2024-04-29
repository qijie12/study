<template>
  <div id="share-reportForms-box">
    <pinkTopComp @click="jumpMe"></pinkTopComp>
    <div class="head">
      <span class="iconfont icon-arrow-left" @click=jump()></span>
      <b>Handling Fee</b>
      <div class="unit">
        <span>Currency: </span>
        <span>INR</span>
      </div>
    </div>

    <van-tabs v-model:active="active" scrollable direction="horizontal" line-width="104px" title-inactive-color="#646566" title-active-color="#ffffff" scroll-to-center >
      <van-tab title="Bet Amount">
      
      </van-tab>
      <van-tab title="Lv.1 Comm. Contribution">
      
      </van-tab>
      <van-tab title="Lv.2 Comm. Contribution">
      
      </van-tab>
    </van-tabs>

    <ul>
        <li>Username</li>
        <li>UID</li>
        <li>Commission Contribution (₹)</li>
    </ul>
    <p>No data</p>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import pinkTopComp from "../../components/pinkTopComp.vue";

const router = useRouter();
const jumpMe = () => {
  router.go(-2);
};
const jump=()=>{
    router.back()
};

</script>

<style lang="scss">
#share-reportForms-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #2a2c2c;
  >.head {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    background: #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: relative;
    > .icon-arrow-left {
      color: #6a6a68;
      font-weight: bold;
    }
    > b {
      color: #ffffff;
      font-size: 16px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 600;
    }
    .unit {
      font-size: 14px;
      color: #6a6a6a;
      > span:last-child {
        color: #177ddc;
      }
    }
  }
  .van-tabs{
    overflow-x: auto;
    white-space: nowrap;
    .van-tabs__nav{
        background:#1d1d1d;
      .van-tab{
      display: inline-block;
      
      padding:10px 20px;
    //   margin-right: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  }
  >ul{
    width:100%;
    background-color:#393939;
    height:45px;
    color:#c1c1c1;
    font-size:14px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    >li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
  }
  >p{
    width:100%;
    background-color:#1a1a1a;
    height:45px;
    color:#c1c1c1;
    font-size:14px;
    text-align:center;
    line-height:45px;
  }
    
}
</style>