import data from "@/data/chat/categorias_ia.json";
import { buscarEnFuente, KnowledgeItem } from "@/lib/chat/jsonSearchEngine";
import { normalizar } from "@/lib/chat/utils";

const categorias = data as KnowledgeItem[];

export function buscarCategorias(mensaje: string): KnowledgeItem | null {
  const msg = normalizar(mensaje);

  console.log("\n========== CATEGORIAS ENGINE ==========");
  console.log("Mensaje:", msg);

  // -----------------------------------
  // ¿Pide el listado de categorías?
  // -----------------------------------

  if (
    msg.includes("que categorias hay") ||
    msg.includes("categorias hay") ||
    msg.includes("listado de categorias") ||
    msg.includes("todas las categorias")
  ) {
    console.log("Modo: LISTADO");

    let lista = categorias.filter((c) => c.id !== "categorias_torneo");

    if (msg.includes("damas")) {
      lista = lista.filter((c) => c.title.toLowerCase().includes("damas"));
    }

    if (msg.includes("caballeros")) {
      lista = lista.filter((c) => c.title.toLowerCase().includes("caballeros"));
    }

    if (msg.includes("mixto")) {
      lista = lista.filter((c) => c.title.toLowerCase().includes("mixto"));
    }

    if (msg.includes("+30")) {
      lista = lista.filter((c) => c.title.includes("+30"));
    }

    if (msg.includes("+40")) {
      lista = lista.filter((c) => c.title.includes("+40"));
    }

    if (msg.includes("libre")) {
      lista = lista.filter((c) => c.title.toLowerCase().includes("libre"));
    }

    console.log("Cantidad encontrada:", lista.length);

    const texto = lista.map((c) => `• ${c.title}`).join("\n");

    console.log(texto);

    return {
      id: "listado_categorias",
      title: "Categorías del torneo",
      content: texto,
      keywords: [],
      examples: [],
    };
  }

  // -----------------------------------
  // Búsqueda normal
  // -----------------------------------

  console.log("Modo: BÚSQUEDA");

  const resultado = buscarEnFuente(mensaje, categorias);

  console.log("Resultado:");
  console.dir(resultado, { depth: null });

  console.log("=======================================\n");

  return resultado;
}
