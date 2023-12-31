import type { Config } from 'drizzle-kit';

export default {
  schema: "./src/db/schema.ts",
  out: './src/drizzle/migrations',
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  breakpoints: true,
  verbose: true,
  strict: true,
} satisfies Config;