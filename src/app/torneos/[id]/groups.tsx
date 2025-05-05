import { Group } from "@/types";
import Table from "./table";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Labels from "@/components/Labels";
import Info from "./info";
import Fixture from "./fixture-group";

const groups = async ({ id_tournament }: { id_tournament: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id_tournament}/groups`
  );
  const data = (await response.json()) as Group[];
  if (!data) return null;

  const labels = [
    {
      name: "Equipo",
      value: "",
    },
    {
      name: "Pts.",
      value: "Puntos (parciales)",
    },
    {
      name: "SG",
      value: "Series ganadas",
    },
    {
      name: "DS",
      value: "Diferencia de sets",
    },
    {
      name: "DG",
      value: "Diferencia de games",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "Ult. 5 series",
      value: "",
    },
  ];

  return (
    <section className="flex flex-col gap-y-3">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-6">
          <h1 className="italic font-black text-center text-primary text-xl">
            {item.name}
          </h1>

          <Suspense fallback={<Loader />}>
            <Table group={item} labels={labels} type={+item.type} />
          </Suspense>

          {+item.type === 1 && <Fixture id_group={item.id} title={false} />}
        </div>
      ))}

      <Labels labels={labels} />

      {data[0].tournament_description && (
        <Info text={data[0].tournament_description} />
      )}
    </section>
  );
};

export default groups;
