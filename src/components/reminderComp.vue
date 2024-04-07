<template>
 <div id="share-reminderComp-box">
   <van-cell title="展示弹出层" is-link @click="showPopup" />
   <van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup>

 </div>
</template>
 
<script setup>
 import {ref} from 'vue';

  const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
</script>

<style lang="scss">
 #share-remminderComp-box{

 }
</style>