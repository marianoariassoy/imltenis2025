import { normalizar } from "./utils";

export type KnowledgeItem = {
  id?: string;
  title: string;
  content: string;
  keywords: string[];
  examples?: string[];
};

function incluyePalabras(msg: string, texto: string) {
  const palabras = texto.split(" ");
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
): KnowledgeItem | null {
  const msg = normalizar(mensaje);

  let mejorMatch: KnowledgeItem | null = null;
  let mejorScore = 0;

  for (const item of fuente) {
    let score = 0;

    // título
    const titulo = normalizar(item.title);

    if (msg.includes(titulo)) {
      score += 20;
    }

    // keywords
    for (const keyword of item.keywords) {
      const key = normalizar(keyword);

      if (msg.includes(key)) {
        score += key.length * 2;
      } else {
        const ratio = incluyePalabras(msg, key);

        score += ratio * key.length;
      }
    }

    // ejemplos
    if (item.examples) {
      for (const example of item.examples) {
        const ex = normalizar(example);

        if (msg.includes(ex)) {
          score += ex.length;
        } else {
          const ratio = incluyePalabras(msg, ex);

          score += ratio * (ex.length * 0.5);
        }
      }
    }

    if (score > mejorScore) {
      mejorScore = score;
      mejorMatch = item;
    }
  }

  // mínimo de coincidencia
  if (mejorScore < 10) {
    return null;
  }

  return mejorMatch;
}
