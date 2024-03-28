<template>
  <div id="home">
    <topComp></topComp>

    <leftMenuComp></leftMenuComp>

    <div id="cartoon">
      <img src="../assets/img/10.jpg" />
      <div id="content">
        <div id="vault">
          <a href="" v-for="(item, index) in vaultList" :key="index">
            {{ item.text }}</a
          >
        </div>

        <div id="hotbroadcast">
          <span></span>
          <div class="change">换一换</div>
        </div>

        <hotBroadcastComp></hotBroadcastComp>

        <div id="dailyUpdate">
          <div class="week">
            <h1>每日更新</h1>
            <a href="" v-for="(item, index) in weekList" :key="index">
              {{ item.text }}
            </a>
          
          </div>
          <ul>
            <li v-for="(item, index) in dailyUpdateList" :key="index">
              <img :src="item.url" />
              <p>{{ item.name }}</p>
              <span>{{ item.synopsis }}</span>
            </li>
          </ul>
        </div>

        <div id="recommend">
          <h1>为你推荐</h1>
        </div>

        <!-- <ul id="recommendtv">
          <li v-for="(item, index) in recommendtvList" :key="index">
            <img :src="item.url" />
            <div class="caption">
              <img :src="item.src" />
              <div class="introduce">
                <p class="tvname">{{ item.tvname }}</p>
                <p class="name">{{ item.name }}</p>
                <span>{{ item.synopsis }}</span>
              </div>
            </div>
          </li>
        </ul> -->
      <bigListComp :list="recommendtvList"></bigListComp>
     
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";

import topComp from "../components/topComp.vue";
import leftMenuComp from "../components/leftMenuComp.vue";
import hotBroadcastComp from "../components/hotBroadcastComp.vue";
import bigListComp from "../components/bigListComp.vue";

const vaultList = ref([
  { text: "动漫片库" },
  { text: "国漫" },
  { text: "日漫" },
  { text: "2D动画" },
  { text: "3D动画" },
  { text: "经典" },
  { text: "战斗" },
  { text: "魔幻" },
  { text: "科幻" },
  { text: " 推理" },
]);

const hotpictureList = ref([
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    ssynopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
  {
    url: blossoms,
    name: " 名侦探柯南[普通话版] ",
    synopsis: " 永恒的柯南 ",
  },
]);

const weekList = ref([
  { text: "周一" },
  { text: "周二" },
  { text: "周三" },
  { text: "周四" },
  { text: "周五" },
  { text: "周六" },
  { text: "周日" },
]);

const dailyUpdateList = ref([
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
  {
    url: cartoonCharacter,
    name: "从红月开始",
    synopsis: "会员看全集",
  },
]);

const recommendtvList = ref([
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
  {
    url: odeToJoy,
    src: easyLife,
    tvname: " 小品一家人 ",
    name: "小品",
    synopsis: " 原创动画 校园日常 小品  ",
  },
]);
</script>

<style lang="scss">
#home {
  
  #cartoon {
    > img {
      height: 600px;
      width: 100%;
      background-color: rgba(20, 20, 20, 0.2);
      top: 0;
      left: 0;
    }
    #content {
      padding: 0 40px 0 220px;
      width: 100%;
      #vault {
        width: 100%;
        height: 48px;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        a {
          border: 1px solid rgb(65, 64, 64);
          width: 152px;
          height: 40px;
          background-color: #ffffff1a;
          color: #ffffff99;
          text-align: center;
          line-height: 40px;
          border-radius: 20px;
        }
      }
      #hotbroadcast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .change {
          color: #474646;
          font-size: 14px;
        }
        .change:hover {
          color: #ffffff;
        }
      }

      #hotpicture {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 10px 0;
        li {
          height: 210px;
          width: 100%;
          img {
            height: 150px;
            width: 100%;
            overflow: hidden;
            border-radius: 10px;
          }
          a {
            p {
              color: #ffffff;
              font-size: 16px;
            }
            span {
              color: #474646;
              font-size: 14px;
            }
          }
        }
        li:hover {
          border-radius: 10px;
          border: 1px solid rgb(107, 106, 106);
          background-color: rgb(98, 36, 36, 0.3);
          background-image: url("../assets/img/追.png");
          background-repeat: no-repeat;
          background-position: 180px 160px;
        }
      }

      #dailyUpdate {
        .week {
          display: flex;
          align-items: center;
          h1 {
            color: #ffffff;
          }
          a {
            color: #ffffff99;
            font-size: 20px;
            padding-right: 20px;
          }
        }
        ul {
          margin-bottom: 30px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 20px;
          li {
            width: 100%;
            height: 210px;
            img {
              height: 145px;
              width: 100%;
              border-radius: 10px;
              overflow: hidden;
            }
            p {
              color: #ffffff;
              font-size: 16px;
            }
            span {
              color: #474646;
              font-size: 14px;
            }
          }
          li:hover {
            border: 1px solid rgb(74, 73, 73);
            border-radius: 10px;
            overflow: hidden;
          }
        }
      }

      #recommend {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;

        .science {
          flex: 1;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          span > a {
            color: white;
          }
        }
      }
      #recommendtv {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        li {
          height: 400px;
          width: 100%;
          border: 1px solid rgb(83, 82, 82);
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          background-color: #313131;
          background-image: url("../assets/img/追.png");
          background-repeat: no-repeat;
          background-position: 460px 310px;
          img {
            width: 100%;
            height: 300px;
          }
          .caption {
            padding: 10px;
            height: 100px;
            display: flex;
            img {
              height: 80px;
              width: 57px;
              margin-right: 5px;
            }
            .introduce {
              .tvname {
                color: #ffffff;
                font-size: 20px;
              }
              .name {
                color: #474646;
                font-size: 14px;
              }
              span {
                color: #ffffff;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>