import Link from "next/link";
import Item from "@/components/Item";
import Labels from "@/components/Labels";

interface data {
  id: string;
  image: string;
  name: string;
  team_id: string;
  matches_won: string;
  sets: string;
  games: string;
  matches_total: string;
  team_name: string;
}

const table = async ({ category }: { category: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/players/ranking/4"
  );
  const data = (await response.json()) as data[];
  if (!data) return null;

  console.log(category);

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
            {data.slice(0, 30).map((item, index) => (
              <tr key={item.id} className={`${index === 0 && "text-primary"}`}>
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/jugadores/${item.id}`}
                  />
                </td>
                <td>
                  <Link
                    href={`/equipos/${item.team_id}`}
                    className="hover:text-primary font-bold"
                  >
                    {item.team_name}
                  </Link>
                </td>
                <td>
                  <span className="font-bold">{item.matches_won}</span>
                </td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.matches_total}</td>
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
