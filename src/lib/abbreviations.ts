export function obtenerAbreviado(nombre: string, maxLetras = 3) {
  if (!nombre) return "";

  if (nombre === "Ecotenis") return "ECO";
  // if (nombre === "AFAR") return "AFAR";
  if (nombre.includes("El Retiro")) return "RTZ";
  if (nombre.includes("SAG")) return "SAG";
  if (nombre.includes("CACY")) return "CYP";

  const palabras = nombre.trim().split(/\s+/);

  // Si es una sola palabra
  if (palabras.length === 1) {
    return palabras[0].slice(0, maxLetras).toUpperCase();
  }

  // Si son varias palabras, usar iniciales
  return palabras
    .map((p) => p[0].toUpperCase())
    .join("")
    .slice(0, maxLetras);
}
