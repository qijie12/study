import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
const pinia = createPinia()

import Vant from 'vant';
import 'vant/lib/index.css';

import router from './router'; // 引入你的路由文件


createApp(App).use(Vant).use(router).use(pinia).mount('#app');
    