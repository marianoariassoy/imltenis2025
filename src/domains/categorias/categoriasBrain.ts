import rawCategorias from "@/data/categorias.json";

// ----------------------------
// 🧾 TIPOS
// ----------------------------
type CategoriaEdad = "libre" | "+30" | "+40";

type Categoria = {
  nombre: string;
  edad: CategoriaEdad;
  dia: "sabado" | "domingo";
  horario: string;
  formato: string;
};

type CategoriasData = {
  categorias: {
    damas: Categoria[];
    caballeros: Categoria[];
    mixto: Categoria[];
  };
};

type KnowledgeCategorias = {
  type: "categorias";
  data?: CategoriasData;
};

// ⚠️ casteamos el json
const categoriasJson = rawCategorias as KnowledgeCategorias[];

// ----------------------------
// 🧍 PERFIL
// ----------------------------
type Sexo = "damas" | "caballeros" | "mixto" | null;

type Perfil = {
  edad: number | null;
  sexo: Sexo;
};

function extraerPerfil(mensaje: string): Perfil {
  const msg = mensaje.toLowerCase();

  const edadMatch = msg.match(/(\d{2})\s*años?/);
  const edad = edadMatch ? Number(edadMatch[1]) : null;

  let sexo: Sexo = null;

  if (msg.includes("mujer") || msg.includes("femen")) {
    sexo = "damas";
  }

  if (msg.includes("hombre") || msg.includes("mascul")) {
    sexo = "caballeros";
  }

  if (msg.includes("mixto")) {
    sexo = "mixto";
  }

  return { edad, sexo };
}

// ----------------------------
// 🎯 LÓGICA EDAD
// ----------------------------
function resolverEdad(edad: number | null): CategoriaEdad {
  if (!edad) return "libre";
  if (edad >= 40) return "+40";
  if (edad >= 30) return "+30";
  return "libre";
}

// ----------------------------
// 🧠 BRAIN
// ----------------------------
export function categoriasBrain(mensaje: string) {
  const perfil = extraerPerfil(mensaje);

  // 🔒 si no detecto nada, no actúo
  if (!perfil.edad && !perfil.sexo) return null;

  const edadCategoria = resolverEdad(perfil.edad);

  const categoriasItem = categoriasJson.find(
    (k) => k.type === "categorias" && k.data,
  );

  if (!categoriasItem || !categoriasItem.data) return null;

  const data = categoriasItem.data;

  // 👉 default si no dice sexo → caballeros (podés cambiarlo)
  const sexo: "damas" | "caballeros" | "mixto" = perfil.sexo ?? "caballeros";

  const lista = data.categorias[sexo];

  // 🎯 FILTRO INTELIGENTE
  const posibles = lista.filter((c) => {
    // siempre puede jugar libres
    if (c.edad === "libre") return true;

    // si tiene +40 → puede jugar +40 y +30
    if (edadCategoria === "+40") {
      return c.edad === "+40" || c.edad === "+30";
    }

    // si tiene +30 → solo +30
    if (edadCategoria === "+30") {
      return c.edad === "+30";
    }

    return false;
  });

  if (!posibles.length) return null;

  return {
    titulo: "Categorías recomendadas",
    contenido: posibles.map((c) => c.nombre).join(", "),
  };
}
