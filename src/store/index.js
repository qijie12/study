import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      classifyList: [],
      gameList: [],
    };
  },
  actions: {
    getGame() {
      return new Promise((resolve, reject) => {
        axios
          .get('https://minibk.disneygo.org/api/game/all-game-list')
          .then((res) => {
            this.classifyList = res.data.data.cate_info;
            this.gameList = res.data.data.game_list;
            resolve();
          })
          .catch((err) => {});
      });
    },
  },
});
