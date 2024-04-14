import axios from 'axios';
import { defineStore } from 'pinia';
import { getInfo, getGame } from '../api/login/index';

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      classifyList: [],
      gameList: [],
      userInfo: {},
    };
  },
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
