import knowledge from "@/data/knowledge.json";

// 🔹 Normalizar texto
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 🔹 Buscar en knowledge
export function buscarKnowledge(mensaje: string) {
  const msg = normalizar(mensaje);

  let mejorMatch = null;
  let scoreMax = 0;

  for (const item of knowledge) {
    let score = 0;

    // 🟡 1. Keywords (lo más importante)
    if (item.keywords) {
      for (const kw of item.keywords) {
        if (msg.includes(normalizar(kw))) {
          score += 5;
        }
      }
    }

    // 🔵 2. Title
    const title = normalizar(item.title);
    if (msg.includes(title)) {
      score += 8;
    }

    // 🟣 3. Palabras sueltas en content
    const content = normalizar(item.content);

    msg.split(" ").forEach((palabra) => {
      if (palabra.length < 3) return;

      if (title.includes(palabra)) score += 4;
      if (content.includes(palabra)) score += 2;
    });

    // 🔥 Guardar mejor match
    if (score > scoreMax) {
      scoreMax = score;
      mejorMatch = item;
    }
  }

  // 🧱 Filtro mínimo (evita respuestas falopa)
  if (scoreMax < 4) return null;

  return mejorMatch;
}
