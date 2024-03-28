<template>
  <div class="share-bigListComp-box">
    <ul class="bigListComp-Con">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.url" />
        <div>
          <img :src="item.src" />
          <a href="">
            <p class="intro">{{ item.tvname }}</p>
            <p class="protagonist">
              <img :src="item.pash" />
              {{ item.name }}
              </p>
            <span>{{ item.synopsis}}</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 传递进来的数组数据
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});



</script>

<style lang="scss">
.share-bigListComp-box {
  .bigListComp-Con {
    // padding: 84px 40px 0 220px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    width: 100%;
    li {
      background-image: url('../assets/img/追.png');
      background-repeat: no-repeat;
      background-position: 460px 310px;
      width: 100%;
      height: 400px;
      border: 1px solid rgb(85, 83, 83);
      overflow: hidden;
      border-radius: 20px;
      background-color: #252525;
      img {
        height: 300px;
        width: 100%;
        margin-right: 5px;
      }
      div {
        height: 90px;
        width: 100%;
        padding: 10px 15px;
        display: flex;
        position: relative;

        img {
          height: 100%;
          width: 57px;
        }
        a {
          .intro {
            color: #ffffff;
            font-size: 20px;
          }

          .protagonist {
            color: #3b3b3b;
            font-size: 14px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          span {
            color: #ffffff;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
