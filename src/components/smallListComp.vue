<template>
  <div class="share-samllListComp-box">
    <ul>
      <li v-for="(item, index) in gameList" :key="index">
        <img :src="item.url" />
        <p>{{ item.text }}</p>
        <span>{{ item.synopsis }}</span>
        <!-- <img src="../assets/img/1f68341597825237110.avif" />
        <p>KPL春季赛 DRG vs WB</p>
        <span> WB击败DRG勇夺关键积分 </span> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import KPL from '../assets/img/pv_10025713403_em_601.webp';

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
    url: KPL,
    text: 'KPL春季赛 DRG vs WB',
    synopsis: 'WB击败DRG勇夺关键积分',
  },
  {
    url: KPL,
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
</script>

<style lang="scss">
.share-samllListComp-box {
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    width: 100%;
    // height:240px;
    li {
      height: 235px;
      //   width: 100%;
      img {
        height: 145px;
        width: 100%;
        // width: 200px;
      }
      p {
        color: #ffffff;
        font-size: 16px;
      }
      span {
        color: rgb(74, 73, 73);
        font-size: 14px;
      }
    }
  }
}
</style>
