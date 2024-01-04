<script setup lang="ts">
import { createDiscreteApi } from 'naive-ui';

const route = useRoute();
const router = useRouter();
const { dialog } = createDiscreteApi(['dialog']);
if (route.params.uid) {
  if (/(undefined|null)/.test(route.params.uid as any)) {
    dialog.error({
      content: `参数错误，无法获取用户信息`,
      positiveText: '我知道了'
    });
    router.back();
  }
} else {
  dialog.error({
    content: '请提供获取用户信息的凭证',
    positiveText: '我知道了'
  });
  router.back();
}
</script>

<template>
  <div>必须要有用户ID</div>
</template>
