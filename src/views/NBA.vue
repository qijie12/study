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

    <div id="homePage">
      <a href class="logo"><img src="../assets/img/tx.png" /></a>
      <div class="homePage-Con">
        <div class="front">
          <a
            name="1"
            href="#"
            v-for="(item, index) in homePageList"
            :key="index"
            >{{ item.name }}<img :src="item.url"
          /></a>
        </div>
        <hr />
        <div class="agreement">
          <a href="" v-for="(item, index) in agreementList" :key="index">{{
            item.text
          }}</a>
        </div>
        <hr />
        <div class="licence">
          <a href="">粤网文[2023]2882-203号</a>
          <a href="">网络视听许可证1904073号</a>
          <a href="">粤公网安备<br />44030002000001号</a>
          <p class="AT">
            <a href="">关于腾讯</a><i>|</i><a href="">About Tencent</a>
          </p>
          <p><a href="">服务条款</a><i>|</i><a href="">广告设置</a> <i>|</i></p>
          <p><a href="">腾讯招聘 客服中心</a><i>|</i></p>
          <a href="">网站导航</a>
          <a href="">Copyright © 1998 - 2024 Tencent. All Rights Reserved.</a>
          <a href>腾讯公司 版权所有</a>
          <img src="../assets/img/1f68341597825237110.avif" />
        </div>
      </div>
    </div>

    <div id="sports">
      <img src="../assets/img/6.avif" />
      <div id="content">
       
        <div id="tvVip">
          <a href="">体育超级VIP | 首3月40元/月</a>
        </div>
        <div id="vault">
          <a href=""> 体育片库 </a>
          <a href=""> NBA </a>
          <a href=""> WWE </a>
          <a href=""> CBA </a>
          <a href=""> XGAMES </a>
          <a href=""> 功夫搏击 </a>
          <a href=""> 极限运动 </a>
          <a href=""> 足球 </a>
        </div>

        <div id="hotbroadcast">
          <h1>热门赛程</h1>
          <div class="change">全部赛事></div>
        </div>

        <ul id="schedule">
          <li>
            <p>体育VIP</p>
            <div>
              <p>进行中</p>
              <span> 23-24赛季常规赛 雷霆vs雄鹿重播 </span>
            </div>
          </li>
          <li>
            <p>畅享赛事</p>
            <div>
              <p>进行中</p>
              <span> 23-24赛季常规赛 雷霆vs雄鹿重播 </span>
            </div>
          </li>
          <li>
            <p>体育VIP</p>
            <div>
              <p>2024-03-25 19:00:00</p>
              <span>
                有球必应：联盟判罚新尺度詹杜库谁吃亏？勇士火箭谁能进入附加赛？
              </span>
            </div>
          </li>
        </ul>

        <div id="recommend">
          <h1>NBA🏀勇士仅领先火箭1胜场</h1>
          <span>换一换</span>
        </div>

        <ul id="NBA">
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
          <li>
            <img src="../assets/img/NBA1.webp" />
            <p>詹眉最后4分钟得13分</p>
            <span> 力挽狂澜！一举拿下比赛 </span>
          </li>
        </ul>

        <div id="recommend">
          <h1>球星⭐精彩发挥不错过</h1>
          <span>换一换</span>
        </div>

        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>

        <h1>TOP⚡十佳五佳浓缩精华</h1>
        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>

        <h1>回放▶️焦点之战随时回看</h1>
        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>

        <h1>原创✨天天都有诚意之作</h1>
        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>

        <h1>本赛季单场高分排行</h1>
        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>

        <h1>纪录片✌ 球迷尊享致敬传奇</h1>
        <ul id="quintessence">
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
          <li>
            <img src="../assets/img/6.avif" />
            <p>湖人vs雄鹿</p>
            <span> 双加时热血逆转 </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import VIP from '../assets/img/VIP.png';
import game from '../assets/img/game.png';
import time from '../assets/img/time.png';
import screenRecording from '../assets/img/screenRecording.png';
import download from '../assets/img/download.png';
import personage from '../assets/img/personage.png';
import collect from '../assets/img/收藏.png';
import odeToJoy from '../assets/img/1.avif';
import playmate from '../assets/img/2.avif';
import easyLife from '../assets/img/3.avif';
import love from '../assets/img/4.avif';
import blossoms from '../assets/img/5.avif';

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
  #homePage {
    width: 210px;
    height: 100vh;
    top: 0;
    padding: 20px 0 20px 20px;
    position: fixed;
    z-index: 1;
    // background-color:rgba(230, 233, 240,.45);
    .logo {
      top: 0;
    }
    .homePage-Con {
      overflow-y: scroll;
      height: 100%;
      a {
        padding: 10px 0;
        display: flex;
        align-items: center;
        font-size: 16px;
      }
      .front {
        direction: rtl;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 20px;
      }
      .agreement {
        a {
          font-size: 12px;
        }
      }
      .licence {
        padding-bottom: 60px;
        a {
          font-size: 12px;
          padding: 5px 0;
        }
        p {
          display: flex;
          align-items: center;
          color: #474646;
          i {
            font-style: unset;
            margin: 0 5px;
          }
        }
        img {
          width: 122px;
          height: 52px;
        }
      }
    }
  }

  #sports {
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      #tvVip {
        >a {
          width: 295px;
          height: 48px;
        }
      }
      #vault {
        width: 100%;
        height: 48px;
        // display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .vip {
          height: 40px;
          width: 250px;
          background-color: #ffcd4926;
          color: #ffdf8a;
        }

        a {
          border: 1px solid rgb(65, 64, 64);
          width: 150px;
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
          font-size: 16px;
        }
        .change:hover {
          color: #ffffff;
        }
      }

      #schedule {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 20px 0;
        position: relative;
        li {
          height: 170px;
          width: 100%;
          border: 1px solid rgb(85, 84, 84);
          border-radius: 20px;
          overflow: hidden;

          > p {
            height: 50px;
            width: 100%;
            padding: 10px;
            color: #ff6022;
            background: rgba(255, 167, 133, 0.2);
          }
          div {
            height: 120px;
            width: 100%;
            padding: 20px 10px;
            background-color: #313131;
            font-size: 16px;
            background-image: url('../assets/img/独播.png');
            // position: absolute;
            background-repeat: no-repeat;
            background-position: 480px 10px;
            P {
              color: #848383;
              padding-bottom: 20px;
            }
            span {
              color: #ffffff;
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
        margin-bottom: 20px;
        justify-content: space-between;
        span {
          color: #848383;
          font-size: 14px;
        }
        span:hover {
          color: #ffffff;
        }
      }

      #NBA {
        height: 460px;
        width: 100%;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(6, 1fr);

        li {
          height: 230px;
          width: 100%;

          img {
            border-radius: 20px;
            overflow: hidden;
            height: 140px;
            width: 100%;
          }
          p {
            color: #ffffff;
            font-size: 16px;
          }
          span {
            color: #646363;
            font-size: 14px;
          }
        }
      }

      #quintessence {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        li {
          height: 230px;
          width: 100%;
          img {
            height: 140px;
            width: 100%;
            border-radius: 20px;
          }
          p {
            color: #ffffff;
            font-size: 16px;
          }
          span {
            color: #848383;
            font-size: 14px;
          }
        }
      }

      h1 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
