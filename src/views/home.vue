<template>
  <div id="share-home-box">
    <topComp></topComp>

    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swipeList" :key="index">
          <img :src="item.url" />
        </van-swipe-item>
        <!-- <van-swipe-item>
          <img src="../assets/img/swipe-img1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swipe-img2.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swipe-img3.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/swiper2.png" />
        </van-swipe-item> -->
      </van-swipe>
    </div>

    <div class="noticeBar">
      <van-notice-bar scrollable>
        <div class="roll" v-for="(item, index) in rollList" :key="index">
          <img :src="item.url" />
          <span>{{ item.text }}</span>
        </div>
        <!-- <div class="roll">
            <img src="../assets/img/img23-0452ef16.png"/>
            <span>User 10***01 withdraw ₹ 1980</span>
        </div>
        <div class="roll">
            <img src=""/>
            <span>User 10***12 withdraw ₹ 1960</span>
        </div>
        -->
      </van-notice-bar>
    </div>

    <div class="amount">
      <div class="amount_box">
        <div class="amount_box_L">
          <b>₹0.00</b>
          <van-progress
            :percentage="0"
            stroke-width="5"
            pivot-color="#7232dd"
          />
          <p>Number of Completed Tasks 0 / 0</p>
        </div>
        <div class="amount_box_R">
          <img src="../assets/img/money111.png" />
        </div>
      </div>
    </div>

    <div class="task_title">💎 The daily update task</div>

    <ul class="game_list">
      <li v-for="(item, index) in gameList" :key="index" @click="showBottom">
        <div class="game_top">
          <img :src="item.url" />
          <div class="game_text">
            <b>{{ item.title }}</b>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <div class="lock"><img :src="item.src" /></div>
        <div class="game_botttom">
          <div class="money_box">
            <div class="money">
              <div class="vip" :style="{ background: item.backgroundColor }">
                {{ item.vip }}
              </div>
              <span>{{ item.ensure }}</span>
            </div>
          </div>
          <div class="sum" @click="appear">{{ item.num }}</div>
        </div>
      </li>
      <!-- <li>       
         <div class="game_top">
             <img src="../assets/img/game_picuure1.png"/>
             <div class="game_text">
                <b>Play game and provide feedback</b>
                <p>Play the mini-game and write feedback</p>
             </div>
         </div>
         <div class="lock"><img src="../assets/img/lock.png"/></div>
         <div class="game_botttom">
             <div class="money_box">
                <div class="money">
                    <div class="vip">VIP1</div>
                    <span>SECURITY DEPOSIT: 90</span>
                </div>
             </div>
             <div class="sum"> +₹20</div>
         </div>
       </li> -->
    </ul>

    <div class="button">
      <van-button
        type="primary"
        block
        color="linear-gradient(to right,#ffec00,#feba00)"
        style="color: #000000"
      >
        + View more tasks
      </van-button>
    </div>

    <div class="tasks-box">
      <div class="tasks">
        <div class="tasks_title">💎 Money-making tasks</div>
        <div class="tasks_img">
          <img class="light rotate" src="../assets/img/tasklight.png" />
          <img class="picture" src="../assets/img/game_picuure1.png" />
        </div>
        <img class="tasks_money" src="../assets/img/taskMoney.png" />
        <div class="earn">
          <van-button
            type="primary"
            block
            color="linear-gradient(to right,rgb(253, 233, 59),rgb(251, 189, 48))"
            style="
              color: #303030;
              height: 52px;
              font-weight: bold;
              font-size: 22px;
            "
          >
            START EARNING
          </van-button>
        </div>
      </div>
    </div>

    <div id="conter_box">
      <img class="background_img" src="../assets/img/background-picture.png" />
      <div class="lurssen">
        <b>LURSSENVIP</b>
        <p>The Best Money Earning Website In India</p>
      </div>
      <div class="partners_title">Our Partners</div>
      <div class="introduce">
        More than 50 recognized, established international brands partners
      </div>

      <img class="partners_img" src="../assets/img/partner.png" />
      <img class="map" src="../assets/img/map.png" />
      <div id="map_box">
        <div class="map_title">
          <img src="../assets/img/logo-dice.png" />
          <span>LURSSENVIP</span>
        </div>
        <ul class="privacy">
          <li v-for="(item, index) in privacyList" :key="index">
            {{ item.text }}
          </li>
          <!-- <li>Policy and privacy</li>
            <li>About LURSSENVIP</li>
            <li>Terms and conditions</li>
            <li>Contact us</li>
            <li>FAQ</li> -->
        </ul>
        <ul class="map_icon">
          <li>
            <img src="../assets/img/f.png" />
          </li>
          <li>
            <img src="../assets/img/bird.png" />
          </li>
          <li>
            <img src="../assets/img/camera111.png" />
          </li>
        </ul>
        <div class="copyright">©LURSSENVIP. All rights reserved</div>
      </div>
    </div>

    <!-- <div class="setpBox">
      <van-popup
        v-model:show="showBottom"
        position="bottom"
        round
        closeable
        :style="{ height: '40.5%' }"
      >
        <div class="popTop">
          <img src="../assets/img/game_picture10.jpg" />
          <b>Learn how to earn cash through lottery games</b>
        </div>
        <div class="title">Deposit 100 & experience lottery games</div>
        <div class="setp">
          <p class="setpTit">Complete the steps below to getrewards</p>
          <p class="setpCon">①、Deposit $100 and bet on lottery games.</p>
          <p class="setpCon">
            ②、Contact your mentor to request the activation code.
          </p>
          <p class="setpCon">③、Get commission</p>
        </div>
        <van-button type="primary" block @click="showCode">GET ₹20</van-button>
      </van-popup>
    </div> -->
    <div class="codeBox">
      <van-popup v-model:show="showCenter" round>
        <div>
          <h4>Setp 1.</h4>
          <p>
            Get the
            <span>activation code</span>
            from your assigned receptionist.
          </p>
          <img src="../assets/img/telegram.png" />
          <hr style="border: 0.5px solid #fda922;margin-bottom:20px;" />
          <h4>Setp 2.</h4>
          <p>
            Enter the
            <span>activation code</span>
            from the receptionist
          </p>
          <van-form @submit="onSubmit">          
              <van-field
                v-model="username"
                placeholder="Please enter the activation code"
                :rules="[{ required: true, message: 'Please enter the activation code' }]"
              />
              
          </van-form>

          <van-button type="primary" block color="linear-gradient(to right,#ffec00,#feba00)">Submit</van-button>
        </div>
      </van-popup>
    </div>
    <div class="moreBox">
      <van-popup v-model:show="showCenter2" round>

      </van-popup>
    </div>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import topComp from "../components/topComp.vue";
