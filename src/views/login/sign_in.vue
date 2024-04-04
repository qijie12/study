<template>
  <div id="all">
    <div class="iconfont icon-arrow-left"></div>
    <div class="sign">Sign in</div>

    <div class="choose">
      <van-tabs
        color="#ffcd17"
        line-width="60px"
        line-height="2px"
        title-active-color="black"
        title-inactive-color="#ccc"
        v-model:active="active"
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
            v-model="username"
            name="用户名"
            label="+91"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          >
            <template #left-icon>
              <span class="iconfont"></span>
              <!-- <span>+91</span> -->
            </template>
          </van-field>
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "vant";
const active = ref(0);
const onClickTab = ({ title }) => showToast(title);

const username = ref("");
const password = ref("");
const onSubmit = (values) => {
  console.log("submit", values);
};
</script>

<style lang="scss">
#all {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  font-family: PingFang SC-Bold, PingFang SC;
  .iconfont {
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
        }
      }
    }
  }
}
</style>