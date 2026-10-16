import Title from "@/components/Title";
import Labels from "@/components/Labels";
import Info from "@/components/Aviso";
import { Container } from "@/components/Container";
import PlayerFilter from "./PlayerFilter";

export const metadata = {
  title: "Ranking de partidos jugados",
  description: "Ranking de partidos jugados de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/datos-y-records/jugadores",
    title: "Ranking de partidos jugados",
    description:
      "En este ranking podrás conocer a los jugadores con mayor cantidad de partidos disputados a lo largo de su participación en el torneo, destacando su trayectoria, compromiso y presencia dentro de la competencia.",
    images: [
      {
        url: "https://imltenis.com.ar/assets/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis",
      },
    ],
  },
};

interface data {
  id: number;
  name: string;
  image: string;
  slug: string;
  matches: number;
  teams: number;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/players/played",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  const labels = [
    {
      name: "Jugador",
      value: "",
    },
    {
      name: "Partidos",
      value: "Partidos jugados",
    },
    {
      name: "Equipos",
      value: "Equipos Integrados",
    },
  ];

  // Asignamos el puesto real del ranking (rank) antes del filtro interactivo
  const validDataWithRank = data
    .filter((item) => item.image !== null)
    .map((item, index) => ({
      ...item,
      rank: index + 1, // Guarda la posición original del ranking (1, 2, 3...)
    }));

  return (
    <Container>
      <Title
        title="Salón de la Fama"
        emoji="😎"
        description="En este ranking podrás conocer a los jugadores con mayor cantidad de partidos disputados a lo largo de su participación en el torneo, destacando su trayectoria, compromiso y presencia dentro de la competencia."
      />

      <PlayerFilter initialData={validDataWithRank} />

      <Labels labels={labels} />
      <Info text="Solo se muestra jugadores con foto de perfil y al menos un partido jugado" />
    </Container>
  );
};

export default page;