import bottomComp from "../components/bottomComp.vue";
import headImg from "../assets/img/img23-0452ef16.png";
import swipe1 from "../assets/img/swipe-img1.png";
import swipe2 from "../assets/img/swipe-img2.png";
import swipe3 from "../assets/img/swipe-img3.png";
import swipe4 from "../assets/img/swiper2.png";
import lock from "../assets/img/lock.png";
import game_img1 from "../assets/img/game_picuure1.png";
import game_img2 from "../assets/img/game_picture2.jpg";
import game_img3 from "../assets/img/game_picture3.png";
import game_img4 from "../assets/img/game_picture4.png";
import game_img5 from "../assets/img/game_picture5.jpg";
import game_img6 from "../assets/img/game_picture6.jpg";
import game_img7 from "../assets/img/game_picture7.jpg";
import game_img8 from "../assets/img/game_picture8.png";

const route = useRoute();

const showBottom = ref(false);
const showCenter = ref(false);

const appear = () => {
  showBottom.value = true;
};

const showCode = () => {
  showCenter.value = true;
};

const rollList = ref([
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
  {
    url: headImg,
    text: "User 10***01 withdraw ₹ 1980",
  },
]);

const swipeList = ref([
  { url: swipe1 },
  { url: swipe2 },
  { url: swipe3 },
  { url: swipe4 },
]);

