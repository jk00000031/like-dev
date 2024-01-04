// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  // 是否启用 Nuxt 官方提供的开发调试工具
  // 开启后在应用下方中间会出现一个徽标，点击则出现工具
  devtools: { enabled: true },

  // 使用 NaiveUI Module 要做的兼容处理，否则会报错并无法使用该 UI 组件库
  // 处理完编译兼容后做项目自动引入
  build: {
    transpile: process.env.NODE_ENV === 'production' ? ['naive-ui', '@css-render/vue3-ssr'] : []
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui'] : []
    },
    plugins: [
      AutoImport({
        imports: [{ 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }]
      }),
      Components({ resolvers: [NaiveUiResolver()] })
    ]
  },

  // 引入 CSS
  css: ['~/assets/fonts/noto-sans-sc/noto-sans-sc.scss', '~/assets/style/global.scss'],

  // 项目中别名
  alias: {
    '@': resolve(__dirname, '/')
  },

  // 是否开启服务端渲染
  // 该配置有利于搜索引擎抓取内容
  ssr: true,

  // Postcss 插件
  // nuxt内置了 postcss 和 tailwindcss，但似乎无法直接使用
  // 所以重新安装了 tailwindcss / postcss / autoprefixer
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // ----
  runtimeConfig: {
    public: {
      projectName: '共享演进'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      meta: [
        { key: 'keyword', content: '共享,共享演进,开发共享,开发者共享,Shared,Shared Evolution,Developer Shared' },
        { key: 'description', content: '快速搭建组织内部私有的技术网站' }
      ],
      title: '分享你我对技术的渴望'
    },
    rootId: 'SharedApp'
  }
});
