<template>
  <div id="share-games-box">
    <topComp></topComp>

    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :loop="false"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(item, index) in swipeList" :key="index">
        <img :src="item.img_url" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      left-icon="volume-o color: #fdc1c1"
      text="⭐️⭐️To visit our official website, be sure to use the link below,https:lkgame.xyz// Please remember! Make sure not provide personal data and personal transactions in any form and for any reason to other parties on behalf of LURSSENVIP. Our side does not make private chats or calls to all members. Please inform all Referrals/other Members about this to avoid fraud. Thank you for your attention and cooperation."
    >
      <template #right-icon>
        <span
          @click="jumpAnn"
          class="iconfont icon-tongzhixiaoxi"
          style="padding-left: 5px; color: #e46161"
        ></span>
      </template>
    </van-notice-bar>

    <div class="func">
      <div class="func_L">
        <div class="grade">
          <img src="../assets/img/vip2222.png" />
          <div class="num">VIP2</div>
          <div class="hlm">hlm</div>
        </div>
        <div class="ING-box">
          <span style="font-size: 13px; color: #424242; font-weight: 500"
            >ING</span
          >
          <i
            style="
              font-size: 15px;
              color: #ff5454;
              font-weight: bold;
              padding-left: 4px;
            "
            >90</i
          >
          <span style="font-size: 12px; color: #42424299; font-weight: bold"
            >.00</span
          >
        </div>
      </div>
      <ul class="func_R">
        <li @click="jumpAgent">
          <img src="../assets/img/agent_img.png" />
          <span>AGENT</span>
        </li>
        <li>
          <img src="../assets/img/arch_img.png" />
          <span>SRCH</span>
        </li>
      </ul>
    </div>
    <!-- === 代表值和类型相等才满足 !== 代表值和类型不相等才满足
      == 代表值相等就满足 != 代表值不相等就满足 -->
    <!-- touchstart 是一个触摸事件 -->
    <div class="gamesCon-box" @touchstart="handleMouseMenu">
      <ul class="gamsList">
        <!-- <li :class="{active: gameIndex === index}">
            <img src="../assets/img/hot-img1.png"/>
            <b>Hot</b>
         </li> -->
        <li
          :class="{ active: gameIndex === index }"
          v-for="(item, index) in gameListList"
          :key="index"
          :id="'menu' + index"
          @click="changeGameMenu(index, 'platform' + index)"
        >
          <img :src="gameIndex === index ? item.assistant_icon : item.icon" />
          <b>{{ item.display_name }}</b>
        </li>
      </ul>

      <!-- !xxx  代表取反 !gameIndex = false   -->
      <ul class="gamesCon" v-show="!gameIndex">
        <li v-for="(item, index) in gamesConList" :key="index">
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
          <div class="hot_tag">
            <img :src="tag" v-if="item.is_hot === 1" />
          </div>
        </li>
      </ul>
      <!-- <li>
            <img src="../assets/img/game_picture2.jpg"/>
            <span>Win - Diamond</span>
            <div class="hot_tag" >
              <img src="../assets/img/hot_game-111.png" />
            </div>
          </li> -->

      <!-- gameIndex == true -->
      <!-- @scroll="handleScroll" 是滚动事件方法 -->
      <div
        class="img_container"
        ref="scrollContainer"
        @scroll="handleScroll"
        v-show="gameIndex"
      >
        <!-- 双层循环 key和下表不能一样 -->
        <ul
          :id="'platform' + (index + 1)"
          v-for="(item, index) in platformList"
          :key="index"
        >
          <li v-for="(a, b) in item.children" :key="b" @click="clickFunc">
            <img :src="a.icon" />
          </li>
        </ul>
      </div>
    </div>
    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import { useRouter } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import game_img1 from "../assets/img/game_picture2.jpg";
