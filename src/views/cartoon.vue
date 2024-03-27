<template>
  <div id="home">
     <div class="top">
      <span></span>
      <span class="input-box">
        <input type="" class="import" />
        <input type="" class="search" />
      </span>
      <div>
        <a href v-for="(item, index) in topList" :key="index"
          ><img :src="item.url"
        /></a>
      </div>
     </div>

    <div id="homePage">
      <a href class="logo"><img src="../assets/img/tx.png" /></a>
      <div class="homePage-Con">
        <div class="front">
          <a
            name="1"
            href="#"
            v-for="(item, index) in homePageList"
            :key="index"
            >{{ item.name }}<img :src="item.url"
          /></a>
        </div>
        <hr />
        <div class="agreement">
          <a href="" v-for="(item, index) in agreementList" :key="index">{{
            item.text
          }}</a>
        </div>
        <hr />
        <div class="licence">
          <a href="">粤网文[2023]2882-203号</a>
          <a href="">网络视听许可证1904073号</a>
          <a href="">粤公网安备<br />44030002000001号</a>
          <p class="AT">
            <a href="">关于腾讯</a><i>|</i><a href="">About Tencent</a>
          </p>
          <p><a href="">服务条款</a><i>|</i><a href="">广告设置</a> <i>|</i></p>
          <p><a href="">腾讯招聘 客服中心</a><i>|</i></p>
          <a href="">网站导航</a>
          <a href="">Copyright © 1998 - 2024 Tencent. All Rights Reserved.</a>
          <a href>腾讯公司 版权所有</a>
          <img src="../assets/img/1f68341597825237110.avif" />
        </div>
      </div>
    </div>

    <div id="cartoon">
        <img src="../assets/img/10.jpg" />
        <div id="content">
            <div id="vault">
<a href="" v-for="(item,index) in vaultList" :key="index">
    {{item.text}}</a>
 
            </div>

            <div id="hotbroadcast">
                <span></span>
                <div class="change">换一换</div>
            </div>

            <ul id="hotpicture">
            <li v-for="(item,index) in hotpictureList" :key="index">
                <img :src="item.url"/>
                <a href="">
                    <p>{{item.name}}</p>
                    <span>{{item.synopsis}}</span>
                </a>
            </li>

             
            </ul>

            <div id="dailyUpdate">

            <div class='week'>
              <h1>每日更新</h1>
              <a href="" v-for="(item,index) in weekList" :key="index">
                {{item.text}}
              </a>
              <!-- <a href="">周一</a>
              <a href="">周二</a>
              <a href="">周三</a>
              <a href="">周四</a>
              <a href="">周五</a>
              <a href="">周六</a>
              <a href="">周日</a> -->
            </div>
            <ul>
            <li v-for="(item,index) in dailyUpdateList" :key="index">
                <img :src="item.url"/>
                <p>{{item.name}}</p>
                <span>{{item.synopsis}}</span>
            </li>

            </ul>
            </div>

            <div id="recommend">
              <h1>为你推荐</h1>
            
            </div>

            <ul id="recommendtv">
            <li v-for="(item,index) in recommendtvList" :key="index" >
                <img :src="item.url"/>
                <div class="caption">
                    <img :src="item.src"/>
                    <div class="introduce">
                      <p class="tvname">{{item.tvname}}</p>
                      <p class="name">{{item.name}}</p>
                      <span>{{item.synopsis}}</span>
                    </div>
                    
                </div>
            </li>
            </ul>
        </div>

    </div>
      
  </div>
</template>

<script setup>
  import {ref} from "vue";
 import VIP from "../assets/img/VIP.png";
 import game from "../assets/img/game.png";
 import time from "../assets/img/time.png";
 import screenRecording from "../assets/img/screenRecording.png";
 import download from "../assets/img/download.png";
 import personage from "../assets/img/personage.png";
 import collect from "../assets/img/收藏.png";
 import odeToJoy from "../assets/img/1.avif";
 import playmate from "../assets/img/2.avif";
 import easyLife from "../assets/img/3.avif";
 import love from "../assets/img/4.avif";
 import blossoms from "../assets/img/5.avif";
 import cartoonCharacter from "../assets/img/10.jpg";

const topList = ref([
  {
    url: VIP,
  },
  {
    url: game,
  },
  {
    url: time,
  },
  {
    url: screenRecording,
  },
  {
    url: download,
  },
  {
    url: personage,
  },
]);

const homePageList = ref([
  {
    name: '首页',
    url: collect,
  },
  {
    name: '中视频',
    url: collect,
  },
  {
    name: '电视剧',
    url: collect,
  },
  {
    name: '电影',
    url: collect,
  },
  {
    name: '综艺',
    url: collect,
  },
  {
    name: '动漫',
    url: collect,
  },
  {
    name: '少儿',
    url: collect,
  },
  {
    name: '体育',
    url: collect,
  },
  {
    name: '纪录片',
    url: collect,
  },
  {
    name: '短剧',
    url: collect,
  },
  {
    name: 'NBA',
    url: collect,
  },
  {
    name: 'VIP会员',
    url: collect,
  },
  {
    name: '游戏中心',
    url: collect,
  },
  {
    name: '传奇游戏库',
    url: collect,
  },
  {
    name: '科技',
    url: collect,
  },
  {
    name: '音乐',
    url: collect,
  },
  {
    name: 'F1',
    url: collect,
  },
  {
    name: 'WWE',
    url: collect,
  },
  {
    name: '知识',
    url: collect,
  },
  {
    name: '学堂',
    url: collect,
  },
  {
    name: '艺术',
    url: collect,
  },
  {
    name: '财经',
    url: collect,
  },
  {
    name: '生活',
    url: collect,
  },
  {
    name: '时尚',
    url: collect,
  },
  {
    name: '健康',
    url: collect,
  },
  {
    name: '育儿',
    url: collect,
  },
  {
    name: '汽车',
    url: collect,
  },
  {
    name: '棋牌游戏库',
    url: collect,
  },
]);

