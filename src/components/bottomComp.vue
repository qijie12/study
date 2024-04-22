<template>
  <div id="share-bottomComp-box">
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in menuList"
        :key="index"
        @click="jump(item)"
        :class="{ active: route.fullPath.indexOf(item.path) !== -1 }"
      >
        <template #icon>
          <img
            v-if="route.fullPath.indexOf(item.path) !== -1"
            :src="item.meta.src"
          />
          <img v-else :src="item.meta.url" />
        </template>
        {{ item.meta.text }}
      </van-tabbar-item>
    </van-tabbar> -->

    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in menuList"
        :key="index"
        @click="lighten(item)"
      >
        <template #icon>
          <img
            v-if="route.fullPath.indexOf(item.path) === -1"
            :src="item.url"   
          />
          <img :src="item.active" v-else />
        </template>
        <span :class="{ active: route.fullPath.indexOf(item.path) !== -1 }">{{
          item.title
        }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import home from "../assets/img/home11-img.png";
import home_active from "../assets/img/home.png";
import promo from "../assets/img/promo-img.png";
import promo_active from "../assets/img/promo1-img.png";
import dice_active from "../assets/img/logo-dice.png";
import deposit from "../assets/img/deposit-img.png";
import me from "../assets/img/me-img.png";
import me_active from "../assets/img/me1.png";

const route = useRoute();
const router = useRouter();

// const activeList = ref([]);

// const menuList = computed(() => {
//   let arr = router.options.routes.filter((item) => item?.meta?.isMenu);
//   return arr;
// });

// const jump = (params) => {
//   router.push(params.path);
// };

// onMounted(() => {});
const active = ref(0);
const showLighten = ref(true);
const menuList = ref([
  {
    path: "/home",
    title: "Home",
    url: home,
    active: home_active,
  },
  {
    path: "/promo",
    title: "Promo",
    url: promo,
    active: promo_active,
  },
  {
    path: "/Games",
    title: "Games",
    url: dice_active,
    active: dice_active,
  },
  {
    path: "/deposit",
    title: "Deposit",
    url: deposit,
    active: deposit,
  },
  {
    path: "/me",
    title: "Me",
    url: me,
    active: me_active,
  },
]);

const lighten = (params) => {
  router.push(params.path);
};
</script>

<style lang="scss">
#share-bottomComp-box {
  font-family: PingFang SC-Bold, PingFang SC;
  .van-tabbar {
    bottom: 0;
    left: 0;
    position: fixed;
    border-top: 1px solid rgb(88, 87, 87);
    z-index: 5;
    img {
      height: 21px;
      width: 21px;
    }
    .van-tabbar-item {
      font-size: 14px;
      font-weight: bold;
      color: #dddddd;
      .van-tabbar-item__text {
        span {
          &.active {
            color: #ffcd17;
          }
        }
      }
    }
  }
}
</style>