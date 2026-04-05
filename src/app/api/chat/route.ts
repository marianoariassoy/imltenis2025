import { chatEngine } from "@/lib/chat/chatEngine";

export async function POST(req: Request) {
  const body = await req.json();

  const { mensaje, historial } = body;

  const respuesta = await chatEngine(mensaje, historial);

  return Response.json(respuesta);
}
