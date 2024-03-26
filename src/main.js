import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'; // 引入你的路由文件

createApp(App).use(router).mount('#app');