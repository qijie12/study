<template>
  <div id="share-deposit-box">
    <div class="depositTop">
      <span class="iconfont icon-arrow-left" @click="jumpHome"></span>
      <b>Deposit</b>
      <div class="records"><span>Transaction Records</span></div>
    </div>

    <van-tabs
      color="#ff5454"
      line-width="182px"
      title-active-color="#ff5454"
      v-model:active="active"
      @click-tab="onClickTab"
    >
      <van-tab title="Deposit"></van-tab>
      <van-tab title="Withdrawal"></van-tab>
    </van-tabs>

    <!-- <div id="Deposit-con">   
    <h4>Deposit method</h4>
    <div class="currency">
      <b>Deposit by fiat currency</b>
    </div>

    <div class="deposit_amount">
      <p class="amountTitle">Deposit amount</p>
      <van-cell-group inset>
        <van-field v-model="value" placeholder="Please input">
           <template #right-icon>
            <span>ING</span>
           </template>
        </van-field>      
      </van-cell-group>

      <ul>
        <li v-for="(item,index) in amountList" :key="index"
          @click="lightChecked(index)"
          :class="{active: amountIndex === index}"
        >
           <span>{{item.num}}</span>
        </li>    
      </ul>

      <div class="min_max">
         Minimum: 100.00 INR, Maximum: 50,000.00 INR
      </div>
      <div class="notice">
         <span class="noticeTitle">Be sure to read the content before depositting：</span>
         <span class="noticeCon"> Channels might be unstable due to 3rd-party payment. Players can choose other methods to deposit.</span>
      </div>
      <div class="confirm"></div>
      <van-button 
      type="primary"block
      color="#ff5454"
       >
       Confirm
       </van-button>
    </div>
    </div> -->
    <div id="Withdrawal-con">
      <div class="cashBalance">
         <p>Cash balance</p>
         <b>₹ 90.00</b>
      </div>
     
     <div class="sub-box">
      <div> 
        <span>Withdrawable amount</span>
        <b>₹90.00</b>
      </div>
      <div>
        <span>VIP2 Withdrawal limit</span>
        <b>Unlimited</b>
      </div>
     </div>
     
    <div class="state-box">
      <div class="hint">
        Either condition, you can withdraw !!
      </div>
      <div class="task">
        <span class="task-con">👉 The number of required tasks</span>
        <span class="task-num">
          <b class="num-left">0</b>
          <b class="num-right">/1</b>
        </span>
      </div>
      <div class="num">1</div> 
      <div class="OR-box">
        <span></span>
        <b>OR</b>
        <span></span>
      </div> 
      <div class="schedule">
        <span class="schedule-L">👉 Play Amount Requirement</span>
        <span class="scehdule-R">
          <b>0</b>
          <b>/100</b>
        </span>
      </div>  
      <van-progress :percentage="0" color="#1fc197"/> 
    </div>

    <van-button type="primary" block color="">
      <div>
        <span></span>
        <span>Withdrawal list</span>
      </div>
      <div>
        <span></span>
        <span>Withdrawal list</span>
      </div>
    </van-button>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router =useRouter();

const jumpHome =()=>{
  router.push('/home')
}
const amountIndex = ref(0);

const  lightChecked=(index)=>{
  amountIndex.value = index
}

const amountList=ref([
  {num:'100'},
  {num:'500'},
  {num:'1k'},
  {num:'2k'},
  {num:'3k'},
  {num:'5k'},
  {num:'10k'},
])
</script>

<style lang="scss">
#share-deposit-box {
  width: 100%;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(255, 255, 255);
  padding: 0 10px;
  .depositTop {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .records {
      color: #594735;
      font-size: 13px;
      width: 80px;
      text-align: center;
      border-radius: 10px;
    }
    > b {
      font-size: 14px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  #Deposit-con{
      > h4 {
    margin: 24px 0 10px 0;
    font-size: 14px;
    color: #323232;
  }
  .currency {
    width: 170px;
    height: 60px;
    background: #ffd1d1;
    border-radius: 10px;
    border: 2px solid #ff5454;
    display: flex;
    justify-content:center;
    padding:0 8px;
    align-items: center;
    text-align: center;
    > b {
      color: #594735;
      font-size: 14px;
    }
  }
  .deposit_amount {
    margin-top: 25px;
    .amountTitle {
      font-size: 13px;
      color: #594735;
      margin-bottom:5px;
    }
    .van-cell-group{
      margin:0;
      padding:0;
      .van-field{
        background:rgb(242, 242, 242);
        .van-field__right-icon{
          >span{
          color:#594735;
        }
        }
        
      }     
    }
    >ul{
      width:100%;
      margin-top:20px;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      grid-gap:5px;
      >li{
        width:114px;
        height:46px;
        background:rgb(238, 238, 238);
        border-radius:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        &.active {
          background: #317aee;
          color: #fff;
        }
      }
    }
    .min_max{
      margin:15px 0;
      font-size:12px;
      color:#594735;
    }
    .notice{
      margin-bottom:15px;
      font-size:12px;
      color:#594735;
      .noticeTitle{
        color:#ff5454;
      }
    }
  }
  }
  #Withdrawal-con{
     width:100%;
     padding:0 10px;
     .cashBalance{
      width:100%;
      text-align:center;
      margin:20px 0;
      >p{
        font-size:16px;
        color:#383838;
        font-weight:bold;
        padding-bottom:15px;
      }
      >b{
        color:#ffbb01;
        font-size:43px;
      }
     }
     .sub-box{
      border-top:0.2px solid #a2a1a1;
      
       >div{
         width:100%;        
         display:flex;
         justify-content:space-between;
         padding:6px 0;
        >span{
          font-weight:bold;
          font-size:12px;
          color:#999999;
        }
        >b{
          font-size:18px;
          color:#303030;
        }
       }
    
     }
     .state-box{
      width:100%;
      height:228px;
      border-radius: 5px;
      border: 0.5px solid rgb(202, 202, 202);
      padding:10px;
      // display:flex;
      .hint{
        padding-top:15px;
        width:100%;
        font-size:14px;
        color:#323232;
        font-weight:bold;
      }
      .task{
         margin-top:20px;  
         width:100%;
         display:flex;
         justify-content:space-between;
         align-items:center;
         .task-con{
          color:#575757;
          font-size:12px;
          font-weight:bold;
         }
         .task-num{
          font-size:18px;
          .num-left{
            color:#999999;
          }
          .num-right{
            color:#1fc197;
          }
         }
      }
      .num{
         margin-top:10px;
         width:100%;
         height:26px;
         border-radius:15px;
         background:#f0fcf8;
         border:2px solid #9de8cf;
         color: #aac6bc;
         font-weight:bold;
         text-align:center;
      }
      .OR-box{
         display:flex;
         justify-content:space-between;
         align-items:center;
         font-size:12px;
         margin:20px 0 10px 0;
        >span{
          flex:1;
          background: #f1f1f1;
          height:2px;
        }
        >b{
          padding:0 5px;
        }
      }
      .schedule{
        margin-bottom:15px;
        width:100%;
        display:flex;
        justify-content:space-between;
         .schedule-L{
          font-size:12px;
          color:#575757;
          font-weight:bold;
         }
         .scehdule-R{
           display:block;
           >b{
            font-size:14px;
            color:#303030;
           }
           >b:last-child{
            color:#1fc197;
           }
         }
      }
     }
     .van-button{
      margin:30px 0;
     }
  }
}
</style>