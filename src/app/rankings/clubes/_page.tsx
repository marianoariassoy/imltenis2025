import Title from "@/components/Title";
import Labels from "@/components/Labels";
import Info from "@/components/Info";
import Card from "./card";

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
      value: "Puntos (Partidos ganados)",
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
      <Title title="Ranking de Clubes 2026" emoji="🏆" />

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {data
          // .filter((item) => +item.matches_won > 0)
          .map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              active={index < 4 ? true : false}
            />
          ))}
      </div>
      <Labels labels={labels} />

      <Info
        text="Los cuatro (4) clubes mejor ubicados competirán en las finales de interclubes al cierre de la temporada 2026."
        color="primary"
      />

      <div className="p-6 rounded-2xl bg-black/10">
        <h2 className="font-bold text-primary text-center mb-4">
          Campeones Interclubes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="font-bold text-primary">2025</h2>
            <span className="font-semibold">⭐️ Caza y Pesca</span>
          </div>
          <div>
            <h2 className="font-bold text-primary">2024</h2>
            <span className="font-semibold">⭐️ SAG</span>
          </div>
          <div>
            <h2 className="font-bold text-primary">2023</h2>
            <span className="font-semibold">⭐️ San Miguel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
