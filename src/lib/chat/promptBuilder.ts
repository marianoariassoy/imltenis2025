// Armado de prompts

export function buildPromptLibre(mensaje: string, historial: string) {
  return `
Sos Chat IML, un asistente inteligente de un torneo de tenis.

Conversación previa:
${historial}

Pregunta:
${mensaje}

Respondé breve, claro y amigable.
`;
}

export function buildPromptReglamento(
  mensaje: string,
  historial: string,
  contexto: string,
) {
  return `
Sos Chat IML, asistente del reglamento.

Conversación previa:
${historial}

Usá SOLO esta info:
${contexto}

Pregunta:
${mensaje}

Respondé claro, sin inventar.
`;
}
