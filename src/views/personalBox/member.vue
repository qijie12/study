<template>
  <div id="share-member-box">
    <pinkTopComp @click="jumpMe"></pinkTopComp>

    <div class="head">
      <span class="iconfont icon-arrow-left" @click="jump()"></span>
      <b>Member</b>
      <div class="unit">
        <span>Currency: </span>
        <span>INR</span>
      </div>
    </div>

    <div class="searchBox">    

      <van-collapse v-model="activeNames">
        <van-collapse-item title="Filter" name="1">
          <h4>Data time</h4>
          <p>
            <div>2024-04-29 00:00:00</div>
            <span>To</span>
            <div>2024-04-29 23:59:59</div>
          </p>
          <hr style="border:0.2px solid #414446;">
          <h5>Level</h5>
          <ul>
            <li v-for="(item,index) in liList" :key="index"
            @click="bright(index)"
            :class="{active:liListIndex===index}"
            >
                {{item.text}}
              <div class="check" v-show="liListIndex===index">
                <div class="checked"><svg width="1em" height="1em" viewBox="0 0 17 13" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(-2832.000000, -1103.000000)" stroke="#FFFFFF" stroke-width="3"><g transform="translate(2610.000000, 955.000000)"><g transform="translate(24.000000, 91.000000)"><g transform="translate(179.177408, 36.687816)"><polyline points="34.2767388 22 24.797043 31.4796958 21 27.6826527"></polyline></g></g></g></g></g></svg></div>
             </div>  
            </li>    
          </ul>


        <div class="button">
          <van-button type="primary" size="normal" color="#1d1d1d" @click="conceal">
            Clean-up Condition
          </van-button>
          <van-button type="primary" size="normal" @click="conceal">
            Search 
            <span class="iconfont icon-youjiantou"></span>
          </van-button>
      </div>
        </van-collapse-item>
      </van-collapse>
      <div class="search">
         <input type="" placeholder="Please enter Upper-level user name" />
        <i class="van-badge__wrapper van-icon van-icon-search"></i>
      </div>

      
    </div>

    <div class="Date">
      <van-tabs  v-model:active="active1" title-active-color="#ffffff" line-width="72px">
        <van-tab title="Today"></van-tab>
        <van-tab title="Yesterday"></van-tab>
        <van-tab title="This Week"></van-tab>
        <van-tab title="Last Week"></van-tab>
        <van-tab title="This Month"></van-tab>
        <van-tab title="Last Month"></van-tab>
      </van-tabs>
   </div>

   <ul class="text">
    <li><span>2024-03-01 00:00:00 - 2024-03-31 23:59:59</span></li>
    <li><span>Offline Lv.1-3</span></li>
    <li>
      <span class="clear">Clear</span>
      <svg viewBox="64 64 896 896" focusable="false" data-icon="reload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path></svg>
    </li>
   </ul>

   <div class="container">
     <div class="conTop">
        <span>Username</span>
        <span>Level</span>
        <span>UID</span>
        <span>Registration time</span>
        <span>Last log-in time</span>
        <span>Deposit (₹)</span>
        <span>Withdraw (₹)</span>
        <span>Comission (₹)</span>
        <span>Valid Bet (₹)</span>
        <span>Net Loss & Win (₹)</span>
     </div>
     <div class="conBottom">No data</div>
   </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import pinkTopComp from "../../components/pinkTopComp.vue";
const activeNames = ref([]);
const router = useRouter();
const active1 = ref(0);
const active2 = ref(0);
const jumpMe = () => {
  router.go(-2);
};
const jump = () => {
  router.back();
};

const liListIndex = ref(0);
const bright = (index) => {
  liListIndex.value = index;
};

const conceal = () => {
  activeNames.value = [];
};

const liList = ref([
  { text: "Offline Lv.1" },
  { text: "Offline Lv.1-2" },
  { text: "Offline Lv.1-3" },
  { text: "Offline Lv.1-4" },
  { text: "All levels" },
]);

