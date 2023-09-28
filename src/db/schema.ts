import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pokemon = sqliteTable('pokemon', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  image: text('image').notNull()
});
export type Pokemon = typeof pokemon.$inferSelect;
export type InsertPokemon = typeof pokemon.$inferInsert;
