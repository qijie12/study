<template>
  <div id="home">
    
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>

    <div style="padding: 84px 40px 0 220px">
      <bigListComp :text="videoList"></bigListComp>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import kingBlueberry from '../assets/img/4.avif';
import icons from '../assets/img/2.avif';
import collect from '../assets/img/收藏.png';
import easyLife from '../assets/img/3.avif';
import odeToJoy from '../assets/img/1.avif';

import bigListComp from '../components/bigListComp.vue';
import leftMenuComp from '../components/leftMenuComp.vue';
import topComp from '../components/topComp.vue';

const videoList = ref([
  {
    url: kingBlueberry,
    src: icons,
    tvname: '王蓝莓的幸福生活`123123',
    pash: easyLife,
    name: '王蓝111',
    synopsis: '没有人能面无表情的看同学录323213',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
  {
    url: kingBlueberry,
    src: icons,
    pash: easyLife,
    tvname: '王蓝莓的幸福生活',
    name: '王蓝',
    synopsis: '没有人能面无表情的看同学录',
  },
]);
</script>

<style lang="scss">
#home {
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
