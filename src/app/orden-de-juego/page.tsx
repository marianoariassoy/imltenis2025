import Title from "@/components/Title";
import Link from "next/link";
import Item from "@/components/ItemSmall";
import { Serie } from "@/types/";

export const metadata = {
  title: "Orden de juego",
  description: "Orden de juego de la liga de clubes IML Tenis",
};

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/series/upcoming",
    {
      cache: "no-store",
    }
  );
  const data = (await response.json()) as Serie[];
  if (!data)
    return (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full fade-in flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-1">🙈</h1>
        <span className="text-primary text-center font-semibold">
          No hay series por disputar
        </span>
      </div>
    );

  return (
    <section className="flex flex-col gap-y-6">
      <Title title={`Orden de juego (${data.length} series)`} emoji="📅" />

      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Local</th>
              <th scope="col">Visitante</th>
              <th scope="col">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.top ? <span className="mr-1 text-xl">⭐️</span> : null}
                  <span className="font-semibold">{item.date}</span>
                </td>
                <td>{item.hour}</td>
                <td>
                  <Item
                    link={`/equipos/${item.home_id}`}
                    title={item.home_name}
                    image={item.home_image}
                  />
                </td>
                <td>
                  <Item
                    link={`/equipos/${item.away_id}`}
                    title={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td>
                  <Link
                    href={`/torneos/${item.tournament_id}`}
                    className="hover:text-primary"
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-secondary text-center text-sm font-medium">
        <span className="mr-1 text-xl">⭐️</span>
        Serie a otorgarse el premio Jugador Destacado Yuka de la fecha.
      </div>
    </section>
  );
};

export default page;
