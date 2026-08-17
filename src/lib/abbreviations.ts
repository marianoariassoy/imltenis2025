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
  const emojiRegex =
    /(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*|\p{Regional_Indicator}{2})/gu;

  // Separar el texto en tokens: palabras, espacios y emojis
  const tokens = nombreCompleto.trim().split(/(\s+)/);

  // Obtener solamente las palabras, ignorando emojis
  const palabras = tokens.filter(
    (token) => token.trim() !== "" && !emojiRegex.test(token),
  );

  // Resetear lastIndex porque la regex tiene flag "g"
  emojiRegex.lastIndex = 0;

  if (palabras.length === 0) return nombreCompleto.trim();

  if (palabras.length === 1) {
    return nombreCompleto.trim();
  }

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

  let apellido = [palabras[palabras.length - 1]];
  let i = palabras.length - 2;

  while (i >= 1) {
    const actual = palabras[i].toLowerCase();

    if (i > 1 && particulas.has(`${palabras[i - 1].toLowerCase()} ${actual}`)) {
      apellido.unshift(palabras[i - 1], palabras[i]);
      i -= 2;
    } else if (particulas.has(actual)) {
      apellido.unshift(palabras[i]);
      i--;
    } else {
      break;
    }
  }

  const resultado = `${palabras[0]} ${apellido.join(" ")}`;

  // Recuperar los emojis originales y agregarlos al final
  const emojis = nombreCompleto.match(emojiRegex)?.join("") ?? "";

  return emojis ? `${resultado} ${emojis}` : resultado;
}
