import { getEasterEgg } from "./easterEggs";
import { buscarRegla } from "./reglamentoEngine";
import { limpiarRespuesta, construirHistorial } from "./utils";
import { buildPromptLibre, buildPromptReglamento } from "./promptBuilder";

interface Historial {
  role: "user" | "assistant";
  content: string;
}

export async function chatEngine(mensaje: string, historial: Historial[] = []) {
  console.log("PREGUNTA:", mensaje);

  const historialCorto = historial.slice(-6);
  const historialTexto = construirHistorial(historialCorto);

  // 🧠 Easter egg
  const egg = getEasterEgg(mensaje);
  if (egg) {
    return {
      respuesta: egg,
      titulo: "Chat IML 🤖",
      tipo: "easter_egg",
    };
  }

  // 🔎 Buscar regla
  const regla = buscarRegla(mensaje);

  // 🟣 Libre
  if (!regla) {
    const prompt = buildPromptLibre(mensaje, historialTexto);

    const res = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        prompt,
        stream: false,
      }),
    });

    const data = await res.json();

    return {
      respuesta: limpiarRespuesta(data.response || ""),
      titulo: "Asistente",
      tipo: "libre",
    };
  }

  // 🟢 Reglamento
  const contexto = `${regla.title}\n${regla.text}`;
  const prompt = buildPromptReglamento(mensaje, historialTexto, contexto);

  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });

  const data = await res.json();

  return {
    respuesta: limpiarRespuesta(data.response || regla.text),
    titulo: regla.title,
    tipo: "reglamento",
  };
}
