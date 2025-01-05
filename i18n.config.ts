import zh from "./i18n/lang/zh";
import en from "./i18n/lang/en";

// 英文
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: {
    zh,
    en,
    // [country_key.china]: zh,
    // [country_key.english]: en,
  },
}));
