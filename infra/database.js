import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: "postgres",
    database: "postgres",
    port: 5432,
    host: "localhost",
    password: "local_password",
    ssl: false,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
