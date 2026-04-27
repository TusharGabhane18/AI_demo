import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    actionTimeout: 0,
    navigationTimeout: 30_000,
    baseURL: 'https://example.com',
    trace: 'on-first-retry',
  },
  projects: 
  [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  //   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  //   { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});