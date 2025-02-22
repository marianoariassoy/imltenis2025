import Link from "next/link";
import { Juego } from "@/types";

const Juegos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/series/${id}/matches`
  );
  const data = (await response.json()) as Juego[];
  if (!data) return null;

  console.log(data);

  return (
    <section className="fade-in">
      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              <th>Enfrentamientos</th>
              <th>Partido</th>
              <th>Score</th>
              <th>L/V</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="flex gap-x-1">
                  <Link
                    href={`/jugadores/${item.playerhome1_id}`}
                    className="text-primary hover:underline font-semibold"
                  >
                    {item.playerhome1_name}
                  </Link>
                  {item.playerhome2_id > 0 && <span>y</span>}
                  <Link
                    href={`/jugadores/${item.playerhome2_id}`}
                    className="text-primary hover:underline font-semibold"
                  >
                    {item.playerhome2_name}
                  </Link>
                  <span>vs</span>
                  <Link
                    href={`/jugadores/${item.playeraway1_id}`}
                    className="text-primary hover:underline font-semibold"
                  >
                    {item.playeraway1_name}
                  </Link>
                  {item.playeraway2_id > 0 && <span>y</span>}
                  <Link
                    href={`/jugadores/${item.playeraway2_id}`}
                    className="text-primary hover:underline font-semibold"
                  >
                    {item.playeraway2_name}
                  </Link>
                </td>
                <td>{item.type}</td>
                <td>{item.score}</td>
                <td>
                  <div className="h-8 w-8 rounded-full flex justify-center items-center border border-primary text-primary">
                    {item.result}
                  </div>
                </td>
                <td>
                  <div>{item.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Juegos;
