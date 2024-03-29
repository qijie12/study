<template>
 <div id="home">
     <topComp></topComp>
    <leftMenuComp></leftMenuComp>
     <img src="../assets/img/11.jpg" style="width:100%; height:600px;"/>

     <div class="content">
        <div class="into">
            <div class="into-l">
                <div class="enter"><img src="../assets/img/personage.png"/>未登录</div>
                <p class="look">登录查看荣耀值</p>
                <p class="weal">为千万玩家提供数亿福利</p>
                <hr>
                <ul>
                    <li>
                        <a href="">
                            <span>
                                <img src="../assets/img/icon1.png"/>
                             </span>
                            <p>荣耀权益</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                             <span>
                                <img src="../assets/img/icon1.png"/>
                             </span>
                            <p>荣耀权益</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                             <span>
                                <img src="../assets/img/icon1.png"/>
                             </span>
                            <p>荣耀权益</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <span>
                                <img src="../assets/img/icon1.png"/>
                             </span>
                            <p>荣耀权益</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="into-r">
                <div class="search">
                    <span>百款游戏福利一键即达></span>
                    <input type="">
                </div>
                <ul>
                    <li>
                        <p class="tvname">
                            <img src="../assets/img/12.png"/>
                            <span>仙境传说：爱如初见</span>
                        </p>
                        <p classs="num">
                            <b>3</b>
                            <span class="numr">个免费礼包></span>
                                         
                        </p>
                        <p class="gift">
                            <img src="../assets/img/lift.avif"/>
                            <span>每日礼包</span>
                        </p>
                        <p class="get">
                            <span class="getl"><a href="">领取礼包</a></span>
                            <span class="getr"><a href="">秒玩</a></span>
                        </p>
                    </li>
                    <li>
                        <p class="tvname">
                            <img src="../assets/img/12.png"/>
                            <span>仙境传说：爱如初见</span>
                        </p>
                        <p classs="num">
                            <b>3</b>
                            <span class="numr">个免费礼包></span>
                                         
                        </p>
                        <p class="gift">
                            <img src="../assets/img/lift.avif"/>
                            <span>每日礼包</span>
                        </p>
                        <p class="get">
                            <span class="getl"><a href="">领取礼包</a></span>
                            <span class="getr"><a href="">秒玩</a></span>
                        </p>
                    </li>
                    <li>
                        <p class="tvname">
                            <img src="../assets/img/12.png"/>
                            <span>仙境传说：爱如初见</span>
                        </p>
                        <p classs="num">
                            <b>2</b>
                            <span class="numr">个免费礼包></span>
                                         
                        </p>
                        <p class="gift">
                            <img src="../assets/img/lift.avif"/>
                            <span>每日礼包</span>
                        </p>
                        <p class="get">
                            <span class="getl"><a href="">领取礼包</a></span>
                            <span class="getr"><a href="">秒玩</a></span>
                        </p>
                    </li>
                    <li>
                        <p class="tvname">
                            <img src="../assets/img/12.png"/>
                            <span>仙境传说：爱如初见</span>
                        </p>
                        <p classs="num">
                            <b>4</b>
                            <span class="numr">个免费礼包></span>
                                         
                        </p>
                        <p class="gift">
                            <img src="../assets/img/lift.avif"/>
                            <span>每日礼包</span>
                        </p>
                        <p class="get">
                            <span class="getl"><a href="">领取礼包</a></span>
                            <span class="getr"><a href="">秒玩</a></span>
                        </p>
                    </li>
                </ul>  

            </div>
        </div>

        <div class="hotIp">
            <h1>热门IP同款即玩</h1>
            <span>换一换</span>
        </div>
       

     </div>

 </div>
</template>

<script setup>
  import {ref} from "vue";
import topComp from '../components/topComp.vue';
import leftMenuComp from '../components/leftMenuComp.vue';

import hero from '../assets/img/11.jpg';
import KPL from '../assets/img/pv_10025713403_em_601.webp';
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";


</script>

