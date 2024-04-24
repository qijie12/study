<template>
 <div id="share-cs-box">
    <div class="csTop">
        <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
        <b>Support</b>
        <span></span>
    </div>
 </div> 
</template>

<script setup>
</script>

<style lang="scss">
 .share-cs-box{
  width: 100vw;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  .csTop{
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 15px;
    border-bottom:1px solid red;
    >b {
      font-size: 14px;
      color: #594735;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    >.icon-arrow-left {
      color: #303030;
      font-weight: 900;
    }
  }
 }
</style>