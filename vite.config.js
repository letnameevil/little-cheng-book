import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

export default defineConfig(({ mode, server }) => {
  return {
    base: "./",
    // 本地反向代理解决浏览器跨域限制
    server: {
      open: true, // 运行自动打开浏览器
      proxy: {
        "^/api/blade-": {
          target: "http://10.248.27.128",
          changeOrigin: true,
        },
        "^/api": {
          target: "http://10.248.27.128", // 测试环境
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api/hats-biz"),
        },
        "^/market": {
          target: "http://192.168.31.118:8087",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/hats-biz-heboyu/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
    //     },
    //   },
    // },
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        inject: {
          data: {
            title: loadEnv(mode, process.cwd()).VITE_APP_TITLE,
          },
        },
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "icon",
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  };
});
