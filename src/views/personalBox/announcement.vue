<template>
  <div id="share-announ-box">
    <div class="announTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Announcement</b>
      <span></span>
    </div>

    <div class="announCon">
      <div class="visit">
        <p class="visitTit">⭐️⭐️To visit our official website</p>
        <p class="visitCon">
          ⭐️⭐️To visit our official website, be sure to use the link
          below,https:lkgame.xyz// Please remember! Make sure not provide
          personal data and personal transactions in any form and for any reason
          to other parties on behalf of LURSSENVIP. Our side does not make
          private chats or calls to all members. Please inform all
          Referrals/other Members about this to avoid fraud. Thank you for your
          attention and cooperation.
        </p>
        <p class="visitTime">
          <span class="time">2024-04-02 19:42:13</span>
          <span class="iconfont icon-youjiantou" @click="show"> </span>
        </p>
        <van-popup
          :overlay="false"
          z-index="2"
          v-model:show="showRight"
          :close-on-click-overlay="true"
          position="right"
          :style="{ width: '100%', height:'100%' }"
        >
          <van-nav-bar
            title="Announcement"
            left-arrow
            @click-left="onClickLeft"
          />
          <div class="vanBox">
            <div class="vanCon" v-for="(item,index) in vanConList" :key="index">
              <h4>{{item.title}}</h4>
              <p>{{item.publish_date}}</p>
              <div>{{item.content_text}}</div>
            </div>
             <!-- <div class="vanCon">
                  <h4>⭐️⭐️To visit our official website</h4>
                  <p>2024-04-02 19:42:13</p>
                  <div>⭐️⭐️To visit our official website, be sure to use the link below,https:lkgame.xyz// Please remember! Make sure not provide personal data and personal transactions in any form and for any reason to other parties on behalf of LURSSENVIP. Our side does not make private chats or calls to all members. Please inform all Referrals/other Members about this to avoid fraud. Thank you for your attention and cooperation.</div>
             </div> -->
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , onMounted} from "vue";
import {useRouter} from 'vue-router';
import {Announcement} from '../../api/Announcement';

const router = useRouter()
const showRight =ref(false);
const jumpMe = () => {
  router.go(-1)
}

const show = () =>{ 
    showRight.value=true
};
const onClickLeft = () => {
  showRight.value=false
};

const call_Announcement= async()=>{
  let params={
      type:1
  };
   let res= await Announcement(params);
   console.log(res,'Announcement-----------');
   vanConList.value=res.data
};

const vanConList=ref([])

onMounted(()=>{
  call_Announcement()
})

</script>

<style lang="scss">
#share-announ-box {
  width: 100vw;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: #ffffff;
  .announTop {
    width: 100%;
    height: 46px;
    // z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 15px;
    > b {
      font-size: 14px;
      color: #594735;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    > .icon-arrow-left {
      color: #303030;
      font-weight: 900;
    }
  }
  .announCon {
    width: 100%;
    padding: 10px 16px 0 16px;
    position:relative;
    .visit {
      padding: 15px;
      width: 100%;
      height: 108px;
      background: #fbfbfc;
      border-radius: 10px;
      box-shadow: 1px 8px 12px #0000001a;
      .visitTit {
        color: #594735;
        font-size: 16px;
      }
      .visitCon {
        color: #8c8e87;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px 0;
      }
      .visitTime {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
          color: #8c8e87;
          font-size: 12px;
        }
      }
      .van-popup{
        background:#f7f7f7;
        .vanBox{
          width:100%;
          height:calc(100vh - 46px);
          padding:16px;
          .vanCon{
            width:100%;
            height:100%;
            background:#ffffff;
            padding:15px;
            border-radius:10px;
            >h4{
              font-size:16px;
              font-weight:500;
              color:#594735;
            }
            >p{
              color:#8c8e87;
              font-size:12px;
              padding-bottom:15px;
              border-bottom:0.2px solid #ccc;
            }
            >div{
              padding-top:20px;
              font-size:14px;
              color: #61a951;
              line-height:22px;
            }
          }
        }
        .van-nav-bar {
          .van-nav-bar__content{
            .van-nav-bar__left{
              .van-badge__wrapper{
                  color:#594735;
              }          
            }
            .van-nav-bar__title{
              font-size:14px;
            }
          }
        }
      }
    }
  }
}
</style>