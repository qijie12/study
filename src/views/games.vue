<template>
 <div id="all">
    <topComp></topComp>







    <bottomComp></bottomComp>
 </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";

  const route = useRoute();
const router = useRouter();
</script>

<style lang="scss">
 #all{

 }
</style>