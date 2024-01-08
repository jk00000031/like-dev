<script setup lang="ts">
import { useProjectFindAll } from '~/composables/fetch/projects';
import { useAuthorisationToken } from '~/composables/state/useAuthorisation';
const token = useAuthorisationToken();

const { data: projects, pending } = await useProjectFindAll();
const projectList = computed<any>(() => toRaw(unref(projects))?.data);
</script>

<template>
  <nav class="h-[var(--shared-nav-height)]">
    <header class="fixed top-0 left-0 z-50 w-full bg-zinc-950/90 text-neutral-300 backdrop-blur">
      <div class="container mx-auto flex items-center">
        <SiteLogo ref="leftWrapperRef" class="flex-grow" />
        <ul class="px-4 text-xs flex items-center space-x-2">
          <li class="flex items-center">
            <NavItemDropdown class="flex items-center" panel>
              <template #trigger>
                <a
                  class="h-[var(--shared-nav-height)] flex items-center space-x-1 px-3 transition group-hover:text-white cursor-pointer rounded"
                >
                  <span>项目</span>
                  <Iconify v-if="pending" icon="line-md:downloading-loop" />
                  <Iconify icon="mingcute:down-line" class="transition group-hover:rotate-180" />
                </a>
              </template>
              <template v-if="!projectList.length">
                <div class="p-24 text-center text-zinc-400 space-y-4">
                  <Iconify icon="mdi:note-remove-outline" size="32" class="inline mx-auto" />
                  <p>暂无项目</p>
                </div>
              </template>
              <ul v-else class="container mx-auto grid grid-cols-5 gap-5 p-10">
                <li v-for="project in projectList" :key="project.id">
                  <div class="text-xs space-y-2 group">
                    <p class="text-sm transition group-hover:text-green-500">{{ project.name }}</p>
                    <div v-if="project.descript" class="text-zinc-500 leading-5">
                      {{ project.descript }}
                    </div>
                    <p class="flex items-center space-x-3">
                      <a :href="project.docLink" class="hover:text-green-500 transition hover:underline underline-offset-2">
                        <span>文档</span>
                      </a>
                      <a :href="project.docLink" class="hover:text-green-500 transition hover:underline underline-offset-2">
                        <span>原型图</span>
                      </a>
                      <a :href="project.docLink" class="hover:text-green-500 transition hover:underline underline-offset-2">
                        <span>设计图</span>
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </NavItemDropdown>
          </li>
          <li class="flex items-center">
            <NavItemDropdown class="flex items-center">
              <template #trigger>
                <NuxtLink
                  to="/articles"
                  class="h-[var(--shared-nav-height)] flex items-center space-x-1 px-3 transition group-hover:text-white cursor-pointer rounded"
                >
                  <span>文章</span>
                </NuxtLink>
              </template>
            </NavItemDropdown>
          </li>
          <li class="flex items-center">
            <NavItemDropdown class="flex items-center">
              <template #trigger>
                <NuxtLink
                  to="/bookshelf"
                  class="h-[var(--shared-nav-height)] flex items-center space-x-1 px-3 transition group-hover:text-white cursor-pointer rounded"
                >
                  <span>书架</span>
                </NuxtLink>
              </template>
            </NavItemDropdown>
          </li>
        </ul>
        <div ref="rightWrapperRef" class="flex-grow flex items-center justify-end space-x-4">
          <template v-if="token">
            <SiteProfileHeadCard />
          </template>
          <template v-else>
            <NButton tag="a" href="/" quaternary> 注册账号 </NButton>
            <NButton type="primary" tag="a" href="/console/accounts/login"> 登录 </NButton>
          </template>
        </div>
      </div>
    </header>
  </nav>
</template>
