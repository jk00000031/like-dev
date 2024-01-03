<script setup lang="ts">
  const profile = ref({
    avatar: "https://picsum.photos/128/128",
    nickName: "开发者日记",
    account: "D10000000001",
  });

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
    <main class="container mx-auto flex py-8 space-x-10">
      <aside class="w-48 flex-shrink-0">
        <div class="pb-4 mb-4 border-b relative">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center ring-8 ring-zinc-300">
            <img
              :src="profile.avatar"
              alt=""
            />
          </div>
          <SiteProfileMood class="absolute top-24 right-1 z-10" />
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
            <span>南兴装备股份有限公司</span>
          </p>
        </div>
      </aside>
      <div class="flex-grow space-y-6">
        <section>
          <h3 class="text-lg mb-4">你在本站出过的书</h3>
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
