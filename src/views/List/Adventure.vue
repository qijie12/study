<template>
 <div id="share-Adventure-box">
    <topComp></topComp>
    <div class="adventure-con">adventure</div> 
    <bottomComp></bottomComp>
 </div>
</template>

<script setup>
 import {ref} from "vue";
 import topComp from '../../components/topComp.vue';
 import bottomComp from '../../components/bottomComp.vue';

</script>

<style lang="scss">
 #share-Adventure-box{
  width:100%;
  height:100vh;
  background-color:#ffffff;
  .adventure-con{
   padding:85px 0 0 10px;
   font-weight:bold;
   font-size:18px;
  }
 }
</style>