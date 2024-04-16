<template>
  <div id="share-home-box">
    <topComp></topComp>

    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
           <img :src="item.url"/>
        </van-swipe-item>
        <!-- <van-swipe-item>
          <img src="../assets/img/swipe-img1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swipe-img2.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swipe-img3.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swiper2.png" />
        </van-swipe-item> -->
      </van-swipe>
    </div>

    <div class="noticeBar">
      <van-notice-bar  scrollable>
        <div class="roll" v-for="(item,index) in rollList" :key="index">
            <img :src="item.url"/>
            <span>{{item.text}}</span>
        </div>
        <!-- <div class="roll">
            <img src="../assets/img/img23-0452ef16.png"/>
            <span>User 10***01 withdraw ₹ 1980</span>
        </div>
        <div class="roll">
            <img src=""/>
            <span>User 10***12 withdraw ₹ 1960</span>
        </div>
        -->
      </van-notice-bar>
    </div>

    <div class="amount">
      <div class="amount_box">
         <div class="amount_box_L">
             <b>₹0.00</b>
             <van-progress :percentage="0" stroke-width="5" pivot-color="#7232dd"/>
             <p>Number of Completed Tasks 0 / 0</p> 
         </div>
         <div class="amount_box_R">
            <img  src="../assets/img/money111.png"/>
         </div>
      </div>
    </div>

    <div class="task_title">💎 The daily update task</div>

    <div id="conter_box">
       <img class="background_img" src="../assets/img/background-picture.png"/>
       <div class="lurssen">       
            <b>LURSSENVIP</b>
            <p>The Best Money Earning Website In India</p>
       </div> 
       <div class="partners_title">Our Partners</div>
       <div class="introduce">More than 50 recognized, established international brands partners</div>

       <img class="partners_img" src="../assets/img/partner.png"/>
       <img class="map" src="../assets/img/map.png"/>
       <div id="map_box">
         <div class="map_title">
           <img src="../assets/img/logo-dice.png"/>
           <span>LURSSENVIP</span>
         </div>
         <ul class="privacy">
            <li v-for="(item,index) in privacyList" :key="index">
              {{item.text}}
            </li>
            <!-- <li>Policy and privacy</li>
            <li>About LURSSENVIP</li>
            <li>Terms and conditions</li>
            <li>Contact us</li>
            <li>FAQ</li> -->
         </ul>
         <ul class="map_icon">
            <li>
                <img src="../assets/img/f.png"/>              
            </li>
            <li>
               <img src="../assets/img/bird.png"/>
            </li>
            <li>
                <img src="../assets/img/camera111.png"/>
            </li>
         </ul>
         <div class="copyright">©LURSSENVIP. All rights reserved</div>
       </div> 
       
    </div>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useRoute} from 'vue-router'
import topComp from "../components/topComp.vue";
import bottomComp from '../components/bottomComp.vue';
import headImg from '../assets/img/img23-0452ef16.png';
import swipe1 from '../assets/img/swipe-img1.png';
import swipe2 from '../assets/img/swipe-img2.png';
import swipe3 from '../assets/img/swipe-img3.png';
import swipe4 from '../assets/img/swiper2.png';

const route = useRoute();

const rollList = ref([
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
    {
      url:headImg,
      text:'User 10***01 withdraw ₹ 1980',
    },
])

const swipeList =ref([
    {url:swipe1},
    {url:swipe2},
    {url:swipe3},
    {url:swipe4},
]) 

const privacyList=ref([
    {text:'Policy and privacy'},
    {text:'About LURSSENVIP'},
    {text:'Terms and conditions'},
    {text:'Contact us'},
    {text:'FAQ'},
])
</script>

<style lang="scss">
#share-home-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100vh;
  .swipe {
    width: 100%;
    padding: 103px 15px 0 15px;
    .my-swipe .van-swipe-item {
      > img {
        width: 100%;
        height: 127px;
        border-radius: 5px;
      }
    }
  }
  .noticeBar {
    width: 100%;
    padding: 10px 0;
    .van-notice-bar{
        padding:0;
        margin:0;
        width:100%;
        background-color:transparent;
      .van-notice-bar__content{
            //  width:100%;
             display:flex;
          .roll{
          width:230px;
          height:28px;
          border:1px solid transparent;
          border-radius:20px;
          background:#7c7c7c;
          display:flex;
          align-items:center; 
          margin-right:5px;
          >img{
            width:20px;
            height:20px;
            margin:0 5px;
          }
          >span{
            color:#fff;
            font-size:12px;
            font-weight:bold;
          }
        }
       }
      }
        
  }
  .amount{
    width:100%;
    padding:0 15px;
    .amount_box{
       width:100%;
       height:104px;
       background: linear-gradient(154deg, #ff7483 0%, #ff96a9 100%);
       border-radius:5px;
       display:flex;
       justify-content:space-between;
       padding:0px 15px;
       .amount_box_R{
        display:flex;
        align-items:center;
         >img{
            width:70px;
            height:50px;
         }
       }
       .amount_box_L{
        padding:20px 0px 10px 0px;
        >b{
            color:#fff;
            font-size:24px;
            font-weight:700;
        }
        >p{
           color:#fff;
           font-size:13.5px;
           font-weight:800; 
        }
        .van-progress{
            margin:10px 0;
        }
       }
    }
    
  }
  .task_title{
    width:100%;
    padding:15px;
    font-size:18px;
    font-weight:bold;
    color:#303030;
  }
  #conter_box{
    padding-bottom:50px;
    width:100%;
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
        .background_img{
           width:100%;
           height:129px;  
        }
        .lurssen{
            width:100%;
            z-index:1;
            position:absolute;
            top:23px;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            >b{
                font-size:24px;
                color:#fff;
                padding-bottom:5px;
            }
            >p{
                font-size:14px;
                color:#fff;
                font-weight:bold;
            }
        }
        .partners_title{
            padding:10px 0;
            font-size:14px;
            color:#303030;
            font-weight:bold;
        }
        .introduce{
           width:100%;
           padding:0 5px;
           font-size:12px;
           color:#999999;
           font-weight:bold;
        }
        .partners_img{
            margin:35px 0;
            width:100%;
        }
        .map{
            width:100%;
            height:281px;
        }
        #map_box{
            z-index:5;
            position:absolute;
            top:70%;
           .map_title{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-bottom:20px;
             >img{
                width:22px;height:22px;
            }
            >span{
                padding-left:5px;
                font-size:15px;
                color:#323233;
                font-weight:bold;
            }
           }
           .privacy{
            display:flex;
            width:280px;
            justify-content:center;
            flex-wrap: wrap;
             >li{
                text-decoration:underline;
                font-size:10px;
                color:#999999;
                font-weight:bold;
                margin-right:15px;
             }
           }
           .map_icon{
            width:100%;
            display:flex;
            justify-content:center;
            margin:20px 0;
              >li{
                margin:0 15px;
                width:24px;height:24px;
                border-radius:50%;
                background-color:#f1f1f1;
                display:flex;
                align-items:center;
                justify-content:center;
                >img{
                    width:14px;height:14px;
                }
              }
           } 
           .copyright{
            font-size:10px;
            color:#999999;
            font-weight:bold;
           }
        }

  }
}
</style>