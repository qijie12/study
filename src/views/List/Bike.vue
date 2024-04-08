<template>
 <div id="share-Bike-box">
    <topComp></topComp>
    <div class="Bike-con">bike</div> 
    <bottomComp></bottomComp>
 </div>
</template>

<script setup>
 import {ref} from "vue";
 import topComp from '../../components/topComp.vue';
 import bottomComp from '../../components/bottomComp.vue';

</script>

<style lang="scss">
 #share-Bike-box{
  width:100%;
  height:100vh;
  background-color:#ffffff;
  .Bike-con{
   padding:85px 0 0 10px;
   font-weight:bold;
   font-size:18px;
  }
 }
</style>