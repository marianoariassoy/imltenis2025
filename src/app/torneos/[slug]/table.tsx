import Item from "@/components/Item";
import { Bull } from "@/lib/icons";
import { Group, Table } from "@/types";

interface Labels {
  name: string;
  value: string;
}

const Tabla = async ({
  group,
  type,
  labels,
}: {
  group: Group;
  type: number;
  labels: Labels[];
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${
      type === 3 ? "groups-stage2" : "groups"
    }/teams/${group.id}`
  );
  const data = (await response.json()) as Table[];
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-3">
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="w-full table table-auto mb-2">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="w-full">
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/equipos/${item.slug}`}
                    active={index < group.winners}
                  />
                </td>
                <td
                  className={`font-bold ${
                    index < group.winners ? "text-primary" : null
                  }`}
                >
                  {item.match_won}
                </td>
                {labels.length > 9 && <td>{item.series_won}</td>}
                <td>{item.d1_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.series_total}</td>
                <td>
                  {item.series_total > 0
                    ? (
                        (Number(item.match_won) /
                          (Number(item.series_total) *
                            (labels.length > 9 ? 3 : 2))) *
                        100
                      ).toFixed(0)
                    : 0}
                </td>
                <td>{item.fairplay}</td>
                <td>
                  <div className="flex gap-x-2">
                    {item.series.map((item, index) => (
                      <span key={index}>
                        {item ? (
                          <span className="text-primary">
                            <Bull />
                          </span>
                        ) : (
                          <span className="text-white/30 dark:text-black/30">
                            <Bull />
                          </span>
                        )}
                      </span>
                    ))}
                    {Array(5 - item.series.length)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index}>
                          <span className="text-white/10 dark:text-black/10">
                            <Bull />
                          </span>
                        </span>
                      ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Tabla;
