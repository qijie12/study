<template>
  <div id="share-Me-box">
    <topComp></topComp>
    <div class="center_con">
      <div class="personal_id">
        <img class="redact" src="../assets/img/write.png" @click="hint" />
        <div class="grade">
          <img src="../assets/img/mich11111.png" />
          <div class="grade_con">
            <div class="ID">
              <span>ID：10000502 </span>

              <div class="div-box">
                <span @click="prompt">Copy</span>

                <van-popup
                  v-model:show="showSucceed"
                  position="center"
                  :style="{ height: '5%', width: '32%' }"
                >
                  Copy Success!
                </van-popup>
              </div>
            </div>

            <div class="VIP_progress">
              <span class="Vip">VIP1</span>
              <van-progress
                :percentage="100"
                stroke-width="4"
                color="rgb(35, 33, 46)"
                show-pivot="false"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="me_con">
        <div class="me_con_top">
          <div class="con_left">
            <p class="money">₹0,00</p>
            <p class="wallet">Wallet balance</p>
            <div class="withdraw">
              <span @click="hint">Withdraw money</span>
            </div>
          </div>
          <div class="halving_line"></div>
          <div class="con_right">
            <p class="iconfont icon-jiaoyijilu"></p>
            <p class="deal">Transaction records</p>
            <div>
              <span @click="hint">Records</span>
              <reminderComp v-model="showCenter"></reminderComp>
              <!-- <van-popup
                v-model:show="showCenter"
                position="center"
                :style="{ height: '38%', width: '80%' }"
              >
                <div class="tips" style="text-align: center">Tips</div>
                <div class="into">Please go to login first</div>
                <div class="ok"><span>OK</span></div>
                <div class="cancle"><span>Cancel</span></div>
              </van-popup>
             -->
            </div>
          </div>
        </div>
        <ul class="me_con_bottom">
          <li v-for="(item, index) in ulList" :kry="index" @click="hint">
            <img :src="item.url" />
            <span>{{ item.text }}</span>
          </li>

          <!-- <li>
            <img src="../assets/img/message.png" />
            <span>Message</span>
          </li>
          <li>
            <img src="../assets/img/telegram.png" />
            <span>Telegram</span>
          </li>
          <li>
            <img src="../assets/img/deposit.png" />
            <span>Deposit</span>
          </li> -->
        </ul>
      </div>
    </div>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref,onMounted} from "vue";
import reminderComp from "../components/reminderComp.vue";
import { useRouter,useRoute } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import message from "../assets/img/message.png";
import telegram from "../assets/img/telegram.png";
import deposit from "../assets/img/deposit.png";
import axios from "axios";

const router = useRouter();
const route = useRoute();

// const jumpReminser=ref([
//   router.pash('/reminderComp')
// ]);

const reminderCompRef = ref();
const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const showCenter = ref(false);
const hint = () => {
  showCenter.value = true;
};

const showSucceed = ref(false);
const prompt = () => {
  showSucceed.value = true;
};

const ulList = ref([
  {
    url: message,
    text: "Message",
  },
  {
    url: telegram,
    text: "Telegram",
  },
  {
    url: deposit,
    text: "Deposit",
  },
]);

const walletFunc=()=>{
  let params={

    if:false,
  }
  axios
   .get("https://www.facebook.com/tr/?id=3738388059813452&ev=SubscribedButtonClick&dl=https%3A%2F%2Fdisneygo.org%2FMe%2Findex&rl=&if=false&ts=1712730849279&cd[buttonFeatures]=%7B%22classList%22%3A%22van-button%20van-button--primary%20van-button--normal%22%2C%22destination%22%3A%22%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22linear-gradient(90deg%2C%20rgb(255%2C%20236%2C%201)%200%25%2C%20rgb(255%2C%20187%2C%201)%20100%25)%22%2C%22innerText%22%3A%22Withdraw%20money%22%2C%22numChildButtons%22%3A2%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Withdraw%20money&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22DisneyGO%22%7D&sw=390&sh=844&v=2.9.153&r=stable&ec=8&o=4126&fbp=fb.1.1711938755696.1965684066&ler=empty&cdl=API_unavailable&it=1712730620973&coo=false&es=automatic&tm=3&rqm=GET")
   .then((res)=>{
    console.log(res,"---------------")
   })
   .catch((err)=>{})
}

