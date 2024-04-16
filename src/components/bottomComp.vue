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
      <van-tabbar-item @click="lighten(0)">
        <template #icon>
          <img src="../assets/img/home11-img.png" v-if="showLighten" style="height:20px;width:20px;"/>
          <img src="../assets/img/home.png" v-else style="height:20px;width:20px;"/>
        </template>
        Home
      </van-tabbar-item>
      <van-tabbar-item @click="lighten(1)">
        <template #icon>
          <img src="../assets/img/promo-img.png" v-if="showLighten" style="height:24px;width:23px;"/>
          <img src="../assets/img/promo1-img.png" v-else style="height:24px;width:23px;"/>
        </template>
        Promo
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/logo-dice.png" style="height:26px;width:26px;"/>
        </template>
        Games
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/deposit-img.png" />
        </template>
        Deposit
      </van-tabbar-item>
      <van-tabbar-item @click="lighten(2)">
        <template #icon>
          <img src="../assets/img/me-img.png" v-if="showLighten"/>
          <img src="../assets/img/me1.png" v-else/>
        </template>
        Me
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// const route = useRoute();
// const router = useRouter();

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
const showLighten=ref(true);
const lighten =(()=>{
   showLighten.value=false;
});

</script>

<style lang="scss">
#share-bottomComp-box {
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
      &.active {
        color: #ffcd17;
      }
    }
  }
}
</style>