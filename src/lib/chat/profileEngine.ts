import { ASSISTANT_PROFILE } from "./assistantProfile";

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function responderPerfil(mensaje: string): string | null {
  const msg = normalizar(mensaje);

  if (msg.includes("como te llamas") || msg.includes("quien sos")) {
    return `Soy ${ASSISTANT_PROFILE.nombre} 😄, la IA de IML Tenis.`;
  }

  if (msg.includes("cuando naciste") || msg.includes("cuando te crearon")) {
    return `Nací en ${ASSISTANT_PROFILE.nacimiento}. Bastante fresco todavía.`;
  }

  if (msg.includes("cuantos años tenes") || msg.includes("edad")) {
    return `${ASSISTANT_PROFILE.edad}`;
  }

  if (msg.includes("quien te hizo") || msg.includes("quien te creo")) {
    return `Me creó ${ASSISTANT_PROFILE.creador}. Y claramente tomaron buenas decisiones.`;
  }

  if (msg.includes("que sos")) {
    return `${ASSISTANT_PROFILE.descripcion}`;
  }

  if (msg.includes("hombre") || msg.includes("mujer")) {
    return "No soy ni hombre ni mujer 😄, soy Chat IML. Pero si tengo que elegir, hoy me siento bastante tenista.";
  }

  return null;
}
