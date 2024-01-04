<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/" class="text-base inline-flex items-start space-x-1">
    <span class="font-sans relative before:absolute before:top-full before:mt-0.5 before:w-7 before:h-1 before:bg-green-500">
      {{ config.public.projectName }}
    </span>
    <span class="text-xs border rounded-full px-1 font-medium text-zinc-500 border-zinc-300">Alpha</span>
  </NuxtLink>
</template>
