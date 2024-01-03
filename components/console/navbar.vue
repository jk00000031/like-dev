<template>
  <nav class="bg-zinc-50/90 backdrop-blur h-12 sticky top-16 left-0 w-full z-10">
    <div class="h-full container mx-auto">
      <ul class="h-full flex items-center -mx-3 text-xs">
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="tabler:chart-line"
                  size="16"
                />
                <span>概览</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="la:project-diagram"
                  size="16"
                />
                <span>你的项目</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="ph:article-medium-light"
                  size="16"
                />
                <span>发表文章</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="iconoir:book"
                  size="16"
                />
                <span>书籍</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="ion:cog-outline"
                  size="16"
                />
                <span>设置</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full ml-auto">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                <Iconify
                  icon="solar:history-outline"
                  size="16"
                />
                <span>操作历史</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>
