<template>
  <div id="share-leftList-box">
    <van-popup v-model:show="show" position="left">
      <div class="box-top">
        <img src="../assets/img/logo5-dsn.png" />
        <span class="iconfont icon-cha" @click="goback"></span>
      </div>
      <ul>
        <!-- <li v-for="(item, index) in ulList" :key="index">
          <img :src="item.url" />
          <b>{{ item.text }}</b>
        </li> -->
        <li @click="jumpadventure">
          <img src="../assets/img/aim.png"/>
          <b>adventure</b>
        </li>
        <li @click="jumpsports">
          <img src="../assets/img/sports.png"/>
          <b>sports</b>
        </li>
        <li @click="jumppuzzle">
          <img src="../assets/img/puzzle.png"/>
          <b>puzzle</b>
        </li>
        <li @click="jumpaction">
          <img src="../assets/img/action.png"/>
          <b>action</b>
        </li>
        <li @click="jumpcard">
          <img src="../assets/img/card.png"/>
          <b>card</b>
        </li>
        <li @click="jumpcar">
          <img src="../assets/img/car.png"/>
          <b>car</b>
        </li>
        <li @click="jumpbike">
          <img src="../assets/img/bike.png"/>
          <b>bike</b>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed,} from "vue";
import { useRouter } from "vue-router";

import aim from "../assets/img/aim.png";
import sports from "../assets/img/aim.png";
import puzzle from "../assets/img/puzzle.png";
import action from "../assets/img/action.png";
import card from "../assets/img/card.png";
import car from "../assets/img/car.png";
import bike from "../assets/img/bike.png";

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

const router = useRouter();
const goback = () => {
  show.value = false;
};
const jumpadventure=(params)=>{
  router.push({
    path: "/List",
    query: {
      name: 'adventure',
    }
  })
};
const jumpsports=(params)=>{
  router.push({
    path:"/Sports",
    query:{
      name:"sports",
    }
  })
};
const jumppuzzle=(params)=>{
  router.push({
    path:"/Puzzle",
    query:{
      name:"puzzle",
    }
  })
};
const jumpaction=(params)=>{
  router.push({
    path:"/Action",
    query:{
      name:"action",       
    }
  })
};
const jumpcard=(params)=>{
  router.push({
    path:"/Card",
    query:{
      name:"card", 
    }
  })
};
const jumpcar=(params)=>{
  router.push({
    path:"/Car",
    query:{
      name:"car", 
    }
  })
};
const jumpbike=(params)=>{
  router.push({
    path:"/Bike",
    query:{
      name:"bike",
    }
  })
};

// const ulList = ref([
//   {
//     url: aim,
//     text: "adventure",
//   },
//   {
//     url: sports,
//     text: "sports",
//   },
//   {
//     url: puzzle,
//     text: "puzzle",
//   },
//   {
//     url: action,
//     text: "action",
//   },
//   {
//     url: card,
//     text: "card",
//   },
//   {
//     url: car,
//     text: "car",
//   },
//   {
//     url: bike,
//     text: "bike",
//   },
// ]);

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