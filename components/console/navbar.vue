<template>
  <nav
    class="bg-gray-100/90 text-zinc-600 backdrop-blur h-[var(--shared-second-nav-height)] sticky top-[var(--shared-nav-height)] left-0 w-full z-10"
  >
    <div class="h-full container mx-auto">
      <ul class="h-full flex items-center -mx-3 text-xs">
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink
                to="/console"
                class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-500 cursor-pointer rounded"
              >
                <Iconify icon="tabler:chart-line" size="16" />
                <span>概览</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink
                to="/console/projects"
                class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-500 cursor-pointer rounded"
              >
                <Iconify icon="la:project-diagram" size="16" />
                <span>你的项目</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink
                to="/console/articles"
                class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-500 cursor-pointer rounded"
              >
                <Iconify icon="ph:article-medium-light" size="16" />
                <span>发表文章</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink
                to="/console/books"
                class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-500 cursor-pointer rounded"
              >
                <Iconify icon="iconoir:book" size="16" />
                <span>书籍</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
        <li class="h-full">
          <NavItemDropdown class="h-full flex items-center">
            <template #trigger>
              <NuxtLink
                to="/console/setting"
                class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-500 cursor-pointer rounded"
              >
                <Iconify icon="ion:cog-outline" size="16" />
                <span>设置</span>
              </NuxtLink>
            </template>
          </NavItemDropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.router-link-active {
  @apply relative text-green-600;

  &::after {
    content: '';
    @apply absolute bottom-0 left-0 right-0 h-[2px] bg-green-500;
  }
}
</style>
