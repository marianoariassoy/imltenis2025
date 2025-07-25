import Link from "next/link";
import { Bull } from "@/lib/icons";
import ItemSmall from "@/components/ItemSmall";
import { Serie } from "@/types";

const FixtureMain = ({ data, title }: { data: Serie[]; title: boolean }) => {
  return (
    <section className="flex flex-col gap-y-6">
      {title && <h1 className="font-bold text-primary text-center">Fixture</h1>}
      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full table-auto mb-3">
          {data.length > 0 && (
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Local</th>
                <th>Score</th>
                <th>Visitante</th>
                <th>Serie</th>
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={
                  item.winner || item.status === 2 ? "opacity-50 grayscale" : ""
                }
              >
                <td className="w-[5%]">
                  <div className="flex gap-x-2 items-center">
                    {item.winner || item.status === 2 ? <Bull /> : null}
                    <span className="font-semibold">{item.date}</span>
                  </div>
                </td>
                <td className="w-[5%]">{item.hour}</td>
                <td className="w-[34%]">
                  <ItemSmall
                    link={`/equipos/${item.home_id}`}
                    title={item.home_name}
                    image={item.home_image}
                  />
                </td>
                <td className="w-[10%]">
                  {item.winner ? (
                    <Link
                      href={`/series/${item.id}`}
                      className="hover:text-primary font-semibold"
                    >
                      {item.score_home}-{item.score_away}
                    </Link>
                  ) : item.status === 1 ? (
                    <span className="bg-base-300 p-1 text-xs rounded-md">
                      REV
                    </span>
                  ) : item.status === 2 ? (
                    <span className="bg-primary p-1 text-white text-xs rounded-md">
                      SUS
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="w-[40%]">
                  <ItemSmall
                    link={`/equipos/${item.away_id}`}
                    title={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td className="w-[10%]">
                  <Link
                    href={`/series/${item.id}`}
                    className="hover:text-primary"
                  >
                    #{item.id}
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

export default FixtureMain;
