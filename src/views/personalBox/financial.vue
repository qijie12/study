<template>
  <div id="share-financial-box">
    <div class="financialTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Bonus History</b>
      <span></span>
    </div>

    <van-dropdown-menu active-color="#594735">
      <van-dropdown-item     
        title="Last 15 days"
       
      >
        <!-- <ul>
          <li
            v-for="(item, index) in ulList"
            :key="index"
            @click="bright(index)"
            :class="{ active: ulListIndex === index }"
          >
            {{ item.text }}
          </li>
        </ul>
        <div class="button">
          <van-button type="primary">Reset</van-button>
          <van-button type="primary" color="#fb5757">Confirm</van-button>
        </div> -->
      </van-dropdown-item>

      <van-dropdown-item v-model="value2" :options="option2" 
      @click="popup" 
      title="ALL">  

        <!-- <ul class="allBox">
          <li
            v-for="(item, index) in allList"
            :key="index"
            @click="bright(index)"
            :class="{ active: ulListIndex === index }"
          >
            {{ item.text }}
          </li>
        </ul>
        <div class="button">
          <van-button type="primary">Reset</van-button>
          <van-button type="primary" color="#fb5757">Confirm</van-button>
        </div> -->
      </van-dropdown-item>
    </van-dropdown-menu>

<van-popup v-model:show="showTop" overlay position="top" :style="{ height: '30%' }" />



    <div class="financialImg">
        <img src="../../assets/img/financial-background.png"/>
        <span>No Data</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const jumpMe = () => {
  router.push("/Me");
};

const showTop=ref(false);
const popup=()=>{
  showTop.value=true
};

const ulList = ref([
  { text: "Today" },
  { text: "Yesterday" },
  { text: "Last 7 days" },
  { text: "Last 15 days" },
  { text: "Last 30 days" },
]);
const ulListIndex = ref(0);
const bright = (index) => {
  ulListIndex.value = index;
};

const allList = ref([
  { text: "ALL" },
  { text: "DEPOSIT" },
  { text: "PAYOUT" },
  { text: "WITHDRAW" },
  { text: "JACKPOT BONUS" },
  { text: "BET" },
  { text: "GIFT DISCOUNT" },
  { text: "DAILY LOGIN BONUS" },
  { text: "DEDUCTION" },
  { text: "ADD" },
  { text: "REFUND" },
  { text: "SHARE ACHIEVEMENT REWARDS" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
  { text: "REFUND" },
]);
</script>

<style lang="scss">
#share-financial-box {
  width: 100vw;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  .financialTop {
    width: 100%;
    height: 46px;
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
  .van-dropdown-menu {
    .active-title {
      font-weight: 900;
    }
    .van-dropdown-item {
      .van-popup--top {
        width: 100%;
        padding: 15px;
        background: #ffffff;
        > ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
          > li {
            width: 100%;
            height: 45px;
            background-color: #f2f2f2;
            color: #868686;
            font-size: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            &.active {
              color: #ffffff;
              background-color: #fb5757;
            }
          }
        }
        .allBox {
          height: 300px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
          overflow: scroll;
          >li {
            width: 100%;
            height: 45px;
            background-color: #f2f2f2;
            color: #868686;
            font-size: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            &.active {
              color: #ffffff;
              background-color: #fb5757;
            }
          }
        }
        ::-webkit-scrollbar {
          display: none;
        }
        > .button {
          width: 100%;
          z-index: 5;
          background: #ffffff;
          margin-top: 15px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;

          .van-button:first-child {
            border-color: #fb5757;
            background: #ffffff;
            color: #fb5757;
          }
        }
      }
    }
  }
  .financialImg{
     margin-top:60px;
     width:100%;
     display:flex;
     align-items:center;
     flex-direction:column ;
     >img{
        width:200px;
        height:200px;
     }
     span{
        font-size:13px;
        color:#00000099;
     }
  }
}
</style>