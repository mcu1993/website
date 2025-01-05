import { createI18n } from "vue-i18n";

import { country_key } from "./country";

import zh from "./lang/zh"; // 中文
import en from "./lang/en"; // 英文

const appStore =
  typeof window !== "undefined" ? localStorage.getItem("appStore") : "";

const currentLocale = appStore
  ? JSON.parse(appStore).language
  : country_key.china;

export const i18n = createI18n({
  locale: currentLocale, // 语言标识
  messages: {
    [country_key.china]: {
      ...zh,
    },
    [country_key.english]: {
      ...en,
    },
  },
});
