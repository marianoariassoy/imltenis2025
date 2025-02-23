export const categories = [
  { name: "Primera Libre", url: "/soon" },
  { name: "Segunda Libre", url: "/soon" },
  { name: "Caballeros Segunda +35", url: "/soon" },
  { name: "Damas Segunda", url: "/soon" },
  { name: "Mixto Segunda ", url: "/soon" },
  { name: "Tercera Libre", url: "/soon" },
  { name: "Caballeros Tercera +35", url: "/soon" },
  { name: "Damas Tercera ", url: "/soon" },
  { name: "Mixto Tercera ", url: "/soon" },
  { name: "Cuarta Libre", url: "/soon" },
  { name: "Damas Cuarta ", url: "/soon" },
  { name: "Quinta Libre", url: "/soon" },
  { name: "Sexta Libre", url: "/soon" },
];

export const menu = [
  { name: "Torneos Anteriores", url: "/torneos-anteriores" },
  { name: "Ranking Jugadores", url: "/rankings/jugadores" },
  { name: "Ranking de Clubes", url: "/rankings/clubes" },
  { name: "Ranking de Campeones", url: "/rankings/campeones" },
  { name: "Orden de juego", url: "/orden-de-juego" },
  { name: "Reglamento", url: "/reglamento" },
  { name: "Jugadores", url: "/jugadores" },
  { name: "Registro de jguadores", url: "/bienvenido" },
  { name: "Colaboradores", url: "/colaboradores" },
  { name: "IML Weekend", url: "/weekend" },
  { name: "Nosotros", url: "/nosotros" },
];

export const rankingOptions = [
  {
    name: "Damas Segunda",
    category: 9,
  },
  {
    name: "Damas Tercera",
    category: 6,
  },
  {
    name: "Damas Cuarta",
    category: 8,
  },
  {
    name: "Primera Libre",
    category: 1,
  },
  {
    name: "Segunda Libre",
    category: 2,
  },
  {
    name: "Tercera Libre",
    category: 3,
  },
  {
    name: "Cuarta Libre",
    category: 4,
  },
  {
    name: "Quinta Libre",
    category: 5,
  },
  {
    name: "Tercera +45",
    category: 7,
  },
  {
    name: "Juniors Sub 14",
    category: 10,
  },
];

export const texts = {
  error: "Se produjo un error al enviar el formulario.",
  required: "Completá este dato",
  thanks: "¡Ya estas registrado en nuestro sistema!",
};

export const days = [] as number[];
for (let i: number = 1; i <= 31; i++) {
  days.push(i);
}
export const months = [] as number[];
for (let i: number = 1; i <= 12; i++) {
  months.push(i);
}
export const years = [] as number[];
for (let i: number = 1930; i <= 2020; i++) {
  years.push(i);
}
