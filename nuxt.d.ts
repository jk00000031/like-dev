import { INSTALLED_KEY } from './components/dev/make';

declare module 'vue' {
  interface App {
    [INSTALLED_KEY]: boolean;
  }
}

declare module 'chinese-lunar-calendar';
