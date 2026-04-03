// 🔹 Normalizar,limpiar, historal

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function limpiarRespuesta(texto: string) {
  return texto
    .replace(/^\s+/, "")
    .replace(/\u200B/g, "")
    .replace(/(solucion|respuesta)/gi, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function construirHistorial(historial: Message[]) {
  return historial
    .map((m) =>
      m.role === "user" ? `Usuario: ${m.content}` : `Asistente: ${m.content}`,
    )
    .join("\n");
}
