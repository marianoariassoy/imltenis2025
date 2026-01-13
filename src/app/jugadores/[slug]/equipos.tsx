import Link from "next/link";
import ItemSmall from "@/components/ItemSmall";

interface Item {
  id: string;
  team_id: string;
  team_slug: string;
  team_name: string;
  club_id: string;
  club_slug: string;
  club_name: string;
  tournament_id: string;
  tournament_slug: string;
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
      <div className="flex flex-col justify-center items-center gap-x-1">
        <h1 className="font-semibold text-primary text-lg">
          Equipos ({data.length})
        </h1>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
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
                    link={`/equipos/${item.team_slug}`}
                    title={item.team_name}
                    image={item.image}
                  />
                </td>
                <td>
                  <Link
                    href={`/clubes/${item.club_slug}`}
                    className="hover:text-primary"
                  >
                    {item.club_name}
                  </Link>
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

export default JugadoresEquipos;
