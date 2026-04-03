import { chatEngine } from "@/lib/chat/chatEngine";

export async function POST(req: Request) {
  const { mensaje } = await req.json();

  const result = await chatEngine(mensaje);

  return Response.json(result);
}
