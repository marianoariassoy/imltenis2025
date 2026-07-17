import data from "@/data/chat/reglamento_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const reglamento = data as KnowledgeItem[];

export function buscarRegla(mensaje: string) {
  return buscarEnFuente(mensaje, reglamento);
}
