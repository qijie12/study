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
     <!-- <van-popover
        v-model:show="showPopover"
        :actions="actions"
        @select="onSelect"
      > -->
        <!-- <template #reference>
          <van-button type="primary">浅色风格</van-button>
        </template>
      </van-popover>

      <van-button type="primary">主要按钮</van-button>

      <van-progress :percentage="50" /> -->
    </div>

    <div class="danmu">
       <van-notice-bar  scrollable>
        <div  class="danmuOne" v-for="(item,index) in danmuList" :key="index">
          <img :src="item.url"/>
          <b>{{item.text}}</b>
        </div>

        <!-- <div class="danmuOne" v-for="item,index" :key="item">
          <img src="../assets/img/img23-0452ef16.png">
          <b>User 10***77 withdraw ₹ 1420</b>
        </div> -->
       </van-notice-bar>      
    </div>

    <div id="center">
        <div class="picture">
          <img src="../assets/img/money50.png"/>
          <div><span>CLAIM</span></div>
        </div>

        <div class="recharge">
           <div class="rechargeTop">
            <b>Wallet balance</b>
            <span>Withdraw</span>
           </div>        
           <div class="rechargeBottom">
            <div>
              <img src="../assets/img/icon-coin.png"/>
              <span>₹0,00</span>
            </div>
            <span class="iconfont icon-youjiantou"></span>
           </div>
        </div>

        <div class="milestone">
            <div class="milestoneTop">
                <img src="../assets/img/icon-gift.png"/>
                <b>Withdrawal milestone</b> 
            </div>
            <ul>
              <li>
                <img src="../assets/img/task1-.png"/>
                <div>
                  <b>Basic tasks</b>
                  <span>Complete all tasks at this level.</span>
                  <img src="../assets/img/Snipaste_2024-04-01_14-39-05.png"/>
                </div>
              </li>

              <li>
                <img src="../assets/img/task2.png"/>
                <div>
                  <b style="color:#c67a1e">Double bonus tasks</b>
                  <span>Complete the game time tasks and withdraw.</span>
                  <img src="../assets/img/Snipaste_2024-04-01_14-38-31.png"/>
                </div>
              </li>

              <li>
                <img src="../assets/img/task3.png"/>
                <div>
                  <b style="color:#ea5155">Unlimited bonus tasks</b>
                  <span>Complete unlimited doubling tasks to unlock unlimited rewards.</span>
                  <img src="../assets/img/Snipaste_2024-04-01_14-39-12.png"/>
                </div>
              </li>
            </ul>
        </div>

        <div class="gift">
          <b>💎 Money-making tasks</b>
          <img class="light" src="../assets/img/tasklight.png"/>
          <img class="taskMoney" src="../assets/img/taskMoney.png"/>
          <img class="giftPicture" src="../assets/img/upload_live_carrom-clash-logo_17015433035476.png"/>  
          <p>Try the game for 2 minutes and give feedback</p>
          <div>
            <span>START EARNING</span>
          </div>
        </div>
    </div>
    
    <div id="Disney">
      <img class="backgroung" src="../assets/img/background-picture.png"/>
      <div class="title">
        <p>Disney Go</p>
        <b>The Best Money Earning Website In India</b>
      </div>
      <div class="partners">
          <p>Our Partners</p>
          <b>More than 50 recognized, established international brands partners</b>
      </div>
      <img class="cooperativePartner" src="../assets/img/partner.png"/>

      <div class="privacyAgreement">
          <img src="../assets/img/map.png"/>

          <div class="privacyAgreement_con">
               <img src="../assets/img/logo-14f3e0fc.png"/>

               <ul class="agreement">
                <li>Policy and privacy</li>
                <li>About Disney Go</li>
                <li>Terms and conditions</li>
                <li>Contact us</li>
                <li>FAQ</li>
               </ul>

               <ul class="icon">
                 <li>
                  <img src="../assets/img/f.png"/>
                 </li>
                 <li>
                  <img src="../assets/img/bird.png"/>
                 </li>
                 <li>
                  <img src="../assets/img/camera111.png"/></li> 
               </ul>
               <p>©Disney. All rights reserved</p>
          </div>
      </div>
    </div>
      

    <van-tabbar v-model="active">
      <van-tabbar-item >
        <img src="../assets/img/home.png"/>
        <b>Home</b>
      </van-tabbar-item>
      <van-tabbar-item >
        <img src="../assets/img/eam money.png"/>
        <b>Eam moeny</b>
      </van-tabbar-item>
      <van-tabbar-item >
        <img src="../assets/img/game.png"/>
        <b>Eam moeny</b>
      </van-tabbar-item>
      <van-tabbar-item >
        <img src="../assets/img/me.png"/>
        <b>Eam moeny</b>
     </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import headPortrait from '../assets/img/img23-0452ef16.png';


