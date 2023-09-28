import { db } from "../db"
import { pokemon } from "../db/schema"

export default async () => {
  const result = await db.select().from(pokemon).all();
  return JSON.stringify(result);
}