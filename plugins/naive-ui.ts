import { setup } from '@css-render/vue3-ssr';
// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp);
    const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.renderMeta = () => {
      if (!originalRenderMeta) {
        return {
          headTags: collect()
        };
      }
      const originalMeta = originalRenderMeta();
      if ('then' in originalMeta) {
        return originalMeta.then((resolvedOriginalMeta: { [x: string]: string }) => {
          return {
            ...resolvedOriginalMeta,
            headTags: resolvedOriginalMeta['headTags'] + collect()
          };
        });
      } else {
        return {
          ...originalMeta,
          headTags: originalMeta['headTags'] + collect()
        };
      }
    };
  }
});
