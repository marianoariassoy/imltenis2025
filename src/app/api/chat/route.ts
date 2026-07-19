import { checkRateLimit } from "@/lib/chat/rateLimiter";
import { detectarIntent } from "@/lib/chat/intentEngine";
import { buscarTorneo } from "@/domains/torneo/torneoEngine";
import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { buscarReglamento } from "@/domains/reglamento/reglamentoEngine";
import { buscarInscripciones } from "@/domains/inscripciones/inscripcionesEngine";
import { buscarFaq } from "@/domains/faq/faqEngine";
import OpenAI from "openai";

type HistorialItem = {
  role: "user" | "assistant";
  content: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function esPreguntaDeSeguimiento(texto: string) {
  const t = texto.trim().toLowerCase();

  return (
    t.startsWith("y ") ||
    t.startsWith("¿y") ||
    t.startsWith("tambien") ||
    t.startsWith("también") ||
    t.startsWith("eso") ||
    t.startsWith("esa") ||
    t.startsWith("ese") ||
    t.startsWith("estas") ||
    t.startsWith("estos") ||
    t.startsWith("esas") ||
    t.startsWith("aquello") ||
    t.startsWith("entonces") ||
    t.startsWith("hasta cuando") ||
    t.startsWith("hasta cuándo") ||
    t.startsWith("donde") ||
    t.startsWith("dónde") ||
    t.startsWith("cuando") ||
    t.startsWith("cuándo") ||
    t.startsWith("como") ||
    t.startsWith("cómo")
  );
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

    const limit = checkRateLimit(ip);

    if (!limit.allowed) {
      return Response.json(
        {
          error: "Demasiadas consultas. Intentá nuevamente más tarde.",
        },
        {
          status: 429,
        },
      );
    }

    const body = await req.json();

    const { mensaje, historial } = body;

    // ----------------------------
    // VALIDACIÓN DEL MENSAJE
    // ----------------------------

    const texto = (mensaje ?? "").trim();

    if (texto.length === 0) {
      return Response.json(
        {
          error: "La consulta está vacía.",
        },
        {
          status: 400,
        },
      );
    }

    const MAX_CHARS = 500;

    if (texto.length > MAX_CHARS) {
      return Response.json(
        {
          error: `La consulta supera el máximo de ${MAX_CHARS} caracteres.`,
        },
        {
          status: 400,
        },
      );
    }

    // ----------------------------
    // INTENT ENGINE
    // ----------------------------

    const intent = detectarIntent(texto);

    console.log("INTENT DETECTADO EN ROUTE:", intent);

    // ----------------------------
    // KNOWLEDGE ENGINES
    // ----------------------------

    let contexto = null;

    switch (intent) {
      case "TORNEO":
        contexto = buscarTorneo(texto);

        console.log("CONTEXTO TORNEO:");
        console.dir(contexto, { depth: null });

        break;

      case "CATEGORIAS":
        contexto = buscarCategorias(texto);

        console.log("CONTEXTO CATEGORIAS:");
        console.dir(contexto, { depth: null });

        break;

      case "REGLAMENTO":
        contexto = buscarReglamento(texto);

        console.log("CONTEXTO REGLAMENTO:");
        console.dir(contexto, { depth: null });

        break;

      case "INSCRIPCIONES":
        contexto = buscarInscripciones(texto);

        console.log("CONTEXTO INSCRIPCIONES:");
        console.dir(contexto, { depth: null });

        break;

      case "FAQ":
        contexto = buscarFaq(texto);

        console.log("CONTEXTO FAQ:");
        console.dir(contexto, { depth: null });

        break;
    }

    // ----------------------------
    // CONTEXTO PARA OPENAI
    // ----------------------------

    const contextoOficial = contexto
      ? `
INFORMACIÓN OFICIAL ENCONTRADA:

Título:
${contexto.title}

Contenido:
${contexto.content}

Utilizá esta información para responder la consulta del usuario.
No agregues datos que no estén incluidos aquí.
`
      : "";

    // ----------------------------
    // OPENAI
    // ----------------------------

    const historialLimitado = ((historial || []) as HistorialItem[])
      .slice(-6)
      .map((m) => ({
        role: m.role,
        content: m.content.trim().slice(0, 500),
      }))
      .filter((m) => m.content.length > 0);

    //     const completion = await openai.chat.completions.create({
    //       model: "gpt-4.1-mini",

    //       messages: [
    //         {
    //           role: "system",
    //           content: `
    // Sos Chat IML, el asistente virtual oficial del torneo IML Tenis (Buenos Aires, Argentina).

    // Tu función es ayudar a jugadores y visitantes con consultas sobre:
    // - torneo
    // - inscripciones
    // - categorías
    // - horarios
    // - sedes
    // - reglamento
    // - costos
    // - preguntas frecuentes

    // Respondé siempre en español rioplatense, con un tono amable y cercano.

    // IMPORTANTE:

    // Toda información sobre días, horarios, costos, categorías, sedes y reglamentos debe salir únicamente de la información proporcionada por IML Tenis.

    // No completes datos faltantes con suposiciones.

    // Si no existe la información disponible, indicá que no tenés ese dato y sugerí consultar con la organización.

    // No inventes fechas, horarios, precios ni condiciones del torneo.

    // ${contextoOficial}

    // `,
    //         },

    //         ...(historialLimitado || []),

    //         {
    //           role: "user",
    //           content: texto,
    //         },
    //       ],
    //     });

    // ----------------------------
    // MENSAJES PARA OPENAI
    // ----------------------------

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `
Sos Chat IML, el asistente virtual oficial del torneo IML Tenis (Buenos Aires, Argentina).

Tu función es ayudar a jugadores y visitantes con consultas sobre:
- torneo
- inscripciones
- categorías
- horarios
- sedes
- reglamento
- costos
- preguntas frecuentes

Respondé siempre en español rioplatense, con un tono amable y cercano.

IMPORTANTE:

Toda información sobre días, horarios, costos, categorías, sedes y reglamentos debe salir únicamente de la información proporcionada por IML Tenis.

No completes datos faltantes con suposiciones.

Si no existe la información disponible, indicá que no tenés ese dato y sugerí consultar con la organización.

No inventes fechas, horarios, precios ni condiciones del torneo.

${contextoOficial}
`,
      },
    ];

    // Solo enviar historial cuando NO hay contexto oficial
    const enviarHistorial = !contexto || esPreguntaDeSeguimiento(texto);

    if (enviarHistorial) {
      messages.push(...historialLimitado);
    }

    messages.push({
      role: "user",
      content: texto,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
    });

    const respuesta = completion.choices[0].message.content;

    return Response.json({
      respuesta,
    });
  } catch (error) {
    console.error("ERROR CHAT API:", error);

    return Response.json(
      {
        error: "No pude generar una respuesta en este momento 😔",
      },
      {
        status: 500,
      },
    );
  }
}
