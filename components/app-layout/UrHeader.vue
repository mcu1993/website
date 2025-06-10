<template>
  <div class="ur-header">
    <div class="body">
      <div class="logo-box">
      </div>
      <div class="tabs-box">
        <a-tabs
          v-model:activeKey="activeKey"
          class="web-tabs"
          @change="handleTabsChange"
        >
          <a-tab-pane v-for="(item,index) in tabs" :key="item.value">
            <template #tab>
              <span
                v-if="( item.value !== 'Talent')"
              >
                {{ item.name }}
              </span>
              <a-dropdown v-else>
                <div class="tabs-dropdown-name">
                  {{ item.name }}
                </div>
                <template #overlay>
                  <a-menu 
                  style="width: 256px"
                  mode="vertical"
                  :items="index === 2 ?items:items2"
                  @click="handleClick"
                  >
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
import { h, ref, computed, onMounted, watch } from "vue";
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

const items = ref([
  {
    key: '1',
    label: '基础性能检测',
    title: '基础性能检测',
    children: [
      {
        key: 'sub1-1',
        label: '力学性能分析检测系列',
        title: '力学性能分析检测系列',
      },
      {
        key: 'sub1-2',
        label: '耐久性及其他性能分析检测系列',
        title: '耐久性及其他性能分析检测系列',
      },
      {
        key: 'sub1-3',
        label: '化学性能分析检测系列',
        title: '化学性能分析检测系列',
      },
    ],
  },
  {
    key: '2',
    label: '材料制备与加工',
    title: '材料制备与加工',
    children: [
      {
        key: 'sub2-1',
        label: '材料加工系列',
        title: '材料加工系列',
        children: [
           {
             key: 'sub2-1-1',
             label: '切磨抛',
             title: '切磨抛',
            },
           {
             key: 'sub2-1-2',
             label: '破、研磨、压片',
             title: '破、研磨、压片',
            },
           {
             key: 'sub2-1-3',
             label: '高温烧结炉设备',
             title: '高温烧结炉设备',
            },
        ]
      },
      {
        key: 'sub2-2',
        label: '材料成型系列',
        title: '材料成型系列',
      },
      {
        key: 'sub3-3',
        label: '材料分离系列',
        title: '材料分离系列',
      },
      {
        key: 'sub3-4',
        label: '材料混合系列',
        title: '材料混合系列',
      },
    ],
  },
  {
    key: '3',
    label: '环境控制设备',
    title: '环境控制设备',
    children: [
      {
        key: 'sub3-1',
        label: '恒控系统系列',
        title: '恒控系统系列',
        children: [
          {
            key: 'sub3-1-1',
            label: '箱体',
            title: '箱体',
          },
          {
            key: 'sub3-1-2',
            label: '机体',
            title: '机体',
          },
          {
            key: 'sub3-1-3',
            label: '锅炉',
            title: '锅炉',
          },
        ],
      },
      {
        key: 'sub3-2',
        label: '无菌环境系列',
        title: '无菌环境系列',
      },
      {
        key: 'sub3-3',
        label: '气体环境系列',
        title: '气体环境系列',
      },
    ],
  },
  {
    key: '4',
    label: '微观分析检测',
    title: '微观分析检测',
    children: [
      {
        key: 'sub4-1',
        label: '显微镜系列',
        title: '显微镜系列',
        children: [
          {
            key: 'sub4-1-1',
            label: '光学显微镜',
            title: '光学显微镜',
          },
          {
            key: 'sub4-1-2',
            label: '金相显微镜',
            title: '金相显微镜',
          },
          {
            key: 'sub4-1-3',
            label: '电子显微镜',
            title: '电子显微镜',
          },
        ],
      },
      {
        key: 'sub4-2',
        label: '元素分析检测系列',
        title: '元素分析检测系列',
      },
      {
        key: 'sub4-3',
        label: '内部结构分析检测系列',
        title: '内部结构分析检测系列',
        children: [
          {
            key: 'sub4-3-1',
            label: 'CT、X光、核磁等成像相关',
            title: 'CT、X光、核磁等成像相关',
          },
        ],
      },
    ],
  },
  {
    key: '5',
    label: '科睿定制系列-定制化解决方案',
    title: '科睿定制系列-定制化解决方案',
  },
]);
const items2 = ref([
  {
    key: '1',
    label: '人才理念',
    title: '人才理念',
    value: 'Talent'
  },
  {
    key: '2',
    label: '人才招聘',
    title: '人才招聘',
    value: 'TalentRecruitment'
  },
]);

const tabs = ref<Tabs[]>([
  { name: t("header.home"), value: "index" },
  {
    name: '关于我们',
    value: "About",
  },
  {
    name: "产品中心",
    value: "Product",
  },
  {
    name: "服务支持",
    value: "AfterSale",
  },
  { name: '人才发展', 
    value: "Talent" 
  },
]);

const activeKey = ref("index");
const router = useRouter();
const route = useRoute();


const setActiveKey = () => {
  const name = route.name?.split("___")[0];

  if (name.indexOf('Talent') != -1) {
    activeKey.value = "Talent";
    return;
  }

  activeKey.value = name;
};

const handleClick = (e) => {
  if (e.item.value === "Product" || e.item.value === "financial") return;

  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.replace(`${e.item.value}`);
  } else {
    router.replace(`${e.item.value}`);
  }
}

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

  if (key === "index") {
    router.push(`/`);
    return;
  }

  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.push(`${key}`);
  } else {
    router.push(`${key}`);
  }
};

// 浮动子菜单点击
const handleMenuClick = (key: string) => {
  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.push(`${key}`);
  } else {
    router.push(`${key}`);
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
      width: 205px;
      height: 48px;
      background-image:  url("../../assets/logo.png");
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
      width: 100px;
      height: 26px;
      background-image:  url("../../assets/logo2.png");
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
