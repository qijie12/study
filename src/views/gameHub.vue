<template>
  <div id="home">
    <topComp></topComp>
    <leftMenuComp></leftMenuComp>
    <img src="../assets/img/11.jpg" style="width: 100%; height: 600px" />

    <div id="all-center">
      <div class="content">
        <div class="into">
          <div class="into-l">
            <div class="enter">
              <img src="../assets/img/personage.png" />未登录
            </div>
            <p class="look">登录查看荣耀值</p>
            <p class="weal">为千万玩家提供数亿福利</p>
            <hr />
            <ul>
              <li>
                <a href="">
                  <span>
                    <img src="../assets/img/icon1.png" />
                  </span>
                  <p>荣耀权益</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="../assets/img/icon1.png" />
                  </span>
                  <p>荣耀权益</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="../assets/img/icon1.png" />
                  </span>
                  <p>荣耀权益</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="../assets/img/icon1.png" />
                  </span>
                  <p>荣耀权益</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="into-r">
            <div class="search">
              <span>百款游戏福利一键即达></span>
              <input type="" />
            </div>
            <ul>
              <li>
                <p class="tvname">
                  <img src="../assets/img/12.png" />
                  <span>仙境传说：爱如初见</span>
                </p>
                <p classs="num">
                  <b>3</b>
                  <span class="numr">个免费礼包></span>
                </p>
                <p class="gift">
                  <img src="../assets/img/lift.avif" />
                  <span>每日礼包</span>
                </p>
                <p class="get">
                  <span class="getl"><a href="">领取礼包</a></span>
                  <span class="getr"><a href="">秒玩</a></span>
                </p>
              </li>
              <li>
                <p class="tvname">
                  <img src="../assets/img/12.png" />
                  <span>仙境传说：爱如初见</span>
                </p>
                <p classs="num">
                  <b>3</b>
                  <span class="numr">个免费礼包></span>
                </p>
                <p class="gift">
                  <img src="../assets/img/lift.avif" />
                  <span>每日礼包</span>
                </p>
                <p class="get">
                  <span class="getl"><a href="">领取礼包</a></span>
                  <span class="getr"><a href="">秒玩</a></span>
                </p>
              </li>
              <li>
                <p class="tvname">
                  <img src="../assets/img/12.png" />
                  <span>仙境传说：爱如初见</span>
                </p>
                <p classs="num">
                  <b>2</b>
                  <span class="numr">个免费礼包></span>
                </p>
                <p class="gift">
                  <img src="../assets/img/lift.avif" />
                  <span>每日礼包</span>
                </p>
                <p class="get">
                  <span class="getl"><a href="">领取礼包</a></span>
                  <span class="getr"><a href="">秒玩</a></span>
                </p>
              </li>
              <li>
                <p class="tvname">
                  <img src="../assets/img/12.png" />
                  <span>仙境传说：爱如初见</span>
                </p>
                <p classs="num">
                  <b>4</b>
                  <span class="numr">个免费礼包></span>
                </p>
                <p class="gift">
                  <img src="../assets/img/lift.avif" />
                  <span>每日礼包</span>
                </p>
                <p class="get">
                  <span class="getl"><a href="">领取礼包</a></span>
                  <span class="getr"><a href="">秒玩</a></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="hotIp">
        <h1>热门IP同款即玩</h1>
        <span>换一换</span>
      </div>

      <combinationComp :list="gamenameList"></combinationComp>

      <h1>卡牌游戏大世界</h1>

      <!-- <ul class="card">
        <li v-for="(item, index) in cardList" :key="index">
          <img :src="item.url" />
          <div class="card-con">
            <img :src="item.src" />
            <div class="card-conWord">
              <a class="conWord-l" href="">
                <p>{{ item.text }}</p>
                <span>{{ item.synopsis }}</span>
              </a>
              <div class="conWord-r">
                <a href="">{{ item.into }}</a>
              </div>
            </div>
          </div>
        </li>
      </ul> -->
      <secondsPlayComp :list="cardList"></secondsPlayComp>

      <h1>头脑风暴 斗智斗勇</h1>
      <secondsPlayComp :list="brainstorming"></secondsPlayComp>
      <div class="hotIp">
        <h1>江湖修仙 快意恩仇</h1>
        <span>换一换</span>
      </div>
      <combinationComp :list="gamenameList"></combinationComp>

      <div class="gamePack">
        <h1>游戏礼包</h1>
        <span><a href="">领取记录</a></span>
      </div>
      
      <ul class="gamePack-con">
             <li>
              <div class="gamePack-top">
                <img src="../assets/img/13.png">
                <div>
                   <span>二之国：交错世界</span>
                   <a href=""> <span>秒玩</span></a>
                </div>
              </div>
              <p>
                <b>4</b>
                <a href="">个免费礼包待领取></a>
              </p>
              <div class="gamePack-bottom">
                     <div class="gamePack-bottom-l">
                      <p><img src="../assets/img/lift.avif"/>每日礼包</p>
                      <p><img src="../assets/img/lift.avif"/>每周礼包</p>
                     </div>
                     <div class="gamePack-bottom-r">
                      <a href="">一键领取</a>
                     </div>
              </div>
             </li>
             <li>
               <div class="gamePack-top">
                <img src="../assets/img/13.png">
                <div>
                   <span>二之国：交错世界</span>
                   <a href=""> <span>秒玩</span></a>
                </div>
              </div>
              <p>
                <b>4</b>
                <a href="">个免费礼包待领取></a>
              </p>
              <div class="gamePack-bottom">
                     <div class="gamePack-bottom-l">
                      <p><img src="../assets/img/lift.avif"/>每日礼包</p>
                      <p><img src="../assets/img/lift.avif"/>每周礼包</p>
                     </div>
                     <div class="gamePack-bottom-r">
                      <a href="">一键领取</a>
                     </div>
              </div>
             </li>
             <li>
               <div class="gamePack-top">
                <img src="../assets/img/13.png">
                <div>
                   <span>二之国：交错世界</span>
                   <a href=""> <span>秒玩</span></a>
                </div>
              </div>
              <p>
                <b>4</b>
                <a href="">个免费礼包待领取></a>
              </p>
              <div class="gamePack-bottom">
                     <div class="gamePack-bottom-l">
                      <p><img src="../assets/img/lift.avif"/>每日礼包</p>
                      <p><img src="../assets/img/lift.avif"/>每周礼包</p>
                     </div>
                     <div class="gamePack-bottom-r">
                      <a href="">一键领取</a>
                     </div>
              </div>
             </li>
             <li>
               <div class="gamePack-top">
                <img src="../assets/img/13.png">
                <div>
                   <span>二之国：交错世界</span>
                   <a href=""> <span>秒玩</span></a>
                </div>
              </div>
              <p>
                <b>4</b>
                <a href="">个免费礼包待领取></a>
              </p>
              <div class="gamePack-bottom">
                     <div class="gamePack-bottom-l">
                      <p><img src="../assets/img/lift.avif"/>每日礼包</p>
                      <p><img src="../assets/img/lift.avif"/>每周礼包</p>
                     </div>
                     <div class="gamePack-bottom-r">
                      <a href="">一键领取</a>
                     </div>
              </div>
             </li>
             
      </ul>

      <h1>榜单速递</h1>

      <div class="listExpress">
        <span ><a href="" >热门榜</a></span>
        <span class="one"><a href="">新品榜</a></span>
        <span class="one"><a href="">精选榜</a></span>
        <span class="one"><a href="">传奇榜</a></span>
        <span class="one"><a href="">卡牌榜</a></span>
        <span class="one"><a href="">策略榜</a></span>
        <span class="one"><a href="">仙侠榜</a></span>
      </div>

      <ul class="listExpressCon">
        <li class="hotList">
          <div class="hotListTop">
            <span>热门榜</span>
            <img src="../assets/img/red-spark.webp"/>
          </div>
          <div class="hotListBottom">
             <ul>
              <li>
                <b>No.<span>1</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>2</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>3</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>
                  <span>4</span>
                  </b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>5</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>6</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>7</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>8</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>9</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>10</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>

             </ul>
          </div>
        </li>
        <li class="hotList">
          <div class="hotListTop">
            <span>热门榜</span>
            <img src="../assets/img/red-spark.webp"/>
          </div>
          <div class="hotListBottom">
             <ul>
              <li>
                <b>No.<span>1</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>2</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>3</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>
                  
                  <span>4</span>
                  </b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>5</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>6</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>7</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>8</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>9</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>10</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              
             </ul>
          </div>
        </li>
        <li class="hotList">
          <div class="hotListTop">
            <span>热门榜</span>
            <img src="../assets/img/red-spark.webp"/>
          </div>
          <div class="hotListBottom">
             <ul>
              <li>
                <b>No.<span>1</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>2</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>No.<span>3</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b>
                  
                  <span>4</span>
                  </b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>5</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>6</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>7</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>8</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>9</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              <li>
                <b><span>10</span></b>
                <img src="../assets/img/2.avif"/>
                <div class="hotListText">
                  <div>
                    <p>战地无疆</p>
                    <span>高代入感和自由度的战争策略手游</span>
                  </div>
                  <span class="seconds"><a href="">秒玩</a></span>
                </div>
              </li>
              
             </ul>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import topComp from "../components/topComp.vue";
