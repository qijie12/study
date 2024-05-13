<template>
  <div id="share-turnplate-box">
    <div class="top">
      <span class="iconfont icon-arrow-left" @click="backtrack"></span>
      <b>BonusWheel</b>
      <div @click="popup"><span>Spin Record</span></div>
    </div>
    <div class="con">
      <div class="turnplateMoney" :class="{active: isStartAnimation}">   
        <div
          class="prize-list"
          style="
            transform: rotate(-15deg);
            background: conic-gradient(
              rgb(25, 0, 176) 0deg,
              rgb(25, 0, 176) 30deg,
              rgb(0, 56, 255) 30deg,
              rgb(0, 56, 255) 60deg,
              rgb(25, 0, 176) 60deg,
              rgb(25, 0, 176) 90deg,
              rgb(0, 56, 255) 90deg,
              rgb(0, 56, 255) 120deg,
              rgb(25, 0, 176) 120deg,
              rgb(25, 0, 176) 150deg,
              rgb(0, 56, 255) 150deg,
              rgb(0, 56, 255) 180deg,
              rgb(25, 0, 176) 180deg,
              rgb(25, 0, 176) 210deg,
              rgb(0, 56, 255) 210deg,
              rgb(0, 56, 255) 240deg,
              rgb(25, 0, 176) 240deg,
              rgb(25, 0, 176) 270deg,
              rgb(0, 56, 255) 270deg,
              rgb(0, 56, 255) 300deg,
              rgb(25, 0, 176) 300deg,
              rgb(25, 0, 176) 330deg,
              rgb(0, 56, 255) 330deg,
              rgb(0, 56, 255) 360deg
            );
            color: rgb(224, 219, 219);
          "
        >
        
          <div
            class="prize-item"
            v-for="(item,index) in priceList" :key="index"
            :style="prizeStyle(index)
            "
          >
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="but">
        <img src="../../assets/img/spin_btn.png" />
        <span>SPIN</span>
        <img class="pointer" src="../../assets/img/pointer_filed.png" />
      </div>

      <div class="winJackpot">
        <div class="outer_space">
          <img class="spaceman" src="../../assets/img/wheelIframe.png" />
          <img class="iconBig" src="../../assets/img/icon.png" />
          <img class="iconSmall" src="../../assets/img/icon.png" />
          <img class="phone" src="../../assets/img/space_phone.png" />
        </div>

        <div class="wheel">
          <div class="win">
            <p>spin the wheel</p>
            <b>WIN JACKPOT</b>
          </div>
          <p class="surplus">Number of remaining spins</p>
          <div class="click">0</div>
          <div class="chance">
            <b>Only</b>
            <b class="chip">10000</b>
            <b> chips away, get 1 spin chance </b>
            <b class="iconfont icon-youjiantou"></b>
          </div>
          <div class="container">
            <span></span>
        
          </div>

          <div class="content">
            <div class="contentTit">
              <img src="../../assets/img/silver_wire.png" />
              <b>CONTENT</b>
              <img src="../../assets/img/silver_wire.png" />
            </div>
          </div>
          <div class="period">
            <p>Activity period</p>
            <p>2024-04-03 01:07:48 - 2024-06-01 01:08:06</p>
          </div>

          <h3>RULE</h3>
          <ul>
            <li>LURSSENVIP Lucky Roulette is here!</li>
            <li>
              Bet on the game every day and spin our lucky wheel to win real
              cash prizes and super prizes
              <p class="orange">iphone 15 pro max / Yamaha R15</p>
              motorcycle
            </li>
            <li>Lucky Roulette Rules.</li>
            <li>Business hours are from 00:00 to 24:00, every day.</li>
            <li>
              Members can spin the Lucky Wheel once for every ₹10,000 they bet
              on the game. The more you bet, the more you win, there is no
              maximum limit! Members who win physical prizes (iPhone 15) will
              receive an internal letter from LURSSENVIP, and the VIP service
              manager will contact the customer to send the prize.
            </li>
            <li>terms and conditions.</li>
            <li class="orange">
              1. Participate in Lucky Roulette only in GAME WIN game
            </li>
            <li>2. Each player can only have one account.</li>
            <li>
              3. Players who open multiple accounts or pretend to be one account
              will be disqualified from the event. Balances can be confiscated
              and accounts frozen.
            </li>
            <li>
              3.LURSSENVIP reserves the right to modify, alter, suspend,
              withdraw, refuse or cancel this promotion at its sole discretion.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <van-popup v-model:show="showCenter" round :close-on-click-overlay="false">
      <div class="popupTil">
        <span>Spin Record</span>
        <span class="iconfont icon-cha" @click="hidden"></span>
      </div>
      <div class="popupCon">
        <img src="../../assets/img/financial-background.png" />
        <span>No Data</span>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Turnlate } from "../../api/Turnplate";
