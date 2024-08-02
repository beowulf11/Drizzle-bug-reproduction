import { Database } from "bun:sqlite";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { LegislationSchema, LegislationVersionSchema } from "./schema";

const sqlite = new Database("./sqlite.db");

export const db = drizzle(sqlite, {
  // logger: true,
});

async function main() {
  console.log(
    await db
      .select({
        // a: LegislationSchema,
        b: LegislationVersionSchema,
      })
      .from(LegislationVersionSchema)
      .innerJoin(
        LegislationSchema,
        eq(LegislationVersionSchema.aId, LegislationSchema.id),
      ),
  );
  console.log("done");

  console.log(
    await db
      .select({
        a: LegislationSchema,
        // b: LegislationVersionSchema,
      })
      .from(LegislationVersionSchema)
      .innerJoin(
        LegislationSchema,
        eq(LegislationVersionSchema.aId, LegislationSchema.id),
      ),
  );
  console.log("done");

  await db
    .select({
      a: LegislationSchema,
      b: LegislationVersionSchema,
    })
    .from(LegislationVersionSchema)
    .innerJoin(
      LegislationSchema,
      eq(LegislationVersionSchema.aId, LegislationSchema.id),
    );
}

main();
