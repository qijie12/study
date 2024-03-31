<template>
  <div id="home">
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>
    <img src="../assets/img/4.avif" />
    <img class="listGame" src="../assets/img/list-game.webp"/></img>
  </div>
</template>

<script setup>
import { ref } from "vue";
import topComp from "../components/topComp.vue";
import leftMenuComp from "../components/leftMenuComp.vue";
</script>

<style lang="scss">
#home {
  > img {
    width: 100%;
    height: 600px;
  }
  
}
</style>