const vaultList =ref([
    {text:'动漫片库'},
    {text:'国漫'},
    {text:'日漫'},
    {text:'2D动画'},
    {text:'3D动画'},
    {text:'经典'},
    {text:'战斗'},
    {text:'魔幻'},
    {text:'科幻'},
    {text:' 推理'},
])

const hotpictureList = ref([
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        ssynopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
       synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
       synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
       synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
       synopsis:' 永恒的柯南 ',
    },
    {
        url:blossoms,
        name:' 名侦探柯南[普通话版] ',
        synopsis:' 永恒的柯南 ',
    },
])

const weekList = ref([
    {text:'周一'},
    {text:'周二'},
    {text:'周三'},
    {text:'周四'},
    {text:'周五'},
    {text:'周六'},
    {text:'周日'},
]) 

const dailyUpdateList = ref([
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
    {
     url:cartoonCharacter,
     name:'从红月开始',
     synopsis:'会员看全集'   
    },
])

const recommendtvList = ref ([
    {
        url:odeToJoy,
        src:easyLife,
        tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
         tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
        tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
    {
        url:odeToJoy,
        src:easyLife,
        tvname:' 小品一家人 ',
        name:'小品',
        synopsis:' 原创动画 校园日常 小品  '
    },
])


</script>

<style lang="scss">
   #home {
  .top {
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: rgba(67, 66, 66, 0.5);
    height: 84px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    .input-box {
      height: 48px;
      width: 480px;
      border: 1px solid transparent;
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      position:relative;
     transform:translate(50%,0);
      .import {
        height: 48px;
        width: 420px;
        border-right: none;
        padding-left: 20px;
      }
      .search {
        height: 48px;
        width: 60px;
        border-left: none;
        background-image: url('../assets/img/search.png');
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    a {
      padding: 0 15px;
    }
  }
  #homePage {
    width: 210px;
    height: 100vh;
    top: 0;
    padding: 20px 0 20px 20px;
    position: fixed;
    z-index: 1;
    // background-color:rgba(230, 233, 240,.45);
    .logo {
      top: 0;
    }
    .homePage-Con {
      overflow-y: scroll;
      height: 100%;
      a {
        padding: 10px 0;
        display: flex;
        align-items: center;
        font-size: 16px;
      }
      .front {
        direction: rtl;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 20px;
      }
      .agreement {
        a {
          font-size: 12px;
        }
      }
      .licence {
        padding-bottom: 60px;
        a {
          font-size: 12px;
          padding: 5px 0;
        }
        p {
          display: flex;
          align-items: center;
          color: #474646;
          i {
            font-style: unset;
            margin: 0 5px;
          }
        }
        img {
          width: 122px;
          height: 52px;
        }
      }
    }
  }
  #cartoon{
    > img {
      height: 600px;
      width: 100%;
      background-color: rgba(20, 20, 20, 0.2);
      top: 0;
      left: 0;
    }
    #content {
      padding: 0 40px 0 220px;
      width: 100%;
      #vault {
        width: 100%;
        height: 48px;
        display: flex;
        font-size:16px;
        align-items: center;
        justify-content:space-between;
        margin-bottom:30px;
       a{border:1px solid rgb(65, 64, 64);width:152px;height:40px;
         background-color:#ffffff1A;color:#ffffff99;
         text-align:center;line-height:40px;
         border-radius:20px;
        }
      }
      #hotbroadcast{
        display:flex;align-items:center;justify-content:space-between;
        .change{color:#474646;font-size:14px;}
        .change:hover{color:#ffffff;}
      }

      #hotpicture {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 10px 0;
        li {
          height: 210px;
          width: 100%;
          img {
            height: 150px;
            width: 100%;
            overflow: hidden;
            border-radius: 10px;
          }
          a {
            p {
              color: #ffffff;
              font-size: 16px;
            }
            span {
              color: #474646;
              font-size: 14px;
            }
          }
        }
        li:hover {
          border-radius: 10px;
          border: 1px solid rgb(107, 106, 106);
          background-color: rgb(98, 36, 36, 0.3);
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 180px 160px;
        }
      }

     #dailyUpdate{
        .week{display:flex;align-items:center;
            h1{color:#ffffff;}
            a{color:#ffffff99;font-size:20px;padding-right:20px;}
        }
       ul{margin-bottom:30px;
         width:100%;display:grid;
         grid-template-columns:repeat(6,1fr);grid-gap:20px;
         li{width:100%;height:210px;
            img{height:145px;width:100%;border-radius:10px;overflow:hidden;}
            p{color:#ffffff;font-size:16px;}
            span{color:#474646;font-size:14px;}
         }
         li:hover{border:1px solid rgb(74, 73, 73);
                  border-radius:10px;overflow:hidden;
                  }
       }

     }

      #recommend {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;

        .science {
          flex: 1;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          span > a {
            color: white;
          }
        }
      }
      #recommendtv {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        li {
          height: 400px;
          width: 100%;
          border: 1px solid rgb(83, 82, 82);
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          background-color: #313131;
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 460px 310px;
          img {width:100%;
            height: 300px;
          }
          .caption {
            padding: 10px;
            height: 100px;
            display: flex;
            img {
              height: 80px;
              width: 57px;
              margin-right: 5px;
            }
            .introduce {
                
              .tvname{
                color: #ffffff;
                font-size: 20px;
              }
              .name{
                color: #474646;
                font-size: 14px;
              }
              span {
                color: #ffffff;
                font-size: 16px;
              }
            }
          }
        }
      }
    }

  }
}
</style>