import Item from "@/components/ItemMedium";
import { Player } from "../../../types";
import Labels from "@/components/Labels";

const Jugadores = async ({
  id,
  captain_name,
}: {
  id: string;
  captain_name: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}/players`
  );
  const data = (await response.json()) as Player[];
  if (!data) return null;

  const labels = [
    {
      name: "Nombre",
      value: "",
    },
    {
      name: "PJ",
      value: "Parciales jugados",
    },
    {
      name: "PG",
      value: "Parciales ganados",
    },
    {
      name: "Dif.",
      value: "Diferencia de puntos",
    },
    {
      name: "Edad",
      value: "",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <div className="text-center">
        <h1 className="text-primary font-semibold">🔥 Lista de buena fe</h1>
        <h2 className="text-sm font-medium">{captain_name} (Capitán)</h2>
      </div>

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
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="flex gap-x-2 items-center">
                  <span className="font-medium">{index + 1}</span>
                  <Item
                    image={item.image}
                    title={item.name}
                    link={`/jugadores/${item.id}`}
                  />
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won_total}</td>
                <td>{item.series_dif}</td>
                <td>{item.age > 1 ? item.age : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(1, labels.length)} />
    </section>
  );
};

export default Jugadores;
