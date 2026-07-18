import data from "@/data/chat/inscripciones_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const inscripciones = data as KnowledgeItem[];

export function buscarInscripciones(mensaje: string): KnowledgeItem | null {
  const resultado = buscarEnFuente(mensaje, inscripciones);

  console.log("\n========== INSCRIPCIONES ENGINE ==========");
  console.log("Mensaje:", mensaje);

  console.log("Resultado:");
  console.dir(resultado, { depth: null });

  console.log("==========================================\n");

  return resultado?.item ?? null;
}