import game_img3 from "../assets/img/game_picture4.png";
import game_img4 from "../assets/img/game_picture5.jpg";
import game_img5 from "../assets/img/game_picture6.jpg";
import game_img6 from "../assets/img/game_picture7.jpg";
import game_img7 from "../assets/img/game_picture8.png";
import tag from "../assets/img/hot_game-111.png";
import hot1 from "../assets/img/hot-img1.png";
import hot from "../assets/img/hot-img.png";
import lottery1 from "../assets/img/lottery-img1.png";
import lottery from "../assets/img/lottery-img.png";
import contest1 from "../assets/img/contest-img1.png";
import contest from "../assets/img/contest-img.png";
import fishing1 from "../assets/img/fishing-img1.png";
import fishing from "../assets/img/fishing-img.png";
import slot1 from "../assets/img/slot-img1.png";
import slot from "../assets/img/slot-img.png";
import live1 from "../assets/img/live-img1.png";
import live from "../assets/img/live-img.png";
import { gameSwipe } from "../api/gameSwipe";
import { gameList } from "../api/gameList";
const router = useRouter();
const gameIndex = ref(0);
const scrollContainer = ref();
const isComputed = ref(false); // 是否计算
const scrollingTimer = ref(); // 滚动计时器

const jumpAgent = () => {
  router.push("/agent");
};
const jumpAnn = () => {
  router.push("/announcement");
};

// 分类列表
const gameListList = ref([
  {
    icon: hot1,
    assistant_icon: hot,
    display_name: "Hot",
  },
]);

// 热门游戏列表
const gamesConList = ref([]);

// 平台列表
const platformList = ref([]);

const swipeList = ref([]);

const call_gameSwipe = async () => {
  let params = {
    type: 18,
  };
  let res = await gameSwipe(params);
  console.log(res, "gameSwipe...........");
  swipeList.value = res.data.content.banner;
};
const call_gameList = async () => {
  let res = await gameList();
  console.log(res, "gameList=============");
  // ...扩展运算符  代表不去更改原数组里面的数据 只是往后添加数据
  gameListList.value.push(...res.data.game_list);
  gamesConList.value = res.data.hot_list;

  // some列表循环方法
  res.data?.game_list.some((item) => {
    platformList.value.push({
      sort: item.sort,
      children: [...item.children],
    });
  });

  // sort数组排序方法  a.xx - b.xx 正序   b.xx - a.xx 是倒序
  platformList.value = platformList.value.sort((a, b) => a.sort - b.sort);
};

// 切换左侧游戏菜单栏
const changeGameMenu = (index, id) => {
  gameIndex.value = index;
  if (index) {
    nextTick(() => {
      scrollToSection(id);
    });
  }
};

// 锚点定位到指定游戏类型
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  console.log(scrollContainer.value.scrollTop, "scrollTop-----");
  // 获取总盒子滚动高度
  const scrollY = scrollContainer.value.scrollTop;

  // 获取平台盒子距离顶部高度
  // document.getElementById("platform1") ----->是获取ul的值
  console.log(document.getElementById("platform1"), 'document.getElementById("platform1")----------')
  // getBoundingClientRect() 表示一个元素相对于视口的位置和尺寸。

  const section1Rect = document.getElementById("platform1")?.getBoundingClientRect(); // 第一个平台盒子距离顶部的高度
  console.log(section1Rect, 'section1Rect---------')
  const section2Rect = document.getElementById("platform2")?.getBoundingClientRect(); // 第二个平台盒子距离顶部的高度
  const section3Rect = document.getElementById("platform3")?.getBoundingClientRect(); // 第三个平台盒子距离顶部的高度
  const section4Rect = document.getElementById("platform4")?.getBoundingClientRect(); // 第四个平台盒子距离顶部的高度
  const section5Rect = document.getElementById("platform5")?.getBoundingClientRect(); // 第五个平台盒子距离顶部的高度
  const section6Rect = document.getElementById("platform6")?.getBoundingClientRect(); // 第六个平台盒子距离顶部的高度
// distance 用于计算两个数值之间的绝对距离
  const section1Top = distance(
    section1Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );
  const section2Top = distance(
    section2Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );
  const section3Top = distance(
    section3Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );
  const section4Top = distance(
    section4Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );
  const section5Top = distance(
    section5Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );
  const section6Top = distance(
    section6Rect?.top - scrollContainer?.value?.getBoundingClientRect()?.top
  );

  function distance(val) {
    return val ? val + scrollY : 30 + scrollY;
  }

  // 判断当前滚动位置在哪个区块范围内
  let newScrollY = scrollY + 15;
  if (!isComputed.value) {
    if (newScrollY >= section1Top && newScrollY < section2Top) {
      gameIndex.value = 1;
    } else if (newScrollY >= section2Top && newScrollY < section3Top) {
      gameIndex.value = 2;
    } else if (newScrollY >= section3Top && newScrollY < section4Top) {
      gameIndex.value = 3;
    } else if (newScrollY >= section4Top && newScrollY < section5Top) {
      gameIndex.value = 4;
    } else if (newScrollY >= section5Top && newScrollY < section6Top) {
      gameIndex.value = 5;
    }
  }
};

