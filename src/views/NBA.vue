<template>
  <div id="home">
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>

    <div id="sports">
      <img src="../assets/img/6.avif" />
      <div id="content">
       <div id="nbaList">
        <div id="sportsVip">
          <a href="">体育超级VIP | 首3月40元/月</a>
        </div>
        <div id="vault">
          <a href=""> 体育片库 </a>
          <a href=""> NBA </a>
          <a href=""> WWE </a>
          <a href=""> CBA </a>
          <a href=""> XGAMES </a>
          <a href=""> 功夫搏击 </a>
          <a href=""> 极限运动 </a>
          <a href=""> 足球 </a>
        </div>
      </div>

        <div id="hotbroadcast">
          <h1>热门赛程</h1>
          <div class="change">全部赛事></div>
        </div>

        <ul id="schedule">
          <li v-for="(item,index) in scheduleList" :key="index">
             <p>{{item.tvname}}</p>
             <div>
              <p>{{item.name}}</p>
              <span>{{item.synopsis}}</span>
             </div>
          </li>
  
        </ul>

        <div id="recommend">
          <h1>NBA🏀勇士仅领先火箭1胜场</h1>
          <span>换一换</span>
        </div>

        <!-- <ul id="NBA">
          <li v-for="(item,index) in NBAList" :key="index">
            <img :src="item.url"/>
            <p>{{item.text}}</p>
            <span>{{item.synopsis}}</span>
          </li>
        </ul> -->
        <hotBroadcastComp :list="NBA"></hotBroadcastComp>

        <div id="recommend">
          <h1>球星⭐精彩发挥不错过</h1>
          <span>换一换</span>
        </div>

        <ul id="quintessence">
        <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>

    
        </ul>

        <h1>TOP⚡十佳五佳浓缩精华</h1>
        <ul id="quintessence">
 <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>
          
        </ul>

        <h1>回放▶️焦点之战随时回看</h1>
        <ul id="quintessence">
           <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>
          
        </ul>

        <h1>原创✨天天都有诚意之作</h1>
        <ul id="quintessence">
           <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>
          
        </ul>

        <h1>本赛季单场高分排行</h1>
        <ul id="quintessence">
           <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>
         
        </ul>

        <h1>纪录片✌ 球迷尊享致敬传奇</h1>
        <ul id="quintessence">
           <li v-for="(item,index) in quintessenceList" :key="index">
          <img :src="item.url"/>
          <p>{{item.text}}</p>
          <span>{{item.synopsis}}</span>
        </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import odeToJoy from '../assets/img/1.avif';
import playmate from '../assets/img/2.avif';
import easyLife from '../assets/img/3.avif';
import love from '../assets/img/4.avif';
import blossoms from '../assets/img/5.avif';
import game from '../assets/img/6.avif';

import topComp from "../components/topComp.vue";
import leftMenuComp from "../components/leftMenuComp.vue";
import hotBroadcastComp from "../components/hotBroadcastComp.vue";

const vaultList =ref([
  {text:'体育片库'},
  {text:'NBA'},
  {text:'WWE'},
  {text:'CBA'},
  {text:'XGAMES'},
  {text:'功夫搏击'},
  {text:'极限运动'},
  {text:'足球'},
])

const scheduleList =ref([
  {
    tvname:'体育VIP',
    name:'进行中',
    synopsis:'23-24赛季常规赛 雷霆vs雄鹿重播'
  },
  {
    tvname:'畅享赛事',
    name:'2024-03-25 19:00:00',
    synopsis:'23-24赛季常规赛 雷霆vs雄鹿重播'
  },
  {
    tvname:'体育VIP',
    name:'进行中',
    synopsis:'有球必应：联盟判罚新尺度詹杜库谁吃亏？勇士火箭谁能进入附加赛？'
  },
])

const NBAList = ref([
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
  {
    url:love,
    text:'詹眉最后4分钟得13分',
    synopsis:'力挽狂澜！一举拿下比赛',
  },
])

const quintessenceList = ref([
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
  {
    url:game,
    text:'湖人vs雄鹿',
    synopsis:'双加时热血逆转',
  },
])

</script>

<style lang="scss">
#home {
  
  #sports {
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
      

      #nbaList{
               height:48px;
               width:100%;
                margin-bottom: 30px;               
                display: flex;
                align-items:center;              
               
        #sportsVip {
          width: 295px;
          height: 40px;
          line-height:40px;
          border-radius:20px;border:1px solid red;
          text-align:center;
          background-color:rgba(255, 205, 73, .15);
          margin-right:20px;

          a{color:#ffdf8a;}
          }
       
     
      #vault {
        border-left:#848383 1px solid;
        padding-left:20px;
        flex:1; 
        height: 40px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
       
        .vip {
          height: 40px;
          width: 250px;
          background-color: #ffcd4926;
          color: #ffdf8a;
        }

        a {
          border: 1px solid rgb(65, 64, 64);
          width: 150px;
          height: 40px;
          background-color: #ffffff1a;
          color: #ffffff99;
          text-align: center;
          line-height: 40px;
          border-radius: 20px;
        }
      }
      }
      #hotbroadcast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .change {
          color: #474646;
          font-size: 16px;
        }
        .change:hover {
          color: #ffffff;
        }
      }

      #schedule {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 20px 0;
        position: relative;
        li {
          height: 170px;
          width: 100%;
          border: 1px solid rgb(85, 84, 84);
          border-radius: 20px;
          overflow: hidden;

          > p {
            height: 50px;
            width: 100%;
            padding: 10px;
            color: #ff6022;
            background: rgba(255, 167, 133, 0.2);
          }
          div {
            height: 120px;
            width: 100%;
            padding: 20px 10px;
            background-color: #313131;
            font-size: 16px;
            background-image: url('../assets/img/独播.png');
            // position: absolute;
            background-repeat: no-repeat;
            background-position: 480px 10px;
            P {
              color: #848383;
              padding-bottom: 20px;
            }
            span {
              color: #ffffff;
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

      #recommend {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
        span {
          color: #848383;
          font-size: 14px;
        }
        span:hover {
          color: #ffffff;
        }
      }

      #NBA {
        height: 460px;
        width: 100%;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(6, 1fr);

        li {
          height: 230px;
          width: 100%;

          img {
            border-radius: 20px;
            overflow: hidden;
            height: 140px;
            width: 100%;
          }
          p {
            color: #ffffff;
            font-size: 16px;
          }
          span {
            color: #646363;
            font-size: 14px;
          }
        }
      }

      #quintessence {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        li {
          height: 230px;
          width: 100%;
          img {
            height: 140px;
            width: 100%;
            border-radius: 20px;
          }
          p {
            color: #ffffff;
            font-size: 16px;
          }
          span {
            color: #848383;
            font-size: 14px;
          }
        }
      }

      h1 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
