<template>
  <div id="share-me-box">
    <div class="me-bg"></div>

    <div class="me-top">
      <div class="information">
        <div class="information_left">
          <img src="../assets/img/Cartoonhead.png" />
          <div class="information_con">
            <p class="hlm">hlm</p>
            <p class="id">
              <span class="id_num">{{ id }}</span>
              <span class="iconfont icon-fuzhi" @click="copyID"> </span>
            </p>
          </div>
        </div>
        <div class="information_right" @click="jumpvip">
          <i>VIP2</i>
        </div>
      </div>
      <div class="balance_box">
        <p class="balance">Balance</p>
        <div class="money">
          <div class="num-box">
            <span class="num">₹ 180.00</span>
            <span class="iconfont icon-xuexiao"></span>
          </div>

          <van-button type="primary" to="deposit"> Deposit </van-button>
        </div>
      </div>

      <ul class="func">
        <li
          v-for="(item, index) in funcList"
          :key="index"
          @click="jumpDif(item)"
        >
          <img :src="item.url" />
          <span>{{ item.text }}</span>
        </li>
        <!-- <li  @click="jumpWith">
          <img src="../assets/img/withsrawal-img2.png" />
          <span>Withdrawal</span>
        </li>
        <li>
          <img src="../assets/img/financial_record.png" />
          <span>Financial Records</span>
        </li>
        <li>
          <img src="../assets/img/cs-img.png" />
          <span>CS</span>
        </li> -->
      </ul>
    </div>

    <ul class="personage">
      <li
        v-for="(item, index) in personageList"
        :key="index"
        @click="jumpPerson(item, index)"
      >
        <img :src="item.url" />
        <div class="personage_title">
          <span class="tit">{{ item.text }}</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </li>
      <!-- <li>
          <img src="../assets/img/personage-img.png"/>
          <div class="personage_title">
            <span class="tit">Personal Info</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/agent_img222.png"/>
          <div class="personage_title">
            <span class="tit">Agent Management</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/bet-records.png"/>
          <div class="personage_title">
            <span class="tit">Bet Records</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/announcement-img.png"/>
          <div class="personage_title">
            <span class="tit">Announcement</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/notice-img.png"/>
          <div class="personage_title">
            <span class="tit">Notice</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li> -->
    </ul>
    <van-popup
      class="agentPopup"
      v-model:show="showRight"
      position="right"
      :style="{ width: '100%', height: '100%' }"
      :closeable="true"
      close-icon-position="top-left"
    >
      <!-- 这里可以放置弹出层的内容 -->
      <div id="share-agent-box">
        <!-- <pinkTopComp></pinkTopComp> -->
        <div class="agentTop">
          <svg
            @click="jumpTo"
            width="20"
            height="20"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm.028 3a.803.803 0 0 1 .527.242l11.033 10.576c.234.22.381.524.412.843v.18c-.041.604-.565 1.132-1.175 1.155-.608.01-1.216 0-1.825.004-.003 3.184.004 6.369-.003 9.553-.009.745-.648 1.395-1.386 1.447h-4.433c-.37-.04-.687-.372-.677-.75-.003-2.157 0-4.315-.002-6.473.014-.142-.102-.28-.247-.275-1.486-.005-2.972 0-4.458-.002-.125-.014-.26.06-.285.188-.018.14-.007.28-.009.42v6.143c.007.373-.303.704-.668.749h-4.43a1.53 1.53 0 0 1-1.224-.794 1.527 1.527 0 0 1-.178-.753V20c-.61-.003-1.22.006-1.83-.005-.603-.024-1.121-.544-1.17-1.142v-.186a1.3 1.3 0 0 1 .389-.824c3.661-3.511 7.324-7.02 10.985-10.532A.918.918 0 0 1 19.922 7h.106z"
              fill="#ffffff"
              fill-rule="evenodd"
            ></path>
          </svg>
          <b>Agent Management</b>
          <span></span>
        </div>

        <img src="../assets/img/agent-img-png.png" />
        <div id="conbox">
          <div class="card">
            <div class="card_L">
              <div class="cardWallet">
                <span class="title">Wallet</span>
                <div><span>INR</span></div>
                <span class="iconfont icon-xuexiao"></span>
              </div>
              <div class="num">₹ 0,00</div>
            </div>
            <van-button type="primary" size="normal" color="#cf9e7e">
              Transfer Out
            </van-button>
          </div>

          <ul>
            <li>
              <span class="link">Invitation link</span>
              <span>
                {{ httpList.avatar }}
              </span>
              <span class="iconfont icon-fuzhi" @click="copyHttp"></span>
            </li>
            <li>
              <span>Invitation code</span>
              <div>
                <span class="bbk">{{ httpList.invite_code }}</span>
                <span class="iconfont icon-fuzhi" @click="copyText"></span>
              </div>
            </li>
            <li>
              <span>Promotion QR Code</span>
              <span class="display" @click="jumpDisplay">Display</span>
            </li>
          </ul>

          <div class="dataBox">
            <div class="dataTop">
              <b>Data Overview</b>
            </div>
            <div class="fold">
              <van-collapse v-model="activeNames">
                <van-collapse-item title="Today,Offline Lv.1" name="1">
                  <h4>Search interval</h4>
                  <ul class="date">
                    <li
                      v-for="(item, index) in dateList"
                      :key="index"
                      @click="bright(index)"
                      :class="{ active: dateListIndex === index }"
                    >
                      {{ item.text }}
                      <div v-show="index === dateListIndex">
                        <div class="checked">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 17 13"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <g
                                transform="translate(-2832.000000, -1103.000000)"
                                stroke="#FFFFFF"
                                stroke-width="3"
                              >
                                <g
                                  transform="translate(2610.000000, 955.000000)"
                                >
                                  <g
                                    transform="translate(24.000000, 91.000000)"
                                  >
                                    <g
                                      transform="translate(179.177408, 36.687816)"
                                    >
                                      <polyline
                                        points="34.2767388 22 24.797043 31.4796958 21 27.6826527"
                                      ></polyline>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <hr style="border-color: #606163; margin-top: 30px" />
                  <h4>Level</h4>
                  <ul class="offline">
                    <li
                      v-for="(item, index) in offlineList"
                      :key="index"
                      @click="show(index)"
                      :class="{ active: offlineIndex === index }"
                    >
                      {{ item.text }}
                      <div v-show="offlineIndex === index">
                        <div class="checked">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 17 13"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <g
                                transform="translate(-2832.000000, -1103.000000)"
                                stroke="#FFFFFF"
                                stroke-width="3"
                              >
                                <g
                                  transform="translate(2610.000000, 955.000000)"
                                >
                                  <g
                                    transform="translate(24.000000, 91.000000)"
                                  >
                                    <g
                                      transform="translate(179.177408, 36.687816)"
                                    >
                                      <polyline
                                        points="34.2767388 22 24.797043 31.4796958 21 27.6826527"
                                      ></polyline>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div class="button">
                    <van-button type="primary" color="#1d1d1d" @click="reset">
                      Clean-up Condition
                    </van-button>
                    <van-button type="primary" color="#3479d4" @click="close">
                      Search
                      <span class="iconfont icon-youjiantou"></span>
                    </van-button>
                  </div>
                </van-collapse-item>
              </van-collapse>

              <h3> Last Modified on:{{updatedList.last_updated_at}}
              </h3>

              <ul>
                <li>
                  <span>Total User Number</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Register Number</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Number of Users of First Deposit</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Deposit Member</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Withdrawal Member</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Bettors with Valid Bets</span>
                  <b>0</b>
                </li>
                <li>
                  <span>Net Loss & Win</span>
                  <b>0,00</b>
                </li>
                <li>
                  <span>First Deposit Amount</span>
                  <b>0,00</b>
                </li>
                <li>
                  <span>Total Deposit</span>
                  <b>0,00</b>
                </li>
                <li>
                  <span>Total Withdrawal</span>
                  <b>0,00</b>
                </li>
              </ul>
            </div>
          </div>

          <div class="overviewBox">
            <div class="overviewTop">
              <b>Data Overview</b>
            </div>
            <ul>
              <li @click="jumpre()">
                <div class="member">
                  <img src="../assets/img/rise-img.png" />
                </div>
                <b>Handling Fee Statement</b>
              </li>
              <li @click="jumpMem()">
                <div class="member">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24px 24px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49H9.17C10.3994 11.449 11.5646 10.9315 12.4193 10.0469C13.274 9.16234 13.7512 7.98004 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                      fill="#177DDC"
                    ></path>
                    <path
                      d="M14.08 14.149C11.29 12.289 6.73999 12.289 3.92999 14.149C2.65999 14.999 1.95999 16.149 1.95999 17.379C1.95999 18.609 2.65999 19.749 3.91999 20.589C5.31999 21.529 7.15999 21.999 8.99999 21.999C10.84 21.999 12.68 21.529 14.08 20.589C15.34 19.739 16.04 18.599 16.04 17.359C16.03 16.129 15.34 14.989 14.08 14.149Z"
                      fill="#177DDC"
                    ></path>
                    <path
                      d="M19.99 7.338C20.15 9.278 18.77 10.978 16.86 11.208H16.81C16.75 11.208 16.69 11.208 16.64 11.228C15.67 11.278 14.78 10.968 14.11 10.398C15.14 9.478 15.73 8.098 15.61 6.598C15.5414 5.818 15.2765 5.06806 14.84 4.418C15.364 4.16308 15.9421 4.03947 16.5245 4.05782C17.1069 4.07617 17.6762 4.23595 18.1831 4.52335C18.69 4.81076 19.1193 5.21717 19.4341 5.70753C19.7489 6.19789 19.9397 6.75747 19.99 7.338Z"
                      fill="white"
                    ></path>
                    <path
                      d="M21.988 16.59C21.908 17.56 21.288 18.4 20.248 18.97C19.248 19.52 17.988 19.78 16.738 19.75C17.458 19.1 17.878 18.29 17.958 17.43C18.058 16.19 17.468 15 16.288 14.05C15.618 13.52 14.838 13.1 13.988 12.79C16.198 12.15 18.978 12.58 20.688 13.96C21.608 14.7 22.078 15.63 21.988 16.59Z"
                      fill="#177DDC"
                    ></path>
                  </svg>
                </div>
                <b>member</b>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </van-popup>
    <ul class="set">
      <li v-for="(item, index) in setList" :key="index" @click="jump(item)">
        <img :src="item.url" />
        <div class="personage_title">
          <span class="tit">{{ item.text }}</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </li>
      <!-- <li>
          <img src="../assets/img/FAQ-img.png"/>
          <div class="personage_title">
            <span class="tit">FAQs</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
       <li>
          <img src="../assets/img/about-us-img.png"/>
          <div class="personage_title">
            <span class="tit">About Us</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
         <li>
          <img src="../assets/img/logout-img.png"/>
          <div class="personage_title">
            <span class="tit">LOGOUT</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li> -->
    </ul>

    <bottomComp></bottomComp>
  </div>
