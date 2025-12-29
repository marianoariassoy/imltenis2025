import Link from "next/link";
import { Juego } from "@/types";
import Item from "@/components/ItemExtraSmall";

const Juegos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/series/${id}/matches`
  );
  const data = (await response.json()) as Juego[];
  if (!data) return null;

  return (
    <section>
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              <th>Enfrentamientos</th>
              <th>Parciales</th>
              <th>Score</th>
              <th>L/V</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="flex items-center gap-x-2">
                  {item.playerhome1_id > 0 && (
                    <span className="flex items-center gap-x-2">
                      <Item
                        title={item.playerhome1_name}
                        image={item.playerhome1_image}
                      />
                      <Link
                        href={`/jugadores/${item.playerhome1_id}`}
                        className="text-primary hover:underline font-semibold"
                      >
                        {item.playerhome1_name} ({+item.playerhome1_top + 1})
                      </Link>
                    </span>
                  )}

                  {item.playerhome2_id > 0 && (
                    <>
                      <span className="flex items-center gap-x-2">
                        <Item
                          title={item.playerhome2_name}
                          image={item.playerhome2_image}
                        />
                        <Link
                          href={`/jugadores/${item.playerhome2_id}`}
                          className="text-primary hover:underline font-semibold"
                        >
                          {item.playerhome2_name} ({+item.playerhome2_top + 1})
                        </Link>
                      </span>
                    </>
                  )}

                  {item.playerhome1_id > 0 ? (
                    <span> vs </span>
                  ) : (
                    <span>Sin disputar</span>
                  )}

                  {item.playeraway1_id > 0 && (
                    <span className="flex items-center gap-x-2">
                      <Item
                        title={item.playeraway1_name}
                        image={item.playeraway1_image}
                      />
                      <Link
                        href={`/jugadores/${item.playeraway1_id}`}
                        className="text-primary hover:underline font-semibold"
                      >
                        {item.playeraway1_name} ({+item.playeraway1_top + 1})
                      </Link>
                    </span>
                  )}

                  {item.playeraway2_id > 0 && (
                    <>
                      <span className="flex items-center gap-x-2">
                        <Item
                          title={item.playeraway2_name}
                          image={item.playeraway2_image}
                        />
                        <Link
                          href={`/jugadores/${item.playeraway2_id}`}
                          className="text-primary hover:underline font-semibold"
                        >
                          {item.playeraway2_name} ({+item.playeraway2_top + 1})
                        </Link>
                      </span>
                    </>
                  )}
                </td>
                <td>{item.type}</td>
                <td>{item.score}</td>
                <td>
                  {item.playerhome1_id > 0 && item.playeraway1_id > 0 ? (
                    <div className="h-8 w-8 rounded-full flex justify-center items-center border border-primary text-primary font-semibold">
                      {item.result}
                    </div>
                  ) : (
                    "- -"
                  )}
                </td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Juegos;
