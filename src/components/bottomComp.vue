<template>
  <div id="share-bottomComp-box">
    <van-tabbar v-model="active">
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
    </van-tabbar>

    <!-- <van-tabbar v-model="active">
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/home1.png" />
        </template>
        Home
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/eam money.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/game.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <img src="../assets/img/me.png" />
        </template>
        Eam moeny
      </van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const activeList = ref([]);

const menuList = computed(() => {
  let arr = router.options.routes.filter((item) => item?.meta?.isMenu);
  return arr;
});

const jump = (params) => {
  router.push(params.path);
};

onMounted(() => {});
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