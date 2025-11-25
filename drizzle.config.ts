import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './app/(backend)/drizzle',
  schema: './app/(backend)/db/schemas/*',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!
  },
  migrations: {
    table: 'drizzle_migrations'
  }
});
