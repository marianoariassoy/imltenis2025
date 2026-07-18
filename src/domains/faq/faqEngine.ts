import data from "@/data/chat/faq_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const faq = data as KnowledgeItem[];

export function buscarFaq(mensaje: string): KnowledgeItem | null {
  const resultado = buscarEnFuente(mensaje, faq);

  console.log("\n========== FAQ ENGINE ==========");
  console.log("Mensaje:", mensaje);

  console.log("Resultado:");
  console.dir(resultado, { depth: null });

  console.log("================================\n");

  return resultado?.item ?? null;
}