</template>

<script setup>
import { ref , onMounted} from "vue";
import { useRouter } from "vue-router";
import bottomComp from "../components/bottomComp.vue";
import { showSuccessToast } from "vant";
import personage from "../assets/img/personage-img.png";
import agent from "../assets/img/agent_img222.png";
import bet_Records from "../assets/img/bet-records.png";
import announcement from "../assets/img/announcement-img.png";
import notice from "../assets/img/notice-img.png";
import FAQ from "../assets/img/FAQ-img.png";
import about_us from "../assets/img/about-us-img.png";
import logout from "../assets/img/logout-img.png";
import withsrawal from "../assets/img/withsrawal-img2.png";
import financial from "../assets/img/financial_record.png";
import cs from "../assets/img/cs-img.png";
import { agentUpdated } from "../api/agentUpdated";
import {agentHttp} from '../api/agentHttp';
const showPopup = () => {
  showRight.value = true;
  router.push("/agent");
};
const index = ref(0);
const router = useRouter();
const showRight = ref(false);
const id = ref("ID:10000507");
const copyID = () => {
  const input = document.createElement("input");
  input.setAttribute("value", id.value);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  // alert('已复制ID: ' + id.value);
  showSuccessToast("Successful \n replication");
};
// const jumpWith =()=>{
//   router.push({
//     path: '/deposit',
//     query: {
//       tab: 'withdrawal'
//     }
//   })
// };
const jumpvip = () => {
  router.push("/vip");
};