const title=ref([
  {title:'Today'}
])
</script>

<style lang="scss">
#share-member-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #2a2c2c;
  > .head {
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
  .searchBox {
    width: 100%;
    height: 55px;
    background-color: #2a2c2c;
    display: flex;
    align-items: center;
    position: relative;
    .van-collapse {
      width: 100%;
      height: 55px;
      &::after {
        display: none;
      }
      .van-collapse-item {
        height: 100%;
        z-index:5;
        background: #2a2c2c;
        .van-cell {
          padding-left: 300px;
          height: 100%;
          background-color: #2a2c2c;
          display: flex;
          align-items: center;
          &::after {
            display: none;
          }
          .van-cell__title {
            color: #8f8f8f;
            font-size: 15px;
          }
        }
        .van-collapse-item__wrapper {
          .van-collapse-item__content {

            background: #2a2c2c;
            height: 381px;
            padding: 12px 0;
            > h4 {
              margin: 0px 0 15px 0;
              font-size: 16px;
              font-weight: 400;
              padding: 0 20px;
            }
            > p {
              display: flex;
              width: 100%;
              padding: 0 20px;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 30px;
              > div {
                width: 153px;
                height: 33px;
                border: 1px solid #393939;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                border-radius: 2px;
              }
              > span {
                font-size: 12px;
              }
            }
            > h5 {
              margin: 20px 0 15px 0;
              font-size: 16px;
              font-weight: 400;
              padding: 0 20px;
            }
            > ul {
              width: 100%;
              padding: 0 20px;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 10px;
              margin-bottom: 33px;
              > li {
                width: 105px;
                height: 44px;
                border: 1px solid #393939;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
                font-size: 13px;
                color: #ffffff;
                position: relative;
                &.active {
                  color: #177ddc;
                  border-color: #177ddc;
                }
                .check {
                  border-top: 8px solid transparent;
                  border-right: 10px solid #177ddc;
                  border-bottom: 8px solid #177ddc;
                  border-left: 10px solid transparent;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  .checked {
                    position: absolute;
                    left: -1px;
                    bottom: -13px;
                    font-size: 10px;
                  }
                }
              }
            }
            .button {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              .van-button {
                border-radius: 0;
              }
            }
          }
        }
      }
    }
    .search {
      z-index: 5;
      position: absolute;
      display: flex;
      align-items: center;
      > input {
        margin: 0 12px;
        width: 280px;
        height: 34px;
        border-radius: 20px;
        background-color: #3b3a3b;
        font-size: 13px;
        padding-left: 30px;
        border-color: transparent;
        color: #8f8f8f;
      }
      > .van-badge__wrapper {
        z-index: 2;
        position: absolute;
        left: 24px;
        color: #8f8f8f;
        font-size: 18px;
      }
    }
  }
  .Date{
     .van-tabs{
    .van-tabs__wrap{
      .van-tabs__nav{
            background:#1d1d1d;
      }
    }
  }
  }
  .text{
    width:100%;
    height:38px;
    background:#2a2c2c;
    display:flex;
    align-items:center;
    font-size:10px;
    color:#d3d3d3;
    padding:0 9px;
    >li{
      height:23px;
      border:1px solid hsla(0, 0%, 100%, .1);
      padding:0 3px;
      display:flex;
      align-items:center;
      &:nth-child(2){
        margin:0 5px;
      }
      .clear{
        margin-right:6px;
      }
    }
  }
  .container{
    width:100%;
    overflow-x: auto;
    background:#393939;
    font-size:14px;
position: relative;
    &::-webkit-scrollbar{
        display:none;
    }
    .conTop{  
      height:45px;
      display:flex;
      white-space: nowrap; 
      color:#c1c1c1;    
      align-items:center;      
      span{
        padding:0 15px;
      }
    }
    .conBottom{
      height:45px;
      background:#1a1a1a;
      width:100vw;
      color:#c1c1c1;
      text-align:center;
      line-height:45px;
      position:relative;
    }  
  }
}
</style>