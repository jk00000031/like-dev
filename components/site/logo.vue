<template>
  <NuxtLink to="/">
    <img :src="computedLogoTheme" alt="logo" class="w-7" />
  </NuxtLink>
</template>

<script setup lang="ts">
type ModeType = 'light' | 'dark';

const props = withDefaults(
  defineProps<{
    mode?: ModeType;
  }>(),
  {
    mode: 'light'
  }
);

const computedLogoTheme = computed(() => {
  const { mode } = props;
  const logo: string = {
    light: '/s-white.png',
    dark: '/s-black.png'
  }[mode];
  return logo;
});
</script>
