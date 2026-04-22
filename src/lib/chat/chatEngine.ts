import { detectarIntent } from "./intentEngine";
import { buildPromptReglamento, buildPromptLibre } from "./promptBuilder";

import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { categoriasBrain } from "@/domains/categorias/categoriasBrain";
import { buscarRegla } from "@/domains/reglamento/reglamentoEngine";
import { responderPerfil } from "@/domains/profile/profileEngine";
import { resolverConsultaTorneo } from "@/domains/torneo/torneoEngine";

import { limpiarRespuesta, construirHistorial } from "./utils";

// ----------------------------
// TYPES
// ----------------------------

interface Historial {
  role: "user" | "assistant";
  content: string;
}

type Regla = {
  title: string;
  content: string;
};

type ChatResponse = {
  respuesta: string;
  titulo: string;
  tipo:
    | "perfil"
    | "categorias"
    | "categorias_brain"
    | "reglamento"
    | "torneo"
    | "resultados"
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

async function llamarIA(
  prompt: string,
  temperature = 0.2,
  maxTokens = 200,
): Promise<string> {
  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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

  const data: { response?: string } = await res.json();

  return data.response || "";
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

  // ----------------------------
  // 1. PERFIL
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
  // 2. CATEGORIAS
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

    const categorias = buscarCategorias(mensaje);

    if (categorias) {
      const contexto = `${categorias.titulo}\n${categorias.contenido}`;

      const prompt = buildPromptReglamento(mensaje, historialTexto, contexto);

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
  // 3. REGLAMENTO
  // ----------------------------
  if (intent === "REGLAMENTO") {
    const regla: Regla | null = buscarRegla(mensaje);

    if (regla) {
      const contexto = `${regla.title}\n${regla.content}`;

      const prompt = buildPromptReglamento(mensaje, historialTexto, contexto);

      const raw = await llamarIA(prompt, 0.2, 120);

      return {
        respuesta: asegurarRespuestaCompleta(
          limpiarRespuesta(raw || regla.content),
        ),
        titulo: `🎾 ${regla.title}`,
        tipo: "reglamento",
      };
    }

    return {
      respuesta:
        "No encontré una regla específica 🤔. ¿Podés darme un poco más de detalle?",
      titulo: "Reglamento",
      tipo: "reglamento",
    };
  }

  // ----------------------------
  // 4. DATOS DEL TORNEO
  // ----------------------------
  if (intent === "DATOS_TORNEO") {
    const datos = await resolverConsultaTorneo(mensaje);

    if (datos) {
      const prompt = `
Sos Chat IML.

Respondé de forma breve, clara y natural usando solamente estos datos.

Datos:
${JSON.stringify(datos)}

Pregunta:
${mensaje}

Respuesta:
`;

      const raw = await llamarIA(prompt, 0.2, 120);

      return {
        respuesta: asegurarRespuestaCompleta(limpiarRespuesta(raw)),
        titulo: "Torneo",
        tipo: "torneo",
      };
    }

    return {
      respuesta: "No pude encontrar esa información del torneo por ahora.",
      titulo: "Torneo",
      tipo: "torneo",
    };
  }

  // ----------------------------
  // 5. IA LIBRE
  // ----------------------------
  const prompt = buildPromptLibre(mensaje, historialTexto);

  const raw = await llamarIA(prompt, 0.5, 180);

  return {
    respuesta: asegurarRespuestaCompleta(
      limpiarRespuesta(
        raw ||
          "Soy Chat IML 🤖, el asistente virtual del torneo. Estoy para ayudarte con lo que necesites.",
      ),
    ),
    titulo: "Asistente",
    tipo: "libre",
  };
}
