import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.DATABASE_URL,
  authToken: import.meta.env.DATABASE_AUTH_TOKEN,
});

export async function getProcesadores() {
  const data = await turso.execute("SELECT * FROM Procesadores")
  console.log(data)
  return data.rows
}