<template>
  <div id="share-me-box">
    <div class="me-bg"></div>

    <div class="me-top">
      <div class="information">
        <div class="information_left">
          <img src="../assets/img/Cartoonhead.png" />
          <div class="information_con">
            <p class="hlm">hlm</p>
            <p class="id">
              <span class="id_num">{{id}}</span>
              <span class="iconfont icon-fuzhi" @click="copyID">
              </span>
              
            </p>
          </div>
        </div>
        <div class="information_right"><i>VIP2</i></div>
      </div>
      <div class="balance_box">
        <p class="balance">Balance</p>
        <div class="money">
          <div class="num-box">
            <span class="num">₹ 180.00</span>
            <span class="iconfont icon-xuexiao"></span>
          </div>

          <van-button type="primary" to="deposit"> Deposit </van-button>
        </div>
      </div>

      <ul class="func">
        <li>
          <img src="../assets/img/withsrawal-img2.png" />
          <span @click="jumpWith">Withdrawal</span>
        </li>
        <li>
          <img src="../assets/img/financial_record.png" />
          <span>Financial Records</span>
        </li>
        <li>
          <img src="../assets/img/cs-img.png" />
          <span>CS</span>
        </li>
      </ul> 
    </div>
    
    <ul class="personage">
      <li v-for="(item,index) in personageList" :key="index" @click="jumpPerson(item)">
        <img :src="item.url"/>
        <div class="personage_title">
          <span class="tit">{{item.text}}</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </li>
        <!-- <li>
          <img src="../assets/img/personage-img.png"/>
          <div class="personage_title">
            <span class="tit">Personal Info</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/agent_img222.png"/>
          <div class="personage_title">
            <span class="tit">Agent Management</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/bet-records.png"/>
          <div class="personage_title">
            <span class="tit">Bet Records</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/announcement-img.png"/>
          <div class="personage_title">
            <span class="tit">Announcement</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/notice-img.png"/>
          <div class="personage_title">
            <span class="tit">Notice</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li> -->
    </ul>

    <ul class="set">
       <li v-for="(item,index) in setList" :key="index" @click="jump(item)">
        <img :src="item.url"/>
        <div class="personage_title">
          <span class="tit">{{item.text}}</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </li>
       <!-- <li>
          <img src="../assets/img/FAQ-img.png"/>
          <div class="personage_title">
            <span class="tit">FAQs</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
       <li>
          <img src="../assets/img/about-us-img.png"/>
          <div class="personage_title">
            <span class="tit">About Us</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
         <li>
          <img src="../assets/img/logout-img.png"/>
          <div class="personage_title">
            <span class="tit">LOGOUT</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li> -->
    </ul>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import bottomComp from '../components/bottomComp.vue';
import { showSuccessToast} from 'vant';
import personage from '../assets/img/personage-img.png';
import agent from '../assets/img/agent_img222.png';
import bet_Records from '../assets/img/bet-records.png';
import announcement from '../assets/img/announcement-img.png';
import notice from '../assets/img/notice-img.png';
import FAQ from '../assets/img/FAQ-img.png';
import about_us from '../assets/img/about-us-img.png';
import logout from '../assets/img/logout-img.png';

const router =useRouter();

const id=ref('ID:10000507');
const copyID =()=>{
   const input = document.createElement('input');
      input.setAttribute('value', id.value);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      // alert('已复制ID: ' + id.value);
      showSuccessToast('Successful \n replication')
};


const jumpWith =()=>{
  router.push({
    path: '/deposit',
    query: {
      tab: 'withdrawal'
    }
  })
};

const personageList=ref([
  {
    url:personage,
    text:'Personal Info',
    path:'/personalInfo'
  },
  {
    url:agent,
    text:'Agent Management',
  },
  {
    url:bet_Records,
    text:'Bet Records',
  },
  {
    url:announcement,
    text:'Announcement',
  },
  {
    url:notice,
    text:'Notice',
  },
])

const setList =ref([
  {
    url:FAQ,
    text:'FAQs',
    path:'/FAQ_About',
  },
  {
    url:about_us,
    text:'About Us',
    path: '/FAQ_About',
    query: {
      tab: 'About Us'
    }
  },
  {
    url:logout,
    text:'LOGOUT',
    path:'/hello',
  },
])

const jumpPerson=(params)=>{
  if(params.path){
    router.push(params.path)
  }
};

