<template>
  <div id="share-FA-box">
    <div class="FATop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Help Center</b>
      <span></span>
    </div>
    <van-tabs
      v-model:active="active"
      @click-tab="onClickTab"
      color="#ff5454"
      title-active-color="#ff5454"
      line-width="169px"
    >
      <van-tab title="FAQs"></van-tab>
      <van-tab title="About Us"></van-tab>
    </van-tabs>

    <div class="FAQsBox" v-if="!active">
      <div class="customerService">
        <div class="serviceCon">
          <div class="serviceIcon">
            <img src="../../assets/img/service-c5a9a949.svg" />
          </div>
          <div class="serviceTitle">
            <p>Customer Service</p>
            <p>24hr CS Stand By</p>
          </div>
        </div>

        <div class="iconfont icon-youjiantou"></div>
      </div>

      <h2>FAQs</h2>
      <van-collapse v-model="activeNames" >
        <van-collapse-item name="1">
          <template #title>
            <div>What should I do if there is a game error or a dispute? </div>
          </template>
          Please contact our 24-hour customer service staff and ask questions about errors and disputes, and we will deal with them in time.
        </van-collapse-item>

      </van-collapse>
    </div>

    <div class="AboutUsBox" v-else>
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <template #title>
            <div>Gambling Responsibility</div>
          </template>
          It is our appeal and responsibility to provide the most perfect service and the happiest time for every user. And we also strongly hope that players will stay happy during the game. We will bring you the ultimate user experience, ultra-localized personalized services and subversive gaming products.
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
import {useRouter,useRoute} from 'vue-router';
const router =useRouter();
const route =useRoute();
const activeNames = ref(["1"]);

const active =ref(0);

const jumpMe =()=>{
   router.back()
};

const onClickTab=()=>{

};

onMounted(()=>{
   let params = route.query;
   if(params?.tab) {
    active.value = 1
  }
});

</script>

<style lang="scss">
#share-FA-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  .FATop {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: relative;
    background: #ffffff;
    > b {
      color: #594735;
      font-size: 14px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .FAQsBox {
    width: 100%;
    padding: 0 15px;
    .customerService {
      margin-top: 20px;
      width: 100%;
      height: 70px;
      background: linear-gradient(to bottom, #f8fafb, #fff 100%);
      box-shadow: 1px 8px 12px 0 #efefef;
      border-radius: 8px;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .serviceCon {
        height: 100%;
        display: flex;
        align-items: center;

        .serviceIcon {
          background-image: linear-gradient(135deg, #7a97ff 8%, #855af4 93%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-right: 15px;
          > img {
            width: 100%;
            height: 100%;
          }
        }

        .serviceTitle {
          > p {
            font-weight: 500;
            font-size: 13px;
            color: #594735;
          }
          > p:last-child {
            font-size: 12px;
            font-weight: 300;
          }
        }
      }
    }
    > h2 {
      margin: 33px 0 10px 0;
      font-weight: 500;
      font-size: 22px;
      color: #594735;
    }
    .van-collapse {
      &::after {
        display: none;
      }
      .van-collapse-item {
        .van-cell {
          margin: 0;
          padding: 0;
          border-bottom: 0.5px solid #e5ebf1;

          .van-cell__title {
            > div {
              font-size: 13px;
              color: #594735;
              margin-right: 10px;
            }
          }
        }
        .van-collapse-item__content {
          background: #f7f7f7;
          font-size: 13px;
        }
      }
    }
  }
  .AboutUsBox{
    padding:0 15px;
    width:100%;
    margin-top:20px;
    .van-collapse{
      &::after{
        display:none;
      }
      .van-cell{
        margin:0;
        padding:10px 0;
        border-bottom: 0.5px solid #e5ebf1;
        .van-cell__title{
            font-size:13px;
        }
      }
        .van-collapse-item__content{
          background:#f7f7f7; 
          font-size:13px; 
    }
  }
}
}
</style>