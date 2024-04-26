<template>
  <div id="share-agent-box">
    <div class="agentTop">
      <svg
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
    <img src="../../assets/img/agent-img-png.png" />
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
          <span
            >https://www.tlkgame.site/login?type=register&code=BBKJXIYD</span
          >
          <span class="iconfont icon-fuzhi"></span>
        </li>
        <li>
          <span>Invitation code</span>
          <div>
            <span class="bbk">BBKJXIYD</span>
            <span class="iconfont icon-fuzhi"></span>
          </div>
        </li>
        <li>
          <span>Promotion QR Code</span>
          <span class="display">Display</span>
        </li>
      </ul>

      <div class="dataBox">
        <div class="dataTop">
          <b>Data Overview</b>
        </div>
        <div class="fold">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" name="1">
              代码是写出来给人看的，附带能在机器上运行。
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const activeNames = ref(['1']);
</script>

<style lang="scss">
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
    position: relative;
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
    margin: 0;
  }
  #conbox {
    width: 100%;
    height: 100%;
    background: #2a2c2c;
    padding-top: 15px;
    .card {
      width: 100%;
      height: 80px;
      background-image: url("../../assets/img/balanceBg.png");
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
      .fold{
        width:100%;
        padding:6px 8px;
        height:48px;
        .van-collapse{
            width:100%;
            height:100%;
           
            .van-collapse{
            }
        }
      }
    }
  }
}
</style>
