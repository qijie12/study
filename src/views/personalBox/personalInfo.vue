<template>
  <div id="share-info-box">
    <div class="infoTop">
      <span class="iconfont icon-arrow-left" @click="jumpMe"></span>
      <b>accountDetails</b>
      <span></span>
    </div>

    <ul class="information">
      <li>
        <img src="../../assets/img/person_img000.png" />
        <van-field model-value="10000507" readonly placeholder="ID"  >
          <template #right-icon>
            <span class="iconfont icon-fuzhi"></span>
          </template>
        </van-field>
      </li>
      <li>
        <img src="../../assets/img/phone-img000.png" />
        <van-field
          label="+91"
          model-value="185458552"
          readonly
          placeholder="Phone"
        >
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </li>
      <li>
        <img src="../../assets/img/email-img000.png" />
        <van-field model-value="133355455@qq.com" readonly placeholder="Email">
        </van-field>
      </li>
      <li>
        <img src="../../assets/img/password-img000.png" />
        <van-field readonly placeholder="password">
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </li>
    </ul>
    <hr />

    <div class="infoCon">
      <p>Withdrawal password</p>
      <div class="passwordInput">
        <img src="../../assets/img/password_img000.png" />
        <van-field readonly placeholder="password">
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </div>
      <p>Account Holder Name</p>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            label-width="172px"
            label-height="50px"
            v-model="username"
            placeholder="Surname *"
            :rules="[{ required: true, message: 'Please enter last name' }]"
          />        
          
          <van-field
            v-model="password"
            type="password"
            placeholder="name *"
            :rules="[{ required: true, message: 'Please enter a name' }]"
          />
        </van-cell-group>
      </van-form>

       <p>Bank Name</p>
       <div class="passwordInput">
        <img src="../../assets/img/password_img000.png" />
        <van-field readonly placeholder="name">
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </div>

      <p>Account Number</p>
      <div class="passwordInput">
        <img src="../../assets/img/password_img000.png" />
        <van-field readonly placeholder="name">
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </div>


      <p>IFSC Code</p>

      <div class="passwordInput">
        <img src="../../assets/img/password_img000.png" />
        <van-field readonly placeholder="name">
          <template #right-icon>
            <span class="iconfont icon-bianji"></span>
          </template>
        </van-field>
      </div>

      <van-button type="primary" block
      color="linear-gradient(90deg, #ffec00 0%, #feba00 100%)"
      >save</van-button>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username=ref()
const password=ref()
const onSubmit=()=>{}

const jumpMe = () => {
  router.back();
};
</script>

<style lang="scss">
#share-info-box {
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  font-family: PingFang SC-Bold, PingFang SC;
  .infoTop {
    width: 100%;
    height: 46px;
    background: #ffffff;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #e5e7eb;
    position:fixed;
    top:0;
    z-index:2;
    .icon-arrow-left {
      font-weight: bolder;
      font-size: 18px;
      color: #000;
    }
    > b {
      font-size: 14px;
      color: #303030;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > .information {
    margin-top:55px;
    width: 100%;
    padding: 0 15px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 15px;
    > li {
      width: 100%;
      height: 51px;
      display: flex;
      > img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 10px;
      }
      .van-field {
        flex: 1;
        background: #f1f1f1;
        display: flex;
        align-items: center;
      }
    }
  }
  > hr {
    margin-top: 20px;
  }
  .infoCon {
    width: 100%;
    padding: 0 15px 40px 15px;
    > p {
      padding: 8px 0;
      color: #303030;
      font-size: 14px;
      font-weight: 700;
    }
    .passwordInput {
      width: 100%;
      height: 51px;
      display: flex;
      margin: 10px 0;
      > img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 10px;
      }
      .van-field {
        flex: 1;
        background: #f1f1f1;
        display: flex;
        align-items: center;
      }
    }
    .van-form {
      padding: 0;
      margin: 0;
      .van-cell-group {
        padding:10px 0;
        margin:5px 0;
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-gap:10px;
        .van-field {        
          background: #f1f1f1;
        }
      }
    }
    .van-button{
      margin-top:65px;
      height:50px;
      .van-button__text{
        font-weight: 700;
        color: #384804;
        font-size:13px;
      }
    }
  }
}
</style>