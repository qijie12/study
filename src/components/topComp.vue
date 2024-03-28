<template>
  <div class="share-topComp-box">
     
    <div class="top">
      <span></span>
      <span class="input-box">
        <input type="" class="import" />
        <input type="" class="search" />
      </span>
      <div>
        <a href v-for="(item, index) in topList" :key="index"
          ><img :src="item.url"
        /></a>
      </div>
    </div>
    
  </div>
</template>

<script setup>
 import {ref} from "vue";
 import { useRouter } from 'vue-router';

import VIP from '../assets/img/VIP.png';
import game from '../assets/img/game.png';
import time from '../assets/img/time.png';
import screenRecording from '../assets/img/screenRecording.png';
import download from '../assets/img/download.png';
import personage from '../assets/img/personage.png';


  const jump = () => {
  router.push('/video');
};



const topList = ref([
  {
    url: VIP,
  },
  {
    url: game,
  },
  {
    url: time,
  },
  {
    url: screenRecording,
  },
  {
    url: download,
  },
  {
    url: personage,
  },
]);

</script>

<style lang="scss">
  .share-topComp-box{
   .top {
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: rgba(67, 66, 66, 0.5);
    height: 84px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    .input-box {
      height: 48px;
      width: 480px;
      border: 1px solid transparent;
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      position: relative;
      transform: translate(50%, 0);
      .import {
        height: 48px;
        width: 420px;
        border-right: none;
        padding-left: 20px;
      }
      .search {
        height: 48px;
        width: 60px;
        border-left: none;
        background-image: url('../assets/img/search.png');
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    a {
      padding: 0 15px;
    }
  }

  }
</style>