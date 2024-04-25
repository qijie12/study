<template>
  <div id="share-vip-box">
    <div class="vipTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Vip</b>
      <span></span>
    </div>
    <div class="vipLevel">
      <div class="head">
        <div></div>
        <div class="headImg">
          <img src="../../assets/img/head-frame.png" />
        </div>
        <div class="check" @click="showPopup">View next month</div>
      </div>
      <div class="vip_bg">
        <b>VIP 2</b>
      </div>
      <p>hlm</p>

      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in swipeList" :key="index">
          <img :src="item.url" />
          <b :style="{ color: item.difColor }">{{ item.text }}</b>
        </van-swipe-item>

        <!-- <van-swipe-item>
          <img src="../../assets/img/vip0_bg.png" />
          <p>VIP 0</p>
        </van-swipe-item>
        <van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/vip2_bg.png" />
          </van-swipe-item>
        </van-swipe-item>
        <van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/vip3_bg.png" />
          </van-swipe-item>
        </van-swipe-item>
        <van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/vip4_bg.png" />
          </van-swipe-item>
        </van-swipe-item> -->
      </van-swipe>
    </div>

    <div class="privilegesBox">
      <div class="privilegesTitle">
        <div class="tit">
          <img src="../../assets/img/left-line.png" />
          <i>VIP Privileges</i>
          <img class="right" src="../../assets/img/left-line.png" />
        </div>
      </div>
      <ul class="privilegesCon">
        <li>
            <div><span class="required">Daily number of withdrawal</span></div>
            <b>2</b>
        </li>
        <li>
            <div>
                <span class="required">
                    Required withdrawal amount<br> 
                    <b >(Minimum)</b>
                </span>
            </div>
            <b>100.00</b>
        </li>
        <li>
            <div>
                <span class="required">
                    Required withdrawal amount<br> 
                    <b >(Maxmum)</b>
                </span>
            </div>
            <b>1.00.00.000.00</b>
        </li>
      </ul>
    </div>

    <h4>Rules</h4>

    <div class="attention">
        <span class="iconfont icon-dian"></span>
        <span>The company reserves all rights of interpretation of this activity. As long as money laundering were found, the account would be banned.</span>
    </div>

    <van-popup v-model:show="showTop" position="top"
    :style="{ height: '26%'}" round 
     >
     <div class="vipTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>Vip</b>
      <span></span>
    </div>
    <div class="popupCon">
       <div class="popupTop">
          <div class="popupTop-L">
            <img src="../../assets/img/Cartoonhead.png"/>
            <span>hlm</span>
            <div><i>VIP 2</i></div>
          </div>
          <div class="popupTop-R" @click="conceal">Close</div>
       </div>
       <div class="partition">
         <img src="../../assets/img/left-line.png" />
         <i>Next Month</i>
         <img class="right" src="../../assets/img/left-line.png" />
       </div>
       <div class="upgradeProgress">
          <div class="vipLeft"><i>VIP 2</i></div>
          <div class="schedule">
            <p>
                <span>Deposit</span>
                <span> 
                    <span class="bright">100.00</span>
                    <span> / 150.00</span>
                </span>
            </p>
            <van-progress :percentage="50" :show-pivot="false" track-color="#3e495c"/>
          </div>
          <div class="vipRight"><i>VIP 3</i></div>
       </div>

    </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import vip0 from "../../assets/img/vip0_bg.png";
import vip1 from "../../assets/img/vip1_bg.png";
import vip2 from "../../assets/img/vip2_bg.png";
import vip3 from "../../assets/img/vip3_bg.png";
import vip4 from "../../assets/img/vip4_bg.png";
import vip5 from "../../assets/img/vip5_bg.png";

const showTop = ref(false);
const showPopup = () => {
      showTop.value = true;
    };
const conceal=()=>{
    showTop.value = false;
}

const router = useRouter();
const jumpMe = () => {
  router.push("/me");
};

const swipeList = ref([
  {
    url: vip0,
    text: "VIP 0",
    difColor: "#a3b1cd",
  },
  {
    url: vip1,
    text: "VIP 1",
    difColor: "#6991c3",
  },
  {
    url: vip2,
    text: "VIP 2",
    difColor: "#f0664e",
  },
  {
    url: vip3,
    text: "VIP 3",
    difColor: "#e38728",
  },
  {
    url: vip4,
    text: "VIP 4",
    difColor: "#9b9de8",
  },
  {
    url: vip5,
    text: "VIP 5",
    difColor: "#7a94e8",
  },
  {
    url: vip0,
    text: "VIP 6",
    difColor: "#a3b1cd",
  },
  {
    url: vip1,
    text: "VIP 7",
    difColor: "#6991c3",
  },
  {
    url: vip2,
    text: "VIP 8",
    difColor: "#f0664e",
  },

  {
    url: vip3,
    text: "VIP 9",
    difColor: "#e38728",
  },
  {
    url: vip4,
    text: "VIP 10",
    difColor: "#9b9de8",
  },
  {
    url: vip5,
    text: "VIP 11",
    difColor: "#7a94e8",
  },
  {
    url: vip0,
    text: "VIP 12",
    difColor: "#a3b1cd",
  },
  {
    url: vip1,
    text: "VIP 13",
    difColor: "#6991c3",
  },
  {
    url: vip2,
    text: "VIP 14",
    difColor: "#f0664e",
  },
  {
    url: vip3,
    text: "VIP 15",
    difColor: "#e38728",
  },
]);
</script>

