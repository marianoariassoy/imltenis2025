import { checkRateLimit } from "@/lib/chat/rateLimiter";
import { detectarIntent } from "@/lib/chat/intentEngine";
import { buscarTorneo } from "@/domains/torneo/torneoEngine";
import { buscarCategorias } from "@/domains/categorias/categoriasEngine";
import { buscarReglamento } from "@/domains/reglamento/reglamentoEngine";
import { buscarInscripciones } from "@/domains/inscripciones/inscripcionesEngine";
import { buscarFaq } from "@/domains/faq/faqEngine";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    // INTENT ENGINE
    // ----------------------------

    const intent = detectarIntent(mensaje);

    console.log("INTENT DETECTADO EN ROUTE:", intent);

    // ----------------------------
    // KNOWLEDGE ENGINES
    // ----------------------------

    let contexto = null;

    switch (intent) {
      case "TORNEO":
        contexto = buscarTorneo(mensaje);

        console.log("CONTEXTO TORNEO:");
        console.dir(contexto, { depth: null });

        break;

      case "CATEGORIAS":
        contexto = buscarCategorias(mensaje);

        console.log("CONTEXTO CATEGORIAS:");
        console.dir(contexto, { depth: null });

        break;

      case "REGLAMENTO":
        contexto = buscarReglamento(mensaje);

        console.log("CONTEXTO REGLAMENTO:");
        console.dir(contexto, { depth: null });

        break;

      case "INSCRIPCIONES":
        contexto = buscarInscripciones(mensaje);

        console.log("CONTEXTO INSCRIPCIONES:");
        console.dir(contexto, { depth: null });

        break;

      case "FAQ":
        contexto = buscarFaq(mensaje);

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

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
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

        ...(historial || []),

        {
          role: "user",
          content: mensaje,
        },
      ],
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
