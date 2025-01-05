export const country_key = {
  china: "zh",
  english: "en",
  vietnam: "vi-VN",
  thailand: "th-TH",
};

export const country_value = {
  china: "1",
  english: "333",
  vietnam: "233",
  thailand: "209",
};

export const country_type = [
  { code: country_value.china, name: "中文", key: country_key.china },
  { code: country_value.english, name: "English", key: country_key.english },
  // { code: country_value.vietnam, name: 'Việt Nam', key: country_key.vietnam },
  // { code: country_value.thailand, name: 'ประเทศไทย', key: country_key.thailand },
];

export const country_key_value = {
  [country_key.china]: "1",
  [country_key.english]: "233",
  [country_key.vietnam]: "223",
  [country_key.thailand]: "209",
};

export const country_key_name = {
  [country_key.china]: "中文",
  [country_key.english]: "English",
  [country_key.vietnam]: "Việt Nam",
  [country_key.thailand]: "ประเทศไทย",
};

export const phone_type = [
  { value: "86", name: "中国（+86）", key: [country_key.china] },
  { value: "84", name: "English（+84）", key: [country_key.english] },
  { value: "66", name: "Việt Nam（+66）", key: [country_key.vietnam] },
  { value: "60", name: "ประเทศไทย（+60）", key: [country_key.thailand] },
];

export const phone_type_key_value = {
  [country_key.china]: "86",
  [country_key.english]: "84",
  [country_key.vietnam]: "66",
  [country_key.thailand]: "60",
};

export const local_lang_key = "language";
