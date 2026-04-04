import { getEasterEgg } from "./easterEggs";
import { buscarKnowledge } from "./knowledgeEngine";
import { responderPerfil } from "./profileEngine";
import { limpiarRespuesta, construirHistorial } from "./utils";
import { buildPromptLibre, buildPromptReglamento } from "./promptBuilder";

interface Historial {
  role: "user" | "assistant";
  content: string;
}

// 🔧 Evita respuestas cortadas
function asegurarRespuestaCompleta(texto: string) {
  if (!texto) return texto;

  const limpio = texto.trim();
  const ultimo = limpio.slice(-1);

  if (![".", "!", "?", "😄"].includes(ultimo)) {
    return limpio + "...";
  }

  return limpio;
}

export async function chatEngine(mensaje: string, historial: Historial[] = []) {
  console.log("PREGUNTA:", mensaje);

  const historialCorto = historial.slice(-6);
  const historialTexto = construirHistorial(historialCorto);

  // 🧍 0. PERFIL (preguntas humanas)
  const perfil = responderPerfil(mensaje);
  if (perfil) {
    return {
      respuesta: perfil,
      titulo: "Sobre mí",
      tipo: "perfil",
    };
  }

  // 🔎 1. KNOWLEDGE (reglamento + info torneo)
  const info = buscarKnowledge(mensaje);

  if (info) {
    const contexto = `${info.title}\n${info.content}`;

    const prompt = buildPromptReglamento(mensaje, historialTexto, contexto);

    const res = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        prompt,
        stream: false,
        options: {
          temperature: 0.2,
          num_predict: 200,
        },
      }),
    });

    const data = await res.json();

    const base = asegurarRespuestaCompleta(
      limpiarRespuesta(data.response || info.content),
    );

    // 🎲 Easter egg como remate (25%)
    const egg = getEasterEgg(mensaje);
    const respuestaFinal =
      egg && Math.random() < 0.25 ? `${base}\n\n${egg}` : base;

    return {
      respuesta: respuestaFinal,
      titulo: info.title,
      tipo: "knowledge",
    };
  }

  // 🟣 2. IA LIBRE (fallback)
  const prompt = buildPromptLibre(mensaje, historialTexto);

  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
      options: {
        temperature: 0.5,
        num_predict: 200,
      },
    }),
  });

  const data = await res.json();

  const base = asegurarRespuestaCompleta(
    limpiarRespuesta(
      data.response ||
        "Soy IML Chat 😄, la inteligencia artificial de IML Tenis. Probá preguntarme algo del torneo.",
    ),
  );

  // 🎲 Easter egg también en libre
  const egg = getEasterEgg(mensaje);
  const respuestaFinal =
    egg && Math.random() < 0.25 ? `${base}\n\n${egg}` : base;

  return {
    respuesta: respuestaFinal,
    titulo: "Asistente",
    tipo: "libre",
  };
}
