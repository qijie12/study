<template>
  <div id="share-sign_in-box">
    <div class="iconfont icon-arrow-left" @click="jumplogin"></div>

    <div class="sign">Sign in</div>

    <div class="choose">
      <van-tabs
        color="#ffcd17"
        line-width="60px"
        line-height="2px"
        title-active-color="black"
        title-inactive-color="#ccc"
        v-model:active="active"
      >
        <van-tab title="Phone"></van-tab>
        <van-tab title="Email"> </van-tab>
      </van-tabs>
    </div>

    <div class="information">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-if="!active"
            v-model="phone"
            placeholder="Phone number"
            :rules="[
              {
                required: true,
                message: 'Please fill in your cell phone number',
              },
            ]"
          >
            <template #left-icon>
              <span class="iconfont icon-shouji"></span>
              <span class="num">+91</span>
            </template>
          </van-field>

          <van-field
            v-else
            v-model="email"
            placeholder="Email"
            :rules="[
              { required: true, message: 'Please enter yuor login password' },
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
        </van-cell-group>
        <div style="margin: 16px">
          <div class="retrieve">
            <span @click="jumpSupport">forgot your password?</span>
          </div>

          <div class="option">
            <van-button native-type="submit" type="primary" block
              >Login</van-button
            >
            <van-button type="primary" block @click="jumpRegister"
              >Register</van-button
            >
          </div>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();

const jumplogin = () => {
  router.push("/login");
};

const jumpRegister = () => {
  router.push("/Register");
};
const jumpSupport = () => router.push("/support");

const active = ref(0);

const phone = ref("");
const email = ref("");
const password = ref("");

const onSubmit = (values) => {
  let params = {
    email: email.value,
    password: password.value,
    phone: phone.value,
    type: active.value ? "email" : "phone",
  };
  axios
    .post("https://minibk.disneygo.org/api/login", params)
    .then((res) => {
      // console.log(res, "res------------9696");
    })
    .catch((err) => {
      // console.log(err, "err------------9696");
    });

  // https://minibk.disneygo.org/api/game/all-game-list
  // https://minibk.disneygo.org/api/get_sys_config_by_type?type=16
  // https://minibk.disneygo.org/api/get_customer_service_list
};

const close = ref(true);
const open = ref("password");
const show = () => {
  close.value = !close.value;
  open.value = close.value ? "password" : "text";
};
</script>

<style lang="scss">
#share-sign_in-box {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  font-family: PingFang SC-Bold, PingFang SC;
  .icon-arrow-left {
    width: 100%;
    height: 30px;
    padding: 20px;
    font-size: 20px;
    color: #303030;
  }
  .sign {
    text-align: center;
    color: rgb(48, 48, 48);
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  .choose {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    .van-tabs {
      .van-tab {
        &:first-child {
          margin-right: 100px;
        }
        .van-tab__text {
          //   color: black;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
  .information {
    margin-top: 18px;
    border-radius: 0;
    .van-form {
      .van-cell-group {
        border-radius: 0;
        .van-cell {
          background-color: rgb(241, 241, 241);
          margin-bottom: 10px;
          padding: 10px;
        }
        .van-field {
          > .icon-shouji {
            margin-right: 5px;
            color: rgb(142, 165, 167);
          }
          .num {
            color: #8da5a7;
            padding-right: 10px;
          }
          .input_word {
            color: rgb(153, 153, 153);
            font-weight: bold;
          }
          ::placeholder {
            color: rgb(177, 177, 177);
            font-weight: bold;
          }
        }
      }
    }
  }

  .retrieve {
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;
    span {
      color: #303030;
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