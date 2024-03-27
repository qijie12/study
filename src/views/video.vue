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

    <leftMenuCom></leftMenuCom>

    <div style="padding: 84px 40px 0 220px">
      <bigListComp :list="videoList"></bigListComp>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import kingBlueberry from '../assets/img/4.avif';
import icons from '../assets/img/3.avif';
import VIP from '../assets/img/VIP.png';
import game from '../assets/img/game.png';
import time from '../assets/img/time.png';
import screenRecording from '../assets/img/screenRecording.png';
import download from '../assets/img/download.png';
import personage from '../assets/img/personage.png';
import collect from '../assets/img/收藏.png';
import easyLife from '../assets/img/3.avif';
import odeToJoy from '../assets/img/1.avif';
import bigListComp from '../components/bigListComp.vue';
import leftMenuCom from '../components/leftMenuComp.vue';

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

const videoList = ref([
  {
    url: kingBlueberry,
    src: icons,
    nametv: '王蓝莓的幸福生活',
    pash: easyLife,
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    nametv: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
]);
</script>

<style lang="scss">
#home {
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
  #centerCon {
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
      #hotbroadcast {
        width: 100%;
        height: 48px;
        color: white;
        display: flex;
        align-items: center;
        h1 {
          padding-right: 20px;
        }
        .change {
          display: flex;
          justify-content: space-between;
          flex: 1;
          .tv {
            span {
              border-left: 1px solid white;
              color: white;
            }
            a {
              padding: 0 20px;
              color: rgb(130, 131, 131);
            }
            a:hover {
              color: white;
            }
          }
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
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 180px 160px;
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
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 460px 310px;
          img {
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

  // #video {
  //   padding: 84px 40px 0 220px;
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-gap: 20px;
  //   width: 100%;
  //   li {
  //     background-image: url('../assets/img/追.png');
  //     background-repeat: no-repeat;
  //     background-position: 460px 310px;
  //     width: 100%;
  //     height: 400px;
  //     border: 1px solid rgb(85, 83, 83);
  //     overflow: hidden;
  //     border-radius: 20px;
  //     background-color: #252525;
  //     img {
  //       height: 300px;
  //       width: 100%;
  //       margin-right: 5px;
  //     }
  //     div {
  //       height: 90px;
  //       width: 100%;
  //       padding: 10px 15px;
  //       display: flex;
  //       position: relative;

  //       img {
  //         height: 100%;
  //         width: 57px;
  //       }
  //       a {
  //         .intro {
  //           color: #ffffff;
  //           font-size: 20px;
  //         }

  //         .protagonist {
  //           color: #3b3b3b;
  //           font-size: 14px;
  //           img {
  //             width: 20px;
  //             height: 20px;
  //           }
  //         }
  //         span {
  //           color: #ffffff;
  //           font-size: 16px;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
