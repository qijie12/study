<template>
   <div id="share-bottomComp-box">
      <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in activeList"
        :key="index"
        @click="jump(item)"
        :class="{ active: route.fullPath.indexOf(item.path) !== -1 }"
      >
        <template #icon>
          <img
            v-if="route.fullPath.indexOf(item.path) !== -1"
            :src="item.src"
          />
          <img v-else :src="item.url" />
        </template>
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>

        <!-- <van-tabbar v-model="active">
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/home1.png" />
        </template>
        Home
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/eam money.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/game.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/me.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
    </van-tabbar> -->
  
   </div>
</template>

<script setup>
  import {ref} from 'vue';
  import { useRoute,useRouter } from "vue-router";

import homePage1 from "../assets/img/home1.png";
import eam from "../assets/img/eam_money.png";
import game from "../assets/img/game.png";
import me from "../assets/img/me.png";
import homePage from "../assets/img/home.png";
import headPortrait from '../assets/img/img23-0452ef16.png';
  const route = useRoute()

  const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const activeList = ref([
  {
    url: homePage1,
    text: "Home",
    src: homePage,
    path: "/home",
  },
  {
    url: eam,
    text: "Eam moeny",
  },
  {
    url: game,
    text: "Games ",
  },
  {
    url: me,
    text: "Me",
  },
]);


</script>

<style lang="scss">
  #share-bottomComp-box{
    .van-tabbar{
    bottom: 0;
    left: 0;  
    position: fixed;
    border-top: 1px solid rgb(88, 87, 87);
    z-index:5;
    img {
      height: 21px;
      width: 21px;
    }
    .van-tabbar-item {
      font-size: 14px;
      font-weight: bold;
      color: #dddddd;
      &.active {
        color: #ffcd17;
      }
    }
  }
  }
</style>