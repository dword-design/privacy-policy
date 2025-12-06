import type { App } from 'vue';

import component from './src/index.vue';

component.install = (app: App) => app.component('PrivacyPolicy', component);

if (typeof globalThis !== 'undefined') {
  (globalThis as Record<string, unknown>).PrivacyPolicy = component;
}

export default component;