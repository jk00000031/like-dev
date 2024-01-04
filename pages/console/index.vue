<script setup lang="ts">
import { useBooksFilterCurrentYear } from '~/composables/fetch/books';
import { useProjectFilterCurrentYear } from '~/composables/fetch/projects';
import { useAuthorisationProfile } from '~/composables/state/useAuthorisation';
import { useCurrentYear } from '~/composables/utils/date/useDate';

const profile = useAuthorisationProfile();

// 获取今年的项目
const { data: projectResult, pending: projectPending } = await useProjectFilterCurrentYear();
const projectsRaw = toRaw(unref(projectResult));
const projects: any = projectsRaw?.data || [];

// 获取今年写的书
const { data: bookResult, pending: bookPending } = await useBooksFilterCurrentYear();
const booksRaw = toRaw(unref(bookResult));
const books: any = booksRaw?.data || [];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<template>
  <ConsoleLayout>
    <section v-if="profile?.profile?.status !== 1" class="text-xs text-center bg-amber-100 sticky top-28 z-20 left-0 w-full">
      <div class="container mx-auto py-2">
        <span class="space-x-2">
          <Iconify icon="basil:notification-on-outline" size="14" class="inline align-middle" />
          <span>{{
            (
              {
                0: '该账号已封存',
                2: '用户已从原公司离职',
                3: '用户已被原公司辞退'
              } as any
            )[profile?.profile?.status] || '账号状态数据异常'
          }}</span>
        </span>
      </div>
    </section>

    <main class="container mx-auto flex py-8 space-x-10">
      <aside class="w-56 flex-shrink-0">
        <div class="pb-4 mb-4 border-b relative">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center ring-8 ring-zinc-300">
            <img :src="profile.avatar" alt="" />
          </div>
          <SiteProfileMood class="absolute top-24 right-1" />
          <div class="mt-8 text-center">
            <h3 class="text-lg font-sans font-semibold">{{ profile.nickName }}</h3>
            <p class="text-sm text-zinc-500">{{ profile.account }}</p>
          </div>
        </div>
        <div class="space-y-1">
          <NuxtLink to="/console/setting/profile" class="flex items-center py-2 px-4 rounded-md space-x-1 transition hover:bg-zinc-100">
            <Iconify icon="material-symbols-light:lab-profile-outline" size="18" />
            <span>修改你的资料</span>
          </NuxtLink>
        </div>
        <div class="mt-4 pt-4 border-t">
          <p class="flex items-center space-x-1">
            <Iconify icon="carbon:location-company" size="16" />
            <span>{{ profile?.profile?.company || '独立开发者' }}</span>
          </p>
        </div>
      </aside>
      <div class="flex-grow space-y-6">
        <section class="rounded-md py-2 px-3 text-sm bg-blue-500 text-white">
          <p class="flex items-center space-x-2">
            <Iconify icon="uiw:date" size="16" />
            <span>所有的筛选条件时间均为西方纪年</span>
          </p>
        </section>
        <section>
          <div class="mb-4 space-y-2">
            <h3 class="text-base">{{ useCurrentYear() }} 做了什么项目</h3>
          </div>
          <template v-if="projectPending">
            <div class="py-12 flex items-center justify-center">
              <Iconify icon="line-md:loading-twotone-loop" size="26" />
            </div>
          </template>
          <template v-else-if="!projects.length">
            <div class="py-12 text-center text-zinc-400 space-y-4">
              <Iconify icon="mdi:note-remove-outline" size="32" class="inline mx-auto" />
              <p>怎么一个项目都没有？大海的鱼都被你摸没了</p>
            </div>
          </template>
          <ul v-else class="grid grid-cols-4 gap-4">
            <li v-for="project in projects" :key="project.id">
              <div class="border rounded-md p-4">
                <h4 class="text-sm">
                  <span class="text-green-600 transition hover:underline underline-offset-2">
                    {{ project.name }}
                  </span>
                </h4>
                <div class="text-xs my-3 text-zinc-500">{{ project.descript }}</div>
                <p class="text-xs space-x-3 text-zinc-500">
                  <a v-if="project.docLink" :href="project.docLink" class="inline-flex items-center">
                    <span>文档</span>
                  </a>
                  <a v-if="project.protographLink" :href="project.protographLink" class="inline-flex items-center">
                    <span>原型图</span>
                  </a>
                  <a v-if="project.designLink" :href="project.designLink" class="inline-flex items-center">
                    <span>设计图</span>
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <div class="mb-4 space-y-2">
            <h3 class="text-base">账号近期活跃</h3>
            <p class="text-xs text-zinc-500">出书、发布/修改文章、评论、设置</p>
          </div>
          <SiteChartsActive class="h-72" />
        </section>
        <section>
          <h3 class="text-base mb-4">你在本站出过的书</h3>
          <template v-if="bookPending">
            <div class="py-12 flex items-center justify-center">
              <Iconify icon="line-md:loading-twotone-loop" size="26" />
            </div>
          </template>
          <template v-else-if="!projects.length">
            <div class="py-12 text-center text-zinc-400 space-y-4">
              <Iconify icon="mdi:note-remove-outline" size="32" class="inline mx-auto" />
              <p>你今年还没有出过书哦~</p>
            </div>
          </template>
          <ul v-else class="grid grid-cols-4 gap-4">
            <li v-for="book in books" :key="book.id">
              <div class="border rounded-md p-4">
                <h4 class="text-sm">
                  <NuxtLink to="/book/1" class="text-green-600 transition hover:underline underline-offset-2">
                    {{ book.name }}
                  </NuxtLink>
                </h4>
                <div class="text-xs my-3 text-zinc-500">{{ book.descript }}</div>
                <p v-if="book.categorys && book.categorys.length" class="text-xs space-x-3 text-zinc-500">
                  <span v-for="cate in book.categorys" :key="cate.name" class="inline-flex items-center">
                    <em class="w-3 h-3 rounded-full mr-1" :style="{ backgroundColor: getRandomColor() }" />
                    {{ cate.name }}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </ConsoleLayout>
</template>
