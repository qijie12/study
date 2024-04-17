<template>
  <div id="share-signz-box">
    <div class="iconfont icon-arrow-left"></div>
    <div class="sign_title">Sign in</div>

    <van-tabs
     title-inactive-color='#999'
      color="#ffcd17" 
      line-width="60px"
      line-height="2px" 
      v-model:active="active">
      <van-tab title="Phone"></van-tab>
      <van-tab title="Email"></van-tab>
    </van-tabs>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-if="!active"
          v-model="username"       
          placeholder="phone number"
          :rules="[{ required: true, message: 'Please fill in your cell phone number' }]"
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
          :rules="[{ required: true, message: 'Please enter your e-mail address' }]"
        >
        <template #left-icon>
           <span class="iconfont icon-youxiang"></span>
        </template>
        </van-field>
        <van-field
          v-model="password"
          :type="appear ? 'text' : 'password'"
          placeholder="Password"
          :rules="[{ required: true, message: 'Please enter your login password' }]"
        >
        <template #left-icon>
           <span class="iconfont icon-suo"></span>
        </template>
        <template #right-icon>
          <span
            class="iconfont"
            :class="{'icon-biyanjing': !appear, 'icon-yanjing1': appear}"
            @click="switchover"
         >
         </span>
        </template>
        </van-field>
      </van-cell-group>     
    </van-form>

    <div class="forgot">forgot your password?</div>

    <div class="button">
      <van-button  type="primary" block>
       Login
      </van-button>
      <van-button type="primary" block>
        Register
      </van-button>
    </div>
  </div>
</template>

<script setup>
 import { ref,onMounted} from 'vue';
 const active = ref(0);
 const username = ref('');
 const password =ref('');
 const appear=ref(false);
 const onSubmit=()=>{

 };
const switchover = () => {
      appear.value = !appear.value; // 反转显示状态
    };

onMounted(()=>{
})

</script>

<style lang="scss">
#share-signz-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 10vh;
  padding: 20px 15px 0 15px;
  > .icon-arrow-left {
    font-size: 20px;
  }
  .sign_title {
    color: #303030;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 10px 0 20px 0;
  }
  .van-tabs {
    .van-tabs__wrap {
      .van-tabs__nav {
        .van-tab {
          .van-tab__text--ellipsis {
            font-size: 18px;
            font-weight:bold;
          }
        }
      }
    }
  }

  .van-form{
    margin-top:10px;
    .van-cell-group{
      padding:0;
      margin:0;
      .van-cell{
        // border:1px solid transparent;
        margin:10px 0;
        background: #f1f1f1;
        .van-field__control::placeholder{
          color:rgb(153,153,153);
          font-weight:bold;    
        }
        .van-field__left-icon{
            .num{
            color:#8DA5A7;
            padding-right:5px;
            }
            >.iconfont{
              color:#8DA5A7;
              font-size:20px;
            }
            
          }
          .icon-yanjing1::before{
              font-size:14px;
            }
      }
    }
  }
  .forgot{
    display:flex;
    justify-content:flex-end;
    font-size:12px;
    color:#303030;
    font-weight:bold;
    text-decoration:underline;
  }
  .button{
    margin-top:30px;
    .van-button{
      background-color:#ffffff;
      margin-bottom:10px;
      border: 1px solid #ffec00;
      color:#303030;
      font-weight:bold;
    }
    .van-button:first-child{
      background:linear-gradient(to right,#ffec00 ,#feba00)
    }
  }
}
</style>