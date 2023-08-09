import { defineConfig,loadEnv  } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import autoprefixer from "autoprefixer"
import { viteMockServe } from "vite-plugin-mock"
import { createHtmlPlugin } from "vite-plugin-html"

// elementPlus按需导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"


const getViteEnv = (mode:any, target:any) => {
  return loadEnv(mode, process.cwd())[target];
};

export default () =>defineConfig({
  base: "./",
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/"
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" })
      ]
    }),
    createHtmlPlugin({
      inject: {
        data: {}
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/style/variables.scss" as *;`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8", "> 1%"],
          grid: true
        })
      ]
    }
  },
  server: {
    port: 9090,
    host: "0.0.0.0",
    proxy: {
      "/api/": {
        target: "/api/",
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})