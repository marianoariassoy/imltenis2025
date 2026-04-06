import { detectarIntent } from "./intentEngine";

import {
  buildPromptGeneral,
  buildPromptReglamento,
  buildPromptLibre,
} from "./promptBuilder";

import { buscarGeneral } from "@/domains/general/generalEngine";
import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { categoriasBrain } from "@/domains/categorias/categoriasBrain";
import { buscarRegla } from "@/domains/reglamento/reglamentoEngine";
import { responderPerfil } from "@/domains/profile/profileEngine";

import { limpiarRespuesta, construirHistorial } from "./utils";

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

// 🔌 llamada a IA
async function llamarIA(prompt: string, temperature = 0.2, maxTokens = 200) {
  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
      options: {
        temperature,
        num_predict: maxTokens,
      },
    }),
  });

  const data = await res.json();
  return data.response || "";
}

export async function chatEngine(mensaje: string, historial: Historial[] = []) {
  console.log("PREGUNTA:", mensaje);

  const historialCorto = historial.slice(-6);
  const historialTexto = construirHistorial(historialCorto);

  const intent = detectarIntent(mensaje);
  console.log("INTENT:", intent);

  // ----------------------------
  // 🧍 1. PERFIL
  // ----------------------------
  if (intent === "PERFIL") {
    const perfil = responderPerfil(mensaje);

    if (perfil) {
      return {
        respuesta: perfil,
        titulo: "Sobre mí",
        tipo: "perfil",
      };
    }
  }

  // ----------------------------
  // 🧠 2. CATEGORIAS (BRAIN primero)
  // ----------------------------
  if (intent === "CATEGORIAS") {
    const brain = categoriasBrain(mensaje);

    if (brain) {
      return {
        respuesta: brain.contenido,
        titulo: brain.titulo,
        tipo: "categorias_brain",
      };
    }

    // fallback a listado general
    const categorias = buscarCategorias(mensaje);

    if (categorias) {
      const contexto = `${categorias.titulo}\n${categorias.contenido}`;

      const prompt = buildPromptGeneral(mensaje, historialTexto, contexto);

      const raw = await llamarIA(prompt, 0.2, 180);

      return {
        respuesta: asegurarRespuestaCompleta(
          limpiarRespuesta(raw || categorias.contenido),
        ),
        titulo: categorias.titulo,
        tipo: "categorias",
      };
    }
  }

  // ----------------------------
  // 🟢 3. INFO GENERAL
  // ----------------------------
  if (intent === "GENERAL") {
    const info = buscarGeneral(mensaje);

    if (info) {
      const contexto = `${info.title}\n${info.content}`;

      const prompt = buildPromptGeneral(mensaje, historialTexto, contexto);

      const raw = await llamarIA(prompt, 0.3, 180);

      return {
        respuesta: asegurarRespuestaCompleta(
          limpiarRespuesta(raw || info.content),
        ),
        titulo: info.title,
        tipo: "general",
      };
    }
  }

  // ----------------------------
  // 🔵 4. REGLAMENTO
  // ----------------------------
  if (intent === "REGLAMENTO") {
    const regla = buscarRegla(mensaje);

    if (regla) {
      const contexto = `${regla.title}\n${regla.content}`;

      const prompt = buildPromptReglamento(mensaje, historialTexto, contexto);

      const raw = await llamarIA(prompt, 0.2, 120);

      return {
        respuesta: asegurarRespuestaCompleta(
          limpiarRespuesta(raw || regla.content),
        ),
        titulo: regla.title,
        tipo: "reglamento",
      };
    }
  }

  // ----------------------------
  // 🟣 5. RESULTADOS (FUTURO)
  // ----------------------------
  if (intent === "RESULTADOS") {
    return {
      respuesta: "Todavía no tengo resultados cargados 😄, pero falta poco.",
      titulo: "Resultados",
      tipo: "resultados",
    };
  }

  // ----------------------------
  // 🟣 6. IA LIBRE
  // ----------------------------
  const prompt = buildPromptLibre(mensaje, historialTexto);

  const raw = await llamarIA(prompt, 0.5, 180);

  return {
    respuesta: asegurarRespuestaCompleta(
      limpiarRespuesta(
        raw ||
          "Soy IML Ollama 🤖, el asistente con inteligencia artificial de IML Tenis. Estoy para ayudarte con el torneo, el reglamento y lo que necesites.",
      ),
    ),
    titulo: "Asistente",
    tipo: "libre",
  };
}
