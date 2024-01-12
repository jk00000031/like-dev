<script lang="ts" setup>
const router = useRouter();
const error = useError();
</script>

<template>
  <main class="w-screen h-screen bg-[#f5f5fa]">
    <div class="container mx-auto py-36 flex items-center justify-center">
      <div class="flex items-start space-x-4">
        <img src="/s-black.png" alt="" class="w-12" />
        <div class="space-y-12">
          <div class="space-y-4 text-base">
            <p>{{ error?.message }}</p>
            <p>
              <NButton type="primary" size="small" @click="router.back()">返回上一页</NButton>
            </p>
          </div>
          <p class="flex items-center space-x-2">
            <span class="text-xs text-zinc-500">代码托管 - </span>
            <SiteDepositGitee />
            <SiteDepositGithub />
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
