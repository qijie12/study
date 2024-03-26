<template>
  <div id="home">
    <div class="top">
      <span></span>
      <span class="input-box">
        <input type="" class="import" />
        <input type="" class="search" />
      </span>
      <div>
        <a href v-for="(item, index) in topList" :key="index"
          ><img :src="item.url"
        /></a>
      </div>
    </div>

    <div id="homePage">
      <a href class="logo"><img src="../assets/img/tx.png" /></a>
      <div class="homePage-Con">
        <div class="front">
          <a
            name="1"
            href="#"
            v-for="(item, index) in homePageList"
            :key="index"
            >{{ item.name }}<img :src="item.url"
          /></a>
        </div>
        <hr />
        <div class="agreement">
          <a href="" v-for="(item, index) in agreementList" :key="index">{{
            item.text
          }}</a>
        </div>
        <hr />
        <div class="licence">
          <a href="">粤网文[2023]2882-203号</a>
          <a href="">网络视听许可证1904073号</a>
          <a href="">粤公网安备<br />44030002000001号</a>
          <p class="AT">
            <a href="">关于腾讯</a><i>|</i><a href="">About Tencent</a>
          </p>
          <p><a href="">服务条款</a><i>|</i><a href="">广告设置</a> <i>|</i></p>
          <p><a href="">腾讯招聘 客服中心</a><i>|</i></p>
          <a href="">网站导航</a>
          <a href="">Copyright © 1998 - 2024 Tencent. All Rights Reserved.</a>
          <a href>腾讯公司 版权所有</a>
          <img src="../assets/img/1f68341597825237110.avif" />
        </div>
      </div>
    </div>

    <div id="center-con">
      <img src="../assets/img/1.avif" />
      <div id="content">
        <div id="hotbroadcast">
          <h1>重磅热播</h1>
          <div class="change">
            <span class="tv">
              <!-- <a href=""><span>全部</span></a>
              <a href=""> 电视剧 </a>
              <a href=""> 综艺 </a>
              <a href=""> 电影 </a> 
              <a href=""> 动漫 </a>
              <a href=""> 少儿 </a>
              <a href=""> 纪录片 </a> -->
              <a href="" v-for="(item, index) in tvList" :key="index">{{
                index.text
              }}</a>
            </span>
            <span>
              <a href="">换一换</a>
            </span>
          </div>
        </div>

        <ul id="hotpicture">
          <li v-for="(item, index) in hotpictureList" :key="index">
            <img :src="item.url" />
            <a href="">
              <p>{{ item.name }}</p>
              <span>{{ item.synopsis }}</span>
            </a>
          </li>

          <!-- <li>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p>小日子</p>
              <span> 陈晓童瑶首搭守护小日子 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <a href="">
              <p>欢乐颂5</p>
              <span> 江疏影杨采钰五美复仇出击 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/2.avif" />
            <a href="">
              <p>完美世界</p>
              <span> 谁在称无敌，哪个言不败？ </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <a href="">
              <p>缉恶</p>
              <span> 谢苗、安志杰谁更能打？ </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <a href="">
              <p>大王饶命 第2季</p>
              <span> 灵气复苏爆笑修炼 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p>海王2：失落的王国</p>
              <span> 视觉狂欢！海底燃炸开战 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <a href="">
              <p>执笔</p>
              <span> 执命运之笔 陷痴缠虐恋 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/2.avif" />
            <a href="">
              <p>哈哈哈哈哈 第4季</p>
              <span> 邓超陈赫鹿晗合体旅行 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/4.avif" />
            <a href="">
              <p>无染</p>
              <span> 以我仙髓 渡你魔念 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <a href="">
              <p>谢谢你温暖我</p>
              <span> 林一李兰迪相爱救赎 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p>半熟恋人 第3季</p>
              <span> 轻熟男女奔赴海岛寻爱 </span>
            </a>
          </li>
          <li>
            <img src="../assets/img/4.avif" />
            <a href="">
              <p>今天航班零投诉</p>
              <span> 高空甜恋 热血逐梦 </span>
            </a>
          </li> -->
        </ul>

        <div id="recommend">
          <h1>为你推荐</h1>
          <div class="science">
            <a href="" v-for="(item, index) in scienceList" :key="index">
              {{ item.text }}</a
            >
            <!-- <a href=""><span>全部</span></a>
            <a href=""> 科幻 </a>
            <a href=""> 都市生活 </a>
            <a href=""> 武侠江湖 </a>
            <a href=""> 真实事件改编 </a>
            <a href=""> 原创动画 </a>
            <a href=""> 奇幻冒险 </a>
            <a href=""> 东方仙侠 </a>
            <a href=""> 古装爱情 </a>
            <a href=""> 欧美电影 </a>
            <a href=""> 犯罪动作 </a>
            <a href=""> 国漫 </a>
            <a href=""> 甜虐爱情 </a>
            <a href=""> 东北喜剧 </a>
            <a href=""> 经典动画 </a> -->
          </div>
        </div>
        <ul id="recommendtv">
          <li v-for="(item, index) in recommendtvList" :key="index">
            <img :src="item.url" />
            <div class="caption">
              <img :src="item.url" />
              <div class="introduce">
                <p>{{ item.tvname }}</p>
                <p>{{ item.name }}</p>
                <span>{{ item.synopsis }}</span>
              </div>
            </div>
          </li>

          <!-- <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/3.avif" />
              <div class="introduce">
                <p class="tvname">玩伴</p>
                <p class="name">电视剧 孙涛 戴娇倩 都市生活</p>
                <span>搞笑！男子在街边卖内衣</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">我是余欢水</p>
                <p class="name">电视剧 郭京飞 苗苗 人物故事</p>
                <span>怂包到英雄的荒诞逆袭</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li>
          <li>
            <img src="../assets/img/1.avif" />
            <div class="caption">
              <img src="../assets/img/1.avif" />
              <div class="introduce">
                <p class="tvname">爱你不放手</p>
                <p class="name">电视剧 李宗翰 李康宜 家长里短</p>
                <span>李宗翰变身夺产抢子灭情男</span>
                <b></b>
              </div>
            </div>
          </li> -->
        </ul>
      </div>

      <!-- </div> -->

      <ul id="video">
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
        <li>
          <img src="../assets/img/4.avif" />
          <div>
            <img src="../assets/img/3.avif" />
            <a href="">
              <p class="intro">王蓝莓的幸福生活</p>
              <p class="protagonist">
                <img src="../assets/img/1.avif" />王蓝莓
              </p>
              <span> "没有人能面无表情的看同学录" </span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// var scroll_top=document.querySelector('html');
