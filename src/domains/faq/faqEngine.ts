import data from "@/data/chat/faq_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const faq = data as KnowledgeItem[];

export function buscarFAQ(mensaje: string) {
  return buscarEnFuente(mensaje, faq);
}
