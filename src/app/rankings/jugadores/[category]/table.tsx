import Link from "next/link";
import Item from "@/components/ItemMedium";
import Labels from "@/components/Labels";
import { categories } from "@/lib/data";
import Messages from "@/components/Messages";

interface data {
  id: string;
  player_id: string;
  player_image: string;
  player_name: string;
  team_id: string;
  matches_won: string;
  ds: string;
  dg: string;
  matches: string;
  team_name: string;
  category: string;
}

const table = async ({ category }: { category: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/players",
    {
      cache: "no-store",
    }
  );
  const data = (await response.json()) as data[];
  if (!data) return null;

  const labels = [
    {
      name: "Nombre",
      value: "",
    },
    {
      name: "Equipo",
      value: "",
    },

    {
      name: "Pts.",
      value: "Puntos",
    },
    {
      name: "DS",
      value: "Diferencia de sets",
    },
    {
      name: "DG",
      value: "Diferencia de games",
    },
    {
      name: "PJ",
      value: "Parciales jugados",
    },
  ];

  const category_id = categories.filter((item) => item.slug === category);
  const dataFiltered = data.filter(
    (item) => +item.category === category_id[0].id
  );

  if (dataFiltered.length === 0)
    return <Messages text="No hay datos disponibles" />;

  return (
    <>
      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataFiltered.slice(0, 50).map((item, index) => (
              <tr
                key={item.id}
                className={`${index === 0 ? "text-primary" : ""}`}
              >
                <td className="flex gap-x-2 items-center">
                  <span className="font-medium">{index + 1}</span>
                  <Item
                    image={item.player_image}
                    title={item.player_name}
                    link={`/jugadores/${item.player_id}`}
                  />
                </td>

                <td>
                  <Link
                    href={`/equipos/${item.team_id}`}
                    className="hover:text-primary font-medium"
                  >
                    {item.team_name}
                  </Link>
                </td>
                <td>
                  <span className="font-semibold">{item.matches_won}</span>
                </td>
                <td>{item.ds}</td>
                <td>{item.dg}</td>
                <td>{item.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </>
  );
};

export default table;
