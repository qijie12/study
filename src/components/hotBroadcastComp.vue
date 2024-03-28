<template>
  <div class="share-hotBroadcastComp-box">
    <ul id="hotpicture">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.url" />
        <a href="">
          <p>{{ item.name }}</p>
          <span>{{ item.synopsis }}</span>
        </a>
        <slot name="content" :props="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import odeToJoy from '../assets/img/1.avif';
import playmate from '../assets/img/2.avif';
import easyLife from '../assets/img/3.avif';
import love from '../assets/img/4.avif';
import blossoms from '../assets/img/5.avif';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const jump = () => {
  router.push('/teleplay');
};
</script>

<style lang="scss">
.share-hotBroadcastComp-box {
  #hotpicture {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    width: 100%;
    margin: 10px 0;
    li {
      height: 210px;
      width: 100%;
      img {
        height: 150px;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
      }
      a {
        p {
          color: #ffffff;
          font-size: 16px;
        }
        span {
          color: #474646;
          font-size: 14px;
        }
      }
    }
    li:hover {
      border-radius: 10px;
      border: 1px solid rgb(107, 106, 106);
      background-color: rgb(98, 36, 36, 0.3);
      background-image: url('../assets/img/追.png');
      background-repeat: no-repeat;
      background-position: 180px 160px;
    }
  }
}
</style>
