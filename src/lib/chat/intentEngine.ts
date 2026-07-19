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
    "fair play",

    // Fechas torneo
    "cuando empieza",
    "cuando comienza",
    "cuando arranca",
    "inicio torneo",
    "fecha inicio",
    "primera fecha",
    "cuando termina",
    "fin torneo",
    "fecha finalizacion",
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
    "cerrar inscripcion",
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
    "pelotitas",
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
    "demora",
    "retraso",
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
  // DEBUG
  // ----------------------------

  console.log("\n========== INTENT ENGINE ==========");
  console.log("Mensaje:", msg);
  console.log("Scores:", scores);
  console.log("===================================\n");

  // ----------------------------
  // Prioridades
  // ----------------------------

  if (scores.TORNEO > 0) {
    console.log("Intent elegido: TORNEO");
    return "TORNEO";
  }

  if (scores.INSCRIPCIONES > 0) {
    console.log("Intent elegido: INSCRIPCIONES");
    return "INSCRIPCIONES";
  }

  if (scores.CATEGORIAS > 0) {
    console.log("Intent elegido: CATEGORIAS");
    return "CATEGORIAS";
  }

  if (scores.REGLAMENTO > 0) {
    console.log("Intent elegido: REGLAMENTO");
    return "REGLAMENTO";
  }

  if (scores.FAQ > 0) {
    console.log("Intent elegido: FAQ");
    return "FAQ";
  }

  console.log("Intent elegido: LIBRE");

  return "LIBRE";
}
