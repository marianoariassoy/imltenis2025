import data from "@/data/reglamento_ia.json";
import { normalizar, formatearRespuesta } from "@/lib/chat/utils";

// ----------------------------
// TYPES
// ----------------------------

type ReglamentoItem = {
  title: string;
  content: string;
  keywords: string[];
  examples?: string[];
};

type Regla = {
  title: string;
  content: string;
};

// casteo seguro
const reglamento = data as ReglamentoItem[];

// ----------------------------
// 🧠 MATCH PARCIAL
// ----------------------------

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

// ----------------------------
// 🧠 BUSCADOR PRINCIPAL
// ----------------------------

export function buscarRegla(mensaje: string): Regla | null {
  const msg = normalizar(mensaje);

  let mejorMatch: ReglamentoItem | null = null;
  let mejorScore = 0;

  for (const item of reglamento) {
    let score = 0;

    const titulo = normalizar(item.title);
    if (msg.includes(titulo)) score += 20;

    for (const keyword of item.keywords) {
      const key = normalizar(keyword);

      if (msg.includes(key)) {
        score += key.length * 2;
      } else {
        const ratio = incluyePalabras(msg, key);
        score += ratio * key.length;
      }
    }

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

  if (mejorScore < 10 || !mejorMatch) return null;

  // ✅ CAMBIO CLAVE
  return {
    title: mejorMatch.title,
    content: formatearRespuesta(mejorMatch),
  };
}
