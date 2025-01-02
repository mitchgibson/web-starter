<template>
  <div class="flex flex-col w-screen h-screen">
    <TopNav>TopNav</TopNav>
    <div class="flex flex-row w-full h-full">
      <SideNav />
      <Page>
        <RouterView />
      </Page>
    </div>
  </div>
</template>

<script setup lang="ts">
import Page from "./components/layout/Page.vue";
import SideNav from "./components/layout/SideNav.vue";
import TopNav from "./components/layout/TopNav.vue";

import { usePageStore } from "./stores/PageStore";

const pageStore = usePageStore();
pageStore.init();
</script>