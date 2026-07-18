import { openai } from "@/lib/openai/client";

import { detectarIntent } from "./intentEngine";
import { buildPromptContexto, buildPromptLibre } from "./promptBuilder";

import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { buscarReglamento } from "@/domains/reglamento/reglamentoEngine";
import { buscarTorneo } from "@/domains/torneo/torneoEngine";
import { buscarInscripciones } from "@/domains/inscripciones/inscripcionesEngine";
import { buscarFaq } from "@/domains/faq/faqEngine";

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

  let item = null;
  let tipo: ChatResponse["tipo"] = "libre";

  switch (intent) {
    case "TORNEO":
      item = buscarTorneo(mensaje);
      tipo = "torneo";

      break;

    case "INSCRIPCIONES":
      item = buscarInscripciones(mensaje);
      tipo = "inscripciones";

      break;

    case "CATEGORIAS":
      item = buscarCategorias(mensaje);
      tipo = "categorias";

      break;

    case "REGLAMENTO":
      item = buscarReglamento(mensaje);
      tipo = "reglamento";

      break;

    case "FAQ":
      item = buscarFaq(mensaje);
      tipo = "faq";

      break;
  }

  console.log("RESULTADO ENGINE:");
  console.dir(item, { depth: null });

  if (item) {
    return responderConContexto(mensaje, historialTexto, item, tipo);
  }

  // ----------------------------
  // LIBRE
  // ----------------------------

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
