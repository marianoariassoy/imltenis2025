import Link from "next/link";
import { Single } from "@/types";
import { Bull } from "@/lib/icons";

const JugadoresSingles = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}/singles`
  );
  const data = (await response.json()) as Single[];
  if (!data) return null;

  const labels = [
    {
      name: "G/P",
    },
    {
      name: "Fecha",
    },
    {
      name: "Oponente",
    },
    {
      name: "Equipo rival",
    },
    {
      name: "Score",
    },
    {
      name: "Torneo",
    },
  ];

  return (
    <section className="flex flex-col gap-y-3">
      <div className="flex flex-col justify-center items-center gap-x-1">
        <h1 className="font-semibold text-primary text-lg">
          Singles disputados ({data.length})
        </h1>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
        <table className="table w-full mb-4">
          <thead>
            <tr>
              {labels.map((label, index) => (
                <th key={index}>{label.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <div
                    className={
                      item.result === "G" ? "text-primary" : "text-secondary"
                    }
                  >
                    <Bull />
                  </div>
                </td>
                <td className="font-medium">{item.date}</td>
                <td>
                  <div className="flex gap-x-1">
                    <Link
                      href={`/jugadores/${item.oponent_slug}`}
                      className="hover:underline text-primary font-medium"
                    >
                      {item.oponent_name}
                    </Link>
                  </div>
                </td>
                <td>
                  <Link
                    href={`/equipos/${item.team_oponent_id}`}
                    className="hover:underline"
                  >
                    {item.team_oponent_name}
                  </Link>
                </td>
                <td>
                  <span className="font-medium">{item.score}</span>
                </td>

                <td>
                  <Link
                    href={`/torneos/${item.tournament_slug}`}
                    className="hover:underline text-primary"
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JugadoresSingles;
