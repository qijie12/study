<template>
  <div id="share-Puzzle-box">
    <topComp></topComp>
    <div class="Puzzle-con">
      <p>{{ name }}</p>
      <ul>
        <li v-for="(item, index) in ul_List" :key="index">
          <img :src="item.icon" />
        </li>
      </ul>
    </div>
    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import topComp from "../../components/topComp.vue";
import bottomComp from "../../components/bottomComp.vue";
import { useRoute } from "vue-router";
import { useSystemStore } from "../../store/index2.js";

const route = useRoute();
const useSystem = useSystemStore();

const name = ref("");

const ul_List = computed(() => {
  let params = new URL(window.location.href).searchParams.get("name");
  name.value = params;
  return useSystem.gameList[name.value];
});

onMounted(() => {});
</script>

<style lang="scss">
#share-Puzzle-box {
  width: 100%;
  background-color: #ffffff;
  .Puzzle-con {
    padding: 85px 15px 70px 15px;
    > p {
      font-weight: bold;
      font-size: 18px;
    }
    > ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
      margin-top: 20px;
      li {
        width: 100%;
        height: 105px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>