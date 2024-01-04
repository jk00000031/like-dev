<script lang="ts" setup>
  const router = useRouter();
  const error = useError();
</script>

<template>
  <main class="w-screen h-screen bg-slate-100 text-zinc-500">
    <div class="container mx-auto py-36 flex items-center justify-center">
      <div class="flex items-start space-x-4">
        <Iconify
          icon="fluent:cloud-error-24-regular"
          size="81"
          class="inline"
        />
        <div class="space-y-4 py-2">
          <h1 class="text-6xl font-sans">{{ error?.statusCode }}</h1>
          <p>{{ error?.message }}</p>
          <p>
            <NButton
              type="primary"
              quaternary
              @click="router.back()"
              >返回上一页</NButton
            >
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
