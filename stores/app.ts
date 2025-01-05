import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
  "appStore",
  () => {
    const language = ref<string>("");

    return { language };
  },
  {
    persist: {
      key: "appStore",
      storage: process.client ? localStorage : "",
      paths: ["language"],
    },
  },
);
