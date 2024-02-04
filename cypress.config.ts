import { defineConfig } from 'cypress';
import 'dotenv/config';

const ROOT_URL: string = process.env.ROOT_URL;

if (!ROOT_URL) {
  throw new Error('Please configure Root URL in your environment');
}

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: ROOT_URL,
  },
});