onMounted(()=>{
  walletFunc();
})
</script>

<style lang="scss">
#share-Me-box {
  .center_con {
    font-family: PingFang SC-Bold, PingFang SC;
    padding: 52px 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(241, 241, 241);
    .personal_id {
      width: 100%;
      height: 227px;
      background-color: rgb(247, 221, 91);
      padding: 14px 17px;
      .redact {
        width: 24px;
        height: 24px;
      }
      .grade {
        margin-top: 30px;
        width: 100%;
        height: 53px;
        display: flex;
        > img {
          width: 53px;
          height: 100%;
          margin-right: 10px;
        }
        .grade_con {
          width: 200px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .ID {
            display: flex;
            justify-content: space-between;
            > span {
              font-size: 18px;
              color: #303030;
              font-weight: bold;
            }
            .div-box {
              width: 60px;
              height: 30px;
              border: 1px solid transparent;
              border-radius: 7px;
              background: linear-gradient(
                to right,
                rgb(253, 234, 59),
                rgb(252, 195, 50)
              );
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              > span {
                color: rgb(48, 48, 48);
              }
              > .van-overlay {
                background-color: rgba(255, 255, 255, 0);
              }
              > .van-popup {
                background-color: rgb(72, 72, 72, 0.6);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                color: #ffffff;
                font-weight: 300;
                font-size: 14px;
              }
            }
          }
          .VIP_progress {
            display: flex;
            align-items: center;
            .Vip {
              font-weight: 700;
              color: #303030;
              font-size: 12px;
              padding-right: 10px;
              width: 35px;
            }
            .van-progress {
              flex: 1;
              .van-progress__pivot {
                display: none;
              }
            }
          }
        }
      }
    }
    .me_con {
      z-index: 3;
      position: relative;
      top: -65px;
      margin: 0 auto;
      width: 345px;
      height: 243px;
      background-color: rgb(241, 241, 241);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .me_con_top {
        width: 100%;
        height: 123px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        .halving_line {
          height: 100px;
          width: 2px;
          background-color: rgb(233, 225, 171);
          margin: 0 10px;
        }
        > .con_left {
          flex: 1;
          height: 100%;
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          .money {
            font-size: 24px;
            color: #303030;
            font-weight: 500;
          }
          .wallet {
            font-size: 14px;
            color: #303030;
            font-weight: bold;
          }
          > div {
            width: 120px;
            height: 30px;
            border: 1px solid transparent;
            border-radius: 20px;
            background: linear-gradient(
              to right,
              rgb(253, 234, 59),
              rgb(253, 191, 49)
            );
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
              font-size: 12px;
              font-weight: bold;
              color: #303030;
              > .van-popup-center {
                .tips {
                  display: flex;
                  justify-content: center;
                }
              }
            }
          }
        }
        .con_right {
          flex: 1;
          height: 100%;
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          > .icon-jiaoyijilu {
            font-size: 42px;
          }
          .deal {
            font-weight: 700;
            font-size: 14px;
            color: #303030;
          }
          > div {
            width: 120px;
            height: 30px;
            border: 1px solid transparent;
            border-radius: 20px;
            background: rgb(241, 241, 241);
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
              font-size: 12px;
              font-weight: bold;
              color: #303030;
            }
          }
        }
      }
      .me_con_bottom {
        width: 100%;
        height: 110px;
        background-color: rgb(241, 241, 241);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        > li {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          > img {
            width: 35px;
            height: 35px;
          }
          span {
            font-weight: 700;
            color: #333044;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>