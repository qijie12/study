<script setup>
import { onMounted } from "vue";
// import { useCounterStore } from "./store/index.js";
import { useSystemStore } from "./store/index2.js";

const useSystem = useSystemStore();

// const useCounter = useCounterStore();

onMounted(() => {
  // useCounter.getGame();
  // useCounter.getUserInfo();
  // useSystem.getGames();
  // useSystem.getUserInfo();
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import url("./iconfont/iconfont.css");
</style>