// var scroll_recommend=document.querySelector('#recommend');
// var distance=scroll_top.scroll_recommend;
// console.log(distance);

// document.addEventListenner('scroll',function(){
//   var scrollTop=document.querySelector('html').scrollTop;
//   if(scrollTop>distance){
//     document.querySelector('#recommend').classList.add('science');
//   }else{
//     document.querySelector('#recomment').classList.remove('science');
//   }
// });
import VIP from '../assets/img/VIP.png';
import game from '../assets/img/game.png';
import time from '../assets/img/time.png';
import screenRecording from '../assets/img/screenRecording.png';
import download from '../assets/img/download.png';
import personage from '../assets/img/personage.png';
import collect from '../assets/img/收藏.png';
import easyLife from '../assets/img/3.avif';
import odeToJoy from '../assets/img/1.avif';
const topList = ref([
  {
    url: VIP,
  },
  {
    url: game,
  },
  {
    url: time,
  },
  {
    url: screenRecording,
  },
  {
    url: download,
  },
  {
    url: personage,
  },
]);

const homePageList = ref([
  {
    name: '首页',
    url: collect,
  },
  {
    name: '中视频',
    url: collect,
  },
  {
    name: '电视剧',
    url: collect,
  },
  {
    name: '电影',
    url: collect,
  },
  {
    name: '综艺',
    url: collect,
  },
  {
    name: '动漫',
    url: collect,
  },
  {
    name: '少儿',
    url: collect,
  },
  {
    name: '体育',
    url: collect,
  },
  {
    name: '纪录片',
    url: collect,
  },
  {
    name: '短剧',
    url: collect,
  },
  {
    name: 'NBA',
    url: collect,
  },
  {
    name: 'VIP会员',
    url: collect,
  },
  {
    name: '游戏中心',
    url: collect,
  },
  {
    name: '传奇游戏库',
    url: collect,
  },
  {
    name: '科技',
    url: collect,
  },
  {
    name: '音乐',
    url: collect,
  },
  {
    name: 'F1',
    url: collect,
  },
  {
    name: 'WWE',
    url: collect,
  },
  {
    name: '知识',
    url: collect,
  },
  {
    name: '学堂',
    url: collect,
  },
  {
    name: '艺术',
    url: collect,
  },
  {
    name: '财经',
    url: collect,
  },
  {
    name: '生活',
    url: collect,
  },
  {
    name: '时尚',
    url: collect,
  },
  {
    name: '健康',
    url: collect,
  },
  {
    name: '育儿',
    url: collect,
  },
  {
    name: '汽车',
    url: collect,
  },
  {
    name: '棋牌游戏库',
    url: collect,
  },
]);

const agreementList = ref([
  {
    text: '腾讯视频隐私保护指引',
  },
  {
    text: '腾讯视频用户服务协议',
  },
  {
    text: '腾讯视频第三方信息共享清单',
  },
  {
    text: '腾讯视频已收集个人信息清单',
  },
  {
    text: '腾讯儿童隐私保护声明',
  },
  {
    text: '腾讯视频系列会员服务协议',
  },
]);

const tvList = ref([
  { text: '全部' },
  { text: '电视剧' },
  { text: '综艺' },
  { text: '电影' },
  { text: ' 动漫' },
  { text: '少儿 ' },
  { text: '纪录片' },
]);

