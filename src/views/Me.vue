<template>
  <div id="all">
    <topComp></topComp>
    <div class="center_con">
      <div class="personal_id">
        <img class="redact" src="../assets/img/write.png" />
        <div class="grade">
          <img src="../assets/img/head.png" />
          <div class="grade_con">
            <div class="ID">
              <span>ID：10000502 </span>
              <div><span></span>Copy</div>
            </div>
            <div class="VIP_progress">
              <span class="Vip">VIP1</span>
              <van-progress
                :percentage="0"
                stroke-width="5"
                color="black"
                show-pivot="false"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="me_con">
        <div class="me_con_top">
            <div class="con_left">
                 <p class="money">₹140.00</p>
                 <p class="wallet">Wallet balance</p>
                 <div><span>Withdraw money</span></div>   
            </div>
            <div class="halving_line"></div>
            <div class="con_right">
                 <p class="iconfont icon-jiaoyijilu"></p>
                 <p class="deal">Transaction records</p>
                 <div><span>Records</span></div>   
            </div>
        </div>
        <ul class="me_con_bottom">
          <li v-for="(item,index) in ulList" :kry="index">
             <img :src="item.url"/>
             <span>{{item.text}}</span>
          </li>

          <!-- <li>
            <img src="../assets/img/message.png" />
            <span>Message</span>
          </li>
          <li>
            <img src="../assets/img/telegram.png" />
            <span>Telegram</span>
          </li>
          <li>
            <img src="../assets/img/deposit.png" />
            <span>Deposit</span>
          </li> -->
        </ul>
      </div>
    </div>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import message from '../assets/img/message.png';
import telegram from '../assets/img/telegram.png';
import deposit from '../assets/img/deposit.png';

const ulList = ref([
    {
        url:message,
        text:'Message'
    },
    {
        url:telegram,
        text:'Telegram'
    },
    {
        url:deposit,
        text:'Deposit'
    },
])
</script>

<style lang="scss">
#all {
  .center_con {
    font-family: PingFang SC-Bold, PingFang SC;
    padding: 52px 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(241, 241, 241);
    .personal_id {
      width: 100%;
      height: 227px;
      background-color: rgb(247, 221, 91);
      padding: 14px 17px;
      .redact {
        width: 24px;
        height: 24px;
      }
      .grade {
        margin-top: 30px;
        width: 100%;
        height: 53px;
        display: flex;
        > img {
          width: 53px;
          height: 100%;
          margin-right: 10px;
        }
        .grade_con {
          width: 200px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .ID {
            display: flex;
            justify-content: space-between;
            > span {
              font-size: 18px;
              color: #303030;
              font-weight: bold;
            }
            > div {
              width: 60px;
              height: 30px;
              border: 1px solid transparent;
              border-radius: 5px;
              background: linear-gradient(
                to right,
                rgb(253, 234, 59),
                rgb(252, 195, 50)
              );
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              span {
                color: rgb(48, 48, 48);
              }
            }
          }
          .VIP_progress {
            display: flex;
            align-items: center;
            .Vip {
              font-weight: 700;
              color: #303030;
              font-size: 12px;
              padding-right: 10px;
              width: 35px;
            }
            .van-progress {
              flex: 1;
            }
          }
        }
      }
    }
    .me_con {
      z-index: 3;
      position: relative;
      top: -65px;
      margin: 0 auto;
      width: 345px;
      height: 243px;
      background-color: rgb(241, 241, 241);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .me_con_top {
        width: 100%;
        height: 123px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
      .halving_line {
           height: 100px;
           width:2px;
           background-color: rgb(233, 225, 171);
           margin: 0 10px;
          }
        .con_left{
          flex:1;
          height:100%;
          padding:10px 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:space-between;

          .money{
             font-size:24px;
             color: #303030;
             font-weight: 500;  
          }
          .wallet{
            font-size:14px;
            color:#303030;
            font-weight:bold;
          }
           >div{
            width:120px;
            height:30px;
            border:1px solid transparent;
            border-radius:20px;
            background:linear-gradient(to right,rgb(253, 234, 59),rgb(253, 191, 49));
            display:flex;
            justify-content:center;
            align-items:center;
            >span{
                font-size:12px;
                font-weight:bold;
                color:#303030;
            }
           }  
        }
        .con_right{
          flex:1;
          height:100%;
          padding:10px 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:space-between;
            .iconfont{
               font-size:42px;
            }
            .deal{
                font-weight:700;
                font-size:14px;
                color: #303030;
            }
            >div{
            width:120px;
            height:30px;
            border:1px solid transparent;
            border-radius:20px;
            background:rgb(241, 241, 241);
            display:flex;
            justify-content:center;
            align-items:center;
            >span{
                font-size:12px;
                font-weight:bold;
                color:#303030;
            }
            }
        }  
      }
      .me_con_bottom {
        width: 100%;
        height: 110px;
        background-color: rgb(241, 241, 241);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        > li {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          img {
            width: 35px;
            height: 35px;
          }
          span {
            font-weight: 700;
            color: #333044;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>