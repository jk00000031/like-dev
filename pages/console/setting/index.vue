<script setup lang="ts">
interface MenuOption {
  label: string;
  to: string | { name: string; params: object };
  key?: string;
  icon?: string;
  children?: MenuOption[];
}

const settingMenus = reactive<MenuOption[]>([
  {
    label: '公共资料',
    to: '/console/setting'
  }
]);

console.log(settingMenus);
</script>

<template>
  <ConsoleLayout>
    <main class="container mx-auto flex space-x-4 py-4">
      <div class="w-56 flex-shrink-0" />
      <div class="flex-grow">
        <NuxtPage />
      </div>
    </main>
  </ConsoleLayout>
</template>