const hotpictureList = ref([
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: odeToJoy,
    name: '欢乐颂5',
    synopsis: '江疏影杨采钰五美复仇出击',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: easyLife,
    name: '小日子',
    synopsis: '陈晓童瑶首搭守护小日子',
  },
  {
    url: odeToJoy,
    name: '欢乐颂5',
    synopsis: '江疏影杨采钰五美复仇出击',
  },
  {
    url: odeToJoy,
    name: '欢乐颂5',
    synopsis: '江疏影杨采钰五美复仇出击',
  },
]);

const scienceList = ref([
  { text: '全部' },
  { text: '科幻' },
  { text: '都市生活' },
  { text: '武侠江湖' },
  { text: '真实事件改编' },
  { text: '原创动画' },
  { text: '奇幻冒险' },
  { text: '东方仙侠' },
  { text: '古装爱情' },
  { text: '欧美电影' },
  { text: '犯罪动作' },
  { text: '国漫' },
  { text: '甜虐爱情' },
  { text: '东北喜剧' },
  { text: '经典动画' },
]);

const recommendtvList = ref([
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },

  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
  {
    url: easyLife,
    tvname: '玩伴',
    name: '电视剧 孙涛 戴娇倩 都市生活',
    synopsis: '搞笑！男子在街边卖内衣',
  },
]);
</script>

<style lang="scss">
#home {
  .top {
    top: 0;
    position: fixed;
    z-index: 1;
    background-color: rgba(67, 66, 66, 0.5);
    height: 84px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    .input-box {
      height: 48px;
      width: 480px;
      border: 1px solid transparent;
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      position: relative;
      transform: translate(50%, 0);
      .import {
        height: 48px;
        width: 420px;
        border-right: none;
        padding-left: 20px;
      }
      .search {
        height: 48px;
        width: 60px;
        border-left: none;
        background-image: url('../assets/img/search.png');
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    a {
      padding: 0 15px;
    }
  }
  #homePage {
    width: 210px;
    height: 100vh;
    top: 0;
    padding: 20px 0 20px 20px;
    position: fixed;
    z-index: 1;
    // background-color:rgba(230, 233, 240,.45);
    .logo {
      top: 0;
    }
    .homePage-Con {
      overflow-y: scroll;
      height: 100%;
      a {
        padding: 10px 0;
        display: flex;
        align-items: center;
        font-size: 16px;
      }
      .front {
        direction: rtl;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 20px;
      }
      .agreement {
        a {
          font-size: 12px;
        }
      }
      .licence {
        padding-bottom: 60px;
        a {
          font-size: 12px;
          padding: 5px 0;
        }
        p {
          display: flex;
          align-items: center;
          color: #474646;
          i {
            font-style: unset;
            margin: 0 5px;
          }
        }
        img {
          width: 122px;
          height: 52px;
        }
      }
    }
  }
  #centerCon {
    > img {
      height: 600px;
      width: 100%;
      background-color: rgba(20, 20, 20, 0.2);
      top: 0;
      left: 0;
    }
    #content {
      padding: 0 40px 0 220px;
      width: 100%;
      #hotbroadcast {
        width: 100%;
        height: 48px;
        color: white;
        display: flex;
        align-items: center;
        h1 {
          padding-right: 20px;
        }
        .change {
          display: flex;
          justify-content: space-between;
          flex: 1;
          .tv {
            span {
              border-left: 1px solid white;
              color: white;
            }
            a {
              padding: 0 20px;
              color: rgb(130, 131, 131);
            }
            a:hover {
              color: white;
            }
          }
        }
      }
      #hotpicture {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 10px 0;
        li {
          height: 210px;
          width: 100%;
          img {
            height: 150px;
            width: 100%;
            overflow: hidden;
            border-radius: 10px;
          }
          a {
            p {
              color: #ffffff;
              font-size: 16px;
            }
            span {
              color: #474646;
              font-size: 14px;
            }
          }
        }
        li:hover {
          border-radius: 10px;
          border: 1px solid rgb(107, 106, 106);
          background-color: rgb(98, 36, 36, 0.3);
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 180px 160px;
        }
      }
      #recommend {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;

        .science {
          flex: 1;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          span > a {
            color: white;
          }
        }
      }
      #recommendtv {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        li {
          height: 400px;
          width: 100%;
          border: 1px solid rgb(83, 82, 82);
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          background-color: #313131;
          background-image: url('../assets/img/追.png');
          background-repeat: no-repeat;
          background-position: 460px 310px;
          img {
            height: 300px;
          }
          .caption {
            padding: 10px;
            height: 100px;
            display: flex;
            img {
              height: 80px;
              width: 57px;
              margin-right: 5px;
            }
            .introduce {
              .tvname {
                color: #ffffff;
                font-size: 20px;
              }
              .name {
                color: #474646;
                font-size: 14px;
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
  }

  #video {
    padding: 84px 40px 0 220px;
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
