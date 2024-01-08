<script setup lang="ts">
interface MenuOption {
  label: string;
  to: string;
  key?: string;
  icon?: string;
  children?: MenuOption[];
}

const settingMenus = reactive<MenuOption[]>([
  {
    label: '公共资料',
    to: '/console/setting',
    icon: 'bx:user'
  }
]);
</script>

<template>
  <ConsoleLayout>
    <main class="container mx-auto flex space-x-8 py-8">
      <nav class="w-48 flex-shrink-0">
        <ul>
          <template v-for="(item, index) in settingMenus" :key="index">
            <li>
              <component
                :is="item.children ? 'button' : 'a'"
                :href="item.to"
                :class="[
                  'flex items-center p-2 rounded-lg space-x-2 text-xs transition hover:bg-zinc-100 relative',
                  $route.path === item.to
                    ? 'font-semibold bg-zinc-100 before:w-1 before:bg-green-500 before:absolute before:-left-2 before:h-2/3 before:rounded-full'
                    : ''
                ]"
              >
                <Iconify v-if="item.icon" :icon="item.icon" size="16" />
                <span>{{ item.label }}</span>
              </component>
              <template v-if="item.children">
                <ul>
                  <template v-for="(subitem, index2) in item.children" :key="index2">
                    <li>
                      <NuxtLink
                        :to="subitem.to"
                        :class="[
                          'flex items-center p-2 rounded-lg space-x-2 text-xs transition hover:bg-zinc-100 relative',
                          $route.path === item.to
                            ? 'font-semibold bg-zinc-100 before:w-1 before:bg-green-500 before:absolute before:-left-2 before:h-2/3 before:rounded-full'
                            : ''
                        ]"
                      >
                        <Iconify v-if="subitem.icon" :icon="subitem.icon" size="16" />
                        <span>{{ subitem.label }}</span>
                      </NuxtLink>
                    </li>
                  </template>
                </ul>
              </template>
            </li>
          </template>
        </ul>
      </nav>
      <div class="flex-grow">
        <NuxtPage />
      </div>
    </main>
  </ConsoleLayout>
</template>
