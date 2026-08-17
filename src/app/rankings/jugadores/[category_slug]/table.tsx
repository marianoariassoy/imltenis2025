import Link from "next/link";
import Item from "@/components/ItemPlayer";
import Labels from "@/components/Labels";
import { tournaments } from "@/lib/data";
import Messages from "@/components/Messages";

interface Data {
  id: string;
  player_id: string;
  player_slug: string;
  player_image: string;
  player_name: string;
  team_id: string;
  team_slug: string;
  team_name: string;
  matches_won: string;
  ds: string;
  dg: string;
  matches: string;
  category: string;
}

const Table = async ({ category_slug }: { category_slug: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/players",
    {
      cache: "no-store",
    },
  );

  const data = (await response.json()) as Data[];

  if (!data) return null;

  const labels = [
    {
      name: "Jugador",
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

  // Buscamos la categoría dentro de todos los torneos
  const category = tournaments
    .flatMap((tournament) => tournament.categories)
    .find((item) => item.url.replace("/torneos/", "") === category_slug);

  // Si la categoría no existe
  if (!category) {
    return <Messages text="No hay datos disponibles" />;
  }

  // Filtramos los jugadores por el slug de la categoría
  const dataFiltered = data.filter((item) => item.category === category_slug);

  if (dataFiltered.length === 0) {
    return <Messages text="No hay datos disponibles" />;
  }

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap">
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
                <td className="flex gap-x-4 items-center">
                  <span className="font-bold">{index + 1}</span>

                  <Item
                    image={item.player_image}
                    title={item.player_name}
                    link={`/jugadores/${item.player_slug}`}
                  />
                </td>

                <td>
                  <Link
                    href={`/equipos/${item.team_slug}`}
                    className="hover:text-primary font-medium"
                  >
                    {item.team_name}
                  </Link>
                </td>

                <td className="font-bold">{item.matches_won}</td>

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

export default Table;
