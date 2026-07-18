import data from "@/data/chat/torneo_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const torneo = data as KnowledgeItem[];

export function buscarTorneo(mensaje: string): KnowledgeItem | null {
  const resultado = buscarEnFuente(mensaje, torneo);

  console.log("\n========== TORNEO ENGINE ==========");
  console.log("Mensaje:", mensaje);

  console.log("Resultado:");
  console.dir(resultado, { depth: null });

  console.log("===================================\n");

  return resultado?.item ?? null;
}
