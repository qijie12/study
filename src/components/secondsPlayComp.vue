<template>
  <div id="share-secondsPlayComp-box">
       <ul class="card">
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.url" />
          <div class="card-con">
            <img :src="item.src" />
            <div class="card-conWord">
              <a class="conWord-l" href="">
                <p>{{ item.text }}</p>
                <span>{{ item.synopsis }}</span>
              </a>
              <div class="conWord-r">
                <a href="">{{ item.into }}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 

import hero from "../assets/img/11.jpg";
import KPL from "../assets/img/pv_10025713403_em_601.webp";
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";

 const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

//  const cardList = ref([
//   {
//     url: hero,
//     src: love,
//     text: "英雄联盟",
//     synopsis: "战斗回合制策略游戏",
//     into: "秒玩",
//   },
//   {
//     url: hero,
//     src: love,
//     text: "火影忍者",
//     synopsis: "忍者们，向火影世界出发吧！",
//     into: "秒玩",
//   },
//   {
//     url: hero,
//     src: love,
//     text: "英雄联盟电竞经理",
//     synopsis: "英雄联盟赛事正版手游",
//     into: "秒玩",
//   },
//   {
//     url: hero,
//     src: love,
//     text: "英雄杀",
//     synopsis: "战斗回合制策略游戏",
//     into: "秒玩",
//   },
//   {
//     url: hero,
//     src: love,
//     text: "白夜极光",
//     synopsis: "超美学策略连线RPG",
//     into: "秒玩",
//   },
// ]);


</script>

<style lang="scss">
  #share-secondsPlayComp-box{
    .card {
      width: 100%;
      height: 250px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
      li {
        width: 100%;
        height: 250px;
        background: rgb(33, 34, 35);
        border-radius: 10px;
        overflow: hidden;
        > img {
          height: 170px;
          width: 100%;
        }
        .card-con {
          padding: 5px 10px;
          height: 62px;
          width: 100%;
          display: flex;
          > img {
            height: 100%;
            width: 36px;
            margin-right: 10px;
          }
          .card-conWord {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .conWord-l {
              p {
                color: #ffffff;
                font-size: 16px;
              }
              span {
                color: #4d4c4c;
                font-size: 12px;
              }
            }
            .conWord-r {
              height: 32px;
              width: 68px;
              border: 1px solid rgb(93, 93, 93);
              border-radius: 20px;
              background: rgba(255, 220, 20, 0.1);
              text-align: center;
              line-height: 30px;
              a {
                color: #ffdc14;
              }
            }
            .conWord-r:hover,
            a:hover {
              background-color: #dbb75e;
              color: #4d4c4c;
            }
          }
        }
      }
    }
  }
</style>