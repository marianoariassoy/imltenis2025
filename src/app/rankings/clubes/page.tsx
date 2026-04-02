import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";
import Info from "@/components/Info";
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
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4 justify-center">
        <Title title="Ranking de Clubes 2026" emoji="🏆" />
      </div>
      <Info
        text="Los cuatro (4) clubes mejor ubicados competirán en las finales de interclubes al cierre de la temporada 2026."
        color="primary"
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
