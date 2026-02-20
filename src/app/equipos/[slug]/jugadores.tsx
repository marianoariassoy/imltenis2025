import Item from "@/components/ItemMedium";
import { Player } from "../../../types";
import Labels from "@/components/Labels";
import Barra from "@/components/Barra";

const Jugadores = async ({
  id,
  captain_name,
}: {
  id: string;
  captain_name: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}/players`,
  );
  const data = (await response.json()) as Player[];
  if (!data) return null;

  const labels = [
    {
      name: "Jugador",
      value: "",
    },
    {
      name: "Edad",
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
      name: "PP",
      value: "Parciales perdidos",
    },
    {
      name: "Dif.",
      value: "Diferencia de puntos",
    },
    {
      name: " ",
      value: " ",
    },
  ];

  return (
    <section className="flex flex-col gap-y-4">
      <div className="text-center">
        <h1 className="text-primary text-lg font-semibold">
          🔥 Lista de buena fe
        </h1>
        <h2 className="font-medium text-secondary">{captain_name} (Capitán)</h2>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
        <table className="table w-full">
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
                    link={`/jugadores/${item.slug}`}
                  />
                </td>
                <td>{item.age > 1 ? item.age : null}</td>

                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.series_lost}</td>
                <td>{item.series_dif}</td>
                <td className="w-40">
                  <Barra end={(item.series_won / item.series_total) * 100} />
                </td>
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
