import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";
import Aviso from "@/components/Aviso";
import Barra from "@/components/Barra";

export const metadata = {
  title: "Ranking de Clubes",
  description: "Ranking de Clubes de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/clubes",
    title: "Ranking de Clubes",
    description: "Ranking de Clubes de la liga de clubes IML Tenis",
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
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  const labels = [
    {
      name: "Club",
      value: "",
    },
    {
      name: "Pts.",
      value: "Puntos (Parciales ganados)",
    },
    {
      name: "SG",
      value: "Series ganadas",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "",
      value: "",
    },
  ];

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 justify-center">
        <Title title="Ranking de Clubes 2026" emoji="👑" />
      </div>
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
              // .filter((item) => +item.matches_won > 0)
              .map((item, index) => (
                <tr
                  key={index}
                  className={`${index < 4 ? "text-primary" : ""}`}
                >
                  <td>
                    <Item
                      num={index + 1}
                      image={item.image}
                      title={item.name}
                      link={`/clubes/${item.club_slug}`}
                      active={false}
                    />
                  </td>
                  <td className="font-bold">{item.matches_won}</td>
                  <td>{item.series_won}</td>
                  <td>{item.series_total}</td>
                  <td>
                    <Barra
                      end={(+item.matches_won / (+item.series_total * 3)) * 100}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Labels labels={labels} />

      <Aviso text="Los cuatro (4) clubes mejor ubicados competirán en las finales de interclubes al cierre de la temporada 2026." />

      <div className="flex flex-col justify-center items-center gap-y-1 p-4 rounded-2xl text-primary border border-primary">
        <span> Caza y Pesca Campeón Interclubes 2025 ⭐️</span>
        <span>SAG Campeón Interclubes 2024 ⭐️</span>
        <span> San Miguel Campeón Interclubes 2023 ⭐️</span>
      </div>
    </section>
  );
};

export default page;
