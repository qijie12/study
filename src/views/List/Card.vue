<template>
  <div id="share-Card-box">
    <topComp></topComp>
    <div class="Card-con">
        <p>card</p>
        <ul>
           <li v-for="(item,index) in li_List" :key="index">
            <img :src="item.icon"/>
           </li>
        </ul>
    </div>
    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
 import {ref,onMounted} from "vue";
 import topComp from '../../components/topComp.vue';
 import bottomComp from '../../components/bottomComp.vue';
 import axios from "axios";
 import {useRoute,useRouter} from "vue-router";

import gamePicture2 from "../../assets/img/game_picture2.jpg";
import gamePicture5 from "../../assets/img/game_picture5.jpg";
import gamePicture6 from "../../assets/img/game_picture6.jpg";
import gamePicture7 from "../../assets/img/game_picture7.jpg";
import gamePicture8 from "../../assets/img/game_picture8.png";
import gamePicture9 from "../../assets/img/game_picture9.jpg";
import gamePicture10 from "../../assets/img/game_picture10.jpg";
const route=useRoute();
const router=useRouter();

const li_List =ref([
    {url:gamePicture2,},
    {url:gamePicture5,},
]);
const name = ref('')

const gamesFunc = () => {
  axios
    .get("https://minibk.disneygo.org/api/game/all-game-list")
    .then((res) => {
      console.log(res, "------------------------>");
      li_List.value = res.data.data.game_list[name.value]
      // console.log(res.data.data.game_list, 'game_list-----------')
      // console.log(res.data.data.game_list[name.value], 'game_list-----------')
    })
    .catch((err) => {});
};

onMounted(()=>{
  let params = new URL(window.location.href).searchParams.get('name')
  name.value = params;
   gamesFunc();
});
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