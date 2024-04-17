<template>
  <div id="share-register-box">
    <div class="iconfont icon-arrow-left" @click="jump_hello"></div>
    <img class="register_img" src="../../assets/img/money50.png" />
    <div class="register_title">Register</div>

    <van-tabs
      title-inactive-color="#999"
      color="#ffcd17"
      line-width="60px"
      line-height="2px"
      v-model:active="active"
      @click-tab="onClickTab"
    >
      <van-tab title="Phone"></van-tab>
      <van-tab title="Email"></van-tab>
    </van-tabs>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-if="!active"
          v-model="username"
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
            <span class="num">+91</span>
          </template>
        </van-field>
        <van-field
          v-else
          v-model="username"
          placeholder="Email"
          :rules="[
            { required: true, message: 'Please enter your e-mail address' },
          ]"
        >
          <template #left-icon>
            <span class="iconfont icon-youxiang"></span>
          </template>
        </van-field>
        <van-field
          v-model="password"
          :type="show ? 'text' : 'password'"
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
              class="iconfont"
              @click="emerge"
              :class="{
                'icon-biyanjing': !show,
                'iconfont icon-yanjing1': show,
              }"
            >
            </span>
            <!-- 
          <span class="iconfont icon-biyanjing"></span>      
          <span class="iconfont icon-yanjing1"></span> -->
          </template>
        </van-field>
        <van-field
          v-model="verification"
          placeholder="verification code"
          :rules="[
            { required: true, message: 'Please enter the verification code' },
          ]"
        >
          <template #left-icon>
            <span class="iconfont icon-_qianganquanbaohu"></span>
          </template>

          <template #right-icon>
            <van-button type="primary" style="width: 54px; height: 31px"
              >Code</van-button
            >
          </template>
        </van-field>
        <van-field clearable v-model="invitation" placeholder="invitation code">
          <template #left-icon>
            <span class="iconfont icon-yaoqingma"></span>
          </template>
          <template #right-icon>
            <span> Optional</span>
          </template>
        </van-field>
      </van-cell-group>
    </van-form>

    <div class="Button">
      <van-button type="primary" block> Sign up </van-button>
      <van-button type="primary" block @click="jump_return">
        Return
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const active = ref("false");
const username = ref();
const verification = ref();
const invitation = ref();
const password = ref();
const show = ref(false);
const onClickTab = () => {};
const onSubmit = () => {};
const emerge = () => {
  show.value = !show.value;
};
const jump_return = () => {
  router.push("/sign_in");
};
const jump_hello=()=>{
  router.push('/hello')
}
</script>

<style lang="scss">
#share-register-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 10vh;
  padding: 20px 15px 0 15px;
  > .icon-arrow-left {
    font-size: 20px;
  }
  .register_img {
    width: 100%;
    padding: 8px 0 15px 0;
  }
  .register_title {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    color: #303030;
    margin-bottom: 10px;
  }
  .van-tabs {
    .van-tab__text--ellipsis {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .van-form {
    margin-top: 10px;
    .van-cell-group {
      padding: 0;
      margin: 0;
      .van-cell {
        display: flex;
        align-items: center;
        margin: 10px 0;
        background: #f1f1f1;
        .van-field__control::placeholder {
          font-weight: bold;
          color: rgb(153, 153, 153);
        }
        .num {
          color: #8da5a7;
          padding-right: 5px;
        }
        > .iconfont {
          color: #8da5a7;
        }
        .icon-_qianganquanbaohu {
          font-size: 20px;
        }
        .icon-yaoqingma {
          font-size: 25px;
        }
        .van-field__right-icon {
          .van-button {
            width: 52px;
            height: 30px;
            border-color: transparent;
            border-radius: 5px;
            background: linear-gradient(to right, #ffec00, #feba00);
            color: #303030;
            font-weight: bold;
          }
          .icon-yanjing1 {
            font-size: 13px;
          }
        }
      }
    }
  }
  .Button {
    margin-top: 30px;
    .van-button {
      background-color: #ffffff;
      margin-bottom: 10px;
      border: 1px solid #ffec00;
      color: #303030;
      font-weight: bold;
    }
    .van-button:first-child {
      background: linear-gradient(to right, #ffec00, #feba00);
    }
  }
}
</style>