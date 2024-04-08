<template>
  <div id="share-Puzzle-box">
    <topComp></topComp>
    <div class="Puzzle-con">
        <p>puzzle</p>
        <ul>
           <li v-for="(item,index) in ul_List" :key="index">
            <img :src="item.url"/>
           </li>
        </ul>
    </div>
    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
 import {ref} from "vue";
 import topComp from '../../components/topComp.vue';
 import bottomComp from '../../components/bottomComp.vue';

import gamePicture2 from "../../assets/img/game_picture2.jpg";
import gamePicture5 from "../../assets/img/game_picture5.jpg";
import gamePicture6 from "../../assets/img/game_picture6.jpg";
import gamePicture7 from "../../assets/img/game_picture7.jpg";
import gamePicture8 from "../../assets/img/game_picture8.png";
import gamePicture9 from "../../assets/img/game_picture9.jpg";
import gamePicture10 from "../../assets/img/game_picture10.jpg";

const ul_List =ref([
    {url:gamePicture2,},
    {url:gamePicture5,},
    {url:gamePicture6,},
    {url:gamePicture7,},
    {url:gamePicture8,},
    {url:gamePicture9,},
    {url:gamePicture2,},
    {url:gamePicture10,},
    {url:gamePicture5,},
    {url:gamePicture5,},
    {url:gamePicture6,},
    {url:gamePicture7,},
    {url:gamePicture8,},
    {url:gamePicture9,},
    {url:gamePicture2,},
    {url:gamePicture10,},
    {url:gamePicture5,},
]);
</script>

<style lang="scss">
  #share-Puzzle-box{
    width:100%;
    background-color:#ffffff;
   .Puzzle-con{
    padding:85px 15px 70px 15px;
    >p{
       font-weight:bold;
       font-size:18px;
    }
    >ul{
        width:100%;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap:15px;
        margin-top:20px;
        li{
            width:100%;
            height:105px;
            img{
                width:100%;
                height:100%;
            }
        }
    }
   }
  }
</style>