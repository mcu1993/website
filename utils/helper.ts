import { country_key } from "~/i18n/country";

export const isZhLocale = () => {
  const { locale } = useI18n();
  return locale.value === country_key.china;
};

export const isEnLocale = () => {
  const { locale } = useI18n();
  return locale.value === country_key.english;
};
