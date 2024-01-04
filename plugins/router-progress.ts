import { createDiscreteApi } from 'naive-ui';
import type { Router } from 'vue-router';

const { loadingBar } = createDiscreteApi(['loadingBar']);

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    (nuxtApp.$router as Router).beforeEach(() => loadingBar.start());
    (nuxtApp.$router as Router).afterEach(() => loadingBar.finish());
  }
});
