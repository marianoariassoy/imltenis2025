import data from "@/data/chat/inscripciones_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";

const inscripciones = data as KnowledgeItem[];

export function buscarInscripcion(mensaje: string) {
  return buscarEnFuente(mensaje, inscripciones);
}