import leftMenuComp from "../components/leftMenuComp.vue";
import combinationComp from "../components/combinationComp.vue";
import samllListComp from "../components/smallListComp.vue";
import secondsPlayComp from "../components/secondsPlayComp.vue";

import hero from "../assets/img/11.jpg";
import KPL from "../assets/img/pv_10025713403_em_601.webp";
import odeToJoy from "../assets/img/1.avif";
import playmate from "../assets/img/2.avif";
import easyLife from "../assets/img/3.avif";
import love from "../assets/img/4.avif";
import blossoms from "../assets/img/5.avif";
import cartoonCharacter from "../assets/img/10.jpg";

const gamenameList = ref([
  {
    url: playmate,
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
    url: playmate,
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

const cardList = ref([
  {
    url: hero,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: hero,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: hero,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: hero,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
]);

const brainstorming = ref([
  {
    url: KPL,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: blossoms,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: KPL,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: KPL,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
  {
    url: hero,
    src: love,
    text: "英雄联盟",
    synopsis: "战斗回合制策略游戏",
    into: "秒玩",
  },
]);
</script>

<style lang="scss">
#home {
  > img {
    height: 600px;
    width: 100%;
  }

  #all-center {
    padding: 0 40px 0 220px;
    .content {
      width: 100%;

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
    }

    .hotIp {
      margin-top: 60px;
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

    h1 {
      padding: 30px 0 20px 0;
    }
    .gamePack {
      margin: 30px 0 10px 0;
      height: 48px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      line-height: 30px;
      span {
        display: block;
        width: 88px;
        height: 32px;
        border: 1px solid rgb(89, 88, 88);
        border-radius: 20px;
        background-color: #ffffff26;
        font-size: 14px;
      }
      a:hover {
        color: #ffffff;
      }
    }
    .gamePack-con {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      li {
        height: 200px;
        background-color: #a27950;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        padding: 0 10px;
        .gamePack-top {
          height: 60px;
          width: 100%;
          background: rgba(139, 106, 27, 0.1);
          padding: 10px 0;
          display: flex;
          img {
            width: 36px;
            height: 100%;
            margin-right: 10px;
          }
          div {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #ffffff;
            font-size: 16px;
            a {
              display: block;
              height: 32px;
              width: 76px;
              border: 1px solid rgb(98, 97, 97);
              border-radius: 20px;
              text-align: center;
              line-height: 30px;
              font-size: 13px;
              background-color: rgba(255, 220, 20, 0.1);
              > span {
                color: #ffdc14;
              }
            }
            a:hover,
            span:hover {
              color: #4d4c4c;
              background-color: #ffdc14;
            }
          }
        }
        p {
          height: 60px;
          width: 100%;
          display: flex;
          align-items: center;
          b {
            color: #ffdc14;
            display: block;
            font-size: 24px;
          }
          a {
            display: block;
            color: #dcdbdbef;
            font-size: 18px;
          }
        }
        .gamePack-bottom {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            height: 30px;
            color: #ffffff;
            img {
              height: 16px;
              width: 16px;
              margin-right: 10px;
            }
          }
        }
        .gamePack-bottom-r {
          height: 32px;
          width: 76px;
          border: 1px solid rgb(139, 139, 139);
          border-radius: 20px;
          background-color: #ffdc14;
          font-size: 13px;
          text-align: center;
          line-height: 30px;
          a {
            color: black;
          }
        }
      }
    }
    .listExpress {
      display: flex;
      height: 50px;
      span {
        display: block;
        height: 32px;
        width: 120px;
        border: 1px solid rgb(122, 120, 120);
        border-radius: 20px;
        background: rgba(242, 242, 242, 0.1);
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
        a {
          color: #ffdc14;
        }
      }
      .one a {
        color: gray;
      }
      .one a:hover {
        color: #ffffff;
      }
    }

    .listExpressCon {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;

      .hotList {
        width: 100%;
        height: 500px;
        border-radius: 10px;
        border: 1px solid rgb(108, 107, 107);
        overflow: hidden;
        .hotListTop {
          height: 100px;
          width: 100%;
          position: relative;
          z-index: 1;

          background-image: url("../assets/img/red-background-image.webp");
          line-height: 100px;
          span {
            display: block;
            font-size: 24px;
            color: #ffdc14;
            margin-left: 15px;
          }
          img {
            width: 200px;
            height: 100px;
            position: absolute;
            right: 0;
            top: -15px;
          }
        }

        .hotListBottom {
          overflow-y: scroll;
          height: 400px;
          width: 100%;
          background-color: #1c1c1c;
          > ul {
            padding: 15px;
            width: 100%;
            display: grid;
            grid-template-rows: repeat(10, 1fr);
            grid-gap: 20px;
            > li {
              height: 64px;
              width: 100%;
              display: flex;
              align-items: center;
              b {
                display: block;
                color: #4d4c4c;
                font-size: 12px;
                //  margin-right:20px;
                display: flex;
                align-items: center;
                width: 50px;
                justify-content: center;
                span {
                  font-size: 20px;
                }
              }
              img {
                height: 100%;
                width: 64px;
                margin-right: 15px;
                border-radius: 10px;
              }
              .hotListText {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                div {
                  p {
                    color: #ffffff;
                    font-size: 18px;
                  }
                  > span {
                    color: #605f5f;
                    font-size: 14px;
                  }
                }
                .seconds {
                  height: 32px;
                  width: 68px;
                  display: block;
                  border: 1px solid rgb(111, 110, 110);
                  border-radius: 20px;
                  background-color: rgba(255, 220, 20, 0.1);
                  text-align: center;
                  line-height: 30px;
                  a {
                    color: #ffdc14;
                    font-size: 13px;
                  }
                }
                .seconds:hover,
                a:hover {
                  background-color: #dbb75e;
                  color: #4d4c4c;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>