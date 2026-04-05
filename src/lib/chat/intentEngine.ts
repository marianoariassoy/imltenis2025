export type Intent =
  | "GENERAL"
  | "CATEGORIAS"
  | "REGLAMENTO"
  | "RESULTADOS"
  | "PERFIL"
  | "UNKNOWN";

export function detectarIntent(mensaje: string): Intent {
  const msg = mensaje.toLowerCase();

  if (msg.includes("categorias") || msg.includes("categoria"))
    return "CATEGORIAS";

  if (
    msg.includes("precio") ||
    msg.includes("horario") ||
    msg.includes("dias") ||
    msg.includes("torneo") ||
    msg.includes("iml") ||
    msg.includes("iml tenis")
  )
    return "GENERAL";

  if (
    msg.includes("wo") ||
    msg.includes("puntos") ||
    msg.includes("reglamento")
  )
    return "REGLAMENTO";

  if (msg.includes("ranking") || msg.includes("fixture")) return "RESULTADOS";

  if (msg.includes("sos") || msg.includes("quien")) return "PERFIL";

  return "UNKNOWN";
}