<style lang="scss">
#share-vip-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100vw;
  height: 100vh;
  background: #273449;
  .vipTop {
    width: 100%;
    height: 46px;
    background: #2b323e;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffdbbf;
    position: relative;
    b {
      font-size: 14px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    > .icon-arrow-left {
      font-weight: 900;
    }
  }
  .vipLevel {
    width: 100%;
    height: 255px;
    background-image: url("../../assets/img/vip-bg-img.png");
    background-size: cover;
    z-index: 2;
    .head {
      padding-top: 15px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      .check {
        width: 116px;
        height: 28px;
        color: #ffdbbf;
        font-size: 12px;
        background: rgba(114, 95, 80, 0.3);
        border-radius:20px 0 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.5px solid #7b736c;
      }
      .headImg {
        width: 64px;
        height: 64px;
        background-image: url("../../assets/img/imgframe-.gif");
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        > img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
    }
    .vip_bg {
      margin: 0 auto;
      width: 48px;
      height: 17px;
      background-image: url("../../assets/img/vip_bg222-img.png");
      background-size: cover;
      line-height: 17px;
      position: relative;
      top: 7%;
      > b {
        font-size: 10px;
        color: #ffffff;
        position: absolute;
        left: 38%;
        top: 10%;
      }
    }
    > p {
      color: #ffffff;
      font-size: 12px;
      margin: 0 auto;
      text-align: center;
      padding-top: 20px;
    }

    .my-swipe .van-swipe-item {
      position: relative;
      font-size: 40px;
      height: 150px;
      > img {
        width: 100%;
        height: 100%;
      }
      > b {
        display: inline-block;
        position: absolute;
        z-index: 3;
        top: 30%;
        left: 5%;
      }
    }
  }
  .privilegesBox {
    width: 100%;
    padding: 0 8px;
    .privilegesTitle {
      width: 100%;
      height: 60px;
      background-image: url("../../assets/img/titBg-img.png");
      background-size: cover;     
      .tit{
         width:100%;
         height:40px;
         display: flex;
         justify-content:center;
         align-items: center;
         >img{
            width:46px;
            height:5px;
            margin:0 30px;
         }
         .right{
            transform: rotate(180deg);
         }
         >i{
            font-size:15px;
            color:#eee7c7;
            font-weight:500;
         }
      }      
    }
    .privilegesCon{
        width:100%;
        height:190px;
        background-image:url('../../assets/img/rewardBg.png');
        background-size:cover;
        padding:5px 10px 0 10px;
        border-radius:0 0 15px 15px;
        >li{
            margin-bottom:8px;
            width:100%;
            padding:0 10px;
            height:55px;
            background:linear-gradient(180deg, #fff, #e3f9fe);
            border-radius:8px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            font-size:13px;
            &:first-child{
                height:48px;
            }
            >div{         
               .required{
                color:#00000099;              
               } 
            }
        }
    }
  }
  >h4{
    margin:10px 5px;
    border-left:3px solid #feeaa5;
    padding-left:8px;
    font-size:15px;
    color:#ffffff;
    
  }
  .attention{
    color: #fff9;
    font-size:13px;
    display:flex;
    justify-content:left;
  }
  .van-popup{
    background:#202e44;
    .popupCon{
        padding:12px 0 0 8px;
        .popupTop{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .popupTop-L{
                display:flex;
                align-items:center;
                >img{
                    width:25px;
                    height:25px;
                    margin-right:5px;
                }
                >span{
                    color:#ffffff;
                    font-size:16px;
                    margin-right:3px;
                }
                >div{
                    width:58px;
                    height:20px;
                    background-image:url('../../assets/img/vip2222.png');
                    background-size:cover;
                    position:relative;
                    display:flex;
                    >i{
                        font-weight:700;
                        color:#ffffff;
                        font-size:12px;
                        position:absolute;
                        left:35%;
                        top:15%;
                    }
                }
            }
            .popupTop-R{
                width:50px;
                height:28px;
                border-radius:20px 0 0 20px;
                border:0.5px solid #7b736c;
                background: rgba(114, 95, 80, .3);
                color: #ffdbbf;
                font-size:12px;
                text-align:center;
                line-height:27px;
            }
        }
        .partition{
            margin:10px 0;
            padding-right:8px;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            >img{
                width:45px;
                height:5px;
                margin:0 35px;
            }
            .right{
                transform:rotate(180deg)
            }
            >i{
                color:#879ba7;
                font-weight:700;
            }
        }
        .upgradeProgress{
          padding-right:8px;
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          .vipLeft{
                width:58px;
                height:20px;
                background-image:url('../../assets/img/vip2222.png');
                background-size:cover;
                position:relative;
                display:flex;
                >i{
                    font-weight:700;
                    color:#ffffff;
                    font-size:12px;
                    position:absolute;
                    left:35%;
                    top:15%;
                }
          } 
          .vipRight{
             width:58px;
                height:20px;
                background-image:url('../../assets/img/vip333-img.png');
                background-size:cover;
                position:relative;
                display:flex;
                >i{
                    font-weight:700;
                    color:#ffffff;
                    font-size:12px;
                    position:absolute;
                    left:35%;
                    top:15%;
                }
          } 
          .schedule{
            flex:1;
            margin:0 10px;
            >P{
              font-size:12px;
              display:flex;
              justify-content:space-between;
              padding-bottom:5px;
              >span{
                color:#ffffffb3;
                .bright{
                    color:#ffffff;
                }
              }  
            }
          }
        }
    }
  }
}
</style>