const privacyList = ref([
  { text: "Policy and privacy" },
  { text: "About LURSSENVIP" },
  { text: "Terms and conditions" },
  { text: "Contact us" },
  { text: "FAQ" },
]);

const gameList = ref([
  {
    url: game_img1,
    src: lock,
    title: "Play game and provide feedback",
    text: "Play the mini-game and write feedback",
    vip: "VIP1",
    ensure: "SECURITY DEPOSIT: 50",
    num: "+₹20",
    backgroundColor:
      "linear-gradient(to right,rgb(36, 176, 156),rgb(152, 202, 77))",
  },
  {
    url: game_img2,
    src: lock,
    title: "Add your own personal receptionist",
    text: "Add a dedicated receptionist to get high commissions",
    vip: "VIP1",
    ensure: "SECURITY DEPOSIT: 70",
    num: "+₹20",
    backgroundColor:
      "linear-gradient(to right,rgb(36, 176, 156),rgb(152, 202, 77))",
  },
  {
    url: game_img3,
    src: lock,
    title: "Learn how to earn cash through lottery games",
    text: "Deposit 100 & experience lottery games",
    vip: "VIP2",
    ensure: "SECURITY DEPOSIT: 90",
    num: "+₹30",
    backgroundColor: "linear-gradient(90deg, #9C34A9 15%, #F25E43 75%)",
  },
  {
    url: game_img4,
    src: lock,
    title: "Play games with your mentor",
    text: "Play games with your mentor",
    vip: "VIP2",
    ensure: "SECURITY DEPOSIT: 20",
    num: "+₹20",
    backgroundColor: "linear-gradient(90deg, #9C34A9 15%, #F25E43 75%)",
  },
  {
    url: game_img5,
    src: lock,
    title: "Share with 2 of your friends",
    text: "Share it with your friends",
    vip: "VIP3",
    ensure: "SECURITY DEPOSIT: 20",
    num: "+₹20",
    backgroundColor: "linear-gradient(90deg, #FFD194 15%, #D1913C 75%)",
  },
  {
    url: game_img6,
    src: lock,
    title: "Play game and provide feedback",
    text: "Play the mini-game and write feedback",
    vip: "VIP3",
    ensure: "SECURITY DEPOSIT: 100",
    num: "+₹100",
    backgroundColor: "linear-gradient(90deg, #FFD194 15%, #D1913C 75%)",
  },
  {
    url: game_img7,
    src: lock,
    title: "Play game and provide feedback",
    text: "Play the mini-game and write feedback",
    vip: "VIP4",
    ensure: "SECURITY DEPOSIT: 120",
    num: "+₹120",
    backgroundColor: "linear-gradient(90deg, #FF9966 15%, #FF5E62 75%)",
  },
  {
    url: game_img8,
    src: lock,
    title: "Play game and provide feedback",
    text: "Play the mini-game and write feedback",
    vip: "VIP4",
    ensure: "SECURITY DEPOSIT:120",
    num: "+₹120",
    backgroundColor: "linear-gradient(90deg, #FF9966 15%, #FF5E62 75%)",
  },
]);
</script>

