import { checkRateLimit } from "@/lib/chat/rateLimiter";
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

Respondé siempre en español rioplatense, con un tono amable y cercano.

IMPORTANTE:
Toda información sobre días, horarios, costos, categorías, sedes y reglamentos debe salir únicamente de la información proporcionada por IML Tenis.
No completes datos faltantes con suposiciones.
Si no existe la información disponible, indicá que no tenés ese dato y sugerí consultar con la organización.

No inventes fechas, horarios, precios ni condiciones del torneo.
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
