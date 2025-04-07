import Link from "next/link";
import Labels from "@/components/Labels";

interface data {
  id: string;
  name: string;
  tournament_id: string;
  tournament_name: string;
  series_total: number;
  series_won: number;
  match_won: number;
}

const Equipos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}/teams`
  );
  const data = (await response.json()) as data[];
  if (!data) return null;

  const labels = [
    {
      name: "Nombre",
      value: "",
    },
    {
      name: "Torneo",
      value: "",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "SG",
      value: "Series ganadas",
    },
    {
      name: "PG",
      value: "Parciales ganados",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <h1 className="font-semibold text-primary text-center">
        Equipos ({data.length})
      </h1>

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
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link
                    href={`/equipos/${item.id}`}
                    className="hover:underline text-primary font-medium"
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link
                    href={`/torneos/${item.tournament_id}`}
                    className="hover:text-primary"
                  >
                    {item.tournament_name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  );
};

export default Equipos;
