<template>
  <div class="app">
    <ur-header></ur-header>
    <div class="body">
      <NuxtPage />
    </div>
    <ur-footer></ur-footer>
  </div>
</template>
<script setup lang="ts">
import UrFooter from "@/components/app-layout/UrFooter.vue";
import UrHeader from "@/components/app-layout/UrHeader.vue";
useHead({
  title: '科睿高科',
  // link: [{ rel: 'icon', type: 'image/x-icon', href: '/topode_202007/favicon.ico' }],
})
</script>
<style scoped lang="less">
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .body {
    margin-top: 77px;
    flex: 1;
  }
}
@media screen and (max-width: 750px) {
  .app {
    .body {
      margin-top: 44px;
    }
  }
}
</style>
