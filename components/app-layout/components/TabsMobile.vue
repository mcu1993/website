<template>
  <a-drawer
    v-model:visible="innerVisible"
    height="80%"
    :closable="false"
    placement="top"
  >
    <div class="tabs-list">
      <div v-for="(item, index) in tabs" :key="index">
        <div
          v-if="!item.children?.length"
          class="tabs-item"
          @click="handleRouter(item.value)"
        >
          {{ item.name }}
        </div>
        <a-collapse
          v-else
          v-model:activeKey="activeKey"
          ghost
          expand-icon-position="end"
        >
          <a-collapse-panel key="1" :header="item.name">
            <div
              v-for="(list, key) in item.children"
              :key="key"
              class="child-item"
              @click="handleRouter(list.value)"
            >
              {{ list.name }}
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref, defineModel, type PropType } from "vue";
import { useRouter } from "vue-router";
import type { Tabs } from "~/components/app-layout/UrHeader.vue";
import { useRoute } from "#vue-router";

defineProps({
  tabs: {
    type: Array as PropType<Tabs[]>,
    default: () => [],
  },
});
const innerVisible = defineModel("visible", { default: false });
const activeKey = ref(["1"]);
const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const handleRouter = (key: string) => {
  innerVisible.value = false;
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
</script>
<style scoped lang="less">
.tabs-list {
  .tabs-item {
    height: 52px;
    line-height: 52px;
    font-weight: 600;
    font-size: 14px;
    color: #1f1f1f;
    padding: 0 12px;
    border-bottom: 0.5px solid #e3e3e3;
  }
  ::v-deep(.ant-collapse) {
    .ant-collapse-header {
      height: 52px;
      padding: 12px;
      border-radius: 0;
    }
    .ant-collapse-item {
      font-weight: 600;
      font-size: 14px;
      color: #1f1f1f;
      border-bottom: 0.5px solid #e3e3e3;
      .child-item {
        font-weight: 400;
        font-size: 12px;
        color: #606367;
        margin: 0 0 24px 14px;
      }
    }
  }
}
</style>
