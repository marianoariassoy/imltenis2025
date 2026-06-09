import { Group } from "@/types";
import Table from "./table";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Labels from "@/components/Labels";
import Info from "@/components/Info";
import Fixture from "./fixture-group";

const groups = async ({
  id_tournament,
  twoMatches,
}: {
  id_tournament: string;
  twoMatches: boolean;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id_tournament}/groups`,
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
      value: "Puntos (partidos ganados)",
    },
    {
      name: "SG",
      value: "Series ganadas",
    },
    {
      name: "D1",
      value: "Doble 1 ganadoos",
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
      name: "FP",
      value: "Puntos Fair Play",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "PR",
      value: "Promedio (porcentaje)",
    },
    {
      name: "WO",
      value: "Walkovers (serie)",
    },
    {
      name: "Ult. 5 series",
      value: "",
    },
  ];

  const labels_2 = [
    {
      name: "Equipo",
      value: "",
    },
    {
      name: "Pts.",
      value: "Puntos (partidos ganados)",
    },
    {
      name: "D1",
      value: "Doble 1 ganados",
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
      name: "FP",
      value: "Puntos Fair Play",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "PR",
      value: "Promedio (porcentaje)",
    },
    {
      name: "WO",
      value: "Walkovers (serie)",
    },
  ];

  return (
    <section className="flex flex-col gap-y-8">
      {data[0].tournament_description && (
        <Info text={data[0].tournament_description} />
      )}

      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-6">
          <h1 className="font-extrabold text-center text-primary text-lg lg:text-xl italic">
            {item.name}
          </h1>
          <Suspense fallback={<Loader />}>
            <Table
              group={item}
              labels={twoMatches ? labels_2 : labels}
              type={+item.type}
              twoMatches={twoMatches}
            />
          </Suspense>

          {+item.type === 1 && <Fixture id_group={item.id} title={false} />}
        </div>
      ))}

      <Labels labels={twoMatches ? labels_2 : labels} />
    </section>
  );
};

export default groups;
