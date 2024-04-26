<template>
  <div id="share-cs-box">
    <div class="csTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Support</b>
      <span></span>
    </div>
    <div class="csCon">
      <van-row >
        <van-col  span="4">
          <img src="../../assets/img/telegram111.png"/>
        </van-col>
        <van-col  span="18">
          <b>Telegram</b>
          <p>Official customer service</p>
        </van-col>
        <van-col >
          <span class="iconfont icon-a-youjiantouzhixiangyoujiantou"></span>
        </van-col  span="2">
      </van-row>
      <img class="csBj" src="../../assets/img/bear-background.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const jumpMe = () => {
  router.go(-1);
  // router.back()
};
</script>

<style lang="scss">
#share-cs-box {
  width: 100vw;
  height: 100%;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  overflow: hidden;

  .csTop {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 15px;
    border-bottom: 2px solid #ccc;
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
  .csCon {
    width: 100%;
    padding:0 15px;
    margin-top:15px;
    .csBj {
      width: 200.5px;
      height: 150px;
      position: fixed;
      bottom: 0;
      left: -8px;
    }
    .van-row{
       background:#f1f1f1;     
       height:60px;
       border-radius:2px;
       padding:10px 15px;
       .van-col{
        display:flex;
        align-items:left;
        flex-direction: column;
        justify-content: center;
        >img{
          width:40px;height:40px;
        }
        >b{
          font-size:14px;
        }
        >P{
          font-size:12px;
          color:#8da5a7;
          font-weight:700;
          padding-top:5px;
        }
        .icon-a-youjiantouzhixiangyoujiantou{
          font-weight:900;
          color:#627071;
           font-size:18px;
        }
       }
    }
  }
}
</style>