const jumpPerson = (item, index) => {
  if (item.path) {
    router.push(item.path);
  } else if (index === 1) {
    showRight.value = true;
  }
};

const jumpDif = (params) => {
  if (params.path && !params.query) {
    router.push(params.path);
  } else if (params.query) {
    router.push({
      path: params.path,
      query: params.query,
    });
  }
};

const jump = (params) => {
  if (params.path && !params.query) {
    router.push(params.path);
  } else if (params.query) {
    router.push({
      path: params.path,
      query: params.query,
    });
  }
};
// const getRoute = (path, query) => {
//   if(!path || !query) {
//     console.log("path/query不存在")
//     return false
//   }
//    console.log("path/query存在")
// }

// getRoute('1', '2')
const funcList = ref([
  {
    url: withsrawal,
    text: "Withdrawal",
    path: "/deposit",
    query: {
      tab: "withdrawal",
    },
  },
  {
    url: financial,
    text: "Financial Records",
    path: "/financial",
  },
  {
    url: cs,
    text: "CS",
    path: "/cs",
  },
]);

const personageList = ref([
  {
    url: personage,
    text: "Personal Info",
    path: "/personalInfo",
  },
  {
    url: agent,
    text: "Agent Management",
    // path:'/agent'
  },
  {
    url: bet_Records,
    text: "Bet Records",
    path: "/bet",
  },
  {
    url: announcement,
    text: "Announcement",
    path: "/announcement",
  },
  {
    url: notice,
    text: "Notice",
    path: "/notice",
  },
]);

