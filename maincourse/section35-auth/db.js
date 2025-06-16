import PG from "pg";
import environment from "dotenv";

environment.config();

const db = new PG.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_NAME,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

export default db;
