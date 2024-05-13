<template>
  <div id="share-topComp-box">
    <div class="box-top">
      <span class="iconfont icon-cuowu"></span>
      <img src="../assets/img/logo-dice.png" />
      <div class="top_title">
        <b>LURSSENVIP</b>
        <p>Online gaming at your fingertips</p>
      </div>
      <div class="top_button" @click="jump_download"><span>Download</span></div>
    </div>

    <div class="box-bottom">
      <span></span>
      <div class="bottom_title">
        <img class="title_img" src="../assets/img/logo-dice.png" />
        <b>LURSSENVIP</b>
      </div>
      <!-- <img
        class="bottom_flag"
        src="../assets/img/flag-img.png"
        @click="toast"
      /> -->

      <van-popover v-model:show="showPopover" theme="dark" :actions="actions" placement="bottom-end" :show-arrow="false" @select="onSelect">
        <template #reference>
          <img
            class="bottom_flag" 
            src="../assets/img/flag-img.png"     
          />
        </template>
      </van-popover>
      <!-- <div class="hint" v-show="show">
        <img src="../assets/img/flag-img.png" />
        <span>English</span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import flag from '../assets/img/flag-img.png'
const router = useRouter();

const showPopover =ref(false);
const actions =ref ([
      {url:'flag', text: 'English' },
    ]);
const jump_download = () => {
  router.push("/download");
};

const show = ref(false);
const toast = () => {
  show.value = !show.value;
};

const clickFunc = () =>{
  // showPopover.value = true
}

const onSelect = (v) =>{
  console.log(v, 'v------------')
};

const actionsList =ref ([
      { text: '选项一' },
      { text: '选项二' },
      { text: '选项三' },
    ]);
</script>

<style lang="scss">
#share-topComp-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  flex: 1;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 88px;

  .box-top {
    height: 48px;
    width: 100%;
    padding: 6px 0 6px 6px;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    > .icon-cuowu {
      font-size: 20px;
      padding: 0 12px 0 4px;
    }
    > img {
      height: 36px;
      width: 36px;
    }
    .top_title {
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 34px;
      > b {
        color: #000;
        font-size: 14px;
      }
      > p {
        font-size: 10px;
        color: #676767;
      }
    }
    .top_button {
      width: 94px;
      height: 30px;
      background: linear-gradient(#fe8a8a 0, #ee3838 100%);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      margin-right: 6px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .box-bottom {
    padding: 0 12px;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fad9d5;
    position: relative;
    .bottom_title {
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .title_img {
        width: 22px;
        height: 22px;
      }
      > b {
        padding-left: 10px;
        color: #323233;
        font-size: 15px;
      }
    }
    .bottom_flag {
      width: 24px;
      height: 24px;
    }
    // .van-popup{
    //     background:rgba(51, 51, 51,.9);
    //     border-radius:8px;
    // }
    .hint {
      width: 103px;
      height: 48px;
      background: rgba(51, 51, 51, 0.9);
      padding: 6px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      position: absolute;
      right: 0;
      bottom: -48px;
      > img {
        width: 24px;
        height: 24px;
      }
      > span {
        font-size: 14px;
        color: #ffffff;
      }
    }
  }
}
</style>