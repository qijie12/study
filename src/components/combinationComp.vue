<template>
  <div id="share-combination-box">
    <div class="con-picture">
      <div class="bigPicture">
        <img src="../assets/img/11.png" />
        <div class="bigcontent">
          <img src="../assets/img/pv_10025713403_em_601.webp" />
          <div class="love">
            <div class="lovename">
              <p class="lovename-t">仙境传说：爱如初见</p>
              <p class="lovename-b">再见如初，就是RO！</p>
            </div>

            <div class="lovegame"><a href="">秒玩</a></div>
          </div>
        </div>
      </div>

      <ul>
        <li v-for="(item, index) in gamenameList" :key="index">
          <img :src="item.url" />
          <div class="peace">
            <img :src="item.src" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">{{ item.text }}</p>
                <p class="narutoname-b">{{ item.synopsis }}</p>
              </div>
              <div class="narutogame">
                <a href="">{{ item.into }}</a>
              </div>
            </div>
          </div>
        </li>

        <!-- <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/img/5.avif" />
          <div class="peace">
            <img src="../assets/img/4.avif" />
            <div class="naruto">
              <div class="narutoname">
                <p class="narutoname-t">仙境传说：爱如初见</p>
                <p class="narutoname-b">再见如初，就是RO！</p>
              </div>

              <div class="narutogame"><a href="">秒玩</a></div>
            </div>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";

const gamenameList = ref([
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "仙境传说：爱如初见",
    synopsis: "再见如初，就是RO！",
    into: "秒玩",
  },
]);
</script>

<style lang="scss">
#share-combination-box {
  .content {
    width: 100%;
    padding: 0 40px 0 220px;
    .into {
      width: 100%;
      height: 200px;
      // background-color:rgb(50, 53, 53);
      display: flex;
      .into-l {
        width: 315px;
        height: 210px;
        padding: 15px;
        text-align: center;
        background-image: url("../assets/img/518edc17_pWVuZD5YsIgXv1CNlBYiHFI3ms1MvdKU.avif");
        margin-right: 20px;
        border-radius: 10px;
        overflow: hidden;
        .enter {
          color: #ffffff;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 22px;
            height: 22px;
            margin-right: 10px;
          }
        }
        .look {
          color: #dbb75e;
          font-size: 12px;
          padding: 5px 0 20px 0;
        }
        .weal {
          color: #fff;
          font-size: 14px;
          padding: 10px 0;
        }

        ul {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
          width: 100%;
          li {
            width: 100%;
            display: flex;
            span {
              border: 1px solid rgb(97, 93, 93);
              height: 36px;
              width: 36px;
              border-radius: 50%;
              background-color: #4d4c4c;
              display: block;
              position: relative;
              img {
                height: 20px;
                width: 20px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            p {
              font-size: 10px;
              color: #dbb75e;
            }
          }
        }
      }

      .into-r {
        flex: 1;
        height: 200px;
        // background-color:aqua;
        .search {
          height: 30px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          span {
            font-size: 18px;
            color: #dbb75e;
          }
          input {
            height: 28px;
            width: 290px;
            border-radius: 20px;
            background-image: url("../assets/img/search.png");
            background-repeat: no-repeat;
            background-position: 255px 2px;
            padding-left: 15px;
          }
        }
        ul {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          grid-gap: 20px;
          li {
            border-radius: 10px;
            height: 170px;
            padding: 15px;
            background-image: url("../assets/img/518edc17_pWVuZD5YsIgXv1CNlBYiHFI3ms1MvdKU.avif");
            .tvname {
              width: 100%;
              display: flex;
              align-items: center;
              padding-bottom: 15px;
              img {
                height: 36px;
                width: 36px;
                margin-right: 10px;
              }
              span {
                color: #ffffff;
                font-size: 14px;
              }
            }
            .num {
              b {
                color: #dbb75e;
                display: block;
              }
              .numr {
                color: rgba(255, 255, 255, 0.8);
                font-size: 14px;
              }
            }
            .gift {
              padding-top: 5px;
              display: flex;
              align-items: center;
              img {
                height: 14px;
                width: 14px;
              }
              span {
                color: rgba(255, 255, 255, 0.8);
                font-size: 12px;
              }
            }
            .get {
              display: flex;
              justify-content: space-between;
              padding-top: 15px;
              span {
                display: block;
                height: 32px;
                width: 135px;
                border: 1px solid rgb(136, 135, 135);
                border-radius: 20px;
                text-align: center;
                line-height: 30px;
              }
              .getl {
                background-color: rgba(255, 220, 20, 0.1);
                a {
                  color: #ffdc14;
                }
              }
              .getl:hover {
                background-color: rgb(201, 179, 56);
              }
              .getr {
                background-color: rgb(201, 179, 56);
                a {
                  color: #371e05;
                }
              }
            }
          }
        }
      }
    }
    .hotIp {
      margin: 60px 0 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #4d4c4c;
        font-size: 14px;
      }
      span:hover {
        color: #ffffff;
      }
    }
    .con-picture {
      height: 500px;
      width: 100%;
      display: flex;
      .bigPicture {
        margin-right: 20px;
        width: 650px;
        height: 500px;
        background: rgba(33, 34, 35, 1);
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 650px;
          height: 370px;
        }
        .bigcontent {
          height: 130px;
          width: 100%;
          padding: 20px 10px;
          display: flex;

          img {
            height: 100%;
            width: 86px;
            border-radius: 20px;
            margin-right: 10px;
          }
          .love {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .lovename {
              p {
                padding: 10px 0;
              }
              .lovename-t {
                color: #ffffff;
                font-size: 16px;
              }
              .lovename-b {
                color: #4d4c4c;
                font-size: 12px;
              }
            }
            .lovegame {
              height: 32px;
              width: 68px;
              border: 1px solid rgb(93, 92, 92);
              border-radius: 20px;
              background: rgba(255, 220, 20, 0.1);
              font-size: 13px;
              text-align: center;
              line-height: 30px;
              a {
                color: #ffdc14;
              }
              a:hover {
                color: #353434;
              }
            }
            .lovegame:hover,
            a:hover {
              background-color: #dbb75e;
              color: #353434;
            }
          }
        }
      }
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        height: 500px;
        flex: 1;
        li {
          height: 240px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(33, 34, 35, 1);
          img {
            height: 170px;
            width: 100%;
          }
          .peace {
            padding: 10px;
            height: 60px;
            display: flex;
            width: 100%;
            // justify-content: space-between;
            img {
              height: 100%;
              width: 36px;
              margin-right: 5px;
            }
            .naruto {
              flex: 1;
              padding: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .narutoname-t {
                color: #ffffff;
                font-size: 16px;
              }
              .narutoname-b {
                color: #4d4c4c;
                font-size: 12px;
              }
              .narutogame {
                height: 32px;
                width: 68px;
                border: 1px solid rgb(93, 92, 92);
                border-radius: 20px;
                background: rgba(255, 220, 20, 0.1);
                font-size: 13px;
                text-align: center;
                line-height: 30px;
                a {
                  color: #ffdc14;
                }
                a:hover {
                  color: #353434;
                }
              }
              .narutogame:hover {
                background-color: #dbb75e;
              }
            }
          }
        }
      }
    }
  }
}
</style>