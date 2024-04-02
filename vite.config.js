import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 服务配置
    port: 9528,  //此处修改所需要的端口号
    host: true,
   },
})
