import { defineStore } from 'pinia';
import axios from 'axios';
import { getItem } from '../common/auth';

export const useCounterStore = defineStore('counter', {
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
    getGame() {
      return new Promise((resolve, reject) => {
        axios
          .get('https://minibk.disneygo.org/api/game/all-game-list')
          .then((res) => {
            console.log(res, '11111111111111111111111');
            // res.data.data.cate_info.some((item) => {
            //   item.name = item.display_name;
            // });
            this.classifyList = res.data.data.cate_info;
            this.gameList = res.data.data.game_list;
            resolve();
          })
          .catch((err) => {});
      });
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        let token = getItem('token');
        axios
          .get('https://minibk.disneygo.org/api/user/get_self_info', {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then((res) => {
            console.log(res, 'res-----------');
            this.setUserInfo(res.data.data);
            resolve();
          })
          .catch((err) => {});
      });
    },
  },
});
