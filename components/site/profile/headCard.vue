<script setup lang="ts">
import { useAuthorisationProfile, useCleanAuthorisation } from '~/composables/state/useAuthorisation';

interface DropdownMenuItem {
  label: string;
  icon: string;
  to: string;
  onClick: () => void;
  children: Partial<Omit<DropdownMenuItem, 'label'>> & Pick<DropdownMenuItem, 'label'>;
}

const router = useRouter();
const profile = useAuthorisationProfile();

function handleLogout() {
  useCleanAuthorisation();
  router.push('/console/accounts/login');
}

const dropdownMenus: Array<(Partial<Omit<DropdownMenuItem, 'label'>> & Pick<DropdownMenuItem, 'label'>)[]> = [
  [{ label: '你的主页', icon: 'iconoir:settings-profiles', to: `/profile/${profile.value.id}` }],
  [
    { label: '你的项目', icon: 'la:project-diagram', to: '/console/projects' },
    { label: '你的资料', icon: 'tdesign:user-setting', to: '/console/setting/profile' },
    { label: '你的书籍', icon: 'iconoir:book', to: '/console/books' },
    { label: '你的文章', icon: 'ph:article-medium-light', to: '/console/articles' },
    { label: '设置', icon: 'ion:cog-outline', to: '/console/setting' },
    { label: '操作历史', icon: 'solar:history-outline', to: '/console/history' }
  ],
  [{ label: '退出', icon: 'solar:logout-outline', onClick: () => handleLogout }]
];
</script>

<template>
  <n-popover trigger="click" placement="bottom-end">
    <template #trigger>
      <div class="w-6 h-6 rounded-full overflow-hidden border border-zinc-300 bg-zinc-200 flex items-center justify-center cursor-pointer">
        <img v-if="profile.avatar" :src="profile.avatar" alt="User Avatar" aria-label="user avatar" />
        <Iconify v-else icon="solar:shield-user-bold" size="20" />
      </div>
    </template>
    <div class="-mx-1.5 w-40">
      <template v-for="(arr, index) in dropdownMenus">
        <template v-for="item in arr">
          <template v-if="item.to">
            <NuxtLink
              :to="item.to"
              :key="item.to"
              class="text-xs flex items-center space-x-2 leading-8 px-3 rounded-md transition hover:bg-zinc-100"
            >
              <Iconify v-if="item.icon" :icon="item.icon" size="16" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </template>

          <template v-else>
            <a
              :key="item.label"
              class="text-xs flex items-center space-x-2 leading-8 px-3 rounded-md transition hover:bg-zinc-100 cursor-pointer"
              @click="item?.onClick"
            >
              <Iconify v-if="item.icon" :icon="item.icon" size="16" />
              <span>{{ item.label }}</span>
            </a>
          </template>
        </template>
        <hr v-if="index < dropdownMenus.length - 1" :key="index" class="bg-zinc-300 my-2" />
      </template>
    </div>
  </n-popover>
</template>
