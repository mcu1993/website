<template>
  <div class="ur-header">
    <div class="body">
      <div class="logo-box">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="tabs-box">
        <a-tabs
          v-model:activeKey="activeKey"
          class="web-tabs"
          @change="handleTabsChange"
        >
          <a-tab-pane v-for="item in tabs" :key="item.value">
            <template #tab>
              <span
                v-if="item.value !== 'solution' && item.value !== 'financial'"
              >
                {{ item.name }}
              </span>
              <a-dropdown v-else>
                <div class="tabs-dropdown-name">
                  {{ item.name }}
                </div>
                <DownOutlined />
                <template #overlay>
                  <a-menu>
                    <a-menu-item
                      v-for="(list, key) in item.children"
                      :key="key"
                      @click="handleMenuClick(list.value)"
                    >
                      {{ list.name }}
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </template>
          </a-tab-pane>
        </a-tabs>
        <ur-icon
          v-if="!tabsMobileVisible"
          class="mobile-tabs-icon"
          type="menu"
          @click="tabsMobileVisible = true"
        ></ur-icon>
        <ur-icon
          v-else
          class="mobile-tabs-icon"
          type="guanbi"
          @click="tabsMobileVisible = false"
        ></ur-icon>

        <!-- <a-dropdown>
          <div class="language-dropdown">
            <ur-icon class="icon" type="language"></ur-icon>
            <span>{{ currentLanguage }}</span>
            <ur-icon class="icon" type="drop-down"></ur-icon>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item
                v-for="(item, index) in country_type"
                :key="index"
                @click="handleLanguage(item)"
              >
                {{ item.name }}
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown> -->
      </div>
    </div>
  </div>
  <tabs-mobile v-model:visible="tabsMobileVisible" :tabs="tabs"></tabs-mobile>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { DownOutlined } from "@ant-design/icons-vue";
import UrIcon from "@/components/icon";
import TabsMobile from "@/components/app-layout/components/TabsMobile.vue";
import { country_key_name, country_type } from "~/i18n/country";

export interface Tabs {
  name: string;
  value: string;
  children?: Tabs[];
}

const { t, locale, setLocale } = useI18n();

const tabs = ref<Tabs[]>([
  { name: t("header.home"), value: "index" },
  {
    name: '关于我们',
    value: "About",
    children: [
      { name: '品牌介绍', value: "About" },
      { name: '企业介绍', value: "About" },
    ],
  },
  {
    name: "产品中心",
    value: "solution",
    children: [
      { name: t("header.solution1"), value: "FullScence" },
      { name: t("header.solution2"), value: "Solution" },
      { name: t("header.solution3"), value: "Engineering" },
      { name: t("header.solution4"), value: "SandTrade" },
      { name: t("header.solution5"), value: "FreshFruit" },
      { name: t("header.solution6"), value: "CrossBorderDigital" },
    ],
  },
  {
    name: "服务支持",
    value: "financial",
    children: [
      { name: t("header.solution8"), value: "LogisticsFinance" },
      { name: t("header.solution9"), value: "TradeFinance" },
    ],
  },
  { name: '人才发展', value: "rencai" },
]);

const activeKey = ref("index");
const router = useRouter();
const route = useRoute();

const getChildrenValue = (value: string) => {
  const data = tabs.value.find((item) => item.value === value);
  return data?.children?.map((list) => list.value) || [];
};

const setActiveKey = () => {
  const name = route.name?.split("___")[0];
  const solutionChildrenValue = getChildrenValue("solution");
  const financialChildrenValue = getChildrenValue("financial");

  if (solutionChildrenValue.includes(name)) {
    activeKey.value = "solution";
    return;
  }

  if (financialChildrenValue.includes(name)) {
    activeKey.value = "financial";
    return;
  }

  activeKey.value = name;
};

watch(
  () => route.name,
  () => {
    setActiveKey();
  },
);

onMounted(() => {
  setActiveKey();
});

const tabsMobileVisible = ref(false);
const currentLanguage = computed(() => country_key_name[locale.value]);

const handleLanguage = (item) => {
  setLocale(item.key);

  setTimeout(() => {
    router.go(0);
  }, 300);
};

// 父菜单点击
const handleTabsChange = (key: string) => {
  if (key === "solution" || key === "financial") return;

  if (key === "index") {
    router.push({ name: `index___${locale.value}` });
    return;
  }

  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.push(`${locale.value}/${key}`);
  } else {
    router.push({ name: `${key}___${locale.value}` });
  }
};

// 浮动子菜单点击
const handleMenuClick = (key: string) => {
  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.push(`${locale.value}/${key}`);
  } else {
    router.push({ name: `${key}___${locale.value}` });
  }
};
</script>
<style scoped lang="less">
::v-deep(.ant-dropdown-menu-item:hover) {
  color: #ffffff;
  background-color: #1B9EDB !important;
}

.ur-header {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 77px;
  line-height: 77px;
  background: #ffffff;

  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: auto;
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1920px;

    .logo-box {
      text-align: center;
      img {
        width: 205px;
        height: 48px;
      }
    }

    .tabs-box {
      display: flex;
      align-items: center;

      .mobile-tabs-icon {
        display: none;
      }

      .tabs-dropdown-name {
        padding: 0 20px;
        height: 100%;
      }

      ::v-deep(.ant-tabs) {
        .ant-tabs-nav {
          margin: 0;
        }

        .ant-tabs-nav::before {
          content: none;
        }

        .ant-tabs-nav-operations {
          display: none;
        }

        .ant-tabs-tab {
          height: 65px;
          line-height: 65px;
          padding: 0;
          margin: 0;
          span {
            padding: 0 20px;
          }
          .ant-tabs-tab-btn {
            height: 100%;
          }
        }

        .ant-tabs-tab:hover {
          color: #1B9EDB;
        }

        .ant-tabs-tab-active {
          background: #1B9EDB;

          .ant-tabs-tab-btn {
            color: #fff;
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      }
    }

    .language-dropdown {
      min-width: 80px;
      cursor: pointer;
      font-size: 14px;
      color: #494949;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin: 0 4px;
      }

      .icon {
        position: relative;
        font-size: 14px;
        top: -1px;
        color: #494949;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .ur-header {
    height: 44px;

    .body {
      .logo-box {
        padding: 0 20px;

        img {
          width: 100px;
          height: 24px;
        }
      }

      .tabs-box {
        flex: 1;
        flex-direction: row-reverse;

        .web-tabs {
          display: none;
          transition: all 0.3s;
        }

        .mobile-tabs-icon {
          display: inline-block;
          transition: all 0.3s;
        }

        .language-dropdown {
          height: 30px;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #d8d8d8;
        }

        .mobile-tabs-icon {
          margin-left: 13%;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
