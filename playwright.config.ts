import { defineConfig } from '@playwright/experimental-ct-vue';

export default defineConfig({
  fullyParallel: true,

  preserveOutput: 'failures-only',

  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
});
