import general from "@/data/general.json";

// 🔹 normaliza texto (clave)
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function buscarGeneral(mensaje: string) {
  const msg = normalizar(mensaje);

  let mejorMatch = null;
  let mejorScore = 0;

  for (const item of general) {
    let score = 0;

    for (const keyword of item.keywords) {
      const key = normalizar(keyword);

      // 🎯 match flexible
      if (msg.includes(key)) score += 2;
      if (key.includes(msg)) score += 1;
    }

    if (score > mejorScore) {
      mejorScore = score;
      mejorMatch = item;
    }
  }

  // 🔒 mínimo de score para evitar basura
  if (mejorScore < 2) return null;

  return mejorMatch;
}
