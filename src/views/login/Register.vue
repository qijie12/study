<template>
  <div id="share-Register-box">
    <div class="iconfont icon-arrow-left" @click="jump('/login')"></div>
    <img class="picture" src="../../assets/img/money50.png" />
    <div class="register">Register</div>

    <div class="choose">
      <van-tabs
        color="#ffcd17"
        line-width="60px"
        line-height="2px"
        v-model:active="skip"
        @click-tab="onClickTab"
      >
        <van-tab title="Phone"></van-tab>
        <van-tab title="Email"></van-tab>
      </van-tabs>
    </div>

    <div class="information">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
          v-if="!skip"
            v-model="username"
            error
            placeholder="phone number"
            :rules="[
              {
                required: true,
                message: 'Please fill in your cell phone number',
              },
            ]"
          >
            <template #left-icon>
              <span class="iconfont icon-shouji"></span>
              <span style="color: #8da5a7; padding-right: 10px">+91</span>
            </template>
          </van-field>

          <van-field
          v-else
            v-model="username"
            error
            placeholder="email"
            :rules="[
              {
                required: true,
                message: 'Please fill in your cell phone number',
              },
            ]"
          >
            <template #left-icon>
              <span class="iconfont icon-youxiang"></span>
            </template>
          </van-field>

          <van-field
            v-model="password"
            :type="open"
            placeholder="Password"
            :rules="[
              { required: true, message: 'Please enter your login password' },
            ]"
          >
            <template #left-icon>
              <span class="iconfont icon-suo"></span>
            </template>
            <template #right-icon>
              <span
                v-if="close"
                class="iconfont icon-biyanjing"
                @click="show"
              ></span>
              <span
                @click="show"
                v-else
                class="iconfont icon-yanjing1"
                style="font-size: 15px"
              ></span>
            </template>
          </van-field>

          <van-field
            v-model="sms"
            center
            clearable
            placeholder="verification code"
            :rules="[
              { required: true, message: 'Please enter the verification code' },
            ]"
          >
            <template #left-icon>
              <span
                class="iconfont icon-_qianganquanbaohu"
                style="font-size: 25px"
              ></span>
            </template>
            <template #button>
              <van-button size="small" type="primary">
                <span>Code</span>
              </van-button>
            </template>
          </van-field>
          <div class="option">
            <van-button native-type="submit" type="primary" block
              >Login</van-button
            >
            <van-button type="primary" block @click="jump('/sign_in')">Return</van-button>
          </div>
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router';

const router=useRouter();

const jump=(params)=>{
  router.push(params);
};

const username = ref("");
const password = ref("");
const sms = ref("");
const active = ref(0);
const onClickTab = ({ title }) => showToast(title);
const onSubmit = (values) => {
  console.log("submit", values);
};

const skip=ref(0);
const email =ref("");

const close = ref(true);
const open = ref("password");
const show = () => {
  close.value = !close.value;
  open.value = close.value ? "password" : "text";
};
</script>

<style lang="scss">
#share-Register-box {
 
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  font-family: PingFang SC-Bold, PingFang SC;
  .icon-arrow-left {
    width: 100%;
    height: 30px;
    padding: 20px 0;
    font-size: 20px;
    color: #303030;
  }
  .picture {
    margin-top: 5px;
    width: 100%;
    height: 88px;
     padding: 0 16px;
  }
  .register {
    text-align: center;
    color: rgb(48, 48, 48);
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  .choose {
    .van-tabs {
      .van-tab {
        font-size: 18px;
      }
    }
  }
  .information {
    margin-top: 20px;
    width: 100%;
  .van-form{
    width:100%;
    padding:0;
    margin:0;
  }
    .van-cell {
      width: 100%;
      padding: 10px;
      background-color: rgb(241, 241, 241);
    }

    .van-cell-group:first-child {
      border-radius: 0;
    }
    .van-field {
      margin-bottom: 10px;

      ::placeholder {
        color: rgb(177, 177, 177);
        font-weight: bold;
      }
      .van-button {
        background: linear-gradient(
          to right,
          rgb(255, 233, 0),
          rgb(254, 186, 0)
        );
        border-color: transparent;
        margin-right: 5px;
        font-size: 14px;
        span {
          color: #303030;
          font-weight: bold;
        }
      }
    }
  }

  .option {
    width: 100%;
    margin-top: 40px;
    padding: 0 15px;

    .van-button {
      background-color: rgb(255, 255, 255);
      border-color: rgb(255, 233, 0);
      color: #303030;
      font-weight: bold;
    }
    .van-button:first-child {
      margin-bottom: 10px;
      background: linear-gradient(to right, rgb(255, 233, 0), rgb(254, 186, 0));
      border: transparent;
    }
  }
}
</style>
