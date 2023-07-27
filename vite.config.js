import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" })
      ],
    }),
  ],
  server: {
    open: false,
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
