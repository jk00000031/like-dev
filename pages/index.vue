<script setup lang="ts">
  import linesPng from "~/assets/images/lines.png";

  const bannerBackground = computed(() => {
    return {
      background: `url(${linesPng}) no-repeat center 100%`,
    };
  });
</script>

<template>
  <main>
    <section
      class="min-h-[640px] h-[calc(100vh-164px)] flex items-center border-t"
      :style="bannerBackground"
    >
      <div class="container mx-auto -translate-y-10">
        <div class="space-y-4 mb-10">
          <h1 class="text-5xl font-semibold">更方便的查找项目相关</h1>
          <p class="text-3xl flex items-center space-x-4 text-zinc-300">
            <span class="text-blue-500">文档</span>
            <span>/</span>
            <span class="text-teal-500">原型</span>
            <span>/</span>
            <span class="text-rose-500">设计图</span>
          </p>
        </div>
        <div class="space-y-4">
          <p class="text-lg">解放浏览器标签，不再占用你私人收藏领地</p>
          <p>
            <NButton
              type="primary"
              size="large"
              class="px-8"
              >开始使用</NButton
            >
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
