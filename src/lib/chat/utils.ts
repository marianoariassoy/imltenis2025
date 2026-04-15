// 🔹 Normalizar,limpiar, historal

interface Message {
  role: "user" | "assistant";
  content: string;
}

type ReglamentoItem = {
  title: string;
  content: string;
  keywords: string[];
  examples?: string[];
};

export function formatearRespuesta(item: ReglamentoItem): string {
  const cierreOpciones = [
    "Si tenés otra duda, decime 👍",
    "Cualquier cosa preguntame 🙌",
    "Si querés te explico más en detalle 👌",
    "",
  ];

  const cierre =
    cierreOpciones[Math.floor(Math.random() * cierreOpciones.length)];

  return `${item.content}\n\n${cierre}`;
}

export function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD") // elimina tildes
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
