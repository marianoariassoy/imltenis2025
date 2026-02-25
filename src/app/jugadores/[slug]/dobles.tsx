import Link from "next/link";
import { Double } from "@/types";
import { Bull } from "@/lib/icons";

const JugadoresDobles = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/players/${id}/doubles`,
    );
    const data = (await response.json()) as Double[];
    if (!data) return null;

    const labels = [
      {
        name: "G/P",
      },
      {
        name: "Fecha.",
      },
      {
        name: "Oponentes",
      },
      {
        name: "Equipo rival",
      },
      {
        name: "Pareja",
      },
      {
        name: "Score",
      },
      {
        name: "Torneo",
      },
    ];

    return (
      <section className="flex flex-col gap-y-6">
        <div className="flex flex-col justify-center items-center gap-x-1">
          <h1 className="font-semibold text-primary text-base">
            Dobles jugados ({data.length})
          </h1>
        </div>
        <div className="overflow-x-auto whitespace-nowrap">
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
                  <td className="font-medium">{item.date}</td>
                  <td>
                    <div className="flex gap-x-1">
                      <Link
                        href={`/jugadores/${item.oponent1_slug}`}
                        className="hover:underline text-primary font-medium"
                      >
                        {item.oponent1_name}
                      </Link>
                      <span>y</span>
                      <Link
                        href={`/jugadores/${item.oponent2_slug}`}
                        className="hover:underline text-primary font-medium"
                      >
                        {item.oponent2_name}
                      </Link>
                    </div>
                  </td>
                  <td>
                    <Link
                      href={`/equipos/${item.team_oponent_slug}`}
                      className="hover:underline"
                    >
                      {item.team_oponent_name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/jugadores/${item.partner_slug}`}
                      className="hover:underline text-primary font-medium"
                    >
                      {item.partner_name}
                    </Link>
                  </td>
                  <td>{item.score}</td>
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
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export default JugadoresDobles;