<style lang="scss">
#home {
  > img {
    height: 600px;
    width: 100%;

  }
//   .content {
//     width:calc(100% - 260px);
//     margin-left:220px;
//     padding-top:600px;
//     margin-right:40px;
   
//   }
  .content {
    width:100%;
    padding: 0 40px 0 220px;
    .into{
        width:100%;
        height:200px;
        // background-color:rgb(50, 53, 53);
        display:flex;
        .into-l{
            width:315px;height:210px;
            padding:15px;
            text-align:center;
            background-image:url('../assets/img/518edc17_pWVuZD5YsIgXv1CNlBYiHFI3ms1MvdKU.avif');
            margin-right:20px;
            border-radius:10px;
            overflow:hidden;
            .enter{
                color:#ffffff;
                font-size:14px; 
                display:flex;
                align-items:center;
                justify-content:center;  
                img{width:22px;height:22px;margin-right:10px;}
            }
            .look{
                color:#dbb75e;font-size:12px;
                padding:5px 0 20px 0;
            }
            .weal{
                color: #fff;font-size:14px;padding:10px 0;  
            }

            ul{
                display:grid;
                grid-template-columns:repeat(4,1fr);
                grid-gap:20px;
                width:100%;
                li{width:100%;
                   display:flex;
                span{border:1px solid rgb(97, 93, 93);
                    height:36px;width:36px;
                    border-radius:50%;
                    background-color:#4d4c4c;
                    display:block;
                     position: relative;
                 img{height:20px;width:20px;
                       position: absolute;
                      top: 50%;
                      left: 50%;
                     transform: translate(-50%, -50%);               
                }
                }
                
                p{font-size:10px;color:#dbb75e;}
                }
             }   
        }

        .into-r{
            flex:1;
            height:200px;
            // background-color:aqua;
            .search{
                height:30px;width:100%;
                display:flex;
                justify-content:space-between;
                margin-bottom:10px;
               span{font-size:18px;color:#dbb75e;} 
               input{
                height:28px;width:290px;
                border-radius:20px;
                background-image:url('../assets/img/search.png');
                background-repeat:no-repeat;
                background-position:255px 2px;
                padding-left:15px;
               }
            }
            ul{
                display:grid;grid-template-columns:repeat(4,1fr);
                width:100%;grid-gap:20px;
                li{ border-radius:10px;
                    height:170px;
                    padding:15px;
                    background-image:url('../assets/img/518edc17_pWVuZD5YsIgXv1CNlBYiHFI3ms1MvdKU.avif');
                   .tvname{
                    width:100%;
                    display:flex;
                    align-items:center;
                    padding-bottom:15px;
                    img{height:36px;width:36px;margin-right:10px;}
                    span{color:#ffffff;font-size:14px;}
                   } 
                   .num{
                    b{color:#dbb75e;display:block;}
                    .numr{
                        color:rgba(255, 255, 255, .8);
                        font-size:14px;
                    }
                   }
                   .gift{
                    padding-top:5px;
                    display:flex;
                    align-items:center;
                    img{height:14px;width:14px;}
                    span{color:rgba(255, 255, 255, .8);
                        font-size:12px;}
                   }
                   .get{
                    display:flex;
                    justify-content:space-between;
                    padding-top:15px;
                    span{
                        display:block;
                        height:32px;
                        width:135px;
                        border:1px solid rgb(136, 135, 135);
                        border-radius:20px;
                         text-align:center;line-height:30px;
                       
                    }
                    .getl{
                        background-color:rgba(255, 220, 20, .1);
                        a{color:#ffdc14;}
                    }
                    .getl:hover{background-color:rgb(201, 179, 56);}
                    .getr{
                        background-color:rgb(201, 179, 56);
                        a{color: #371e05;}
                    }
                   }
                }
            }
        }
    }
    .hotIp{
        margin:60px 0 20px 0;
        display:flex;
        justify-content:space-between;
        align-items:center;
       span{color:#4d4c4c;font-size:14px;}
       span:hover{color:#ffffff;}
    }
  }
}
</style>