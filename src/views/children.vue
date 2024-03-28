<template>
  <div id="home">
   <topComp></topComp>
   <leftMenuComp></leftMenuComp>

    <div id="children">
      <img src="../assets/img/10.jpg" />
      <div id="content">
        <div id="vault">
          <a href="" v-for="(item, index) in vaultList" :key="index">
            {{ item.text }}</a
          >
        </div>

        <div id="hotbroadcast">
          <h1>重磅热播</h1>
          <div class="change">换一换</div>
        </div>

        <hotBroadcastComp></hotBroadcastComp>
         
       
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
          <!-- <li>
                <img src="../assets/img/2.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">玩伴</p>
                    <p class="name">电视剧 孙涛 戴娇倩 都市生活</p>
                    <span>搞笑！男子在街边卖内衣</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/1.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">我是余欢水</p>
                    <p class="name">电视剧 郭京飞 苗苗 人物故事</p>
                    <span>怂包到英雄的荒诞逆袭</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/4.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">爱你不放手</p>
                    <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                    <span>李宗翰变身夺产抢子灭情男</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/2.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">爱你不放手</p>
                    <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                    <span>李宗翰变身夺产抢子灭情男</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/1.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">爱你不放手</p>
                    <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                    <span>李宗翰变身夺产抢子灭情男</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/4.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname"> 繁花 </p>
                    <p class="name">胡歌 马伊琍 时代传奇</p>
                    <span> "宝总完成承诺离开和平饭店！大老板再次变成阿宝" </span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/4.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">爱你不放手</p>
                    <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                    <span>李宗翰变身夺产抢子灭情男</span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/2.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname"> 猎狐 </p>
                    <p class="name"> 王凯 王鸥 经侦题材 </p>
                    <span> "王凯王鸥飒爽集结海外追逃" </span>
                    <b></b>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/img/3.avif" />
                <div class="caption">
                  <img src="../assets/img/5.avif" />
                  <div class="introduce">
                    <p class="tvname">爱你不放手</p>
                    <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                    <span>李宗翰变身夺产抢子灭情男</span>
                    <b></b>
                  </div>
                </div>
              </li> -->
        <!-- </ul>  -->
      <bigListComp :list="recommendtvList"></bigListComp>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import odeToJoy from '../assets/img/1.avif';
import playmate from '../assets/img/2.avif';
import easyLife from '../assets/img/3.avif';
import love from '../assets/img/4.avif';
import blossoms from '../assets/img/5.avif';

import topComp from "../components/topComp.vue";
import leftMenuComp from "../components/leftMenuComp.vue";
import bigListComp from "../components/bigListComp.vue";
import hotbroadcast from "../components/hotBroadcastComp.vue";


const vaultList = ref([
  { text: '少儿片库' },
  { text: '益智' },
  { text: '儿歌' },
  { text: '玩具' },
  { text: '英语' },
  { text: '手工·绘画' },
  { text: '魔幻·科幻' },
  { text: '真人特摄' },
  { text: '男孩' },
  { text: '女孩' },
]);

const hotpicture = ref([
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

const recommendtvList = ref([
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: blossoms,
    tvname: ' 飞驰人生 ',
    name: ' 韩寒沈腾联手搞笑 ',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
]);
</script>

<style lang="scss">
#home {
 #children {
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
}
</style>