const showPopover = ref(false);

const active = ref(0);

// 通过 actions 属性来定义菜单选项
const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
const onSelect = (action) => showToast(action.text);

const danmuList =ref([
  {
    url:headPortrait,
    text:'User 10***88 withdraw ₹ 1020',
  },
  {
    url:headPortrait,
    text:'User 10***33 withdraw ₹ 1420',
  },
  {
    url:headPortrait,
    text:'User 10***17 withdraw ₹ 1820',
  },
  {
    url:headPortrait,
    text:'User 10***42 withdraw ₹ 1420',
  },
  {
    url:headPortrait,
    text:'User 10***09 withdraw ₹ 1420',
  },
  {
    url:headPortrait,
    text:'User 10***27 withdraw ₹ 1680',
  },
  {
    url:headPortrait,
    text:'User 10***77 withdraw ₹ 1420',
  },
  {
    url:headPortrait,
    text:'User 10***99 withdraw ₹ 1120',
  },
  {
    url:headPortrait,
    text:'User 10***65 withdraw ₹ 1420',
  },
  {
    url:headPortrait,
    text:'User 10***48 withdraw ₹ 1470',
  },
])


</script>

<style lang="scss">
#all {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-height: none;
  overflow-y:scroll;
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
      border-radius:5px;
      overflow:hidden;
      .van-swipe-item {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .danmu{
    width:100%;
    height:60px;
    padding:10px 0;
    .van-notice-bar {
      background-color:#fff;
      .van-notice-bar__content {
        display: flex;
      }
    }
    .danmuOne{
      border:1px solid transparent;
      border-radius:20px;
      height:30px;
      width:256px;  
      background-color:#7c7c7c;
      color:#fff;
      display:flex;
      align-items:center;
      flex-direction:columns;
      justify-content:center;
      margin-right:10px;
     img{
      width:20px;height:20px;
      margin:0 5px;
     }
    }
  }

  #center{
    width:100%;
    padding:0 15px;
    background-color:#f2f2f3;
    padding-bottom:20px;
     .picture{
      position:relative;
      margin-bottom:15px;
      img {
      width:100%;
      height:90px;
     }
     div{
      width:90px;
      height:33px;
      border:1px solid transparent;
      border-radius:20px;
      background:linear-gradient(to bottom, #ffa36a 0%, #ff6634 100%);
      text-align:center;
      line-height:31px;
      position:absolute;
      bottom:10px;
      right:10px;
      color:#fff;
     }
     }

     .recharge{
      width:100%;
      height:100px;
      border-radius:5px;
      border:1px solid rgb(184, 183, 183);
      margin-bottom:15px;
      background-color:#fff;
      .rechargeTop{
        width:100%;
        height:27px;
        display:flex;
        justify-content:space-between;
        font-size:12px;
        padding:0 10px;
        border-bottom:1px solid #f1f1f1;
        line-height:27px;
        span{
          color:#ffcd17;
          text-decoration:underline;
          font-weight: bold;
        }
      }
      .rechargeBottom{
       width:100%;
       height:74px;
       display:flex;
       align-items:center;
       justify-content:space-between;
       padding:0 10px;
       div{
         display:flex;
         align-items:center;
        img{
        height:50px;width:50px;
        margin-right:10px;
       }
       span{
        font-size:24px;
       }
       }
       .icon-youjiantou {
        color:#7c7c7c;
        font-size:24px;
       }
      }
     }
     .milestone{
      width:100%;
      height:335px;
      background-color:#fff;
      padding:10px;
       .milestoneTop{
        width:100%;
        height:28px;
        display:flex;
        align-items:center;
        margin-bottom:15px;
        img{
          height:24px;
          width:24px;
          margin-right:5px;          
        }
        b{
          font-size:18px;
        }
       }
       ul{
        width:100%;
        display:grid;
        grid-template-rows:repeat(3,1fr);
        grid-gap:10px;
        li{
          width:100%;
          height:80px;
          display:flex;
          position:relative;      
          >img {
            height:100%;
            width:100%;
          }
          div{
            position:absolute;
            z-index:1;
            top:20px;
            left:85px;
            
            b{
              display:block;
              height:20px;
              color:#5997cb;
              margin-bottom:8px;
              font-size:14px;
            }
            span{
              color:#bab3ab;
              font-size:12px;
              display:block;
              width:240px;
              font-weight:bold;
            }
            >img{
              position:absolute;
              top: -19px;
              left:201px;
            }
          }
        }
       }
     }
     .gift{
      width:100%;
      height:390px;
      background: linear-gradient(to bottom, #ffa36a 40%,#e56f2c , #d73925 60%);
      position:relative;
      b{
        display:block;
        padding:10px;
        font-size:20px;
      }
      .light{
        height:249px;width:249px;
        position:absolute;
        left:50%;
        top:35%;
        transform:translate(-50%,-50%);
      }
      .taskMoney{
        width:100%;
        position:absolute;
        bottom:120px;
      }
      .giftPicture{
        width:85px;
        height:85px;
        position:absolute;
        z-index:2;
        left:50%;
        top:35%;
        transform:translate(-50%,-50%);
      }
      p{
        padding:240px 10px 20px 10px;
        font-size:14px;
        color:#fff;
        font-weight:bold;
      }
      div{
        margin:auto;
        width:325px;
        height:53px;;
        border:1px solid transparent;
        border-radius:5px;
        background:linear-gradient(to right,#fde73b,#fbbf31);
        font-size:20px;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
          font-weight:bold;
          color:#303030;
        }
      }
     }
  }
  #Disney{
    width:100%;
    height:850px;
    position:relative;
    .backgroung{
      width:100%;
      margin-bottom:15px;
    }
    .title{
      position:absolute;
      z-index:2;
      top:30px;
      left:50px;
      display:flex;
      align-items:center;
      // justify-content:center;
      flex-direction:column;
      >p{
        font-size:24px;
        color:#ffffff;
        font-weight:bold;
        padding-bottom:5px;
      }
      >b{color:#ffffff;
        font-size:14px;
      }
    }
    .partners{
      width:100%;
      text-align:center;
      p{
        font-weight:bold;
        font-size:14px;
        color:#303030;
        padding-bottom:5px;
      }
      b{
        color:#999999;
        font-size:12px;
      }
    }
    .cooperativePartner{
      width:100%;
      margin:30px 0;
    }
    .privacyAgreement{
      width:100%;
      position:relative;
       >img{
        width:100%;
        height:280px;
       }
       .privacyAgreement_con{
        // display:flex;
        width:100%;
        padding:0 30px;
        position:absolute;
        z-index:2;
        top:40%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align:center;      
        img{
          width:87px;
          height:20px;
          margin-bottom:20px;
        }
   
        .agreement{
          width:100%;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          margin-bottom:20px;
          li{
            font-size:10px;
            width:100px;
            height:25px;
            text-decoration:underline;
            color:#999999; 
          }
        }

        .icon{
        
          margin:auto;
          width:200px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          li{
            height:24px;width:24px;
            border:1px solid transparent;
            border-radius:50%;
            background-color:#f1f1f1;
            position:relative;
            img{
               width:15px;
               height:15px; 
               position:absolute;
               left:3px; 
               top:3px;         
            }
          }
        }
        p{
          color:#a69999;
          font-size:10px;
          font-weight:bold;
          margin-top:20px;
        }
       }
    }
  }
  .van-tabbar{
    position:fixed;
    border-top:1px solid rgb(88, 87, 87);
    position:relative;
    img{
      height:21px;width:21px;
      position:absolute;
      top:8px;
    }
    b{
     
      position:absolute;
      left:42px;
      top:34px;
      color:#dedede
    }
  }
}
</style>