"use client";
import { useState } from "react";
import Link from "next/link";
import { Bull } from "@/lib/icons";
import ItemSmall from "@/components/ItemSmall";
import Item from "@/components/ItemMedium";
import { Serie } from "@/types";
import Title from "@/components/Title2";
import Barra from "@/components/Barra";

const FixtureMain = ({ data, title }: { data: Serie[]; title: boolean }) => {
  const options = ["Todas", "Jugadas", "Sin jugar"];
  const [filter, setFilter] = useState("Todas");

  const dataFiltered = data.filter((item) => {
    if (filter === "Jugadas") return item.winner;
    if (filter === "Sin jugar") return !item.winner;
    return true;
  });

  if (!data) return null;
  const played = data.filter((item) => item.winner === true);

  return (
    <section className="flex flex-col gap-y-6">
      {title && (
        <div className="flex flex-col items-center justify-center">
          <Title title="Calendario" winners={0} />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-4 w-full mt-4 lg:mt-8">
            <div className="flex items-center justify-center md:justify-start gap-x-2">
              <span className="text-secondary">
                {played.length} series jugadas de {data.length}
              </span>
              <Barra end={Math.round((played.length / data.length) * 100)} />
            </div>
            <div className="flex gap-x-2 text-sm md:text-base md:justify-end justify-center">
              {options.map((item) => (
                <button
                  key={item}
                  className={`rounded-md px-4 py-1 hover:bg-primary hover:text-white/80 text-sm hover:border-primary cursor-pointer font-medium border ${filter === item ? "bg-primary text-white/80 border-primary" : "text-secondary"}`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {dataFiltered.length === 0 && (
        <div className="text-center font-medium text-primary">
          No hay series 🫤
        </div>
      )}
      {dataFiltered.length > 0 && (
        <div className="overflow-x-auto whitespace-nowrap">
          <table className="table w-full table-auto mb-2">
            {data.length > 0 && (
              <thead>
                <tr>
                  <th>Fecha / Hora</th>
                  <th>Equipo Local</th>
                  <th>Score</th>
                  <th>Equipo Visitante</th>
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
                      {item.hour} {item.hour != "-" && <span>hs.</span>}
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
