import { openai } from "@/lib/openai/client";

import { detectarIntent } from "./intentEngine";
import { buildPromptReglamento, buildPromptLibre } from "./promptBuilder";

import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { buscarRegla } from "@/domains/reglamento/reglamentoEngine";
import { buscarTorneo } from "@/domains/torneo/torneoEngine";
import { buscarInscripcion } from "@/domains/inscripciones/inscripcionesEngine";
import { buscarFAQ } from "@/domains/faq/faqEngine";

import { limpiarRespuesta, construirHistorial } from "./utils";

// ----------------------------
// TYPES
// ----------------------------

interface Historial {
  role: "user" | "assistant";
  content: string;
}

type ChatResponse = {
  respuesta: string;
  titulo: string;
  tipo:
    | "perfil"
    | "torneo"
    | "inscripciones"
    | "categorias"
    | "categorias_brain"
    | "reglamento"
    | "faq"
    | "libre";
};

// ----------------------------
// HELPERS
// ----------------------------

function asegurarRespuestaCompleta(texto: string) {
  if (!texto) return texto;

  const limpio = texto.trim();
  const ultimo = limpio.slice(-1);

  if (![".", "!", "?", "😄"].includes(ultimo)) {
    return limpio + "...";
  }

  return limpio;
}

async function llamarIA(prompt: string, temperature = 0.2, maxTokens = 120) {
  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    temperature,
    max_tokens: maxTokens,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0]?.message?.content || "";
}

// ----------------------------
// RESPUESTA CON CONTEXTO
// ----------------------------

async function responderConContexto(
  mensaje: string,
  historial: string,
  item: any,
  tipo: ChatResponse["tipo"],
) {
  const contexto = `${item.title}\n${item.content}`;

  const prompt = buildPromptReglamento(mensaje, historial, contexto);

  const raw = await llamarIA(prompt, 0.2, 180);

  return {
    respuesta: asegurarRespuestaCompleta(limpiarRespuesta(raw || item.content)),
    titulo: item.title,
    tipo,
  };
}

// ----------------------------
// MAIN ENGINE
// ----------------------------

export async function chatEngine(
  mensaje: string,
  historial: Historial[] = [],
): Promise<ChatResponse> {
  const historialCorto = historial.slice(-3);
  const historialTexto = construirHistorial(historialCorto);

  const intent = detectarIntent(mensaje);

  console.log("INTENT:", intent);

  // TORNEO
  if (intent === "TORNEO") {
    const torneo = buscarTorneo(mensaje);

    if (torneo) {
      return responderConContexto(mensaje, historialTexto, torneo, "torneo");
    }
  }

  // INSCRIPCIONES
  if (intent === "INSCRIPCIONES") {
    const inscripcion = buscarInscripcion(mensaje);

    if (inscripcion) {
      return responderConContexto(
        mensaje,
        historialTexto,
        inscripcion,
        "inscripciones",
      );
    }
  }

  // CATEGORIAS

  if (intent === "CATEGORIAS") {
    const categorias = buscarCategorias(mensaje);

    if (categorias) {
      return responderConContexto(
        mensaje,
        historialTexto,
        categorias,
        "categorias",
      );
    }
  }

  // REGLAMENTO

  if (intent === "REGLAMENTO") {
    const regla = buscarRegla(mensaje);

    if (regla) {
      return responderConContexto(mensaje, historialTexto, regla, "reglamento");
    }

    return {
      respuesta:
        "No encontré una regla específica 🤔. ¿Podés darme un poco más de detalle?",
      titulo: "Reglamento",
      tipo: "reglamento",
    };
  }

  // FAQ

  if (intent === "FAQ") {
    const faq = buscarFAQ(mensaje);

    if (faq) {
      return responderConContexto(mensaje, historialTexto, faq, "faq");
    }
  }

  // LIBRE

  const prompt = buildPromptLibre(mensaje, historialTexto);

  const raw = await llamarIA(prompt, 0.5, 180);

  return {
    respuesta: asegurarRespuestaCompleta(
      limpiarRespuesta(
        raw || "Soy Chat IML 🤖, el asistente virtual del torneo.",
      ),
    ),

    titulo: "Asistente",
    tipo: "libre",
  };
}
