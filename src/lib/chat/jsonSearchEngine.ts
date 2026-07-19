import { normalizar } from "./utils";

export type KnowledgeItem = {
  id?: string;
  title: string;
  content: string;
  keywords: string[];
  examples?: string[];
};

function obtenerPalabras(texto: string) {
  return texto.split(" ").filter((p) => p.length > 3);
}

function incluyePalabras(msg: string, texto: string) {
  const palabras = obtenerPalabras(texto);

  if (palabras.length === 0) return 0;

  let matches = 0;

  for (const palabra of palabras) {
    if (msg.includes(palabra)) {
      matches++;
    }
  }

  return matches / palabras.length;
}

export function buscarEnFuente(
  mensaje: string,
  fuente: KnowledgeItem[],
): { item: KnowledgeItem; score: number } | null {
  const msg = normalizar(mensaje);

  let mejorMatch: KnowledgeItem | null = null;
  let mejorScore = 0;

  for (const item of fuente) {
    let score = 0;

    // =========================
    // TÍTULO
    // =========================

    const titulo = normalizar(item.title);

    if (msg.includes(titulo)) {
      score += 25;
    } else {
      const ratio = incluyePalabras(msg, titulo);

      score += ratio * 10;
    }

    // =========================
    // KEYWORDS
    // =========================

    for (const keyword of item.keywords ?? []) {
      const key = normalizar(keyword);

      // coincidencia exacta
      if (msg.includes(key)) {
        score += key.length * 3;
      } else {
        const ratio = incluyePalabras(msg, key);

        score += ratio * key.length;
      }
    }

    // =========================
    // EJEMPLOS
    // =========================

    if (item.examples) {
      for (const example of item.examples ?? []) {
        const ex = normalizar(example);

        if (msg.includes(ex)) {
          score += ex.length * 2;
        } else {
          const ratio = incluyePalabras(msg, ex);

          score += ratio * ex.length;
        }
      }
    }

    console.log(item.title, "->", score);

    if (score > mejorScore) {
      mejorScore = score;
      mejorMatch = item;
    }
  }

  // mínimo de confianza

  if (!mejorMatch || mejorScore < 10) {
    console.log("Sin coincidencias suficientes. Mejor score:", mejorScore);
    return null;
  }

  console.log(`Mejor coincidencia: ${mejorMatch.title} (score: ${mejorScore})`);

  return {
    item: mejorMatch,
    score: mejorScore,
  };
}
