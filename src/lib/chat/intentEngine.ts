import { normalizar } from "./utils";

export type Intent = "CATEGORIAS" | "REGLAMENTO" | "PERFIL" | "UNKNOWN";

// ----------------------------
// KEYWORDS
// ----------------------------

const KEYWORDS = {
  CATEGORIAS: [
    "categorias",
    "categoria",
    "nivel",
    "niveles",
    "que puedo jugar",
    "edad",
    "+30",
    "+40",
    "damas",
    "caballeros",
    "mixto",
  ],

  REGLAMENTO: [
    "wo",
    "walkover",
    "empate",
    "desempate",
    "pelotas",
    "cargar resultado",
    "quien carga",
    "lluvia",
    "suspension",
    "reprogramar",
    "tolerancia",
    "llegar tarde",
    "lista buena fe",
    "cuantos jugadores",
    "capitan",
    "playoffs",
    "clasificar",
    "ascenso",
    "descenso",
    "reglamento",
    "regla",
    "como funciona",
    "que pasa si",
    "puedo",
    "se puede",
    "precio",
    "inscripcion",
    "cuanto cuesta",
    "edad minima",
  ],

  PERFIL: ["sos", "quien sos", "que sos", "tu nombre", "edad tenes"],
};

// ----------------------------
// MOTOR
// ----------------------------

export function detectarIntent(mensaje: string): Intent {
  const msg = normalizar(mensaje);

  const scores: Record<Intent, number> = {
    CATEGORIAS: 0,
    REGLAMENTO: 0,
    PERFIL: 0,
    UNKNOWN: 0,
  };

  // sumar coincidencias
  (Object.keys(KEYWORDS) as Array<keyof typeof KEYWORDS>).forEach((intent) => {
    KEYWORDS[intent].forEach((kw) => {
      if (msg.includes(kw)) {
        scores[intent] += 1;
      }
    });
  });

  // boost natural reglamento
  if (
    msg.includes("que pasa si") ||
    msg.includes("puedo") ||
    msg.includes("se puede")
  ) {
    scores.REGLAMENTO += 2;
  }

  // prioridad
  if (scores.CATEGORIAS > 0) return "CATEGORIAS";
  if (scores.REGLAMENTO > 0) return "REGLAMENTO";
  if (scores.PERFIL > 0) return "PERFIL";

  return "UNKNOWN";
}
