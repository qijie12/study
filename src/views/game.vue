<template>
  <div id="home">
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>
    <img src="../assets/img/pv_10025713403_em_601.webp" />

    <div class="content">
      <h1 style="margin-bottom: 20px">热门游戏</h1>
      <smallListComp></smallListComp>
      <h1 style="margin-bottom: 20px">热播节目</h1>
      <hotBroadcastComp :list="hotpictureList"></hotBroadcastComp>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import topComp from '../components/topComp.vue';
import leftMenuComp from '../components/leftMenuComp.vue';
import smallListComp from '../components/smallListComp.vue';
import hotBroadcastComp from '../components/hotBroadcastComp.vue';
import easyLife from '../assets/img/3.avif';

const hotpictureList = ref([
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
