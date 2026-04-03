import reglamento from "@/data/reglamento.json";

// 🔹 Normalizar texto
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

// 🔹 Easter egg helper
function getEasterEgg(mensaje: string) {
  const key = normalizar(mensaje).trim();
  return EASTER_EGGS[key] || null;
}

// 🔹 Detectar intención
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
function buscarRegla(reglamento: any[], mensaje: string) {
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

// 🔹 Endpoint
export async function POST(req: Request) {
  try {
    const { mensaje } = await req.json();

    console.log("PREGUNTA:", mensaje);

    // 🧠 1. EASTER EGGS (PRIORIDAD MÁXIMA)
    const egg = getEasterEgg(mensaje);

    if (egg) {
      console.log("EASTER EGG ACTIVADO 🎉");

      return Response.json({
        respuesta: egg,
        titulo: "Chat IML 🤖",
      });
    }

    // 🟡 2. MODO REGLAMENTO
    const regla = buscarRegla(reglamento, mensaje);

    console.log("REGLA USADA:", regla?.title || "NINGUNA");

    if (!regla) {
      const promptLibre = `
Sos un asistente virtual de una liga de tenis llamado Chat IML.

- Respondé de forma breve, clara, natural, concisa y muy amigable
- Máximo 2 oraciones
- Podés responder preguntas generales
- No inventes datos del torneo

Pregunta:
${mensaje}

Respuesta:
`;

      const ollamaRes = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral",
          prompt: promptLibre,
          stream: false,
          options: {
            num_predict: 100,
            temperature: 0.3,
          },
        }),
      });

      const data = await ollamaRes.json();

      return Response.json({
        respuesta:
          data.response ||
          "Soy el asistente de la liga. Podés consultarme sobre el reglamento.",
        titulo: "Asistente",
      });
    }

    // 🟢 3. MODO REGLAMENTO
    const contexto = `${regla.title}\n${regla.text}`;

    const prompt = `
Sos un asistente virtual de una liga de tenis llamado Chat IML.

Respondé usando SOLO este reglamento.

- No inventes nada
- Explicá claro y natural
- Máximo 2 oraciones

Reglamento:
${contexto}

Pregunta:
${mensaje}

Respuesta:
`;

    const ollamaRes = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        prompt,
        stream: false,
        options: {
          num_predict: 150,
          temperature: 0,
        },
      }),
    });

    const data = await ollamaRes.json();

    let respuesta = data.response || regla.text;

    // 🔥 limpieza
    respuesta = respuesta.trim();
    respuesta = respuesta.replace(/(solucion|respuesta|answer)\s*:?\s*/gi, "");
    respuesta = respuesta.replace(/[#*]+/g, "");
    respuesta = respuesta.replace(/\n+/g, " ");

    const partes = respuesta.split(".");
    if (partes.length > 2) {
      respuesta = partes.slice(0, 2).join(".") + ".";
    }

    if (respuesta.length < 30) {
      respuesta = regla.text;
    }

    return Response.json({
      respuesta,
      titulo: regla.title,
      texto_original: regla.text,
    });
  } catch (error) {
    console.error("ERROR EN API:", error);

    return Response.json({
      respuesta: "Error interno del servidor",
    });
  }
}
