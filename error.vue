<script lang="ts" setup>
  import DefaultLayout from "./layouts/default.vue";

  const router = useRouter();
  const error = useError();
</script>

<template>
  <DefaultLayout>
    <section class="container mx-auto py-20 flex items-center justify-center">
      <div class="flex items-start space-x-4">
        <Iconify
          icon="fluent:cloud-error-24-regular"
          size="98"
          class="inline"
        />
        <div class="space-y-2 py-3">
          <h1 class="text-5xl font-sans">{{ error?.statusCode }}</h1>
          <p>{{ error?.message }}</p>
          <p>
            <NButton
              type="primary"
              @click="router.back()"
              >返回上一页</NButton
            >
          </p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
