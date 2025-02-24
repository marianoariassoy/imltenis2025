import Title from "@/components/Title";
import Messages from "@/components/Messages";
import Link from "next/link";
import Item from "@/components/ItemSmall";
import { Serie } from "@/types/";

export const metadata = {
  title: "Orde de juego",
};

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/series/upcoming"
  );
  const data = (await response.json()) as Serie[];
  if (!data) return <Messages text="No hay series por jugar" />;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Orden de juego" emoji="📅" />

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
    </section>
  );
};

export default page;
