<template>
  <div id="share-Card-box">
    <topComp></topComp>
    <div class="Card-con">
        <p>card</p>
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
]);
</script>

<style lang="scss">
  #share-Card-box{
    width:100%;
    height:100vh;
    background-color:#ffffff;
   .Card-con{
    padding:85px 15px 0 15px;
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