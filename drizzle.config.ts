import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./schema.ts",
  out: "./drizzle",
  verbose: true,
  dbCredentials: {
      url: 'sqlite.db'
  },
});


