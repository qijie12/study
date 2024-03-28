<template>
 <div class="share-samllListComp-box">
    <ul>
        <li>
            <img src="../assets/img/1f68341597825237110.avif"/>
            <p> KPL春季赛 DRG vs WB </p>
            <span> WB击败DRG勇夺关键积分 </span>
        </li>
    </ul>
 </div>
</template>

<script setup>
 import {ref} from "vue";

 import 
 const gameList =ref([
    {
        url:KPL,
    }
 ])
</script>

<style lang="scss">
 .share-smallListComp-box{
    ul{
       display:flex;
       grid-template-columns:repeat(6,1fr);
       grid-gap:20px;
       height:100%;
      li{
        height:235px;
        width:100%;
        img{
            height:145px;
            width:100%;
        }
        p{color:#ffffff;font-size:16px;}
        span{color:rgb(74, 73, 73);font-size:14px;}
      } 
    }
 }
</style>