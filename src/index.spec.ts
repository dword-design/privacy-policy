import Self from './index.vue';
import { test, expect } from '@playwright/experimental-ct-vue';

const all = {
  contact: true,
  firebaseAnalytics: true,
  firebaseAuthentication: true,
  firebaseCloudFirestore: true,
  firebaseCloudFunctions: true,
  firebaseCloudStorage: true,
  googleAnalytics: true,
  newsletter: true,
  registration: true,
};

test('de', async ({ mount }) => {
  const component = await mount(Self, { props: all });
  await expect(component).toContainText('foo');
});

test('en', async ({ mount }) => {
  const component = await mount(Self, { props: all });
  await expect(component).toContainText('foo');
});
