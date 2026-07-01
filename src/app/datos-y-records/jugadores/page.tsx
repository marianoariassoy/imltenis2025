import Title from "@/components/Title";
import Item from "@/components/ItemPlayer";
import Labels from "@/components/Labels";
import Info from "@/components/Aviso";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Ranking de partidos jugados",
  description: "Ranking de partidos jugados de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/datos-y-records/jugadores",
    title: "Ranking de partidos jugados",
    description: "Ranking de partidos jugados de la liga de clubes IML Tenis",
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
      name: "Nombre",
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

  return (
    <Container>
      <Title
        title="Jugadores destacados"
        emoji="😎"
        description="2023 - 2026"
      />

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => item.image !== null)
              .map((item, index) => (
                <tr
                  key={index}
                  className={`${index === 0 ? "text-primary" : ""}`}
                >
                  <td className="flex gap-x-3 items-center">
                    <span className="font-medium">{index + 1}</span>
                    <Item
                      image={item.image}
                      title={item.name}
                      link={`/jugadores/${item.slug}`}
                    />
                  </td>
                  <td
                    className={`font-bold ${index < 1 ? "text-primary" : ""}`}
                  >
                    {item.matches}
                  </td>
                  <td>{item.teams}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Labels labels={labels} />
      <Info text="Solo se muestra jugadores con foto de perfil" />
    </Container>
  );
};

export default page;
