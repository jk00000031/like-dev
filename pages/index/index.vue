<script setup lang="ts">
import mossPng from '~/assets/images/moss2.png';

const bannerBackground = computed(() => {
  return {
    background: `url(${mossPng}) no-repeat top center`
  };
});
</script>

<template>
  <main>
    <section class="min-h-[640px] h-[calc(100vh-164px)] flex items-center" :style="bannerBackground">
      <div class="container mx-auto text-center">
        <div class="space-y-16 mb-10">
          <h1 class="text-5xl font-semibold">更方便的查找项目相关</h1>
          <p class="text-3xl flex items-center justify-center space-x-4 text-zinc-300">
            <span class="text-blue-500">文档</span>
            <span>/</span>
            <span class="text-teal-500">原型</span>
            <span>/</span>
            <span class="text-rose-500">设计图</span>
          </p>
        </div>
        <div class="space-y-4">
          <p class="text-sm">解放浏览器标签，不再占用你私人收藏领地</p>
          <p>
            <DsButtonLink to="/console/accounts/login" type="primary" class="w-40">
              <span>开始使用</span>
              <Iconify icon="uiw:swap-right" size="18" />
            </DsButtonLink>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
