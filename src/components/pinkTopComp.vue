<template>
 <div id="share-pinkTopComp-box">
   <div class="agentTop">
      <svg @click="jumpMe"
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
 </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const jumpMe = () => {
  router.back();
};
</script>

<style lang="scss">
 #share-pinkTopComp-box{
   font-family: PingFang SC-Bold, PingFang SC;
   width: 100%;
   height: 50px;
   z-index: 10;
   background: #fc9f9f;
   position:fixed;
   top:0;
   .agentTop {
    width: 100%;
    height: 50px;
    background: #fc9f9f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    position: relative;
    >b{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 13px;
      color: #ffffff;
    }
  }
 }
</style>