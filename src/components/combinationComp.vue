<template>
 <div id="share-combination-box">
   <div class="content">
    <div class="bigPicture">
        <img src="../assets/img/11.png"/>
        <div class="bigcontent">
            <img src=""/>
            <div>
                <p></p>
                <p></p>
            </div>
            <span><a href=""></a></span>
        </div>
    </div>

    <div></div>

   </div>


 </div>
</template>

<script setup>
 import {ref} from "vue";
</script>

<style lang="scss">
#share-combination-box{
    .content{
        height:500px;
        width:1643px;
        display:flex;
      .bigPicture{
        width:650px;height:500px;
        img{
            width:650px;height:370px;
        }

        .bigcontent{
            height:230px;
            width:100%;
        }
      }
    }
}
</style>