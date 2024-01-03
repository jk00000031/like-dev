<script setup lang="ts">
  import { zhCN, dateZhCN } from "naive-ui";
</script>

<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    abstract
    inline-theme-disabled
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>
