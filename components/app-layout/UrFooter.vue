<template>
  <footer class="ur-footer">
    <div class="describe-container">
      <div class="describe-gird" data-aos="fade-up">
        <div class="describe-item-box">
          <div class="logo">
            <img src="@/assets/home/logo.png" alt="" />
          </div>
          <div class="describe-item">{{ $t("footer.describe2") }}</div>
          <div class="describe-item">{{ $t("footer.describe3") }}</div>
          <div class="describe-item">{{ $t("footer.describe4") }}</div>
          <div class="describe-item">{{ $t("footer.describe5") }}</div>
        </div>
      </div>
      <div
        v-for="(item, index) in webTabs"
        :key="index"
        class="describe-gird"
        data-aos="fade-up"
        :data-aos-delay="300 + index * 100"
      >
        <div class="describe-item-box">
          <div class="describe-item title-color">{{ item.name }}</div>
          <div
            v-for="(list, key) in item.children"
            :key="key"
            class="describe-item"
            @click="handleMenuClick(list.value)"
          >
            {{ list.name }}
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="tabs-list">
    <div v-for="(item, index) in tabs" :key="index">
      <div
        v-if="!item.children?.length"
        class="tabs-item"
        @click="handleMenuClick(item.value)"
      >
        {{ item.name }}
      </div>
      <a-collapse
        v-else
        v-model:activeKey="activeKey"
        ghost
        expand-icon-position="end"
      >
        <a-collapse-panel :key="index" :header="item.name">
          <div
            v-for="(list, key) in item.children"
            :key="key"
            class="child-item"
            @click="handleMenuClick(list.value)"
          >
            {{ list.name }}
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="footer-item-box">
      <div class="describe-item">{{ $t("footer.describe2") }}</div>
      <div class="describe-item">{{ $t("footer.describe3") }}</div>
      <div class="describe-item">{{ $t("footer.describe4") }}</div>
      <div class="describe-item">{{ $t("footer.describe5") }}</div>
    </div>
  </div>
  <div class="record-number">
    {{ $t("footer.describe13") }}
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const { t, locale } = useI18n();
const activeKey = ref<string[]>(["1"]);
const tabs = [
  {
    name: t("header.productIntroduction"),
    value: "Product",
    children: [
      { name: t("footer.describe6"), value: "Product" },
      { name: t("footer.describe8"), value: "Product" },
    ],
  },
  {
    name: t("header.solution"),
    value: "Solution",
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
    name: t("header.solution7"),
    value: "financial",
    children: [
      { name: t("header.solution8"), value: "LogisticsFinance" },
      { name: t("header.solution9"), value: "TradeFinance" },
    ],
  },
  { name: t("header.aboutUs"), value: "About" },
];

const webTabs = computed(() => {
  const excludes = ["financial", "About"];
  const data = tabs.filter((item) => !excludes.includes(item.value));
  return [
    ...data,
    {
      name: t("header.aboutUs"),
      value: "About",
      children: [
        { name: t("footer.describe9"), value: "About" },
        { name: t("footer.describe10"), value: "About" },
        { name: t("footer.describe11"), value: "About" },
      ],
    },
  ];
});

const router = useRouter();
const route = useRoute();
const handleMenuClick = (key: string) => {
  if (route.path.indexOf(`/${locale.value}/`) === -1) {
    router.push(`${locale.value}/${key}`);
  } else {
    router.push({ name: `${key}___${locale.value}` });
  }
};
</script>

<style scoped lang="less">
.ur-footer {
  min-height: 383px;
  background-color: #293031;

  .describe-container {
    height: 100%;
    display: grid;
    grid-template-columns: 30% 20% 25% 25%;
    align-items: center;
    padding: 0 30px;

    .describe-gird {
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        margin-bottom: 12px;

        img {
          width: 260px;
          height: 40px;
        }
      }

      .qr-code-box {
        img {
          width: 100px;
          height: 100px;
        }
      }

      .describe-item {
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        text-align: left;
        color: #ffffff;
        cursor: pointer;
      }

      .title-color {
        font-size: 16px;
        font-weight: 600;
      }

      .text-center {
        text-align: center;
      }
    }
  }
}

.tabs-list {
  background: #293031;
  display: none;
  padding: 0 12px;

  .tabs-item {
    height: 52px;
    line-height: 52px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    padding: 0 12px;
    border-bottom: 0.5px solid #e3e3e3;
  }

  ::v-deep(.ant-collapse) {
    .ant-collapse-header {
      height: 52px;
      padding: 12px;
      border-radius: 0;
      color: #ffffff;
    }

    .ant-collapse-item {
      font-weight: 600;
      font-size: 14px;
      color: #1f1f1f;
      border-bottom: 0.5px solid #e3e3e3;
      border-radius: 0;

      .ant-collapse-content {
        border-radius: 0;
      }

      .child-item {
        font-weight: 400;
        font-size: 12px;
        color: #c7c5c5;
        margin: 0 0 24px 14px;
      }
    }
  }

  .footer-item-box {
    position: relative;
    padding: 16px 12px;

    .describe-item {
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      line-height: 22px;
    }

    .img-item-box {
      position: absolute;
      top: 45px;
      right: 10px;
      text-align: center;

      img {
        width: 80px;
        height: 80px;
        margin-bottom: 4px;
      }

      .describe-item {
        color: #c7c5c5;
      }
    }
  }
}

.record-number {
  min-height: 42px;
  line-height: 42px;
  background: #101010;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  word-break: break-all;
}

@media screen and (max-width: 750px) {
  .ur-footer {
    display: none;
    transition: all 1s;
  }

  .tabs-list {
    display: inline-block;
  }

  .record-number {
    height: auto;
    // padding: 6px 10%;
  }
}
</style>
