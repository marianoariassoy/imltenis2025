import { WebSocketServer, WebSocket } from "ws";
import { chatEngine } from "@/lib/chat/chatEngine";

type ChatEngineResponse = {
  respuesta: string;
  titulo: string;
  tipo: string;
};

type ChatResponse = {
  ok: boolean;
  data?: ChatEngineResponse; // 🔥 AQUÍ ESTÁ EL FIX
  error?: string;
};

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", async (msg) => {
    try {
      const mensaje = msg.toString();

      const result = await chatEngine(mensaje);

      const response: ChatResponse = {
        ok: true,
        data: result, // ✔ ahora coincide con el tipo
      };

      ws.send(JSON.stringify(response));
    } catch (error) {
      console.error("WebSocket error:", error);

      const response: ChatResponse = {
        ok: false,
        error: "Error procesando el mensaje",
      };

      ws.send(JSON.stringify(response));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("🚀 WebSocket server running on ws://localhost:3001");
