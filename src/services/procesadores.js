import { turso } from "@/turso"

export async function getProcesadores() {
  const { rows } = await turso.execute('SELECT * FROM Procesador_Intel')
  console.log(rows)
}