import { useRoute,useRouter } from "vue-router";
import { showToast } from 'vant';

const route = useRoute();
const router = useRouter();

const showPopover =ref(false);
const priceList = ref([])
const backtrack = () => {
  router.back();
};
const showCenter = ref(false);
const isStartAnimation = ref(false)

// 计算 平均每个奖品角度
const rotateAngle = computed(() => {
  return 360 / priceList.value.length;
});

const prizeStyle = computed(() => {
    const _degree = rotateAngle.value;
    return (i) => {
      return `
        width: ${(_degree * Math.PI * 7) / 180}rem;
        height: 7rem;
        transform: rotate(${_degree * i + _degree / 2}deg);
        transform-origin: 50% 100%;
      `;
    };
  });

const popup = () => {
  showCenter.value = true;
};
const hidden = () => {
  showCenter.value = false;
};
const onSelect = () =>{
   showPopover.value=true
};

const call_Turnlate= async()=>{
    let params = {
      wheel_template_id: 1
    };
    let res = await Turnlate(params);
    console.log(res,'turnlate==============');
    priceList.value = res.data.wheelInfo;
  
}
// const call_Turnlate = () => {
//   Turnlate()
//     .then((res) => {
//       console.log(res, "turn................");
//     })
//     .catch((err) => {});
// };

onMounted(() => {
  console.log(route.params, 'route-----------')
  console.log(route.query, 'route-----------')
  call_Turnlate()
  setInterval(() => {
    isStartAnimation.value = !isStartAnimation.value
  },500)
})
</script>

