import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Clubes Campeones",
  description: "Clubes campeones de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/campeones",
    title: "Clubes Campeones",
    description: "Clubes campeones de la liga de clubes IML Tenis",
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
  image: string;
  name: string;
  club_id: string;
  club_slug: string;
  gold: string;
  silver: string;
  supercopa: string;
  finals: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/champions",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];

  const labels = [
    {
      name: "Club",
      value: "",
    },
    {
      name: "Oro",
      value: "Campeonatos",
    },
    {
      name: "Plata",
      value: "Copas Plata",
    },
    {
      name: "Finales",
      value: "Finales disputadas",
    },
  ];

  return (
    <Container>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
        <Title title="Clubes Campeones" description="Desde 2023" />
        <div className="overflow-x-auto">
          <table className="table w-full mb-2">
            <thead>
              <tr>
                {labels.map((item, index) => (
                  <th key={index}>{item.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${index === 0 ? "text-primary" : ""}`}
                >
                  <td className="w-full">
                    <Item
                      num={index + 1}
                      image={item.image}
                      title={item.name}
                      link={`/clubes/${item.club_slug}`}
                      active={index === 0 ? true : false}
                    />
                  </td>
                  <td className="font-bold">{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.finals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Labels labels={labels} />
      </div>
    </Container>
  );
};

export default page;
