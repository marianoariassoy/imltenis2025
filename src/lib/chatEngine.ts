import reglamento from "@/data/reglamento.json";
import { ReglamentoItem } from "@/types";

type ChatEngineResponse = {
  respuesta: string;
  titulo: string;
  tipo: "easter_egg" | "libre" | "reglamento";
};

// 🔹 Normalizar
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 🔹 Intenciones
const INTENCIONES: Record<string, string[]> = {
  lluvia: ["lluv", "clima"],
  horario: ["hora", "horario", "dia"],
  resultados: ["resultado", "cargar"],
  wo: ["wo", "walkover", "ausencia"],
};

// 🔹 Easter eggs
const EASTER_EGGS: Record<string, string> = {
  hola: "👋 Hola! soy Chat IML. Vengo a ayudarte... o a juzgar tus preguntas 😄",
  "quien sos":
    "Soy el asistente de la liga 🎾. Básicamente un árbitro que nunca duerme.",
  tenis:
    "🎾 deporte donde todos creen que juegan mejor de lo que el ranking dice.",
  reglamento: "📜 Estoy literalmente hecho de eso.",
  lluvia: "🌧️ si llueve, yo también me deprimo un poco.",
  federer: "🐐 palabra legendaria detectada.",
};

// 🔹 Easter egg
function getEasterEgg(mensaje: string) {
  const key = normalizar(mensaje).trim();
  return EASTER_EGGS[key] || null;
}

// 🔹 Intención
function buscarPorIntencion(mensaje: string) {
  const msg = normalizar(mensaje);

  for (const key in INTENCIONES) {
    if (INTENCIONES[key].some((p) => msg.includes(p))) {
      return key;
    }
  }
  return null;
}

// 🔹 Buscar regla
function buscarRegla(reglamento: ReglamentoItem[], mensaje: string) {
  const msg = normalizar(mensaje);

  const intencion = buscarPorIntencion(msg);

  if (intencion) {
    const regla = reglamento.find((r) =>
      normalizar(r.title).includes(intencion),
    );
    if (regla) return regla;
  }

  let mejorMatch = null;
  let scoreMax = 0;

  for (const item of reglamento) {
    const title = normalizar(item.title || "");
    const text = normalizar(item.text || "");

    let score = 0;

    msg.split(" ").forEach((palabra) => {
      if (palabra.length < 3) return;

      if (title.includes(palabra)) score += 5;
      if (text.includes(palabra)) score += 2;
    });

    if (score > scoreMax) {
      scoreMax = score;
      mejorMatch = item;
    }
  }

  if (scoreMax < 3) return null;

  return mejorMatch;
}

// 🔥 FUNCIÓN PRINCIPAL
export async function chatEngine(mensaje: string): Promise<ChatEngineResponse> {
  console.log("PREGUNTA:", mensaje);

  // 🧠 1. Easter eggs
  const egg = getEasterEgg(mensaje);

  if (egg) {
    return {
      respuesta: egg,
      titulo: "Chat IML 🤖",
      tipo: "easter_egg",
    };
  }

  // 🟡 2. Reglamento match
  const regla = buscarRegla(reglamento, mensaje);

  console.log("REGLA USADA:", regla?.title || "NINGUNA");

  // 🟣 3. IA libre
  if (!regla) {
    const promptLibre = `
Sos un asistente virtual de una liga de tenis llamado Chat IML.

- Respondé breve, claro y amigable
- Máximo 2 oraciones

Pregunta:
${mensaje}

Respuesta:
`;

    const res = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        prompt: promptLibre,
        stream: false,
        options: {
          num_predict: 100,
          temperature: 0.3,
          num_ctx: 2048,
        },
      }),
    });

    const data = await res.json();

    return {
      respuesta:
        data.response ||
        "Soy el asistente de la liga. Podés consultarme sobre el reglamento.",
      titulo: "Asistente",
      tipo: "libre",
    };
  }

  // 🟢 4. Reglamento IA
  const contexto = `${regla.title}\n${regla.text}`;

  const prompt = `
Sos un asistente de reglamento de tenis.

Usá SOLO esta info:

${contexto}

Pregunta:
${mensaje}
`;

  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
      options: {
        num_predict: 150,
        temperature: 0,
        num_ctx: 2048,
      },
    }),
  });

  const data = await res.json();

  let respuesta = data.response || regla.text;

  respuesta = respuesta
    .replace(/(solucion|respuesta)/gi, "")
    .replace(/\n+/g, " ")
    .trim();

  return {
    respuesta,
    titulo: regla.title,
    tipo: "reglamento",
  };
}
