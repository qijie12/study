import axios from 'axios';
import { defineStore } from 'pinia';
import { getInfo, getGame } from '../api/login/index';

export const useSystemStore = defineStore('system', {
  //state 存放状态
  state: () => {
    return {
      classifyList: [],
      gameList: [],
      userInfo: {},
    };
  },
  //actions 存放异步方法 只是pinia中的异步方法
  actions: {
    setUserInfo(status) {
      this.userInfo = status;
    },
    async getGames() {
      let res = await getGame();
      this.classifyList = res.data.cate_info;
      this.gameList = res.data.game_list;
    },
    async getUserInfo() {
      let res = await getInfo();
      this.userInfo = res.data;
    },
  },
});
//异步关键字:async  await
//异步方法:new Promise :resolve(捕捉成功之后的方法) reject(捕捉异常之后的方法)
