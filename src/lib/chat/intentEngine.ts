import { normalizar } from "./utils";

export type Intent =
  | "TORNEO"
  | "INSCRIPCIONES"
  | "CATEGORIAS"
  | "REGLAMENTO"
  | "FAQ"
  | "LIBRE";

// ----------------------------
// KEYWORDS
// ----------------------------

const KEYWORDS = {
  TORNEO: [
    "iml",
    "torneo",
    "liga",
    "interclubes",
    "clubes",
    "equipos",
    "jugadores",
    "historia",
    "cuando se creo",
    "que es iml",
    "presentacion",
    "zonas",
    "donde se juega",
    "cuando empieza",
    "cuando termina",
  ],

  INSCRIPCIONES: [
    "inscripcion",
    "inscribirse",
    "anotar equipo",
    "participar",
    "costo",
    "precio",
    "valor",
    "cuanto sale",
    "cuanto cuesta",
    "fecha limite",
    "cierre inscripciones",
  ],

  CATEGORIAS: [
    "categoria",
    "categorias",
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
    "resultado",
    "cargar resultado",
    "lluvia",
    "suspension",
    "reprogramar",
    "tolerancia",
    "llegar tarde",
    "lista buena fe",
    "capitan",
    "playoffs",
    "clasificar",
    "reglamento",
    "regla",
    "como funciona",
    "que pasa si",
    "se puede",
  ],

  FAQ: ["contacto", "whatsapp", "ayuda", "coordinador", "consulta"],
};

// ----------------------------
// MOTOR
// ----------------------------

export function detectarIntent(mensaje: string): Intent {
  const msg = normalizar(mensaje);

  const scores: Record<Intent, number> = {
    TORNEO: 0,
    INSCRIPCIONES: 0,
    CATEGORIAS: 0,
    REGLAMENTO: 0,
    FAQ: 0,
    LIBRE: 0,
  };

  for (const intent of Object.keys(KEYWORDS) as Array<keyof typeof KEYWORDS>) {
    KEYWORDS[intent].forEach((keyword) => {
      if (msg.includes(normalizar(keyword))) {
        scores[intent]++;
      }
    });
  }

  // ----------------------------
  // Prioridades
  // ----------------------------

  if (scores.INSCRIPCIONES > 0) return "INSCRIPCIONES";

  if (scores.CATEGORIAS > 0) return "CATEGORIAS";

  if (scores.REGLAMENTO > 0) return "REGLAMENTO";

  if (scores.TORNEO > 0) return "TORNEO";

  if (scores.FAQ > 0) return "FAQ";

  return "LIBRE";
}
