<script setup lang="ts">
  import { useProjectFilterCurrentYear } from "~/composables/fetch/projects";
  import { useAuthorisationProfile } from "~/composables/state/useAuthorisation";
  import { useLunarCalendar } from "~/composables/utils/date/useLunarCalendar";

  const profile = useAuthorisationProfile();
  const lunar = useLunarCalendar();

  const { data: projects, pending } = await useProjectFilterCurrentYear();

  const books = ref(
    Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: "《阿里云效操作手册》",
      descript: "或许你只是听过阿里，但没用过阿里云旗下的云效平台，没关系！本书带你深入了解该平台以及该平台的业务",
      categorys: [{ name: "操作手册" }, { name: "CVP" }],
    })),
  );

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
</script>

<template>
  <ConsoleLayout>
    <section
      v-if="profile?.profile?.status !== 1"
      class="text-xs text-center bg-amber-100 sticky top-28 z-20 left-0 w-full"
    >
      <div class="container mx-auto py-2">
        <span class="space-x-2">
          <Iconify
            icon="basil:notification-on-outline"
            size="14"
            class="inline align-middle"
          />
          <span>{{
            (
              {
                0: "该账号已封存",
                2: "用户已从原公司离职",
                3: "用户已被原公司辞退",
              } as any
            )[profile?.profile?.status] || "账号状态数据异常"
          }}</span>
        </span>
      </div>
    </section>

    <main class="container mx-auto flex py-8 space-x-10">
      <aside class="w-56 flex-shrink-0">
        <div class="pb-4 mb-4 border-b relative">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center ring-8 ring-zinc-300">
            <img
              :src="profile.avatar"
              alt=""
            />
          </div>
          <SiteProfileMood class="absolute top-24 right-1" />
          <div class="mt-8 text-center">
            <h3 class="text-lg font-sans font-semibold">{{ profile.nickName }}</h3>
            <p class="text-sm text-zinc-500">{{ profile.account }}</p>
          </div>
        </div>
        <div class="space-y-1">
          <NuxtLink
            to="/console/profile"
            class="flex items-center py-2 px-4 rounded-md space-x-1 transition hover:bg-zinc-100"
          >
            <Iconify
              icon="material-symbols-light:lab-profile-outline"
              size="18"
            />
            <span>你的资料</span>
          </NuxtLink>
        </div>
        <div class="mt-4 pt-4 border-t">
          <p class="flex items-center space-x-1">
            <Iconify
              icon="carbon:location-company"
              size="16"
            />
            <span>{{ profile?.profile?.company || "独立开发者" }}</span>
          </p>
        </div>
      </aside>
      <div class="flex-grow space-y-6">
        <section>
          <h3 class="text-base mb-4">今{{ lunar.year }}做了什么项目</h3>
          <ul class="grid grid-cols-4 gap-4">
            <li
              v-for="book in books"
              :key="book.id"
            >
              <div class="border rounded-md p-4">
                <h4 class="text-sm">
                  <NuxtLink
                    to="/book/1"
                    class="text-green-600 transition hover:underline underline-offset-2"
                  >
                    {{ book.name }}
                  </NuxtLink>
                </h4>
                <div class="text-xs my-3 text-zinc-500">{{ book.descript }}</div>
                <p
                  v-if="book.categorys && book.categorys.length"
                  class="text-xs space-x-3 text-zinc-500"
                >
                  <span
                    v-for="cate in book.categorys"
                    :key="cate.name"
                    class="inline-flex items-center"
                  >
                    <em
                      class="w-3 h-3 rounded-full mr-1"
                      :style="{ backgroundColor: getRandomColor() }"
                    ></em>
                    {{ cate.name }}
                  </span>
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
          <ul class="grid grid-cols-4 gap-4">
            <li
              v-for="book in books"
              :key="book.id"
            >
              <div class="border rounded-md p-4">
                <h4 class="text-sm">
                  <NuxtLink
                    to="/book/1"
                    class="text-green-600 transition hover:underline underline-offset-2"
                  >
                    {{ book.name }}
                  </NuxtLink>
                </h4>
                <div class="text-xs my-3 text-zinc-500">{{ book.descript }}</div>
                <p
                  v-if="book.categorys && book.categorys.length"
                  class="text-xs space-x-3 text-zinc-500"
                >
                  <span
                    v-for="cate in book.categorys"
                    :key="cate.name"
                    class="inline-flex items-center"
                  >
                    <em
                      class="w-3 h-3 rounded-full mr-1"
                      :style="{ backgroundColor: getRandomColor() }"
                    ></em>
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
