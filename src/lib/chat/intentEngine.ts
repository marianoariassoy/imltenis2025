import { normalizar } from "./utils";

export type Intent =
  | "CATEGORIAS"
  | "REGLAMENTO"
  | "RESULTADOS"
  | "PERFIL"
  | "UNKNOWN";

// 🔹 keywords por intent
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
    "puntos",
    "puntaje",
    "empate",
    "desempate",
    "pelotas",
    "resultado",
    "cargar",
    "carga",
    "quien carga",
    "lluvia",
    "clima",
    "suspension",
    "se suspende",
    "reprogramar",
    "tolerancia",
    "llegar tarde",
    "impuntualidad",
    "demora",
    "lista",
    "lista buena fe",
    "jugadores",
    "cuantos jugadores",
    "capitan",
    "responsable",
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
    "formacion",
    "forma",
    "precio",
    "costo",
    "inscripcion",
    "cuanto cuesta",
    "horario",
    "hora",
    "dias",
    "cuando se juega",
    "torneo",
    "iml",
    "que es iml",
    "donde se juega",
    "ubicacion",
    "edad minima",
    "clubes",
    "equipos",
    "cuantos son",
    "informacion",
    "feriados",
    "fin de semana largo",
  ],

  RESULTADOS: ["ranking", "fixture", "tabla", "posiciones"],

  PERFIL: ["sos", "quien sos", "que sos", "tu nombre", "edad tenes"],
};

// 🔥 motor de intent
export function detectarIntent(mensaje: string): Intent {
  const msg = normalizar(mensaje);

  const scores: Record<Intent, number> = {
    CATEGORIAS: 0,
    REGLAMENTO: 0,
    RESULTADOS: 0,
    PERFIL: 0,
    UNKNOWN: 0,
  };

  // 🔹 sumar puntos por keywords
  (Object.keys(KEYWORDS) as Array<keyof typeof KEYWORDS>).forEach((intent) => {
    KEYWORDS[intent].forEach((kw) => {
      if (msg.includes(kw)) {
        scores[intent] += 1;
      }
    });
  });

  // 🔥 BOOST de intención natural (clave para reglamento)
  if (
    msg.includes("que pasa si") ||
    msg.includes("puedo") ||
    msg.includes("se puede")
  ) {
    scores.REGLAMENTO += 2;
  }

  // 🔥 PRIORIDAD REAL (orden importa)
  if (scores.CATEGORIAS > 0) return "CATEGORIAS";
  if (scores.REGLAMENTO > 0) return "REGLAMENTO";
  if (scores.RESULTADOS > 0) return "RESULTADOS";
  if (scores.PERFIL > 0) return "PERFIL";

  return "UNKNOWN";
}
