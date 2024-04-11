<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "./store/index.js";

const useCounter = useCounterStore();

onMounted(() => {
  useCounter.getGame();
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import url("./iconfont/iconfont.css");
</style>