const handleMouseMenu = () => {
  if (scrollingTimer.value) {
    clearTimeout(scrollingTimer.value);
  }

  isComputed.value = true;

  scrollingTimer.value = setTimeout(() => {
    isComputed.value = false;
  }, 1000);
};

onMounted(() => {
  call_gameSwipe();
  call_gameList();
});
</script>

<style lang="scss">
#share-games-box {
  width: 100%;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(246, 245, 243);
  .my-swipe {
    width: 100%;
    margin-top: 98px;
    text-align: center;
    // padding:0 20px;
    .van-swipe-item {
      padding: 0 10px 0 10px;
      > img {
        width: 100%;
        height: 115px;
        border-radius: 8px;
        border-color: #e5e7eb;
      }
    }
  }
  .van-notice-bar {
    margin-top: 5px;
    background: rgb(246, 245, 243);
    .van-notice-bar__content {
      color: #424242;
    }
    .van-badge__wrapper {
      color: #fdc1c1;
    }
  }
  .func {
    z-index: 5;
    width: 100%;
    height: 67px;
    border-radius: 12px 12px 0 0;
    background: linear-gradient(180deg, #fff, #ffcdcd 100%);
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    .func_L {
      padding: 5px;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .grade {
        display: flex;
        align-items: center;
        > img {
          width: 73px;
          height: 25px;
        }
        .num {
          position: absolute;
          z-index: 1;
          color: #fff;
          font-size: 13px;
          top: 18%;
          left: 30%;
        }
        .hlm {
          padding: 5px 0 0 10px;
          font-size: 14px;
          color: #424242;
        }
      }
      .ING-box {
        width: 88px;
        height: 28px;
        border-radius: 20px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .func_R {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      > li {
        padding: 10px 0;
        width: 50px;
        font-size: 12px;
        text-align: center;
        > img {
          width: 24px;
          height: 24px;
        }
        > span {
          color: #424242;
        }
      }
    }
  }
  .gamesCon-box {
    display: flex;
    padding-right: 8px;
    background: rgb(246, 245, 243);
    .gamsList {
      width: 70px;
      height: 360px;
      border-radius: 0 20px 20px 0;
      background-color: #ffffff;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      margin-right: 8px;
      > li {
        width: 100%;
        height: 60px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        &:first-child {
          border-radius: 0 20px 0 0;
        }
        &:last-child {
          border-radius: 0 0 20px 0;
        }

        > img {
          width: 32px;
          height: 32px;
        }
        > b {
          color: #ff5454;
          // position:absolute;
          // top:68%;
          margin-top: -7px;
          text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
            -1px -1px 0 #fff;
        }
        &.active {
          background: #ff5454;
          > b {
            color: #fff;
            text-shadow: -1px 1px 0 #ff5454, 1px 1px 0 #ff5454,
              1px -1px 0 #ff5454, -1px -1px 0 #ff5454;
          }
        }
      }
    }
    .gamesCon {
      padding-bottom: 120px;
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0 7px;
      > li {
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        width: 100%;
        font-size: 12px;
        text-align: center;
        white-space: pre-wrap;
        position: relative;
        > img {
          width: 100%;
          height: 90px;
          border-radius: 10px;
        }
        > span {
          height: 30px;
          display: block;
          padding: 0 5px;
          color: #8b8b8a;
          overflow: hidden;
        }
        .hot_tag {
          width: 40px;
          height: 20px;
          z-index: 2;
          position: absolute;
          top: 0;
          left: 0;
          > img {
            height: 20px;
            width: 100%;
          }
        }
      }
    }
    .img_container {
      height: 600px;
      overflow-y: scroll;
      padding-bottom: 320px;
      flex: 1;
      ul {
        li {
          width: 100%;
          height: 94px;
          margin-bottom: 10px;
          > img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>