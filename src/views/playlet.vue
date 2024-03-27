<template>
  <div id="home">
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

    <div id="homePage">
      <a href class="logo"><img src="../assets/img/tx.png" /></a>
      <div class="homePage-Con">
        <div class="front">
          <a
            name="1"
            href="#"
            v-for="(item, index) in homePageList"
            :key="index"
            >{{ item.name }}<img :src="item.url"
          /></a>
        </div>
        <hr />
        <div class="agreement">
          <a href="" v-for="(item, index) in agreementList" :key="index">{{
            item.text
          }}</a>
        </div>
        <hr />
        <div class="licence">
          <a href="">粤网文[2023]2882-203号</a>
          <a href="">网络视听许可证1904073号</a>
          <a href="">粤公网安备<br />44030002000001号</a>
          <p class="AT">
            <a href="">关于腾讯</a><i>|</i><a href="">About Tencent</a>
          </p>
          <p><a href="">服务条款</a><i>|</i><a href="">广告设置</a> <i>|</i></p>
          <p><a href="">腾讯招聘 客服中心</a><i>|</i></p>
          <a href="">网站导航</a>
          <a href="">Copyright © 1998 - 2024 Tencent. All Rights Reserved.</a>
          <a href>腾讯公司 版权所有</a>
          <img src="../assets/img/1f68341597825237110.avif" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import {ref} from "vue";
import VIP from '../assets/img/VIP.png';
import game from '../assets/img/game.png';
import time from '../assets/img/time.png';
import screenRecording from '../assets/img/screenRecording.png';
import download from '../assets/img/download.png';
import personage from '../assets/img/personage.png';
import collect from '../assets/img/收藏.png';
import odeToJoy from '../assets/img/1.avif';
import playmate from '../assets/img/2.avif';
import easyLife from '../assets/img/3.avif';
import love from '../assets/img/4.avif';
import blossoms from '../assets/img/5.avif';

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

const homePageList = ref([
  {
    name: '首页',
    url: collect,
  },
  {
    name: '中视频',
    url: collect,
  },
  {
    name: '电视剧',
    url: collect,
  },
  {
    name: '电影',
    url: collect,
  },
  {
    name: '综艺',
    url: collect,
  },
  {
    name: '动漫',
    url: collect,
  },
  {
    name: '少儿',
    url: collect,
  },
  {
    name: '体育',
    url: collect,
  },
  {
    name: '纪录片',
    url: collect,
  },
  {
    name: '短剧',
    url: collect,
  },
  {
    name: 'NBA',
    url: collect,
  },
  {
    name: 'VIP会员',
    url: collect,
  },
  {
    name: '游戏中心',
    url: collect,
  },
  {
    name: '传奇游戏库',
    url: collect,
  },
  {
    name: '科技',
    url: collect,
  },
  {
    name: '音乐',
    url: collect,
  },
  {
    name: 'F1',
    url: collect,
  },
  {
    name: 'WWE',
    url: collect,
  },
  {
    name: '知识',
    url: collect,
  },
  {
    name: '学堂',
    url: collect,
  },
  {
    name: '艺术',
    url: collect,
  },
  {
    name: '财经',
    url: collect,
  },
  {
    name: '生活',
    url: collect,
  },
  {
    name: '时尚',
    url: collect,
  },
  {
    name: '健康',
    url: collect,
  },
  {
    name: '育儿',
    url: collect,
  },
  {
    name: '汽车',
    url: collect,
  },
  {
    name: '棋牌游戏库',
    url: collect,
  },
]);

</script>

<style lang="scss">

</style>