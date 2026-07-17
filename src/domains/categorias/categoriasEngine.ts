import data from "@/data/chat/categorias_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const categorias = data as KnowledgeItem[];

export function buscarCategorias(mensaje: string): KnowledgeItem | null {
  return buscarEnFuente(mensaje, categorias);
}
