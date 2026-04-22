export function interpretarConsultaTorneo(mensaje: string) {
  const msg = mensaje.toLowerCase();

  if (msg.includes("cuando juega") || msg.includes("próximo")) {
    return "proximo_partido";
  }

  if (msg.includes("último resultado") || msg.includes("cómo salió")) {
    return "ultimo_resultado";
  }

  if (msg.includes("tabla") || msg.includes("posiciones")) {
    return "tabla";
  }

  return null;
}

export function extraerEquipo(mensaje: string) {
  return mensaje;
}
