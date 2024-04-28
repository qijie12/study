<template>
  <div id="share-display-box">
    <div class="displayTop" @click="jumpMe">
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm.028 3a.803.803 0 0 1 .527.242l11.033 10.576c.234.22.381.524.412.843v.18c-.041.604-.565 1.132-1.175 1.155-.608.01-1.216 0-1.825.004-.003 3.184.004 6.369-.003 9.553-.009.745-.648 1.395-1.386 1.447h-4.433c-.37-.04-.687-.372-.677-.75-.003-2.157 0-4.315-.002-6.473.014-.142-.102-.28-.247-.275-1.486-.005-2.972 0-4.458-.002-.125-.014-.26.06-.285.188-.018.14-.007.28-.009.42v6.143c.007.373-.303.704-.668.749h-4.43a1.53 1.53 0 0 1-1.224-.794 1.527 1.527 0 0 1-.178-.753V20c-.61-.003-1.22.006-1.83-.005-.603-.024-1.121-.544-1.17-1.142v-.186a1.3 1.3 0 0 1 .389-.824c3.661-3.511 7.324-7.02 10.985-10.532A.918.918 0 0 1 19.922 7h.106z"
          fill="#ffffff"
          fill-rule="evenodd"
        ></path>
      </svg>
      <b>Agent Management</b>
      <span></span>
    </div>
    <div class="displayTit">
        <span class="iconfont icon-arrow-left" @click="jump"></span>
        <b>Promotion QR Code</b>
        <span @click="download()">Download</span>
    </div>

    <div class="displayCon" id="content-to-download">
      <img class="bg" src="../../assets/img/display-bg.jpg" /> 
      <img class="QR" src="../../assets/img/QR-code.png"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const jumpMe = () => {
  router.go(-2);
};
const jump=()=>{
    router.back()
};

const download=() =>{
    // 获取要下载内容的元素
    var content = document.getElementById("content-to-download");

    // 创建一个空的画布
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // 设置画布尺寸为要下载内容的尺寸
    canvas.width = content.offsetWidth;
    canvas.height = content.offsetHeight;

    // 将内容绘制到画布上
    context.drawWindow(window, 0, 0, content.offsetWidth, content.offsetHeight, "rgb(255,255,255)");

    // 将画布转换为图片并下载
    var link = document.createElement('a');
    link.download = 'content_image.png';
    link.href = canvas.toDataURL('');
    link.click();
}
</script>

<style lang="scss">
#share-display-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100vh;
  overflow:hidden;
  .displayTop {
    width: 100%;
    height: 50px;
    z-index:5;
    background: #fc9f9f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    position: relative;
    > b {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 13px;
      color: #ffffff;
    }
  }
  .displayTit {
      z-index:5;
      width: 100%;
      height: 40px;
      background: #212121;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      font-size: 14px;
      position: relative;
      > span {
        color: #ffffff;
        &:last-child {
          color: #2f7eda;
        }
      }
      > b {
        color: #ffffff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  .displayCon {
    width: 100%;
    height: 100%; 
    position:relative;
    .bg{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;top:-50px;
    }
    .QR{
        width:188px;
        height:188px;
        left:50%;
        top:44%;
        position:absolute;
        transform:translate(-50%,-50%);
    }
  }
}
</style>