<template>
  <div id="share-deposit-box">
    <div class="top_top">
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
    </div>

   <div id="Deposit-con" v-if="!active">   
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
    </div>
    
    <div id="Withdrawal-con" v-else>
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
        <div class="hint">Either condition, you can withdraw !!</div>
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
        <van-progress :percentage="0" color="#1fc197" />
      </div>

      <van-button size="normal" color="">
        <div class="button_left">
          <img src="../assets/img/file-img.png" />
          <span>Withdrawal list</span>
        </div>
        <div class="button_right">
          <b>0</b>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </van-button>

      <van-cell-group inset class="name_big">
        <van-field label="Account" model-value="输入框只读" readonly />
        <van-field label="Ifsc" model-value="输入框只读" readonly />
      </van-cell-group>

      <div class="holderName">Account Holder Name</div>

      <van-cell-group inset class="name_small">
        <van-field model-value="输入框只读" readonly />
        <van-field model-value="输入框只读" readonly />
      </van-cell-group>

      <div class="password_title">Withdrawal password</div>

      <van-form @submit="onSubmit">
         <van-field
            v-model="password"
            type="password"
            placeholder="withdraw_password"
            :rules="[{ required: true, message: 'Please fill in the withdrawal password' }]"
          >
          <template #left-icon>
              <span class="iconfont icon-mimayuechi"></span>
          </template>
         </van-field>
      </van-form>

      <div class="balance_title">
        <span>withdrawable balance </span>
        <span>₹190.00</span>
      </div>

      <van-form @submit="onSubmit">
         <van-field
            maxlength="9"
            v-model="number"
            placeholder="Minimum ₹0,00 Maximum ₹0,00"
            :rules="[{ required: true, message: 'Custom amount' }]"
          />
      </van-form>
      
      <div class="total">
        <span class="iconfont icon-dian"></span>
        <div class="total_con">
          <span>Total bet amount needed: </span>
          <span class="iconfont icon-gou"></span>
        </div>
      </div>

      <div class="withdrawal_bottom">
        <p class="bottom_title">
          <span>₹ </span>
          <span>0,00</span>
          <span> in your private account</span>
        </p>
        <van-button type="primary" color="rgb(241,241,241)" >
          Withdraw
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";

const route = useRoute()
const router = useRouter();

const jumpHome = () => {
  router.push("/home");
};
const amountIndex = ref(0);

const lightChecked = (index) => {
  amountIndex.value = index;
};

const amountList = ref([
  { num: "100" },
  { num: "500" },
  { num: "1k" },
  { num: "2k" },
  { num: "3k" },
  { num: "5k" },
  { num: "10k" },
]);

const active=ref(0);

onMounted(() => {
  let params = route.query;
  if(params?.tab) {
    active.value = 1
  }
})
</script>

