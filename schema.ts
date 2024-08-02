import {
  text,
  integer,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

export const LegislationSchema = sqliteTable("legislation", {
  id: integer("id").primaryKey(),
});

export const LegislationVersionSchema = sqliteTable("legislation_version", {
  id: integer("id").primaryKey(),
  aId: integer("a_id"),
  shouldNotEmbedReasons: text("should_not_embed_reasons", { mode: "json" })
    .notNull()
    .$type<Array<string>>(),
});
