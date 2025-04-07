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
      name: "Score",
    },
    {
      name: "Torneo",
    },
  ];

  return (
    <section className="flex flex-col gap-y-3">
      <h1 className="text-center text-sm font-semibold text-primary">
        Singles disputados
      </h1>

      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
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
                <td className="text-secondary font-medium">{item.date}</td>
                <td>
                  <div className="flex gap-x-1">
                    <Link
                      href={`/jugadores/${item.oponent_id}`}
                      className="hover:underline text-primary font-medium"
                    >
                      {item.oponent_name}
                    </Link>
                    <Link
                      href={`/equipos/${item.team_oponent_id}`}
                      className="hover:underline text-secondary"
                    >
                      ({item.team_oponent_name} )
                    </Link>
                  </div>
                </td>
                <td>
                  <span className="font-medium">{item.score}</span>
                </td>

                <td>
                  <Link
                    href={`/torneos/${item.tournament_id}`}
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
