import ErIcon from './Icon.vue';
import type { App } from 'vue';

ErIcon.install = (app: App) => {
  if (ErIcon.name) {
    app.component(ErIcon.name, ErIcon);
  }
};

export { ErIcon };

export * from './types';