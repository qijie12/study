<template>
  <div id="share-records-box">
    <van-nav-bar title="Bonus History" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model:active="active" @click-tab="onClickTab" title-active-color="#ff5454" line-width="182px" color="#ff5454"> 
      <van-tab title="Deposit Details"></van-tab>
      <van-tab title="Withdrawal Details"></van-tab>
    </van-tabs>

    <ul v-if="!active">
        <li>
           <div class="con">
              <div class="tit">
                <p class="name">ALLPAY</p>
                <span>2024-03-23 20:21:58</span>
              </div>
              <div class="submit">Submitted</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D99673603006607 </span>
                <span class="iconfont icon-fuzhi1" @click="copyID"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">ALLPAY</p>
                <span>2024-03-23 20:21:58</span>
              </div>
              <div class="submit">Submitted</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D99673603006607 </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">QEPAY</p>
                <span>2024-04-20 11:26:29</span>
              </div>
              <div class="submit">Submitted</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -111.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D57973010365325  </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">NICEPAY</p>
                <span>2024-04-22 10:10:26</span>
              </div>
              <div class="fail">Fail</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D83152594068041  </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">NICEPAY</p>
                <span>2024-03-23 20:21:58</span>
              </div>
              <div class="fail">Fail</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D99673603006607 </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">NICEPAY</p>
                <span>2024-03-23 20:21:58</span>
              </div>
              <div class="fail">Fail</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D99673603006607 </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
        <li>
            <div class="con">
              <div class="tit">
                <p class="name">NICEPAY</p>
                <span>2024-03-23 20:21:58</span>
              </div>
              <div class="fail">Fail</div>
           </div>
           <div class="amount">
              <span>Amount</span>
              <span>+ -100.00</span>
           </div>
           <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>D99673603006607 </span>
                <span class="iconfont icon-fuzhi1"></span>
              </div>
           </div>
           <p class="review"><span>Review time</span></p>
        </li>
    </ul>

    <div class="details" v-else>
       <img src="../../assets/img/financial-background.png"/>
       <span>No Data</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { showSuccessToast } from 'vant';
const router = useRouter();
const active=ref(0)
const onClickLeft = () => {
  router.back();
};

const onClickTab=()=>{};

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

</script>

<style lang="scss">
#share-records-box {
  width: 100%;
  height: 100%;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(255, 255, 255);
  overflow:hidden;
    &::-webkit-scrollbar {
    display: none; 
   }

  .van-nav-bar {
    // &::after {
    //   display: none;
    // }
    .van-nav-bar__left {
      .van-badge__wrapper {
        color: black;
      }
    }
    .van-nav-bar__title {
      font-size: 14px;
      color: #594735;
    }
  }
  >ul{
    margin-top:20px;
    width:100%;
    padding:5px 16px; 
    >li{
        width:100%;
        height:146px;
        border-bottom:1px solid rgba(0, 0, 0, .06);
        margin-bottom:10px;
        .con{
           padding-left:5px;
           display:flex;
           justify-content:space-between;
           align-items:center;
           border-left:3px solid #ff5454;         
           .tit{
             .name{
                color:#594735;
                font-size:18px;
                font-weight:600;
             }
             >span{
                font-size:13px;
                color:#868686;
             }
           }
           .submit{
              font-size:13px;
              color:#f5b923;
           }
           .fail{
              font-size:13px;
              color:#ea1448;
           }
        }
        .amount,.id,.review{
            display:flex;
            justify-content:space-between;
            margin:10px 0;
            >span{
                color:#594735;
                font-size:13px;
                
            }
            .num{
            >span{
                    color:#594735;
                    font-weight:600;
                    font-size:13px;
                }
            .icon-fuzhi1{
                color:#828282;
            }    
        }
        }
        .amount{
            span:last-child{
                    color:#1abe76;
                    font-weight:600;
                }
        }
        
    }
  }
  .details{
    margin-top:80px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    >img{
        width:200px;
        height:200px;
    }
    >span{
        color:#00000099;
        font-size:13px;
    }
  }
}
</style>