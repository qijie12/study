<template>
  <div id="share-records-box">
    <div class="immobilization">
      <van-nav-bar title="Bonus History" left-arrow @click-left="onClickLeft" />

      <van-tabs
        v-model:active="active"
        @click-tab="onClickTab"
        title-active-color="#ff5454"
        line-width="182px"
        color="#ff5454"
      >
        <van-tab title="Deposit Details"></van-tab>
        <van-tab title="Withdrawal Details"></van-tab>
      </van-tabs>
    </div>

    <ul v-if="!active">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
          <li v-for="(item, index) in dealList" :key="index">
            <div class="con">
              <div class="tit">
                <p class="name">{{ item.payment_channel }}</p>
                <span>{{ item.created_at }}</span>
              </div>
              <div class="submit" :style="{ color: colorOrText(item).color }">
                {{ colorOrText(item).text }}
              </div>
            </div>
            <div class="amount">
              <span>Amount</span>
              <span>+-{{ item.amount }}</span>
            </div>
            <div class="id">
              <span>Transaction ID</span>
              <div class="num">
                <span>{{ item.no }}</span>
                <span class="iconfont icon-fuzhi1" @click="copyID"></span>
              </div>
            </div>
            <div class="review">
              <span>Review time</span>
              <span>{{ item.completed_at }}</span>
            </div>
          </li>
        </van-list>
      </van-pull-refresh>
    </ul>

    <div class="details" v-else>
      <img src="../../assets/img/financial-background.png" />
      <span>No Data</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { showSuccessToast } from "vant";
import { depositDetails } from "../../api/depositDetails";

const router = useRouter();

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 15) {
      finished.value = true;
    }
  }, 1000);
};
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;
  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

const active = ref(0);
const onClickLeft = () => {
  router.back();
};

const onClickTab = () => {};

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

const dealList = ref([
  //  {AmountTit:'amount',idTit:'Transaction ID',reviewTit:'Transaction ID'},
]);

const call_depositDetails = async () => {
  let params = {
    page: 1,
    limit: 15,
    type: 1,
    user_id: 10007689,
  };
  let res = await depositDetails(params);
  console.log(res, "depositDetails=================");
  dealList.value = res.data;
};

const colorOrText = (params) => {
  let submittedStatus = [1, 2, 7];
  let completeStatus = [3, 5];
  let failStatus = [4, 6, 8];
  if (submittedStatus.indexOf(params.status) !== -1) {
    return {
      color: "#f5b923",
      text: "Submitted",
    };
  } else if (completeStatus.indexOf(params.status) !== -1) {
    return {
      color: "#1abe76",
      text: "Complete",
    };
  } else {
    return {
      color: "#ff5858",
      text: "Fail",
    };
  }
};

onMounted(() => {
  call_depositDetails();
});
</script>

<style lang="scss">
#share-records-box {
  width: 100%;
  height: 100%;
  font-family: PingFang SC-Bold, PingFang SC;
  background: rgb(255, 255, 255);
  overflow: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  .immobilization {
    width: 100%;
    position: fixed;
    z-index: 5;
    .van-nav-bar {
      .van-nav-bar__left {
        .van-badge__wrapper {
          color: black;
        }
      }
      .van-nav-bar__title {
        font-size: 14px;
        color: #594735;
      }
    }
  }
  > ul {
    margin-top: 20px;
    width: 100%;
    padding: 95px 16px 25px 16px;
    .van-pull-refresh {
      .van-list {
        > li {
          width: 100%;
          height: 146px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          margin-bottom: 10px;
          // &:nth-child(15) {
          //   border-bottom: transparent;
          // }
          .con {
            padding-left: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 3px solid #ff5454;
            .tit {
              .name {
                color: #594735;
                font-size: 18px;
                font-weight: 600;
              }
              > span {
                font-size: 13px;
                color: #868686;
              }
            }
            .submit {
              font-size: 13px;
              color: #f5b923;
            }
          }
          .amount,
          .id,
          .review {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            > span {
              color: #594735;
              font-size: 13px;
            }
            .num {
              > span {
                color: #594735;
                font-weight: 600;
                font-size: 13px;
              }
              .icon-fuzhi1 {
                padding-left: 5px;
                color: #828282;
              }
            }
          }
          .amount {
            span:last-child {
              color: #1abe76;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  .details {
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > img {
      width: 200px;
      height: 200px;
    }
    > span {
      color: #00000099;
      font-size: 13px;
    }
  }
}
</style>