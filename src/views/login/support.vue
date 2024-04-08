<template>
  <div id="share-support-box">
    <div class="support-top">
      <span class="iconfont icon-arrow-left" @click="jumpLogin"></span>
      <span>Support</span>
      <span></span>
    </div>
    <div class="support-bottom">
      <img src="../../assets/img/bear-background.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const jumpLogin = () => {
  router.push("/login");
};

const appearFunc = (values) => {
  axios
    .get("https://minibk.disneygo.org/api/get_customer_service_list", {})
    .then((res) => {})
    .catch((err) => {});
};

onMounted(() => {
  appearFunc();
});
</script>

<style lang="scss">
#share-support-box {
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  .support-top {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #d8d9dc;
    font-weight: bold;
    > .icon-arrow-left {
      font-size: 20px;
    }
  }
  .support-bottom {
    position: fixed;
    bottom: -4px;
    left: -8px;
    img {
      width: 200px;
      height: 150px;
    }
  }
}
</style>