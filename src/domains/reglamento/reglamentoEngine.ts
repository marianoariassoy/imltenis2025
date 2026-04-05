import data from "@/data/reglamento_ia.json";

// ----------------------------
// TYPES
// ----------------------------

type ReglamentoItem = {
  title: string;
  content: string;
  keywords: string[];
};

// casteo seguro
const reglamento = data as ReglamentoItem[];

// ----------------------------
// 🔍 NORMALIZADOR
// ----------------------------

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD") // elimina tildes
    .replace(/[\u0300-\u036f]/g, "");
}

// ----------------------------
// 🧠 BUSCADOR PRINCIPAL
// ----------------------------

export function buscarRegla(mensaje: string): ReglamentoItem | null {
  const msg = normalizar(mensaje);

  let mejorMatch: ReglamentoItem | null = null;
  let mejorScore = 0;

  for (const item of reglamento) {
    let score = 0;

    for (const keyword of item.keywords) {
      const key = normalizar(keyword);

      if (msg.includes(key)) {
        score += key.length; // peso simple
      }
    }

    if (score > mejorScore) {
      mejorScore = score;
      mejorMatch = item;
    }
  }

  // umbral mínimo para evitar matches basura
  if (mejorScore < 3) return null;

  return mejorMatch;
}
