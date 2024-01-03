<script setup lang="ts">
  import { useCleanAuthorisation } from "~/composables/state/useAuthorisation";
  const router = useRouter();

  function handleLogout() {
    useCleanAuthorisation();
    router.push("/console/accounts/login");
  }
</script>

<template>
  <n-popover
    trigger="click"
    placement="bottom-end"
  >
    <template #trigger>
      <div class="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center cursor-pointer">
        <Iconify
          icon="solar:shield-user-bold"
          size="20"
        />
      </div>
    </template>
    <div class="-mx-1.5 w-32">
      <NuxtLink
        to="/"
        class="flex items-center space-x-1 leading-9 px-3 rounded-md transition hover:bg-zinc-100"
      >
        <Iconify
          icon="material-symbols-light:lab-profile-outline"
          size="18"
        />
        <span>账户资料</span>
      </NuxtLink>
      <a
        class="flex items-center space-x-1 leading-9 px-3 rounded-md transition hover:bg-zinc-100 cursor-pointer"
        @click="handleLogout"
      >
        <Iconify
          icon="solar:logout-outline"
          size="18"
        />
        <span>退出</span>
      </a>
    </div>
  </n-popover>
</template>
