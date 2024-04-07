<template>
 <div id="share-games-box">
    <topComp></topComp>
    <div class="center-con">
       <img src="../assets/img/game_top_img.png"/>
       <p class="all_games">All games</p>
       <div class="all_letter"><b>All</b></div>
       <p class="hot">Hot</p>
       <ul>

<li v-for="(item,index) in liList" :key="index" > 
  <img :src="item.url"/>
    <div v-if="item.imageUrl">
        <img :src="item.imageUrl" alt="Image"/>
        <span>{{item.text}}</span>
   </div>
</li>

<!-- showText属性用于指示是否要显示文字，以及imageUrl属性用于指定图像的路径 -->
<!-- 
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
          <div>
            <img src="../assets/img/hot_background.png">
            <span>Hot</span>
          </div>
        </li>
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
        </li>
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
        </li>
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
        </li>
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
        </li>
        <li>
          <img src="../assets/img/game_picture2.jpg"/>
        </li>  -->
       </ul>  
    </div>






    <bottomComp></bottomComp>
 </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import gamePicture2 from "../assets/img/game_picture2.jpg";
import gamePicture5 from "../assets/img/game_picture5.jpg";
import gamePicture6 from "../assets/img/game_picture6.jpg";
import gamePicture7 from "../assets/img/game_picture7.jpg";
import gamePicture8 from "../assets/img/game_picture8.png";
import gamePicture9 from "../assets/img/game_picture9.jpg";
import gamePicture10 from "../assets/img/game_picture10.jpg";
import hot_pictuer from '../assets/img/hot_background.png';

const route = useRoute();
const router = useRouter();

const liList =ref([
  {
    url:gamePicture2,
    text:'HOT',
    imageUrl:hot_pictuer,
  },
  {
    url:gamePicture8,
    text:'HOT',
    imageUrl:hot_pictuer,
  },
  {
    url:gamePicture5,
    text:'HOT',
    imageUrl:hot_pictuer,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture7,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture2,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture5,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture2,
  },
  {
    url:gamePicture5,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture7,
  },
  {
    url:gamePicture8,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture7,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture2,
  },
  {
    url:gamePicture5,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture8,
  },
  {
    url:gamePicture7,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture5,
  },
  {
    url:gamePicture2,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture8,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture2,
  },
  {
    url:gamePicture5,
  },
  {
    url:gamePicture6,
  },
  {
    url:gamePicture8,
  },
  {
    url:gamePicture9,
  },
  {
    url:gamePicture10,
  },
  {
    url:gamePicture2,
  },
])
</script>

<style lang="scss">
 #share-games-box{
   .center-con{
    width:100%;
    padding:65px 15px 200px 15px;
    background:rgb(255, 255, 255);
    
    >img{
      width:100%;
      height:156px;
      border-radius:5px;
    }
    .all_games{
      font-size:18px;
      color:#303030;
      font-weight:bold;
      padding:20px 0;
    }
    .all_letter{
      width:86px;
      height:40px;
      border:1px solid transparent;
      border-radius:5px;
      background-color:rgb(252, 206, 58);
      display:flex;
      align-items:center;
      justify-content:center;
      b{
        color:#303030;
        font-size:14px;
      }    
    }
    .hot{
        font-size:16px;
        padding:10px 0;
        color: #303030;
      }
     ul{
      padding-left:4px;
      width:100%;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      grid-gap:10px;
      li{
        width:100%;
        height:100px;
        position:relative;
        img{
          width:100%;
          height:100%;
        }
        >div{
          width:28px;
          height:24px;
          position:absolute;
          left:-3px;
          top:-4px;
          color:#fff;
          font-size:10px;        
          font-weight: 700;
          font-family: PingFang SC-Bold, PingFang SC;
          display:flex;
          justify-content:center;
          align-items:center;
          img{
            position:absolute;
            left:-1px;
          }
          span{
            position:absolute;
            left:2px;
            top:2px;
          }
        }
      }
     } 
   }
 }
</style>