const setList = ref([
  {
    url: FAQ,
    text: "FAQs",
    path: "/FAQ_About",
  },
  {
    url: about_us,
    text: "About Us",
    path: "/FAQ_About",
    query: {
      tab: "About Us",
    },
  },
  {
    url: logout,
    text: "LOGOUT",
    path: "/hello",
  },
]);

// import { showSuccessToast } from 'vant';
import pinkTopComp from "../components/pinkTopComp.vue";

const activeNames = ref([]);
const dateListIndex = ref(0);
const offlineIndex = ref(0);

// const httpList = ref("https://www.tlkgame.site/login?type=register&code=BBKJXIYD");
const httpList=ref({})
// const textList = ref("BBKJXIYD");
const textList=ref({})

const jumpTo = () => {
  router.go();
};

const bright = (index) => {
  dateListIndex.value = index;
};
const show = (index) => {
  offlineIndex.value = index;
};

const reset = () => {
  dateListIndex.value = 0;
  offlineIndex.value = 0;
};

const close = () => {
  activeNames.value = [];
};

const jumpMe = () => {
  router.back();
};

const jumpDisplay = () => {
  router.push("/display");
};

const jumpre = () => {
  router.push("/reportForms");
};

const jumpMem = () => {
  router.push("/member");
};
const copyHttp = () => {
  const input = document.createElement("input");
  input.setAttribute("value", http.value);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  // alert('已复制ID: ' + id.value);
  showSuccessToast("Successful \n replication");
};

