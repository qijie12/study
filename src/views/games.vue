<template>
  <div id="share-games-box">
    <topComp></topComp>

    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :loop="false"
      :show-indicators="false"
    >
      <van-swipe-item>
        <img src="../assets/img/swipe-img1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/swipe-img2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/swipe-img3.png" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      left-icon="volume-o color: #fdc1c1"
      text="⭐️⭐️To visit our official website, be sure to use the link below,https:lkgame.xyz// Please remember! Make sure not provide personal data and personal transactions in any form and for any reason to other parties on behalf of LURSSENVIP. Our side does not make private chats or calls to all members. Please inform all Referrals/other Members about this to avoid fraud. Thank you for your attention and cooperation."
    >
    <template #right-icon>
      <span class="iconfont icon-tongzhixiaoxi" style="padding-left:5px;color:#e46161"></span>
    </template>
    </van-notice-bar>

    <div class="func">
       <div class="func_L">
         <div class="grade">
             <img src="../assets/img/vip2222.png"/>
             <div class="num">VIP2</div>
             <div class="hlm">hlm</div>
         </div>
         <div class="ING-box">
          <span style="font-size:13px;color:#424242;    font-weight: 500;">ING</span>
          <i style="font-size:15px;color:#ff5454;font-weight:bold;padding-left:4px;">90</i>
          <span style="font-size:12px;color:#42424299;font-weight:bold;">.00</span>
         </div>
       </div>
       <ul class="func_R">
          <li>
            <img src="../assets/img/agent_img.png"/>
            <span>AGENT</span>
          </li>
          <li>
            <img src="../assets/img/arch_img.png"/>
            <span>SRCH</span></li>   
       </ul>
    </div>

    <div class="gamesCon-box">
        <ul class="gamsList">
          <li :class="{active: gameIndex === index}" v-for="(item,index) in gameListList" :key="index" @click="gameFunc(index)">
            <img :src="gameIndex === index ? item.src : item.url"/>
            <b>{{item.text}}</b>
          </li>

          <!-- <li>
            <img src="../assets/img/hot-img1.png"/>
            <b>Hot</b>
          </li>
          <li>
            <img src="../assets/img/lottery-img1.png"/>
            <b>Lottery</b>
          </li>
          <li>
            <img src="../assets/img/contest-img1.png"/>
            <b>Contest</b>
          </li>
          <li>
            <img src="../assets/img/fishing-img1.png"/>
            <b>Fishing</b>
          </li>
          <li>
            <img src="../assets/img/slot-img1.png"/>
            <b>Slot</b>
          </li>
          <li>
            <img src="../assets/img/live-img1.png"/>
            <b>Live</b>
          </li> -->
        </ul>
        <!-- <ul class="gamesCon">
          <li v-for="(item,index) in gamesConList" :key="index">
             <img :src="item.url"/>
             <span>{{item.text}}</span>
             <div class="hot_tag">
               <img :src="item.src" />
             </div>
          </li>         
        </ul> -->
        <!-- <li>
            <img src="../assets/img/game_picture2.jpg"/>
            <span>Win - Diamond</span>
            <div class="hot_tag" >
              <img src="../assets/img/hot_game-111.png" />
            </div>
          </li> --> 

        <ul class="img_container">
           <li>
            <img src="../assets/img/play-img1.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img2.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img3.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img4.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img5.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img6.png"/>
           </li>
           <li>
            <img src="../assets/img/play-img7.png"/>
           </li>
        </ul>
    </div>
  <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import topComp from "../components/topComp.vue";
import bottomComp from '../components/bottomComp.vue';
import game_img1 from '../assets/img/game_picture2.jpg';
import game_img3 from '../assets/img/game_picture4.png';
import game_img4 from '../assets/img/game_picture5.jpg';
import game_img5 from '../assets/img/game_picture6.jpg';
import game_img6 from '../assets/img/game_picture7.jpg';
import game_img7 from '../assets/img/game_picture8.png';
import tag from '../assets/img/hot_game-111.png';
import hot1 from '../assets/img/hot-img1.png';
import hot from '../assets/img/hot-img.png';
import lottery1 from '../assets/img/lottery-img1.png';
import lottery from '../assets/img/lottery-img.png';
import contest1 from '../assets/img/contest-img1.png';
import contest from '../assets/img/contest-img.png';
import fishing1 from '../assets/img/fishing-img1.png';
import fishing from '../assets/img/fishing-img.png';
import slot1 from '../assets/img/slot-img1.png';
import slot from '../assets/img/slot-img.png';
import live1 from '../assets/img/live-img1.png';
import live from '../assets/img/live-img.png';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
const gameIndex = ref(0)

const gameListList =ref([
  {
    url:hot1,
    src:hot,
    text:'Hot',
  },
  {
    url:lottery1,
    src:lottery,
    text:'Lottery',
  },
  {
    url:contest1,
    src:contest,
    text:'Contest',
  },
  {
    url:fishing1,
    src:fishing,
    text:'Fishing',
  },
  {
    url:slot1,
    src:slot,
    text:'Slot',
  },
  {
    url:live1,
    src:live,
    text:'Live',
  },
])