<style lang="scss">
#share-home-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100vh;
  margin-top: 88px;
  .swipe {
    width: 100%;
    padding: 15px 15px 0 15px;
    background: linear-gradient(
      to bottom,
      rgb(255, 255, 255),
      rgb(254, 254, 254),
      rgb(253, 253, 253),
      rgb(252, 252, 252),
      rgb(251, 251, 251),
      rgb(250, 250, 250),
      rgb(249, 249, 249)
    );
    .my-swipe .van-swipe-item {
      > img {
        width: 100%;
        height: 127px;
        border-radius: 5px;
      }
    }
  }
  .noticeBar {
    width: 100%;
    padding: 10px 0;
    background: rgb(246, 245, 243);
    .van-notice-bar {
      padding: 0;
      margin: 0;
      width: 100%;
      background-color: transparent;
      .van-notice-bar__content {
        //  width:100%;
        display: flex;
        .roll {
          width: 230px;
          height: 28px;
          border: 1px solid transparent;
          border-radius: 20px;
          background: #7c7c7c;
          display: flex;
          align-items: center;
          margin-right: 5px;
          > img {
            width: 20px;
            height: 20px;
            margin: 0 5px;
          }
          > span {
            color: #fff;
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .amount {
    width: 100%;
    padding: 0 15px;
    background: rgb(244, 244, 244);
    .amount_box {
      width: 100%;
      height: 104px;
      background: linear-gradient(154deg, #ff7483 0%, #ff96a9 100%);
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      padding: 0px 15px;
      .amount_box_R {
        display: flex;
        align-items: center;
        > img {
          width: 70px;
          height: 50px;
        }
      }
      .amount_box_L {
        padding: 20px 0px 10px 0px;
        > b {
          color: #fff;
          font-size: 24px;
          font-weight: 700;
        }
        > p {
          color: #fff;
          font-size: 13.5px;
          font-weight: 800;
        }
        .van-progress {
          margin: 10px 0;
        }
      }
    }
  }
  .task_title {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #303030;
    background: rgb(244, 244, 244);
  }
  .game_list {
    background: rgb(244, 244, 244);
    width: 100%;
    padding: 0 15px 15px 15px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    > li {
      background: rgb(255, 255, 255);
      width: 100%;
      height: 120px;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .lock {
        z-index: 2;
        background: rgba(0, 0, 0, 0.6);
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
          width: 20px;
          height: 20px;
        }
      }
      .game_top {
        display: flex;
        width: 100%;
        height: max-height;
        // height:80px;
        padding: 10px 0 0 8px;
        align-items: center;
        > img {
          width: 60px;
          height: 60px;
          border-radius: 5px;
          margin-right: 5px;
        }
        .game_text {
          flex: 1;
          > b {
            font-size: 14px;
          }
          > p {
            margin-top: 5px;
            font-size: 13px;
            color: #999999;
            font-weight: bold;
          }
        }
      }
      .game_botttom {
        height: 40px;
        width: 100%;
        position: relative;
        .sum {
          background-image: url("../assets/img/background-yellow.png");
          background-size: cover;
          top: 0;
          right: 0;
          position: absolute;
          z-index: 3;
          height: 41px;
          width: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 18px;
        }
        .money_box {
          width: 100%;
          height: 40px;
          padding-top: 10px;
          .money {
            height: 100%;
            background: #fff9e1;
            display: flex;
            align-items: center;

            .vip {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 56px;
              // background: linear-gradient(
              //   to right,
              //   rgb(36, 176, 156),
              //   rgb(152, 202, 77)
              // );
              color: #ffffff;
              font-weight: bold;
              font-size: 15px;
              margin-right: 5px;
            }

            > span {
              font-weight: bold;
              font-size: 12px;
              color: #cc9707;
            }
          }
        }
      }
    }
  }
  .button {
    background: rgb(244, 244, 244);
    width: 100%;
    padding: 15px;
    .van-button {
      width: 100%;
      height: 50px;
      font-weight: bold;
    }
  }
  .tasks-box {
    width: 100%;
    padding: 0 15px 15px 15px;
    background: rgb(246, 245, 243);
    .tasks {
      position: relative;
      border-radius: 5px;
      background: linear-gradient(180deg, #ffcc12 0%, #d0021a 100%);
      height: 336px;
      width: 100%;
      .tasks_title {
        color: #303030;
        font-weight: bold;
        font-size: 18px;
        padding: 15px 0 0 15px;
      }
      .tasks_img {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        .rotate {
          width: 233px;
          height: 233px;
          animation: rotate 1.5s linear infinite; /* 旋转动画 */
          @keyframes rotate {
            from {
              rotate: (0deg);
            }
            to {
              rotate: (360deg);
            }
          }
        }
        .picture {
          z-index: 3;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }
      }
      .tasks_money {
        width: 100%;
        height: 100px;
        margin-top: 100px;
      }
      .earn {
        margin-top: 30px;
        width: 100%;
        padding: 0 10px;
      }
    }
  }

  #conter_box {
    padding-bottom: 50px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .background_img {
      width: 100%;
      height: 129px;
    }
    .lurssen {
      width: 100%;
      z-index: 1;
      position: absolute;
      top: 23px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      > b {
        font-size: 24px;
        color: #fff;
        padding-bottom: 5px;
      }
      > p {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
      }
    }
    .partners_title {
      padding: 10px 0;
      font-size: 14px;
      color: #303030;
      font-weight: bold;
    }
    .introduce {
      width: 100%;
      padding: 0 5px;
      font-size: 12px;
      color: #999999;
      font-weight: bold;
    }
    .partners_img {
      margin: 35px 0;
      width: 100%;
    }
    .map {
      width: 100%;
      height: 281px;
    }
    #map_box {
      z-index: 5;
      position: absolute;
      top: 70%;
      .map_title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        > img {
          width: 22px;
          height: 22px;
        }
        > span {
          padding-left: 5px;
          font-size: 15px;
          color: #323233;
          font-weight: bold;
        }
      }
      .privacy {
        display: flex;
        width: 280px;
        justify-content: center;
        flex-wrap: wrap;
        > li {
          text-decoration: underline;
          font-size: 10px;
          color: #999999;
          font-weight: bold;
          margin-right: 15px;
        }
      }
      .map_icon {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        > li {
          margin: 0 15px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #f1f1f1;
          display: flex;
          align-items: center;
          justify-content: center;
          > img {
            width: 14px;
            height: 14px;
          }
        }
      }
      .copyright {
        font-size: 10px;
        color: #999999;
        font-weight: bold;
      }
    }
  }
  .setpBox {
    .van-popup {
      padding: 15px;
      .popTop {
        padding-right: 30px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #303030;
        line-height: 22px;
        > img {
          width: 50px;
          height: 100%;
          margin-right: 10px;
        }
      }
      .title {
        width: 100%;
        height: 40px;
        font-size: 12px;
        font-weight: 700;
        color: #999;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        line-height: 38px;
        margin: 10px 0 12px 0;
      }
      .setp {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 700;
        color: #303030;
        .setpTit {
          padding-bottom: 5px;
        }
        .setpCon {
          line-height: 21px;
        }
      }
      .van-button {
        height: 50px;
        background: linear-gradient(to right, #ffec00, #feba00);
        border-color: transparent;
        .van-button__text {
          color: #303030;
          font-weight: 700;
          font-size: 22px;
        }
      }
    }
  }
  .codeBox {
    .van-popup {
      > div {
        width: 300px;
        height: 400px;
        padding: 0 10px;
        text-align: center;
        > h4 {
          color: #323223;
          margin: 10px 0 15px 0;    
        }
        
        >p {
          font-size: 16px;
          color: #303030;
          font-weight: 600;
          > span {
            color: #ee0a24;
          }
        }
        > img {
          width: 70px;
          height: 70px;
          margin-top: 10px;
        }
        .van-form{
          margin:10px 0 15px 0;
          .van-field{
            background:#f4f4f4;
            .van-field__body{
              .van-field__control{
                font-weight:700;
                color: #303030;
                font-size:14px; 
              }
                       
            }
            .van-field__error-message{
                color:#ee0a24;
                font-size:12px;
                font-weight:700;
              }
          }
        }
        .van-button{  
         .van-button__text{
          color:#303030;
          font-weight: 700;
         }  
        } 
      }
    }
  }
}
</style>