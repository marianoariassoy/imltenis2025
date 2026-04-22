export function interpretarConsulta(mensaje: string) {
  const msg = mensaje.toLowerCase();

  if (msg.includes("última fecha") || msg.includes("ultimo partido")) {
    return {
      tipo: "ultimo_partido",
    };
  }

  if (msg.includes("proximo") || msg.includes("cuando juega")) {
    return {
      tipo: "proximo_partido",
    };
  }

  if (msg.includes("tabla") || msg.includes("posiciones")) {
    return {
      tipo: "tabla_posiciones",
    };
  }

  return null;
}
