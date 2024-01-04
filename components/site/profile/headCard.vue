<script setup lang="ts">
  import { useAuthorisationProfile, useCleanAuthorisation } from "~/composables/state/useAuthorisation";
  const router = useRouter();
  const profile = useAuthorisationProfile();

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
      <div class="w-8 h-8 rounded-full overflow-hidden border border-zinc-300 bg-zinc-200 flex items-center justify-center cursor-pointer">
        <img
          v-if="profile.avatar"
          :src="profile.avatar"
          alt="User Avatar"
          aria-label="user avatar"
        />
        <Iconify
          v-else
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
      <NuxtLink
        to="/"
        class="flex items-center space-x-1 leading-9 px-3 rounded-md transition hover:bg-zinc-100"
      >
        <Iconify
          icon="solar:history-outline"
          size="18"
        />
        <span>操作历史</span>
      </NuxtLink>
      <hr class="bg-zinc-300 my-2" />
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
