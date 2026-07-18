import data from "@/data/chat/reglamento_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const reglamento = data as KnowledgeItem[];

export function buscarReglamento(mensaje: string): KnowledgeItem | null {
  const resultado = buscarEnFuente(mensaje, reglamento);

  console.log("\n========== REGLAMENTO ENGINE ==========");
  console.log("Mensaje:", mensaje);

  console.log("Resultado:");
  console.dir(resultado, { depth: null });

  console.log("=======================================\n");

  return resultado?.item ?? null;
}
