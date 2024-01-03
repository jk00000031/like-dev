<script lang="ts" setup>
  const { projectName } = useRuntimeConfig();
</script>

<template>
  <NuxtLink
    to="/"
    class="text-lg inline-flex items-start space-x-1"
  >
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-fuchsia-500 font-sans">{{ projectName }}</span>
    <span class="text-xs border rounded-full px-1 font-medium text-zinc-500 border-zinc-300">Alpha</span>
  </NuxtLink>
</template>
