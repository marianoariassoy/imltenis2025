import { openai } from "@/lib/openai/client";

import { detectarIntent } from "./intentEngine";
import { buildPromptContexto, buildPromptLibre } from "./promptBuilder";

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
    | "torneo"
    | "inscripciones"
    | "categorias"
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
    model: "gpt-4o-mini",
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

  console.log("\n====================================");
  console.log("TIPO:", tipo);
  console.log("MENSAJE:", mensaje);

  console.log("\nITEM ENCONTRADO:");
  console.dir(item, { depth: null });

  console.log("\nCONTEXTO:");
  console.log(contexto);

  const prompt = buildPromptContexto(mensaje, historial, contexto);

  console.log("\nPROMPT:");
  console.log(prompt);

  const raw = await llamarIA(prompt, 0.2, 180);

  console.log("\nRESPUESTA GPT:");
  console.log(raw);

  console.log("====================================\n");

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

  console.log("\n==============================");
  console.log("INTENT:", intent);
  console.log("MENSAJE:", mensaje);
  console.log("==============================");

  // TORNEO
  if (intent === "TORNEO") {
    const torneo = buscarTorneo(mensaje);

    console.log("RESULTADO buscarTorneo:");
    console.dir(torneo, { depth: null });

    if (torneo) {
      return responderConContexto(mensaje, historialTexto, torneo, "torneo");
    }
  }

  // INSCRIPCIONES
  if (intent === "INSCRIPCIONES") {
    const inscripcion = buscarInscripcion(mensaje);

    console.log("RESULTADO buscarInscripcion:");
    console.dir(inscripcion, { depth: null });

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

    console.log("RESULTADO buscarCategorias:");
    console.dir(categorias, { depth: null });

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

    console.log("RESULTADO buscarRegla:");
    console.dir(regla, { depth: null });

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

    console.log("RESULTADO buscarFAQ:");
    console.dir(faq, { depth: null });

    if (faq) {
      return responderConContexto(mensaje, historialTexto, faq, "faq");
    }
  }

  // LIBRE

  console.log("SIN CONTEXTO - IA LIBRE");

  const prompt = buildPromptLibre(mensaje, historialTexto);

  console.log("\nPROMPT LIBRE:");
  console.log(prompt);

  const raw = await llamarIA(prompt, 0.5, 180);

  console.log("\nRESPUESTA GPT:");
  console.log(raw);

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
