import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";
import { Info } from "@/lib/icons";

export const metadata = {
  title: "Ranking de Clubes",
  description: "Ranking de clubes de la liga de clubes IML Tenis",
};

interface data {
  id: string;
  image: string;
  name: string;
  club_id: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes"
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
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Ranking de Clubes 2025" emoji="🥇" />

      <div className="overflow-x-auto text-sm">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={`${index === 0 && "text-primary"}`}>
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/clubes/${item.id}`}
                  />
                </td>
                <td className="font-bold">{item.matches_won}</td>
                <td>{item.series_won}</td>
                <td>{item.series_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <div className="flex gap-x-2 text-sm p-3 lg:p-6 bg-black/10 rounded-xl">
        <span className="text-primary mt-1 lg:mt-0">
          <Info />
        </span>
        <span className="text-secondary whitespace-break-spaces">
          Al final de la temporada anual los 4 clubes mejor ubicados disputarán
          los playoffs finales.
        </span>
      </div>
    </section>
  );
};

export default page;
