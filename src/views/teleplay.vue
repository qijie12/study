<template>
  <div id="home">
    <topComp></topComp>

    <leftMenuComp></leftMenuComp>

    <div id="teleplay">
      <img src="../assets/img/3.avif" />
      <div id="content">
        <div id="vault">
          <a href="" v-for="(item, index) in vaultList" :key="index">
            {{ item.text }}
          </a>
        </div>

        <div id="hotbroadcast">
          <h1>重磅热播</h1>
          <div class="change">换一换</div>
        </div>

        <!-- <ul id="hotpicture">
          <li v-for="(item, index) in hotpictureList" :key="index">
            <img :src="item.url" />
            <a href="">
              <p>{{ item.name }}</p>
              <span>{{ item.synopsis }}</span>
            </a>
          </li>
        </ul> -->
        <hotBroadcastComp :list="hotpictureList">
           <!-- <li v-for="(item, index) in hotpictureList" :key="index"> -->
            <!-- <template  #content="{ props }">
              <img :src="props.url" />
              <a href="">
                <p>{{ props.name }}</p>
                <span>{{ props.synopsis }}</span>
              </a>
            </template> -->
            
          <!-- </li> -->
          </hotBroadcastComp>

        <div id="recommend">
          <h1>为你推荐</h1>
        </div>

        <bigListComp :list="recommendtvList"></bigListComp>
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

import bigListComp from '../components/bigListComp.vue';
import topComp from '../components/topComp.vue';
import leftMenuComp from '../components/leftMenuComp.vue';
import hotBroadcastComp from '../components/hotBroadcastComp.vue';

const vaultList = ref([
  { text: '电视剧片库' },
  { text: 'X剧场' },
  { text: '免费热剧' },
  { text: '爱情' },
  { text: '古装' },
  { text: '悬疑' },
  { text: '家庭' },
  { text: ' 传奇' },
  { text: '电视剧片库' },
  { text: '军旅' },
]);

const hotpictureList = ref([
  {
    url: playmate,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url:  blossoms,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },

  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
]);

const recommendtvList = ref([
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
   tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
  {
    url: playmate,
    src: love,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '怂包到英雄的荒诞逆袭',
  },
]);
</script>

<style lang="scss">
#home {
 
  #teleplay {
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
