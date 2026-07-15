import { chatEngine } from "@/lib/chat/chatEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { mensaje, historial } = body;

    const respuesta = await chatEngine(mensaje, historial);

    return Response.json(respuesta);
  } catch (error) {
    console.error("ERROR CHAT:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    );
  }
}
