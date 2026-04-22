import { normalizar } from "@/lib/chat/utils";

type TipoConsulta =
  | "proximo_partido"
  | "ultimo_resultado"
  | "tabla"
  | "puntos"
  | "fairplay"
  | null;

type ApiResponse = Record<string, any> | null;

// ----------------------------
// Detectar tipo de consulta
// ----------------------------
function detectarTipoConsulta(mensaje: string): TipoConsulta {
  const msg = normalizar(mensaje);

  if (msg.includes("cuando juega") || msg.includes("proximo partido")) {
    return "proximo_partido";
  }

  if (msg.includes("como salio") || msg.includes("ultimo resultado")) {
    return "ultimo_resultado";
  }

  if (
    msg.includes("tabla") ||
    msg.includes("posiciones") ||
    msg.includes("ranking")
  ) {
    return "tabla";
  }

  if (msg.includes("cuantos puntos") || msg.includes("puntos tiene")) {
    return "puntos";
  }

  if (msg.includes("fair play")) {
    return "fairplay";
  }

  return null;
}

// ----------------------------
// Extraer equipo
// ----------------------------
function extraerEquipo(mensaje: string): string | null {
  const msg = normalizar(mensaje);

  const palabrasIgnorar = [
    "cuando",
    "juega",
    "como",
    "salio",
    "cuantos",
    "puntos",
    "tiene",
    "tabla",
    "posiciones",
    "ranking",
    "fair",
    "play",
    "proximo",
    "partido",
    "ultimo",
    "resultado",
    "de",
    "la",
    "el",
    "del",
    "los",
    "las",
  ];

  const palabras = msg
    .split(" ")
    .map((p) => p.trim())
    .filter((p) => p.length > 1)
    .filter((p) => !palabrasIgnorar.includes(p));

  if (!palabras.length) {
    return null;
  }

  return palabras.join(" ");
}

// ----------------------------
// Llamar API PHP
// ----------------------------
async function consultarApiTorneo(
  tipo: TipoConsulta,
  equipo: string | null,
): Promise<ApiResponse> {
  try {
    console.log(tipo, equipo);
    const res = await fetch("https://api.imltenis.com.ar/ia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipo,
        equipo,
      }),
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (data?.error) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error consultando API torneo:", error);
    return null;
  }
}

// ----------------------------
// Resolver consulta
// ----------------------------
export async function resolverConsultaTorneo(
  mensaje: string,
): Promise<ApiResponse> {
  const tipo = detectarTipoConsulta(mensaje);

  if (!tipo) {
    return null;
  }

  const equipo = extraerEquipo(mensaje);

  if (!equipo) {
    return null;
  }

  const data = await consultarApiTorneo(tipo, equipo);

  if (!data) {
    return null;
  }

  return {
    consulta: tipo,
    equipo,
    ...data,
  };
}