const gamesConList =ref([
  {
    url:game_img1,
    src:tag,
    text:'Win - Diamond',
  },
  {
    url:game_img6,
    src:tag,
    text:'Win - Platinum',
  },
  {
    url:game_img3,
    src:tag,
    text:'Win - Gold',
  },
  {
    url:game_img4,
    src:tag,
    text:'Win - Silver ',
  },
  {
    url:game_img5,
    src:tag,
    text:'Space Max',
  },
  {
    url:game_img6,
    src:tag,
    text:'Crash',
  },
  {
    url:game_img7,
    src:tag,
    text:'Mine',
  },
  {
    url:game_img6,
    src:tag,
    text:'Lucky Beer',
  },
  {
    url:game_img5,
    src:tag,
    text:'Hilo',
  },
  {
    url:game_img4,
    src:tag,
    text:'Bingo',
  },
  {
    url:game_img3,
    src:tag,
    text:'Wheel',
  },
  {
    url:game_img4,
    src:tag,
    text:'Niu Niu',
  },

])

const gameFunc = (index) => {
  gameIndex.value = index
}


</script>

<style lang="scss">
#share-games-box {
  width: 100%;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background:rgb(246, 245, 243);
  .my-swipe {
    width: 100%;
    margin-top: 98px;
    text-align: center;
    // padding:0 20px;
    .van-swipe-item {
      padding: 0 10px 0 10px;
      > img {
        width: 100%;
        height: 115px;
        border-radius: 8px;
        border-color: #e5e7eb;
      }
    }
  }
  .van-notice-bar{
    margin-top:5px;
    background:rgb(246, 245, 243);
    .van-notice-bar__content{
      color:#424242;
    }
    .van-badge__wrapper{
      color:#fdc1c1;
    }
  }
  .func{
    z-index:5;
    width:100%;
    height:67px;
    border-radius:12px 12px 0 0;
    background:linear-gradient(180deg, #fff, #ffcdcd 100%);
    padding:0 10px;
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;
    .func_L{
      padding:5px;
      position:relative;
      display:flex;
      justify-content:space-between;
      flex-direction:column;      
      .grade{
        display:flex;
        align-items:center;
        >img{
          width:73px;
          height:25px;
        }
        .num{
          position:absolute;
          z-index:1;
          color:#fff;
          font-size:13px;
          top:18%;
          left:30%;
        }
        .hlm{
          padding:5px 0 0 10px;
          font-size:14px;
          color:#424242;
        }
      }
      .ING-box{
        width:88px;
        height:28px;
        border-radius:20px;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
      }
    }
    .func_R{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      >li{
        padding:10px 0;
        width:50px;
        font-size:12px;
        text-align:center;     
        >img{
          width:24px;height:24px;
        }
        >span{
          color:#424242;
        }
      }
    }
  }
  .gamesCon-box{
    display:flex;   
    padding-right:8px;
     background:rgb(246, 245, 243);
    .gamsList{
      width:70px;
      height:360px;
      border-radius:0 20px 20px 0;
      background-color:#ffffff;
      display:grid;
      grid-template-rows:repeat(6,1fr);
      margin-right:8px;
      >li{
        width:100%;
        height:60px;
        font-size:12px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        position:relative;
        &:first-child {
          border-radius: 0 20px 0 0;
        }
        &:last-child {
          border-radius: 0 0 20px 0;
        }
        
        >img{
          width:32px;
          height:32px;
        }
        >b{
          color:#ff5454;
          // position:absolute;
          // top:68%;
          margin-top: -7px;
          text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;
          
        }
        &.active {
          background: #ff5454;
          >b {
            color: #fff;
            text-shadow: -1px 1px 0 #ff5454, 1px 1px 0 #ff5454, 1px -1px 0 #ff5454, -1px -1px 0 #ff5454;
          }
        }
      }
    }
    .gamesCon{ 
      padding-bottom:120px;
      flex:1;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      grid-gap:0 7px;
      >li{
        border-radius:10px 10px 0 0;
        overflow:hidden;
        width:100%;
        font-size:12px;
        text-align:center;
        white-space: pre-wrap;
        position:relative;
        >img{
           width:100%;
           height:90px;
           border-radius:10px;
        }
        >span{
          height:30px;
          display:block;
          padding:0 5px;
          color:#8b8b8a;
          overflow:hidden;  
        }
        .hot_tag{
          width:40px;
          height:20px;
          z-index:2;
          position:absolute;
          top:0;
          left:0;
          >img{
            height:20px;
            width:100%;
          }
        }
      }
    }
    .img_container{
      
      height:800px;
      overflow-y:scroll;
      margin-bottom:120px;
      flex:1;
      display:grid;
      grid-template-rows:repeat(9,1fr);
      grid-gap:7px;
      li{
        width:100%;
        height:94px;
        >img{
          width:100%;
          height:100%;
          border-radius:10px;
        }
      }
    }
  }
}
</style>