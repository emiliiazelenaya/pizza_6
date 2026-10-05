// db/schema.ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  name: text("name").notNull(),
  description: text("description").notNull(),

  price: integer("price").notNull(),

  image: text("image").notNull(), 

  category: text("category").notNull().default("pizza"),

  isNew: integer("is_new", { mode: "boolean" }).notNull().default(false),

  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
});