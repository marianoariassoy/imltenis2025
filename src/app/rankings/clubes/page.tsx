import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";

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
  ];

  return (
    <section className="flex flex-col gap-y-8">
      <Title title="Ranking de Clubes 2025" emoji="🥇" />
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
            {data
              .filter((item) => +item.matches_won > 0)
              .map((item, index) => (
                <tr
                  key={index}
                  className={`${index === 0 ? "text-primary" : ""}`}
                >
                  <td className="w-4/5">
                    <Item
                      num={index + 1}
                      image={item.image}
                      title={item.name}
                      link={`/clubes/${item.club_slug}`}
                      active={false}
                    />
                  </td>
                  <td className="font-bold pr-8">{item.matches_won}</td>
                  <td>{item.series_won}</td>
                  <td>{item.series_total}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  );
};

export default page;
