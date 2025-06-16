import { expect, test } from '@playwright/experimental-ct-vue';

import Self from './index.vue';

const all = {
  contact: true,
  firebaseAnalytics: true,
  firebaseAuthentication: true,
  firebaseCloudFirestore: true,
  firebaseCloudFunctions: true,
  firebaseCloudStorage: true,
  googleAnalytics: true,
  matomo: true,
  newsletter: true,
  registration: true,
};

test('de', async ({ mount }) => {
  const component = await mount(Self, { props: { config: all, locale: 'de' } });
  await expect(component).toHaveScreenshot();
});

test('en', async ({ mount }) => {
  const component = await mount(Self, { props: { config: all, locale: 'en' } });
  await expect(component).toHaveScreenshot();
});
