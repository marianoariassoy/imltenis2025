import { normalizar } from "./utils";

export type Intent =
  | "CATEGORIAS"
  | "REGLAMENTO"
  | "DATOS_TORNEO"
  | "PERFIL"
  | "UNKNOWN";

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

  DATOS_TORNEO: [
    "fixture",
    "partido",
    "partidos",
    "resultado",
    "resultados",
    "tabla",
    "posiciones",
    "puntos",
    "cuando juega",
    "proximo partido",
    "contra quien juega",
    "como salio",
    "como salió",
    "ultimo partido",
    "último partido",
    "ranking",
    "fair play",
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
    DATOS_TORNEO: 0,
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

  // boost consultas deportivas
  if (
    msg.includes("cuando juega") ||
    msg.includes("como salio") ||
    msg.includes("tabla")
  ) {
    scores.DATOS_TORNEO += 2;
  }

  // prioridad
  if (scores.CATEGORIAS > 0) return "CATEGORIAS";
  if (scores.REGLAMENTO > 0) return "REGLAMENTO";
  if (scores.DATOS_TORNEO > 0) return "DATOS_TORNEO";
  if (scores.PERFIL > 0) return "PERFIL";

  return "UNKNOWN";
}
