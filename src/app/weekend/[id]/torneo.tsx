import Fixture from "./fixture";
import { Group } from "@/types";
import Table from "./table";

const table = async ({
  id_tournament,
  description,
}: {
  id_tournament: string;
  description: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/${id_tournament}/groups`
  );
  const data = (await response.json()) as Group[];
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-3">
        {data
          .filter((item) => item.type === 2)
          .map((item) => (
            <div className="flex flex-col gap-y-3" key={item.id}>
              <h1 className="font-bold text-primary text-center">
                {item.title}
              </h1>
              <Fixture group_id={item.id} type={item.type} />
            </div>
          ))}
      </div>

      <div className="flex flex-col gap-y-3">
        {data
          .filter((item) => item.type === 1)
          .map((item, index) => (
            <div key={index} className="flex flex-col gap-y-6">
              <h1 className=" font-bold text-primary text-center">
                {item.title}
              </h1>
              <Table group={item} />
              <Fixture group_id={item.id} type={item.type} />
            </div>
          ))}
      </div>

      {description ? (
        <div className="text-center">
          <span className="text-secondary text-sm">{description}</span>
        </div>
      ) : null}
      {data.length < 1 ? (
        <div className="text-center py-3 flex flex-col items-center">
          <span className="text-2xl">🚀</span>
          <span className="text-primary font-bold">
            ¡Inscripciones abiertas!
          </span>
        </div>
      ) : null}
    </section>
  );
};

export default table;
