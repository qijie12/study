<template>
  <div id="share-member-box">
    <pinkTopComp @click="jumpMe"></pinkTopComp>

    <div class="head">
      <span class="iconfont icon-arrow-left" @click="jump()"></span>
      <b>Member</b>
      <div class="unit">
        <span>Currency: </span>
        <span>INR</span>
      </div>
    </div>

    <div class="searchBox">    

      <van-collapse v-model="activeNames">
        <van-collapse-item title="Filter" name="1">
          <h4>Data time</h4>
          <p>
            <div>2024-04-29 00:00:00</div>
            <span>To</span>
            <div>2024-04-29 23:59:59</div>
          </p>
          <hr style="border:0.2px solid #414446;">
          <h5>Level</h5>
          <ul>
            <li v-for="(item,index) in liList" :key="index"
            @click="bright(index)"
            :class="{active:liListIndex===index}"
            >
                {{item.text}}
            </li>
        
          </ul>
        </van-collapse-item>
      </van-collapse>
      <div class="search">
         <input type="" placeholder="Please enter Upper-level user name" />
        <i class="van-badge__wrapper van-icon van-icon-search"></i>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import pinkTopComp from "../../components/pinkTopComp.vue";
const activeNames = ref(['1']);
const router = useRouter();
const jumpMe = () => {
  router.go(-2);
};
const jump = () => {
  router.back();
};

const liListIndex=ref(0)
const bright=(index)=>{
   liListIndex.value=index
};

const liList=ref([
    {text:'Offline Lv.1'},
    {text:'Offline Lv.1-2'},
    {text:'Offline Lv.1-3'},
    {text:'Offline Lv.1-4'},
    {text:'All levels'},
]);


</script>

<style lang="scss">
#share-member-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #2a2c2c;
  > .head {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    background: #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: relative;
    > .icon-arrow-left {
      color: #6a6a68;
      font-weight: bold;
    }
    > b {
      color: #ffffff;
      font-size: 16px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 600;
    }
    .unit {
      font-size: 14px;
      color: #6a6a6a;
      > span:last-child {
        color: #177ddc;
      }
    }
  }
  .searchBox {
    width: 100%;
    height: 55px;
    background-color: #2a2c2c;
    display: flex;
    align-items: center;
    position: relative;  
    .van-collapse{
    width:100%;
    height:55px;   
   &::after{
            display:none;
          }
    .van-collapse-item{
        height:100%;
        .van-cell{
          padding-left:300px;
          height:100%;
          background-color:#2a2c2c;
          display: flex;
          align-items: center;
          &::after{
            display:none;
          }
          .van-cell__title{
            color:#8f8f8f;
            font-size:15px;
          }
        }
        .van-collapse-item__wrapper{
            .van-collapse-item__content{
                background:#2a2c2c;
                height:381px;
                padding:12px 0;
                >h4{
                    margin:0px 0 15px 0;
                    font-size:16px;
                    font-weight:400;
                    padding:0 20px;
                }
                >p{
                    display:flex;
                    width:100%;
                    padding:0 20px;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:30px;
                    >div{
                        width:153px;
                        height:33px;
                        border: 1px solid #393939;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:13px;
                        border-radius:2px;
                    }
                    >span{
                        font-size:12px;
                    }
                }
                >h5{
                    margin:20px 0 15px 0;
                    font-size:16px;
                    font-weight:400;
                    padding:0 20px;
                }
                >ul{
                    width:100%;
                    padding:0 20px;
                    display:grid;
                    grid-template-columns:repeat(3,1fr);
                    grid-gap:10px;
                    >li{
                        width:105px;
                        height:44px;
                        border: 1px solid #393939;
                        border-radius:2px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        font-weight:600;
                        font-size:13px;
                        color:#ffffff;
                        &.active{
                          color:#177ddc;
                          border-color:#177ddc;  
                        }
                    }
                }
            }
          
        }
  }
  }
  .search{
    z-index:5;
    position:absolute;
    display:flex;
    align-items:center;
     > input {
      margin: 0 12px;
      width: 280px;
      height: 34px;
      border-radius: 20px;
      background-color: #3b3a3b;
      font-size: 13px;
      padding-left: 30px;
      border-color: transparent;
      color: #8f8f8f;
    }
    > .van-badge__wrapper {
      z-index: 2;
      position: absolute;
      left: 24px;
      color: #8f8f8f;
      font-size: 18px;
    }
  }
  }
}
</style>