<style lang="scss">
#share-deposit-box {
  width: 100%;
  height: 100vh;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(255, 255, 255);
  padding: 0 10px;
  position:relative;
  .top_top{
    background: rgb(255, 255, 255);
    z-index:5;
    position:fixed;
    top:0;
    left:0;
    width:100%;
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
  }
 
  #Deposit-con {
    margin-top:115px;
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
      justify-content: center;
      padding: 0 8px;
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
        margin-bottom: 5px;
      }
      .van-cell-group {
        margin: 0;
        padding: 0;
        .van-field {
          background: rgb(242, 242, 242);
          .van-field__right-icon {
            > span {
              color: #594735;
            }
          }
        }
      }
      > ul {
        width: 100%;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        > li {
          width: 114px;
          height: 46px;
          background: rgb(238, 238, 238);
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            background: #317aee;
            color: #fff;
          }
        }
      }
      .min_max {
        margin: 15px 0;
        font-size: 12px;
        color: #594735;
      }
      .notice {
        margin-bottom: 15px;
        font-size: 12px;
        color: #594735;
        .noticeTitle {
          color: #ff5454;
        }
      }
    }
  }
  #Withdrawal-con {
    width: 100%;
    padding:90px 10px 200px 10px;
    .cashBalance {
      width: 100%;
      text-align: center;
      margin: 20px 0;
      > p {
        font-size: 16px;
        color: #383838;
        font-weight: bold;
        padding-bottom: 15px;
      }
      > b {
        color: #ffbb01;
        font-size: 43px;
      }
    }
    .sub-box {
      border-top: 0.2px solid #a2a1a1;

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        > span {
          font-weight: bold;
          font-size: 12px;
          color: #999999;
        }
        > b {
          font-size: 18px;
          color: #303030;
        }
      }
    }
    .state-box {
      width: 100%;
      height: 228px;
      border-radius: 5px;
      border: 0.5px solid rgb(202, 202, 202);
      padding: 10px;
      // display:flex;
      .hint {
        padding-top: 15px;
        width: 100%;
        font-size: 14px;
        color: #323232;
        font-weight: bold;
      }
      .task {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .task-con {
          color: #575757;
          font-size: 12px;
          font-weight: bold;
        }
        .task-num {
          font-size: 18px;
          .num-left {
            color: #999999;
          }
          .num-right {
            color: #1fc197;
          }
        }
      }
      .num {
        margin-top: 10px;
        width: 100%;
        height: 26px;
        border-radius: 15px;
        background: #f0fcf8;
        border: 2px solid #9de8cf;
        color: #aac6bc;
        font-weight: bold;
        text-align: center;
      }
      .OR-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        margin: 20px 0 10px 0;
        > span {
          flex: 1;
          background: #f1f1f1;
          height: 2px;
        }
        > b {
          padding: 0 5px;
        }
      }
      .schedule {
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .schedule-L {
          font-size: 12px;
          color: #575757;
          font-weight: bold;
        }
        .scehdule-R {
          display: block;
          > b {
            font-size: 14px;
            color: #303030;
          }
          > b:last-child {
            color: #1fc197;
          }
        }
      }
    }
    .van-button {
      margin: 30px 0 15px 0;
      width: 100%;
      border-color: transparent;
      .van-button__content {
        width: 100%;
        padding: 0 !important;
        margin: 0 !important;
        .van-button__text {
          padding: 0 !important;
          margin: 0 !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100% !important;
          .button_left {
            display: flex;
            align-items: center;
            > img {
              width: 25px;
              height: 25px;
            }
            > span {
              padding-left: 5px;
              font-weight: 700;
              font-size: 14px;
            }
          }
          .button_right {
            > span {
              padding-left: 5px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .name_big {
      margin: 0;
      width: 100%;
      .van-field {
        margin: 10px 0;
        padding: 8px 10px;
        background: #f1f1f1;
      }
    }
    .holderName,
    .password_title {
      color: #303030;
      font-size: 14px;
    }
    .name_small {
      margin: 0;
      width: 100%;
      display: flex;
      .van-field {
        width: 170px;
        height: 40px;
        background: #f1f1f1;
        margin: 10px 0;
      }
      .van-field:first-child {
        margin-right: 8px;
      }
    }
    .balance_title{
      font-size:14px; 
      >span{
         color:#303030;
      }
      >span:last-child{
        color:#feba00;
        padding-left:5px;
      }
    }
    .van-form{
      >.van-field{
         background: #f1f1f1;
         margin:10px 0;
      }
    }
    .total{
      margin-top:5px;
      width:100%;
      display:flex;
      align-items:center;
      .icon-dian{
        color:#1fc197;
        font-size:20px;
      }
      .total_con{
        display:flex;
        align-items:center;
        height:28px;
        flex:1;
        background:#f0fcf8;
        font-size:12px;
        border-left:2px solid #1fc197;
        padding-left:5px;
        >span{
          color:#1fc197;
        }
      }
    }
    .withdrawal_bottom{
      width:100%;
      height:97px;
      position:fixed;
      background:rgb(255, 255, 255);
      bottom:0;
      left:0;
      z-index:5;
      padding:0 12px 20px 12px;
       .bottom_title{
         font-size:12px;
         span{
          color:#b2babb;
         }
       }
       .van-button{
          margin-top:10px;
          height:50px;
             .van-button__text{
             color:#999;
             font-weight:bold;
             display:flex;
            justify-content:center;
          }            
       }
    }
  }
}
</style>