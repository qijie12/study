<template>
  <div id="share-reminderComp-box">
    <van-popup
      v-model:show="showCenter"
      position="center"
      :style="{ height: '38%', width: '80%' }"
    >
      <div class="tips" style="text-align: center">Tips</div>
      <div class="into">Please go to login first</div>
      <div class="ok"><span>OK</span></div>
      <div class="cancle"><span>Cancel</span></div>
    </van-popup>
  </div>
</template>
 
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);

const showCenter = computed({
  get: () => {
    return props.modelValue;
  },
  set: (v) => {
    emits("update:modelValue", v);
  },
});

const router = useRouter();
</script>

<style lang="scss">
#share-reminderComp-box {
  .van-popup {
    width: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    .tips {
      width: 100%;
      font-weight: bold;
      padding: 10px 0;
      font-size: 18px;
      border-bottom: 1px solid #f1f1f1;
    }
    .into {
      padding: 60px 0;
      font-size: 14px;
      font-weight: bold;
    }
    .ok,
    .cancle {
      width: 100%;
      height: 50px;
      background: linear-gradient(to right, rgb(255, 234, 0), rgb(254, 187, 0));
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-weight: bold;
      font-size: 14px;
    }
    .cancle {
      margin-top: 10px;
      background: rgb(241, 241, 241);
    }
  }
}
</style>