const jump = (params) => {
  if(params.path && !params.query) {
    router.push(params.path)
  }else if(params.query){
    router.push({
      path: params.path,
      query:params.query,
    })
  }
}

// const getRoute = (path, query) => {
//   if(!path || !query) {
//     console.log("path/query不存在")
//     return false
//   }
//    console.log("path/query存在")
// }

// getRoute('1', '2')

</script>

<style lang="scss">
#share-me-box {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(247, 247, 247) !important;
  .me-bg {
    width: 220%;
    height: 800px;
    background: rgb(252, 159, 159);
    padding: 10px 16px 0 16px;
    border-radius: 50%;
    position: absolute;
    left: -60%;
    top: -70%;
  }
  .me-top {
    margin-top:10px;
    width: 100%;
    padding: 10px 16px 0 16px;
    position: relative;
    .information {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 70px;
      .information_left {
        display: flex;
        > img {
          width: 60px;
          height: 60px;
          margin-right: 5px;
        }
        .information_con {
          .hlm {
            color: #ffffff;
            font-size: 14px;
            padding-bottom: 5px;
          }
          .id {
            .id_num {
              display: inline-block;
              width: 97px;
              height: 30px;
              border-radius: 20px;
              background: rgb(254, 207, 207);
              font-size: 14px;
              color: #333;
              text-align: center;
              line-height: 30px;
              font-weight: 300;
            }
            .icon-fuzhi {
              padding-left: 5px;
              color: rgb(255, 255, 255);
            }
          }
        }
      }
      .information_right {
        width: 73px;
        height: 25px;
        background-image: url("../assets/img/vip2222.png");
        background-size: cover;
        position: relative;
        i {
          color: #ffffff;
          font-size: 13px;
          position: absolute;
          font-weight: bold;
          left: 30px;
          top: 6px;
        }
      }
    }
    .balance_box {
      margin: 0 auto;
      width: 311px;
      height: 74px;
      border-radius: 10px;
      background: rgb(84, 25, 6);
      padding: 8px 8px 0 8px;
      .balance {
        color: #fff9;
        font-size: 13px;
        width: 100%;
      }
      .money {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .num-box {
          width: 100%;
          .num {
            font-weight: bold;
            font-size: 20px;
            color: #f9dfa4;
            padding-right: 5px;
          }
          > .icon-xuexiao {
            color: rgb(210, 74, 70);
            font-weight: bold;
          }
        }
        .van-button {
          width: 75px;
          height: 29px;
          background: linear-gradient(180deg, #f5e9b8, #caa143 49.12%, #c79e3e);
          color: #561803;
          font-weight: 700;
          font-size: 14px;
          border-color: #000;
        }
      }
    }
    .func {
      margin: 0 auto;
      width: 343px;
      height: 82px;
      background: #ffffff;
      border-radius: 10px;
      z-index: 2;
      position: absolute;
      top: 145px;
      box-shadow: #e5e7eb;
      border: 1px solid #e5e7eb;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      > li {
        padding: 10px 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 13px;
        > img {
          width: 32px;
          height: 32px;
        }
        > span {
          padding-top: 3px;
          width: 100px;
        }
      }
    }
    
  }
  .personage{
     margin-top:85px;
      display:grid;
      grid-template-rows:repeat(5,1fr);
      >li{
        padding:0 15px;
        width:100%;
        height:56px;
        background:rgb(255, 255, 255);
        // border-bottom-color:#333;
        display:flex;
        align-items:center;
           >img{
            width:24px;
            height:24px;
            margin-right:15px;      
        }
         .personage_title{
           flex:1;
           display:flex;
           justify-content:space-between;
           align-items:center;
           height:100%;
           border-bottom:1px solid #e5ebf1;
           .tit{
            color:#594735;
            font-size:14px;
           }
         }
      }
    }
  .set{
      margin-top:12px ;
      display:grid;
      grid-template-rows:repeat(3,1fr);
    
      >li{
        padding:0 15px;
        width:100%;
        height:56px;
        background:rgb(255, 255, 255);
        // border-bottom-color:#333;
        display:flex;
        align-items:center;
           >img{
            width:24px;
            height:24px;
            margin-right:15px;      
        }
         .personage_title{
           flex:1;
           display:flex;
           justify-content:space-between;
           align-items:center;
           height:100%;
           border-bottom:1px solid #e5ebf1;
           .tit{
            color:#594735;
            font-size:14px;
           }
         }
      }
    }  
}
</style>