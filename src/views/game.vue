<template>
  <div id="home">
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>
    <img src="../assets/img/pv_10025713403_em_601.webp" />

    <div class="content">
      <h1 style="margin-bottom: 20px">热门游戏</h1>
      <smallListComp :list="webgame"></smallListComp>
      <h1 style="margin-bottom: 20px">热播节目</h1>
      <hotBroadcastComp :list="hotpictureList"></hotBroadcastComp>
      <h1 style="margin-bottom: 20px">2024LPL春季赛</h1>
      <smallListComp :list="gameList"></smallListComp>
      <h1 style="margin-bottom: 20px">热门手游 一键秒玩</h1>
      <hotBroadcastComp :list="hotpictureList"></hotBroadcastComp>
      <h1 style="margin-bottom: 20px">2024LPL春季赛</h1>
      <smallListComp :list="gameList"></smallListComp>
      <h1 style="margin-bottom: 20px">英雄联盟全球总决赛</h1>
      <smallListComp :list="hotpictureList"></smallListComp>
      <h1 style="margin-bottom: 20px">2023PEL夏季赛</h1>
      <smallListComp :list="gameList"></smallListComp>
      <h1 style="margin-bottom: 20px">王者世界冠军杯</h1>
      <smallListComp :list="winList"></smallListComp>
      <h1 style="margin-bottom: 20px">页游精品</h1>
      <smallListComp :list="webgame"></smallListComp>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import topComp from '../components/topComp.vue';
import leftMenuComp from '../components/leftMenuComp.vue';
import smallListComp from '../components/smallListComp.vue';
import hotBroadcastComp from '../components/hotBroadcastComp.vue';

import hero from '../assets/img/11.jpg';
import KPL from '../assets/img/pv_10025713403_em_601.webp';
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";

const hotpictureList = ref([
  {
    url:odeToJoy,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url:cartoonCharacter,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: KPL,
    name: '小日子',
    syopnsis: '陈晓童瑶首搭守护小日子',
  },
  
]);

const gameList = ref([
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' JDG让一追二翻盘LNG ',
  },
  {
    url: odeToJoy,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: odeToJoy,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' EDG不敌NIP苦吞七连败 ',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: odeToJoy,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' 神Bin天降BLG险胜JDG ',
  },
]);

const winList = ref([
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' JDG让一追二翻盘LNG ',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url:KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' EDG不敌NIP苦吞七连败 ',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' 神Bin天降BLG险胜JDG ',
  },
]);

const webgame = ref([
  {
    url:  hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url:  hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' JDG让一追二翻盘LNG ',
  },
  {
    url:  hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' EDG不敌NIP苦吞七连败 ',
  },
  {
    url:  hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url:  hero,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: ' 神Bin天降BLG险胜JDG ',
  },
]);

</script>

<style lang="scss">
#home {
  > img {
    height: 600px;
    width: 100%;
    
  }
  .content {
    padding: 0 40px 0 220px;
  }
}
</style>
