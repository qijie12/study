<template>
  <div id="share-bet-box">
    <van-nav-bar title="Bet Records" left-arrow @click-left="onClickLeft" />

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" title="Today">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" title="ALL" />
      <van-dropdown-item v-model="value2" title="ALL"/>
    </van-dropdown-menu>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
#share-bet-box {
  width: 100vw;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  .van-nav-bar {
    .van-nav-bar__content {
      .van-nav-bar__left {
        .van-badge__wrapper {
          color: #323233;
        }
      }
      .van-nav-bar__title {
        font-size: 14px;
      }
    }
  }
  .van-dropdown-menu{
    padding:0 20px;
    .van-dropdown-menu__bar{
        
        box-shadow:none;
        border-bottom:1px solid red;
       .van-dropdown-item{

    }
    }
    
  }
}
</style>