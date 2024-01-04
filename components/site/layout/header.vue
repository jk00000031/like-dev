<script setup lang="ts">
  import { useProjectFindAll } from "~/composables/fetch/projects";
  import { useAuthorisationToken } from "~/composables/state/useAuthorisation";
  const token = useAuthorisationToken();

  const { data: projects, pending } = await useProjectFindAll();
  const projectList = computed<any>(() => toRaw(unref(projects))?.data);
</script>

<template>
  <header class="h-16">
    <div class="h-16 fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur">
      <div class="container mx-auto h-full flex items-center">
        <SiteLogo ref="leftWrapperRef" />
        <nav class="flex-grow h-full px-4 text-xs">
          <ul class="h-full flex items-center space-x-2">
            <li class="h-full flex items-center">
              <NavItemDropdown
                class="h-full flex items-center"
                panel
              >
                <template #trigger>
                  <a class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                    <span>项目</span>
                    <Iconify
                      v-if="pending"
                      icon="line-md:downloading-loop"
                    />
                    <Iconify
                      icon="mingcute:down-line"
                      class="transition group-hover:rotate-180"
                    />
                  </a>
                </template>
                <template v-if="!projectList.length">
                  <div class="p-24 text-center text-zinc-400 space-y-4">
                    <Iconify
                      icon="mdi:note-remove-outline"
                      size="32"
                      class="inline mx-auto"
                    />
                    <p>暂无项目</p>
                  </div>
                </template>
                <ul
                  v-else
                  class="container mx-auto grid grid-cols-5 gap-5 p-10"
                >
                  <li v-for="project in projectList">
                    <div class="text-xs space-y-2 group">
                      <p class="text-sm transition group-hover:text-green-500">{{ project.name }}</p>
                      <div
                        v-if="project.descript"
                        class="text-zinc-500 leading-5"
                      >
                        {{ project.descript }}
                      </div>
                      <p class="flex items-center space-x-3">
                        <a
                          :href="project.docLink"
                          class="hover:text-green-500 transition hover:underline underline-offset-2"
                        >
                          <span>文档</span>
                        </a>
                        <a
                          :href="project.docLink"
                          class="hover:text-green-500 transition hover:underline underline-offset-2"
                        >
                          <span>原型图</span>
                        </a>
                        <a
                          :href="project.docLink"
                          class="hover:text-green-500 transition hover:underline underline-offset-2"
                        >
                          <span>设计图</span>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </NavItemDropdown>
            </li>
            <li class="h-full flex items-center">
              <NavItemDropdown class="h-full flex items-center">
                <template #trigger>
                  <a class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                    <span>文章</span>
                  </a>
                </template>
              </NavItemDropdown>
            </li>
            <li class="h-full flex items-center">
              <NavItemDropdown class="h-full flex items-center">
                <template #trigger>
                  <a class="h-full flex items-center space-x-1 px-3 transition group-hover:text-green-600 cursor-pointer rounded">
                    <span>书架</span>
                  </a>
                </template>
              </NavItemDropdown>
            </li>
          </ul>
        </nav>
        <div
          ref="rightWrapperRef"
          class="flex items-center justify-end space-x-4"
        >
          <template v-if="token">
            <SiteProfileHeadCard />
          </template>
          <template v-else>
            <NButton
              tag="a"
              href="/"
              quaternary
            >
              注册账号
            </NButton>
            <NButton
              type="primary"
              tag="a"
              href="/console/accounts/login"
            >
              登录
            </NButton>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
