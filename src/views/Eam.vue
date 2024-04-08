<template>
  <div id="share-Eam-box">
    <topComp></topComp>
    <div id="center_Con">
      <div class="income">
        <p>💰 Today's income</p>
        <div class="income_con">
          <div class="withdraw">
            <p>₹0,00</p>
            <div class="box-withdraw">
              <span class="box-money" @click="hint">Withdraw money</span>
              <reminderComp v-model="showCenter"></reminderComp>
            </div>
          </div>
          <div class="money_img">
            <img src="../assets/img/money111.png" />
          </div>
        </div>
      </div>
      <div class="task">
        <div class="task_title">💎 The daily update task</div>
        <ul>
          <li v-for="(item, index) in taskList" :key="index">
            <div class="game">
              <img :src="item.info.icon" />
              <div class="game_con">
                <p>{{ item.game_title }}</p>
                <b>{{ item.game_brief }}</b>
              </div>
            </div>
            <div class="security_deposit">
              <div
                class="vip"
                :style="{
                  background: item.background,
                }"
              >
                VIP{{ item.user_level }}
              </div>
              <div class="deposit_amount">
                SECURITY DEPOSIT: {{ item.start_amount }}
              </div>
            </div>
            <div class="recharge_amount">
              <img :src="background_yellow" />
              <b @click="hint">+₹{{ item.game_reward }}</b>
            </div>
            <div class="lock">
              <img :src="lock_img" />
            </div>
          </li>

          <!-- 
            <li>
              <div class="game">
                  <img src="../assets/img/upload_live_carrom-clash-logo_17015433035476.png"/>  
                  <div class="game_con">
                     <p>Play game and provide feedback</p>
                     <b>Play the mini-game and write feedback</b>
                  </div>
              </div>
              <div class="security_deposit">
                 <div class="vip"> VIP1</div>
                 <div class="deposit_amount">SECURITY DEPOSIT: 50</div>  
              </div>
              <div class="recharge_amount">
               <img  src="../assets/img/background-yellow.png"/>
               <b>+₹20</b>
              </div>
              <div class="lock">
                 <img src="../assets/img/lock.png"/>
              </div>

            </li> -->
        </ul>
      </div>
    </div>
    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import reminderComp from "../components/reminderComp.vue";
import axios from "axios";

import background_yellow from "../assets/img/background-yellow.png";
import lock_img from "../assets/img/lock.png";
import gamePicture1 from "../assets/img/game_picuure1.png";
import gamePicture2 from "../assets/img/game_picture2.jpg";
import gamePicture3 from "../assets/img/game_picture3.png";
import gamePicture4 from "../assets/img/game_picture4.png";
import gamePicture5 from "../assets/img/game_picture5.jpg";
import gamePicture6 from "../assets/img/game_picture6.jpg";
import gamePicture7 from "../assets/img/game_picture7.jpg";
import gamePicture8 from "../assets/img/game_picture8.png";
import gamePicture9 from "../assets/img/game_picture9.jpg";
import gamePicture10 from "../assets/img/game_picture10.jpg";

// const jump = (params) => {
//   router.push(params.path);
// };
const route = useRoute();
const router = useRouter();

const showCenter = ref(false);
const hint = () => {
  showCenter.value = true;
};

const eamFunc = () => {
  axios
    .get("https://minibk.disneygo.org/api/get_sys_config_by_type?type=16", {})
    .then((res) => {
      let arr = res.data.data.content.game;
      arr.some((item) => {
        item.background =
          "linear-gradient(to right, rgb(36, 175, 155) 50%, rgb(151, 201, 76))";
      });
      taskList.value = arr;
      console.log(arr, "arr------------");
    })
    .catch((err) => {});
};
onMounted(() => {
  eamFunc();
});

const taskList = ref([]);
</script>

<style lang="scss">
#share-Eam-box {
  font-family: PingFang SC-Bold, PingFang SC;
  #center_Con {
    margin-top: 52px;

    .income {
      width: 100%;
      height: 190px;
      background-color: rgb(255, 255, 255);
      padding: 15px;
      > P {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        color: rgb(48, 48, 48);
        font-family: PingFang SC-Bold, PingFang SC;
      }
      .income_con {
        width: 100%;
        height: 104px;
        background-color: rgb(252, 135, 151);
        border: 1px solid transparent;
        border-radius: 5px;
        display: flex;
        .withdraw {
          width: 240px;
          height: 100%;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          > p {
            font-size: 24px;
            font-weight: bold;
            color: rgb(255, 255, 255);
          }
          .box-withdraw {
            height: 30px;
            width: 121px;
            border: 1px solid transparent;
            border-radius: 20px;
            background-color: rgb(255, 255, 255);
            display: flex;
            justify-content: center;
            align-items: center;
            .box-money {
              color: #ff7a8a;
              font-weight: bold;
              font-size: 12px;
              font-family: PingFang SC-Bold, PingFang SC;
            }
          }
        }
        .money_img {
          flex: 1;
          height: 100%;
          padding: 10px;
          > img {
            width: 120px;
            height: 82px;
          }
        }
      }
    }
    .task {
      width: 100%;
      padding: 0 15px;
      background-color: rgb(244, 244, 244);
      padding-bottom: 150px;
      .task_title {
        width: 100%;
        height: 60px;
        font-size: 18px;
        font-weight: bold;
        line-height: 60px;
        color: rgb(48, 48, 48);
      }
      > ul {
        width: 100%;
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 13px;
        > li {
          width: 100%;
          height: 110px;
          background-color: rgb(255, 255, 255);
          border: 1px solid transparent;
          border-radius: 5px;
          position: relative;
          .game {
            width: 100%;
            height: 82px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            > img {
              border-radius: 5px;
              height: 60px;
              width: 60px;
              margin-right: 5px;
            }
            .game_con {
              height: 100%;
              flex: 1;
              display: flex;
              justify-content: center;
              flex-direction: column;
              > p {
                padding-bottom: 10px;
                color: rgb(0, 0, 0);
                font-size: 14px;
                font-weight: bold;
              }
              > b {
                font-size: 14px;
                color: #999;
              }
            }
          }
          .security_deposit {
            height: 28px;
            width: 100%;
            display: flex;
            line-height: 28px;
            .vip {
              height: 100%;
              width: 55px;
              // background: linear-gradient(
              //   to right,
              //   rgb(36, 175, 155) 50%,
              //   rgb(151, 201, 76)
              // );
              color: rgb(255, 255, 255);
              font-size: 15px;
              font-weight: bold;
              text-align: center;
              margin-right: 5px;
              border-bottom-left-radius: 5px;
            }
            .deposit_amount {
              flex: 1;
              height: 100%;
              background-color: rgb(255, 249, 226);
              color: rgb(202, 152, 39);
              font-weight: bold;
              font-size: 12px;
            }
          }
          .recharge_amount {
            position: absolute;
            right: 0;
            bottom: -1px;
            width: 100px;
            height: 40px;
            > img {
              width: 100px;
              height: 40px;
            }
            > b {
              z-index: 5;
              position: relative;
              top: -36px;
              left: 28px;
              font-size: 18px;
              color: rgb(48, 48, 48);
            }
          }
          .lock {
            height: 30px;
            width: 30px;
            z-index: 5;
            background-color: rgba(0, 0, 0, 0.6);
            position: relative;
            top: -110px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 5px;
            > img {
              width: 22px;
              height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>