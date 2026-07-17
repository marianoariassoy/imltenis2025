import data from "@/data/chat/torneo_ia.json";
import { buscarEnFuente } from "@/lib/chat/jsonSearchEngine";

export function buscarTorneo(mensaje: string) {
  return buscarEnFuente(mensaje, data);
}
