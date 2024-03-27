<template>
  <div class="share-leftMenuCom-box">
    <div id="homePage">
      <a href class="logo"><img src="../assets/img/tx.png" /></a>
      <div class="homePage-Con">
        <div class="front">
          <a
            name="1"
            href="#"
            v-for="(item, index) in homePageList"
            :key="index"
            @click="jump"
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import collect from '../assets/img/收藏.png';

const router = useRouter();

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

const jump = () => {
  router.push('/teleplay');
};
</script>

<style lang="scss">
.share-leftMenuCom-box {
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
}
</style>