<style lang="scss">
#share-turnplate-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/florid.png");
  background-size: cover;

  .top {
    z-index: 10;
    height: 46px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: relative;
    position: fixed;
    > div {
      width: 70px;
      height: 100%;
      text-align: end;
      font-size: 13px;
      color: #dfbfaa;
      display: flex;
      align-items: center;
    }
    > .icon-arrow-left {
      font-weight: 700;
    }
    > b {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .con {
    width: 100%;
    // height: calc(100% - 46px);
    height: 1540px;
    overflow:hidden;
    // overflow-y: scroll;
    .con::-webkit-scrollbar {
      display: none;
    }
    .turnplateMoney {
      z-index: 2;
      width: 330px;
      height: 330px;
      position: relative;
      background-image: url("../../assets/img/turnplate-bg.png");
      background-position: 0px 0px;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0px;
      left: 20px;
      // margin: 0 auto;
      overflow: hidden;
      transform: scale(1.2); //sclae 放大缩小
      &.active {
         background-position: -330px 0px;
      }

      .prize-list {
        position: relative;
        width: 254px;
        height: 254px;
        border-radius: 50%;
        border: none;
        overflow: hidden;
        margin: 0 auto;
        top: 37px;
        left: 0px;
        
        .prize-item {
          width: 3.50811rem;
          height: 7.1rem;
          position: absolute;
          left: 0;
          right: 0;
          top: 20px;
          margin: 0 auto;
          padding-top: 14px;
          transform-origin: 50% 100%;
          
          > p {
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            text-align: center;
            width: 100%;
            line-height: 370px;
            transform: rotate(90deg);
            padding-right: 50px;
            
          }
          &:last-child {
            p {
              font-size: 8px;
              white-space: nowrap;
              transform: rotate(90deg) translateX(-20px);
            }
          }
          &:nth-last-child(2) {
            p {
              font-size: 8px;
              white-space: nowrap;
              transform: rotate(90deg) translateX(-20px);
            }
          }
        }
      }
    }
    .but {
      width: 75px;
      height: 75px;
      margin: auto;
      position: relative;
      top: -203px;
      z-index: 8;
      left: 0px;
      > img {
        height: 100%;
        width: 100%;
      }
      > span {
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
        z-index: 9;
        position: absolute;
        top: 25px;
        left: 14px;
      }
      .pointer {
        width: 124px;
        height: 85px;
        z-index: 8;
        position: absolute;
        left: 72px;
        top:-4px;
      }
    }
    .winJackpot {
      width: 100%;
      padding: 0 12px;
      position: relative;
      top: -260px;
      .outer_space {
        position: relative;
        z-index: 5;
        top: 115px;
        .spaceman {
          width: 100%;
          height: 195px;
        }
        .iconBig {
          width: 48px;
          height: 45px;
          z-index: 3;
          position: absolute;
          top: 24px;
          left: -2px;
          // transform: rotate(65deg);
          animation: moveRightToLeft 3s infinite linear; /* 应用动画效果 */
          @keyframes moveRightToLeft {
            0% {
              // left: 0px; /* 从右侧边界开始 */
              transform: translateX(0px) rotate(65deg);
            }
            50% {
              // left: -20px; /* 移动到左侧边界 */
              transform:  translateX(-10px) rotate(65deg);
            }
            100% {
              // left: 0px; /* 返回右侧边界 */
              transform:  translateX(0px) rotate(65deg);
            }
          }
        }
        .iconSmall {
          width: 25px;
          height: 24px;
          z-index: 3;
          position: absolute;
          top: 58px;
          left: 20px;
          animation: rotateRightToLeft 5s infinite linear; /* 应用动画效果 */

          @keyframes rotateRightToLeft {
            0% {
              transform: rotate(0deg); /* 从0度开始旋转 */
            }
            50% {
              transform: rotate(40deg); /* 旋转到180度 */
            }
            100% {
              transform: rotate(0deg); /* 再次旋转到360度 */
            }
          }
        }
        .phone {
          width: 41px;
          height: 54px;
          z-index: 3;
          position: absolute;
          top: 45px;
          right: 0px;
        }
      }
      .wheel {
        width: 100%;
        height: 1180px;
        border: 1px solid #603cf2;
        background: rgba(0, 6, 37, 0.85);
        border-radius: 8px;
        padding: 0 8px;
        .win {
          margin: auto;
          margin-top: 75px;
          width: 280px;
          height: 65px;
          background-image: url("../../assets/img/iframe-bg.png");
          background-size: cover;
          display: flex;
          // justify-content:center;
          flex-direction: column;
          align-items: center;
          > p {
            color: #ffec99;
            font-weight: 700;
            font-size: 14px;
            padding-top: 12px;
          }
          > b {
            color: #fff;
            font-weight: 800;
            font-size: 24px;
          }
        }
        .surplus {
          margin: 10px 0;
          color: #8092ed;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }
        .click {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          margin: 0 auto;
          width: 90px;
          height: 41px;
          background: linear-gradient(180deg, #711c9d, #512de3);
          border-radius: 8px;
        }
        .chance {
          padding: 5px 0;
          text-align: center;
          > b {
            color: #0076eb;
            font-size: 12px;
          }
          .chip {
            color: #fff;
            padding: 0 2px;
          }
          .icon-youjiantou {
            padding-left: 5px;
          }
        }
        .container {
          background: #17268e;
          width: 296px;
          height: 20px;
          border-radius: 20px;
          margin: 0 auto;
          &::before{
            height:100%;
                width:10px;
                color:red;
          }
          >span{
                display:block;
                
                
           
          }
        }
        .content {
          margin: 22px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          .contentTit {
            display: flex;
            align-items: center;
            > img {
              width: 45px;
              margin: 0 10px;
              &:last-child {
                transform: rotate(180deg);
              }
            }
            > b {
              color: #61a5e3;
              font-size: 20px;
            }
          }
        }
        .period {
          text-align: center;
          font-size: 14px;
          color: #8092ed;
          > p:last-child {
            color: #fff;
            font-size: 12px;
            padding-top: 5px;
          }
        }
        > h3 {
          font-size: 16px;
          color: #c0392b;
          text-decoration: underline;
        }
        > ul {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
          line-height: 19px;
          > li {
            padding: 5px 0;
            color: #003ba5;
          }
          .orange {
            color: #c0392b;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .van-popup {
    width: 343px;
    height: 343px;
    background: transparent;
    .popupTil {
      width: 100%;
      height: 62px;
      padding: 16px 24px;
      background: linear-gradient(180deg, #002b5d, #19293c);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      color: #fff;
      font-weight: 700;
      .icon-cha {
        font-size: 30px;
        color: #ccc;
        font-weight: 200;
      }
    }
    .popupCon {
      background: #10151d;
      width: 100%;
      height: 281px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 20px;
      > img {
        width: 200px;
        height: 200px;
      }
      > span {
        color: #fff;
        font-size: 13px;
      }
    }
  }
}
</style>