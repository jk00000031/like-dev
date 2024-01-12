<script setup lang="ts">
import { useAuthorisationProfile } from '~/composables/state/useAuthorisation';

const profile = useAuthorisationProfile();
</script>

<template>
  <ConsoleLayout>
    <main class="container mx-auto max-w-[1024px]">
      <section class="py-6 flex items-start justify-between">
        <div class="flex items-center space-x-4">
          <div
            class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-zinc-300 bg-zinc-200 flex items-center justify-center cursor-pointer"
          >
            <img :src="profile.avatar" alt="User Avatar" aria-label="user avatar" />
          </div>
          <div class="flex-grow space-y-1">
            <h3 class="text-lg space-x-2">
              <span>{{ profile.nickName }}</span>
              <small>({{ profile.account }})</small>
            </h3>
            <p class="text-zinc-500">个人账号</p>
          </div>
        </div>
        <NButton size="small" secondary tag="a" :href="`/profile/${profile.id}`">前往你的主页</NButton>
      </section>
      <section class="flex space-x-8">
        <nav class="w-48 flex-shrink-0">
          <ul>
            <li>
              <NuxtLink
                href="/console/setting"
                class="flex items-center p-2 rounded-lg space-x-2 text-xs transition hover:bg-zinc-100 relative SharedSettingSideItem"
              >
                <Iconify icon="bx:user" size="16" />
                <span>公共资料</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/console/setting/attestation"
                class="flex items-center p-2 rounded-lg space-x-2 text-xs transition hover:bg-zinc-100 relative SharedSettingSideItem"
              >
                <Iconify icon="carbon:two-factor-authentication" size="16" />
                <span>真实认证</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/console/setting/shared"
                class="flex items-center p-2 rounded-lg space-x-2 text-xs transition hover:bg-zinc-100 relative SharedSettingSideItem"
              >
                <Iconify icon="ph:share" size="16" />
                <span>共享设置</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex-grow">
          <NuxtPage />
        </div>
      </section>
    </main>
  </ConsoleLayout>
</template>

<style scoped lang="scss">
.SharedSettingSideItem {
  &.router-link-exact-active {
    @apply bg-zinc-100 before:w-1 before:bg-green-500 before:absolute before:-left-2 before:h-2/3 before:rounded-full;
  }
}
</style>
