import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";

export const metadata = {
  title: "Ranking de Campeones",
  description: "Ranking de campeones de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/campeones",
    title: "Ranking de Campeones",
    description: "Ranking de campeones de la liga de clubes IML Tenis",
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
    }
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
      value: "Copas de plata",
    },
    {
      name: "SC",
      value: "Supercopas",
    },
    {
      name: "Finales",
      value: "Finales disputadas",
    },
  ];

  return (
    <section className="flex flex-col gap-y-8">
      <Title title="Ranking de Campeones" emoji="👑" />

      <div className="w-full overflow-x-auto">
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
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/clubes/${item.club_slug}`}
                    active={false}
                  />
                </td>
                <td>
                  <span className="w-8 h-8 rounded-full bg-white/10 font-semibold flex items-center justify-center">
                    {item.gold}
                  </span>
                </td>
                <td>{item.silver}</td>
                <td>{item.supercopa}</td>
                <td>{item.finals}</td>
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
