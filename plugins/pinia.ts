import "ant-design-vue/dist/reset.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(pinia);
});
