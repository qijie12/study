<template>
  <div id="share-display-box">
  
   <pinkTopComp @click="jumpMe"></pinkTopComp>
   
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
import pinkTopComp from '../../components/pinkTopComp.vue';
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
  .displayTit {
      z-index:5;
      width: 100%;
      height: 40px;
      background: #212121;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      margin-top:50px;
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