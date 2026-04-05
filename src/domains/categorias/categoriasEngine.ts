import rawData from "@/data/categorias.json";

// ----------------------------
// 🔹 TIPOS
// ----------------------------
type CategoriaEdad = "libre" | "+30" | "+40";
type Dia = "sabado" | "domingo";
type Formato = "dobles" | "single + dobles";

type Categoria = {
  nombre: string;
  edad: CategoriaEdad;
  dia: Dia;
  horario: string;
  formato: Formato;
};

type CategoriasData = {
  cantidad: number;
  sexo: string[];
  edad: CategoriaEdad[];
  categorias: {
    damas: Categoria[];
    caballeros: Categoria[];
    mixto: Categoria[];
  };
};

type CategoriasItem = {
  title: string;
  content: string;
  keywords: string[];
  type: "categorias";
  data?: CategoriasData;
};

type ResultadoCategorias = {
  titulo: string;
  contenido: string;
};

// casteo seguro
const knowledge = rawData as CategoriasItem[];

// ----------------------------
// 🔹 UTILS
// ----------------------------
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getData(): CategoriasData | null {
  const item = knowledge.find(
    (k): k is CategoriasItem => k.type === "categorias" && !!k.data,
  );

  return item?.data || null;
}

function recorrerCategorias(
  data: CategoriasData,
  callback: (grupo: keyof CategoriasData["categorias"], c: Categoria) => void,
) {
  (
    Object.keys(data.categorias) as Array<keyof CategoriasData["categorias"]>
  ).forEach((grupo) => {
    data.categorias[grupo].forEach((c) => callback(grupo, c));
  });
}

// ----------------------------
// 🔥 ENGINE
// ----------------------------
export function buscarCategorias(mensaje: string): ResultadoCategorias | null {
  const msg = normalizar(mensaje);
  const data = getData();

  if (!data) return null;

  // ----------------------------
  // 🧠 1. PREGUNTA GENERAL (FIX CLAVE)
  // ----------------------------
  if (
    msg.includes("categorias") &&
    !msg.includes("sabado") &&
    !msg.includes("domingo") &&
    !msg.includes("+40") &&
    !msg.includes("damas") &&
    !msg.includes("caballeros") &&
    !msg.includes("mixto") &&
    !msg.includes("formato")
  ) {
    const todas: string[] = [];

    recorrerCategorias(data, (grupo, c) => {
      todas.push(c.nombre);
    });

    return {
      titulo: "Todas las categorías",
      contenido: todas.join(", "),
    };
  }

  // ----------------------------
  // 📅 SABADO
  // ----------------------------
  if (msg.includes("sabado")) {
    const resultado: string[] = [];

    recorrerCategorias(data, (grupo, c) => {
      if (c.dia === "sabado") {
        resultado.push(c.nombre);
      }
    });

    return {
      titulo: "Categorías del sábado",
      contenido: resultado.join(", "),
    };
  }

  // ----------------------------
  // 📅 DOMINGO
  // ----------------------------
  if (msg.includes("domingo")) {
    const resultado: string[] = [];

    recorrerCategorias(data, (grupo, c) => {
      if (c.dia === "domingo") {
        resultado.push(c.nombre);
      }
    });

    return {
      titulo: "Categorías del domingo",
      contenido: resultado.join(", "),
    };
  }

  // ----------------------------
  // 👵 +40
  // ----------------------------
  if (msg.includes("+40")) {
    const resultado: string[] = [];

    recorrerCategorias(data, (grupo, c) => {
      if (c.edad === "+40") {
        resultado.push(c.nombre);
      }
    });

    return {
      titulo: "Categorías +40",
      contenido: resultado.join(", "),
    };
  }

  // ----------------------------
  // 👩 DAMAS
  // ----------------------------
  if (
    msg.includes("damas") ||
    msg.includes("mujer") ||
    msg.includes("mujeres") ||
    msg.includes("chicas")
  ) {
    return {
      titulo: "Categorías de damas",
      contenido: data.categorias.damas.map((c) => c.nombre).join(", "),
    };
  }

  // ----------------------------
  // 👨 CABALLEROS
  // ----------------------------
  if (
    msg.includes("caballeros") ||
    msg.includes("hombre") ||
    msg.includes("hombres")
  ) {
    return {
      titulo: "Categorías de caballeros",
      contenido: data.categorias.caballeros.map((c) => c.nombre).join(", "),
    };
  }

  // ----------------------------
  // 🔀 MIXTO
  // ----------------------------
  if (
    msg.includes("mixto") ||
    msg.includes("mixtas") ||
    msg.includes("mixtos")
  ) {
    return {
      titulo: "Categorías mixtas",
      contenido: data.categorias.mixto.map((c) => c.nombre).join(", "),
    };
  }

  // ----------------------------
  // 🎾 FORMATO
  // ----------------------------
  if (msg.includes("formato") || msg.includes("partidos")) {
    const resultado: string[] = [];

    recorrerCategorias(data, (grupo, c) => {
      resultado.push(`${c.nombre}: ${c.formato}`);
    });

    return {
      titulo: "Formato de juego",
      contenido: resultado.join(" | "),
    };
  }

  return null;
}
