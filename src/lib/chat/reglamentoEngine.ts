// 🔹 Busqueda de reglas

import reglamento from "@/data/reglamento.json";
import { normalizar } from "./utils";

export function buscarRegla(mensaje: string) {
  const msg = normalizar(mensaje);

  let mejorMatch = null;
  let scoreMax = 0;

  for (const item of reglamento) {
    const title = normalizar(item.title || "");
    const text = normalizar(item.text || "");

    let score = 0;

    msg.split(" ").forEach((palabra) => {
      if (palabra.length < 3) return;

      if (title.includes(palabra)) score += 5;
      if (text.includes(palabra)) score += 2;
    });

    if (score > scoreMax) {
      scoreMax = score;
      mejorMatch = item;
    }
  }

  if (scoreMax < 3) return null;

  return mejorMatch;
}
