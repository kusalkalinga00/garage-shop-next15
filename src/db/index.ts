import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";

// config({
//   path: ".env.local",
// });

const url = process.env.DATABASE_URL;
console.log("check db url ", url);
const sql = neon(url!);

//logger

const db = drizzle(sql, { logger: true });

export { db };
