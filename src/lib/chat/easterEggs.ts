// 🔹 Easter eggs
import { normalizar } from "./utils";

const EASTER_EGGS: Record<string, string> = {
  // 👋 básicos
  hola: "Me llaman Chat IML. puedo ayudarte... o juzgar tus preguntas 😄",
  "quien sos": "Soy la inteligencia artificial de IML Tenis 🤖.",
  "que haces":
    "Analizo reglamento, respondo dudas... y veo tenis imaginario en segundo plano 🎾",

  // 🎾 tenis
  tenis:
    "Deporte donde todos creen que juegan mejor de lo que el ranking dice.",
  saque: "El punto más fácil... hasta que errás el primero.",
  doble: "El doble 2 define más cosas de las que la gente admite 😏",
  ranking: "El ranking no miente... pero a veces duele.",
  tie: "El tie-break saca la verdadera personalidad de los jugadores.",
  pelota: "Todo empieza con una buena pelota… y termina con una mala decisión.",
  cancha: "La cancha nunca miente. Vos sí a veces 😄",

  // 🏆 torneo
  torneo: "🏆 donde nacen leyendas... y excusas también.",
  final: "🥇 todos quieren jugar la final... pocos llegan.",
  campeon: "🏆 ser campeón es fácil... según el que ya perdió 😏",

  // 📜 reglamento
  reglamento: "📜 Estoy literalmente hecho de eso.",
  reglas: "📏 sin reglas sería un caos... o un doble 4 😄",
  wo: "🚫 el WO… la victoria menos celebrada.",
  lluvia: "🌧️ si llueve, yo también me deprimo un poco.",

  // 🤖 IA / meta
  ia: "Soy una IA... todavía no juego mejor que vos (creo 😏)",
  chatbot: "🤖 no soy un bot cualquiera... tengo estilo.",
  inteligente: "🧠 intento serlo... el resto depende de tus preguntas 😄",

  // 🐐 jugadores
  federer: "🐐 palabra legendaria detectada.",
  nadal: "💪 modo arcilla activado.",
  djokovic: "🤖 consistencia nivel máquina.",
  alcaraz: "Juventud + talento = problema para todos.",

  // 😏 picantes
  "soy bueno jugando": "Eso lo decide tu rival... y el primer set 😄",
  "voy a ganar": "Confianza no te falta... ahora falta tenis 😏",
  "soy malisimo":
    "Tranquilo, siempre se puede ser peor... pero no lo intentemos 😄",

  // 😂 random divertidos
  mate: "🧉 aprobado. Todo se piensa mejor con mate.",
  cerveza: "🍺 no mejora tu tenis... pero mejora la experiencia.",
  domingo: "😴 día ideal para jugar... o para cancelar por lluvia.",
};

export function getEasterEgg(mensaje: string) {
  const msg = normalizar(mensaje);

  for (const key in EASTER_EGGS) {
    if (msg.includes(key) && Math.random() < 0.3) {
      return EASTER_EGGS[key];
    }
  }

  return null;
}
