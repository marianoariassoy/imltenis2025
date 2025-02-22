import Link from "next/link";
import ItemSmall from "@/components/ItemSmall";

interface Item {
  id: string;
  team_id: string;
  team_name: string;
  club_id: string;
  club_name: string;
  tournament_id: string;
  tournament_name: string;
  image: string;
}

const JugadoresEquipos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}/teams`
  );
  const data = (await response.json()) as Item[];
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-3">
      <h1 className="text-center text-sm font-semibold text-primary">
        Equipos
      </h1>

      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Club</th>
              <th>Torneo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="pl-0">
                  <ItemSmall
                    link={`/equipos/${item.team_id}`}
                    title={item.team_name}
                    image={item.image}
                  />
                </td>
                <td>
                  <Link
                    href={`/clubes/${item.club_id}`}
                    className="hover:text-primary"
                  >
                    {item.club_name}
                  </Link>
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

export default JugadoresEquipos;
