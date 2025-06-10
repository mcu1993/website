// https://nuxt.com/docs/api/configuration/nuxt-config

// import Components from "unplugin-vue-components/vite";
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

const pathResolve = (pathStr: string) => resolve(__dirname, pathStr);

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  serverDir: "static",
  bridge: false,
  ssr: false,
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/i18n"],
  plugins: [
    { src: "@/plugins/antd-ui", mode: "client" }, // 引入插件
    { src: "@/plugins/aos", mode: "client" }, // 引入插件
  ],
  // i18n: {
  //   // strategy: "prefix_and_default", // 添加路由前缀的方式
  //   locales: ["zh", "en"], // 配置语种
  //   vueI18n: "./i18n.config.ts", // 通过vueI18n配置
  // },
  compatibilityDate: "2024-08-07",
});
