<template>
  <div id="share-leftList-box">
    <van-popup v-model:show="show" position="left">
      <div class="box-top">
        <img src="../assets/img/logo5-dsn.png" />
        <span class="iconfont icon-cha" @click="goback"></span>
      </div>
      <ul>
        <li
          v-for="(item, index) in ulList"
          :key="index"
          @click="jumppuzzle(item.title)"
        >
          <img :src="item.icon" />
          <b>{{ item.display_name }}</b>
        </li>
        <!-- <li @click="jumppuzzle('adventure')">
          <img src="../assets/img/aim.png"/>
          <b>adventure</b>
        </li>
        <li @click="jumppuzzle('sports')">
          <img src="../assets/img/sports.png"/>
          <b>sports</b>
        </li>
        <li @click="jumppuzzle('puzzle')">
          <img src="../assets/img/puzzle.png"/>
          <b>puzzle</b>
        </li>
        <li @click="jumppuzzle('action')">
          <img src="../assets/img/action.png"/>
          <b>action</b>
        </li>
        <li @click="jumppuzzle('card')">
          <img src="../assets/img/card.png"/>
          <b>card</b>
        </li>
        <li @click="jumppuzzle('car')">
          <img src="../assets/img/car.png"/>
          <b>car</b>
        </li>
        <li @click="jumppuzzle('bike')">
          <img src="../assets/img/bike.png"/>
          <b>bike</b>
        </li> -->
      </ul>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import aim from "../assets/img/aim.png";
import sports from "../assets/img/aim.png";
import puzzle from "../assets/img/puzzle.png";
import action from "../assets/img/action.png";
import card from "../assets/img/card.png";
import car from "../assets/img/car.png";
import bike from "../assets/img/bike.png";
import { useSystemStore } from "../store/index2.js";

const route = useRoute();
const router = useRouter();

const useSystem = useSystemStore();

// const props = defineProps({
//     modelValue: {
//         type: Boolean,
//         dafult: false
//     }
// })

// const emits = defineEmits(['update:modelValue'])

// const show = computed({
//     get: () => {
//         return props.modelValue
//     },
//     set: (v) => {
//         emits('update:modelValue', v)
//     }
// })
const show = ref(false);

const loadParams = () => {
  show.value = true;
};

const goback = () => {
  show.value = false;
};
const jumppuzzle = (name) => {
  // router.push({
  //   path:"/Puzzle",
  //   query:{
  //     name,
  //   }
  // })
  window.location.href = `/Puzzle?name=${name}`;
};

const ulList = computed(() => {
  return useSystem.classifyList;
});

onMounted(() => {});

defineExpose({
  loadParams,
});
</script>

<style lang="scss">
#share-leftList-box {
  .van-popup {
    width: 270px;
    height: 100vh;
  }
  .box-top {
    width: 100%;
    padding: 10px 16px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    img {
      width: 150px;
      height: 75px;
    }
    .icon-cha {
      color: #949495;
      font-size: 25px;
    }
  }
  ul {
    background-color: rgb(255, 255, 255);
    padding-left: 30px;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 5px;
    li {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
      b {
        font-size: 14px;
      }
    }
  }
}
</style>