const copyText = () => {
  const input = document.createElement("input");
  input.setAttribute("value", text.value);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  // alert('已复制ID: ' + id.value);
  showSuccessToast("Successful \n replication");
};

const dateList = ref([
  { text: "Today" },
  { text: "Yesterday" },
  { text: "This Week" },
  { text: "Last Week" },
  { text: "This Month" },
  { text: "Last Month" },
]);

const offlineList = ref([
  { text: "Offline Lv.1" },
  { text: "Offline Lv.1-2" },
  { text: "Offline Lv.1-3" },
  { text: "Offline Lv.1-4" },
  { text: "All levels" },
]);

const updatedList=ref({});

const call_agentUpdated = async() => {
  let params = {
    level: 1,
    // date: today,  
  };
  let res=await agentUpdated(params);
  console.log(res,'agentUpdated============');
  updatedList.value = res.data;
};

const call_agentHttp= async()=>{
  let res= await agentHttp();
  console.log(res,'agentHttp..............');
  httpList.value=res.data;
  textList.value=rs.data;
}

onMounted(()=>{
  call_agentUpdated();
  call_agentHttp();
})
</script>

<style lang="scss">
#share-me-box {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(247, 247, 247) !important;
  .me-bg {
    width: 220%;
    height: 800px;
    background: rgb(252, 159, 159);
    padding: 10px 16px 0 16px;
    border-radius: 50%;
    position: absolute;
    left: -60%;
    top: -70%;
  }
  .me-top {
    margin-top: 10px;
    width: 100%;
    padding: 10px 16px 0 16px;
    position: relative;
    .information {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 70px;
      .information_left {
        display: flex;
        > img {
          width: 60px;
          height: 60px;
          margin-right: 5px;
        }
        .information_con {
          .hlm {
            color: #ffffff;
            font-size: 14px;
            padding-bottom: 5px;
          }
          .id {
            .id_num {
              display: inline-block;
              width: 97px;
              height: 30px;
              border-radius: 20px;
              background: rgb(254, 207, 207);
              font-size: 14px;
              color: #333;
              text-align: center;
              line-height: 30px;
              font-weight: 300;
            }
            .icon-fuzhi {
              padding-left: 5px;
              color: rgb(255, 255, 255);
            }
          }
        }
      }
      .information_right {
        width: 73px;
        height: 25px;
        background-image: url("../assets/img/vip2222.png");
        background-size: cover;
        position: relative;
        i {
          color: #ffffff;
          font-size: 13px;
          position: absolute;
          font-weight: bold;
          left: 30px;
          top: 6px;
        }
      }
    }
    .balance_box {
      margin: 0 auto;
      width: 311px;
      height: 74px;
      border-radius: 10px;
      background: rgb(84, 25, 6);
      padding: 8px 8px 0 8px;
      .balance {
        color: #fff9;
        font-size: 13px;
        width: 100%;
      }
      .money {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .num-box {
          width: 100%;
          .num {
            font-weight: bold;
            font-size: 20px;
            color: #f9dfa4;
            padding-right: 5px;
          }
          > .icon-xuexiao {
            color: rgb(210, 74, 70);
            font-weight: bold;
          }
        }
        .van-button {
          width: 75px;
          height: 29px;
          background: linear-gradient(180deg, #f5e9b8, #caa143 49.12%, #c79e3e);
          color: #561803;
          font-weight: 700;
          font-size: 14px;
          border-color: #000;
        }
      }
    }
    .func {
      margin: 0 auto;
      width: 343px;
      height: 82px;
      background: #ffffff;
      border-radius: 10px;
      z-index: 2;
      position: absolute;
      top: 145px;
      box-shadow: #e5e7eb;
      border: 1px solid #e5e7eb;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: top;
      > li {
        padding: 10px 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 13px;
        > img {
          width: 32px;
          height: 32px;
        }
        > span {
          padding-top: 5px;
          width: 100px;
          line-height: 1;
        }
      }
    }
  }
  .personage {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    > li {
      padding: 0 15px;
      width: 100%;
      height: 56px;
      background: rgb(255, 255, 255);
      // border-bottom-color:#333;
      display: flex;
      align-items: center;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 15px;
      }
      .personage_title {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid #e5ebf1;
        .tit {
          color: #594735;
          font-size: 14px;
        }
      }
    }
  }
  .agentPopup {
    #share-agent-box {
      font-family: PingFang SC-Bold, PingFang SC;
      width: 100%;
      height: 100vh;
      .agentTop {
        width: 100%;
        height: 50px;
        background: #fc9f9f;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        // position: relative;
        z-index: 500;
        position: fixed;
        top: 0;

        > b {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 13px;
          color: #ffffff;
        }
      }
      > img {
        width: 100%;
        height: 113px;
        margin-top: 50px;
        padding: 0;
        overflow: hidden;
      }
      #conbox {
        margin-top: 0;
        width: 100%;
        background: #2a2c2c;
        padding: 15px 0 80px 0;
        .card {
          width: 100%;
          height: 80px;
          background-image: url("../assets/img/balanceBg.png");
          background-size: cover;
          padding: 10px 30px 20px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .van-button {
            width: 111px;
            height: 33px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            .van-button__content {
              .van-button__text {
                color: #e5cbb6;
                font-weight: 600;
              }
            }
          }
          .card_L {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .cardWallet {
              display: flex;
              .title {
                color: #ad4c2b;
                font-size: 14px;
              }
              > div {
                margin: 0 5px;
                width: 43px;
                height: 20px;
                border-radius: 20px;
                background: #1b1604;
                color: #ffffff;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .num {
              font-size: 22px;
              color: #773d29;
              font-weight: 700;
            }
          }
        }
        > ul {
          width: 100%;
          padding: 0 12px;
          > li {
            width: 100%;
            height: 50px;
            margin-bottom: 5px;
            border: 1px solid #323c3c;
            border-radius: 5px;
            padding: 0 15px;
            color: #ffffff;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .link {
              white-space: nowrap;
            }
            .bbk {
              margin-right: 3px;
            }
            .display {
              color: #2f7eda;
            }
          }
        }
        .dataBox {
          width: 357px;
          height: 487px;
          border: 1px solid #959696;
          border-radius: 8px;
          overflow: hidden;
          margin: 10px 8px;
          .dataTop {
            width: 100%;
            height: 36px;
            border-bottom: 0.5px solid #3f3f3f;
            display: flex;
            align-items: center;
            background: linear-gradient(90deg, #393b40, #252525);
            padding: 10px 8px;
            &::before {
              content: "";
              background: #177ddc;
              border-radius: 30px;
              margin-right: 8px;
              width: 4px;
              height: 100%;
            }
            > b {
              font-size: 14px;
              color: #c1c1c1;
            }
          }
          .fold {
            width: 100%;
            padding: 6px 8px;
            height: 48px;
            .van-collapse {
              width: 100%;
              height: 100%;
              &::after {
                display: none;
              }
              .van-collapse-item {
                width: 100%;
                height: 100%;
                background: #2a2c2c;
                .van-cell {
                  width: 100%;
                  height: 100%;
                  background: #3b3a3b;
                  border-radius: 5px;
                  display: flex;
                  align-items: center;
                  &::after {
                    display: none;
                  }
                  .van-cell__title {
                    font-size: 15px;
                    color: #177ddc;
                  }
                }
                .van-collapse-item__wrapper {
                  width: 100%;
                  background: #2a2c2c;
                  overflow-y: scroll;
                  height: 410px;
                  &::-webkit-scrollbar {
                    display: none;
                  }
                  .van-collapse-item__content {
                    background: #2a2c2c;
                    width: 100%;
                    padding: 0 5px 50px 5px;
                    > h4 {
                      font-size: 16px;
                      color: #c1c1c1;
                      font-weight: 400;
                    }
                    .date {
                      width: 100%;
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      grid-gap: 10px;
                      > li {
                        width: 100%;
                        height: 44px;
                        border: 1px solid #393939;
                        color: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 600;
                        font-size: 13px;
                        position: relative;
                        &.active {
                          border-color: #177ddc;
                          color: #177ddc;
                        }
                        > div {
                          border-top: 8px solid transparent;
                          border-left: 10px solid transparent;
                          border-bottom: 8px solid #177ddc;
                          border-right: 10px solid #177ddc;
                          position: absolute;
                          bottom: 0;
                          right: 0;
                          .checked {
                            z-index: 5;
                            position: absolute;
                            left: -1px;
                            bottom: -13px;
                            font-size: 10px;
                          }
                        }
                      }
                    }
                    .offline {
                      width: 100%;
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      grid-gap: 10px;
                      > li {
                        width: 100%;
                        height: 44px;
                        border: 1px solid #393939;
                        color: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 600;
                        font-size: 13px;
                        position: relative;
                        &.active {
                          border: 1px solid #177ddc;
                          color: #177ddc;
                        }
                        > div {
                          border-top: 8px solid transparent;
                          border-left: 10px solid transparent;
                          border-bottom: 8px solid #177ddc;
                          border-right: 10px solid #177ddc;
                          position: absolute;
                          bottom: 0;
                          right: 0;
                          .checked {
                            z-index: 5;
                            position: absolute;
                            left: -1px;
                            bottom: -13px;
                            font-size: 10px;
                          }
                        }
                      }
                    }
                    .button {
                      margin-top: 30px;
                      width: 100%;
                      display: grid;
                      grid-template-columns: repeat(2, 1fr);
                      .van-button {
                        width: 100%;
                      }
                    }
                  }
                }
              }
            }
            > h3 {
              font-weight: 400;
              font-size: 14px;
              color: #898989;
            }
            > ul {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 15px;
              > li {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                // justify-content:center;
                align-items: center;
                text-align: center;
                color: #c1c1c1;
                font-size: 14px;
                font-weight: 500;
                > span {
                  height: 50px;
                }
                > b {
                  color: #177ddc;
                  font-size: 20px;
                }
              }
            }
          }
        }
        .overviewBox {
          width: 357px;
          height: 155px;
          border: 1px solid #959696;
          border-radius: 8px;
          margin: 0 auto;
          overflow: hidden;
          .overviewTop {
            width: 100%;
            height: 36px;
            border-bottom: 0.5px solid #3f3f3f;
            display: flex;
            align-items: center;
            background: linear-gradient(90deg, #393b40, #252525);
            padding: 10px 8px;
            &::before {
              content: "";
              background: #177ddc;
              border-radius: 30px;
              margin-right: 8px;
              width: 4px;
              height: 100%;
            }
            > b {
              font-size: 14px;
              color: #c1c1c1;
            }
          }
          > ul {
            width: 100%;
            height: calc(155px - 36px);
            background: #252525;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            > li {
              padding: 20px 0;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-size: 12px;
              text-align: center;
              .member {
                height: 35px;
                > img {
                  width: 20px;
                  height: 20px;
                }
              }
              > b {
                color: #c1c1c1;
              }
            }
          }
        }
      }
    }
  }
  .set {
    margin-top: 12px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 100px;
    > li {
      padding: 0 15px;
      width: 100%;
      height: 56px;
      background: rgb(255, 255, 255);
      // border-bottom-color:#333;
      display: flex;
      align-items: center;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 15px;
      }
      .personage_title {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid #e5ebf1;
        .tit {
          color: #594735;
          font-size: 14px;
        }
      }
    }
  }
}
</style>