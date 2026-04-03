import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws: WebSocket) => {
  console.log("Cliente conectado");

  ws.on("message", async (message: Buffer) => {
    try {
      const prompt = message.toString();

      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral",
          prompt,
          stream: true,
        }),
      });

      if (!response.body) {
        ws.send("Error: no response body");
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);

        const lines = chunk.split("\n").filter(Boolean);

        for (const line of lines) {
          try {
            const json = JSON.parse(line);

            if (json.response) {
              ws.send(json.response);
            }
          } catch {
            // ignorar líneas inválidas
          }
        }
      }

      ws.send("[END]");
    } catch (error) {
      console.error("WebSocket error:", error);
      ws.send("[ERROR]");
    }
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});

console.log("WebSocket server running on 3001");
