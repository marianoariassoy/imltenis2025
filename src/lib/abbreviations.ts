export function obtenerAbreviado(nombre: string, maxLetras = 3) {
  if (!nombre) return "";

  if (nombre === "Ecotenis") return "ECO";
  if (nombre.includes("El Retiro")) return "RTZ";
  if (nombre.includes("SAG")) return "SAG";
  if (nombre.includes("CACY")) return "CYP";
  if (nombre.includes("Italiano")) return "ITC";
  if (nombre.includes("ITC")) return "ITC";
  if (nombre.includes("LBN")) return "LBN";

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

export function obtenerPrimerNombreYApellido(nombreCompleto: string): string {
  const partes = nombreCompleto.trim().split(/\s+/);

  if (partes.length === 0) return "";
  if (partes.length === 1) return partes[0];

  const particulas = new Set([
    "de",
    "del",
    "de la",
    "de las",
    "de los",
    "da",
    "das",
    "do",
    "dos",
    "di",
    "van",
    "von",
    "der",
    "den",
    "la",
    "le",
    "du",
    "st",
    "saint",
  ]);

  let apellido = [partes[partes.length - 1]];
  let i = partes.length - 2;

  while (i >= 1) {
    const actual = partes[i].toLowerCase();

    // Verifica si junto con la palabra anterior forma una partícula compuesta
    if (i > 1 && particulas.has(`${partes[i - 1].toLowerCase()} ${actual}`)) {
      apellido.unshift(partes[i - 1], partes[i]);
      i -= 2;
    } else if (particulas.has(actual)) {
      apellido.unshift(partes[i]);
      i--;
    } else {
      break;
    }
  }

  return `${partes[0]} ${apellido.join(" ")}`;
}
