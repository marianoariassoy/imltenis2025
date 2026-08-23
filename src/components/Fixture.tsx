"use client";
import { useState } from "react";
import Link from "next/link";
import { Bull } from "@/lib/icons";
import ItemSmall from "@/components/ItemSmall";
import Item from "@/components/ItemMedium";
import { Serie } from "@/types";
import Title from "@/components/Title2";
import FixtureFilter from "@/components/FixtureFilter";

const FixtureMain = ({ data, title }: { data: Serie[]; title: boolean }) => {
  const [filter, setFilter] = useState<"todas" | "jugadas" | "sin jugar">(
    "todas",
  );

  if (!data) return null;

  const dataFiltered = data.filter((item) => {
    if (filter === "jugadas") return item.winner === true;
    if (filter === "sin jugar") return !item.winner;
    return true;
  });

  const played = data.filter((item) => item.winner === true);

  return (
    <section className="flex flex-col gap-y-4">
      {title && (
        <div className="flex flex-col items-center justify-center">
          <Title title={"Calendario (" + data.length + ")"} winners={0} />

          <FixtureFilter
            seriesPlayed={played.length}
            totalSeries={data.length}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      )}
      {dataFiltered.length === 0 && (
        <div className="text-center font-medium text-primary mt-4">
          {filter === "sin jugar"
            ? "No hay series por jugar 🫤"
            : "No hay series jugadas 🫤"}
        </div>
      )}
      {dataFiltered.length > 0 && (
        <div className="overflow-x-auto whitespace-nowrap">
          <table className="table w-full table-auto mb-2">
            {data.length > 0 && (
              <thead>
                <tr>
                  <th>Fecha y hora</th>
                  <th>Equipo local</th>
                  <th>Score</th>
                  <th>Equipo visitante</th>
                  <th>Serie</th>
                </tr>
              </thead>
            )}
            <tbody>
              {dataFiltered.map((item) => (
                <tr
                  key={item.id}
                  className={
                    item.winner || item.status === 2
                      ? "opacity-50 grayscale"
                      : ""
                  }
                >
                  <td className="w-[10%]">
                    <div className="flex gap-x-2 items-center">
                      {item.winner || item.status === 2 ? <Bull /> : null}
                      <span className="font-semibold">{item.date}</span>
                      <span>
                        {item.hour}
                        {item.hour != "-" && <span>hs.</span>}
                      </span>
                    </div>
                  </td>
                  <td className="w-[34%]">
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
                      />
                    )}
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
                      />
                    )}
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
      )}
    </section>
  );
};

export default FixtureMain;
