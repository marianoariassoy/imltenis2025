import Link from "next/link";
import { Bull } from "@/lib/icons";
import ItemSmall from "@/components/ItemSmall";
import Item from "@/components/Item";
import { Serie } from "@/types";

const FixtureMain = ({
  data,
  title,
  club_id,
}: {
  data: Serie[];
  title: boolean;
  club_id: string;
}) => {
  return (
    <section className="flex flex-col gap-y-6">
      {title && (
        <h1 className="font-bold text-primary text-center text-lg">
          Próximas series ({data.length})
        </h1>
      )}
      {data.length === 0 && (
        <div className="text-center text-secondary">
          No hay series a disputar 😢
        </div>
      )}
      {data.length > 0 && (
        <div className="overflow-x-auto whitespace-nowrap">
          <table className="table w-full table-auto mb-2">
            {data.length > 0 && (
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Local</th>
                  <th>Visitante</th>
                  <th>Torneo</th>
                  <th>Serie</th>
                </tr>
              </thead>
            )}
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex gap-x-2 items-center">
                      {item.club_home === +club_id ? (
                        <span className="text-primary">
                          <Bull />
                        </span>
                      ) : (
                        <span className="text-secondary">
                          <Bull />
                        </span>
                      )}
                      <span>{item.date}</span>
                    </div>
                  </td>
                  <td>{item.hour}</td>
                  <td>
                    {title ? (
                      <ItemSmall
                        link={`/equipos/${item.home_slug}`}
                        title={item.home_name}
                        image={item.home_image}
                      />
                    ) : (
                      <Item
                        link={`/equipos/${item.home_slug}`}
                        title={item.home_name}
                        image={item.home_image}
                        active={false}
                      />
                    )}
                  </td>
                  <td>
                    {title ? (
                      <ItemSmall
                        link={`/equipos/${item.away_slug}`}
                        title={item.away_name}
                        image={item.away_image}
                      />
                    ) : (
                      <Item
                        link={`/equipos/${item.away_slug}`}
                        title={item.away_name}
                        image={item.away_image}
                        active={false}
                      />
                    )}
                  </td>
                  <td>
                    <Link
                      href={`/tournaments/${item.tournament_slug}`}
                      className="hover:underline text-primary"
                    >
                      {item.tournament_name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/series/${item.id}`}
                      className="hover:text-primary text-secondary"
                    >
                      #{item.id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default FixtureMain;
