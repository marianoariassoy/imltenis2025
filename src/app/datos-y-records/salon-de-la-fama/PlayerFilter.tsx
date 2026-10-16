"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadDiploma from "@/components/DownloadDiploma";

interface Player {
  id: number;
  name: string;
  image: string;
  slug: string;
  matches: number;
  teams: number;
  rank: number; // <-- Agregamos la posición original en el ranking
}

interface PlayerFilterProps {
  initialData: Player[];
}

export default function PlayerFilter({ initialData }: PlayerFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = initialData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {/* Input de Búsqueda */}
      <div className="w-full flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar jugador por nombre"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg h-12 border border-primary rounded-lg bg-transparent px-4 text-sm focus:outline-none focus:ring-0 placeholder:text-secondary"
        />
      </div>

      {/* Lista de jugadores */}
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 items-center justify-between p-4 bg-black/10 rounded-xl shadow"
            >
              <div className="flex items-center gap-3">
                {/* Usamos item.rank para que mantenga su lugar real en el ranking */}
                <div
                  className={`font-medium ${item.rank === 1 ? "text-primary" : ""}`}
                >
                  {item.rank}
                </div>
                <Link
                  href={`/jugadores/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full overflow-hidden bg-white/20 shrink-0 hover:opacity-80 transition-all"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover h-full w-full"
                  />
                </Link>
                <div className="font-medium leading-5 flex flex-col">
                  {item.name}
                  {item.matches >= 50 && (
                    <DownloadDiploma playerName={item.name} />
                  )}
                </div>
              </div>
              <div className="shrink-0 text-primary font-bold text-xl">
                {item.matches}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No se encontraron jugadores con ese nombre.
          </div>
        )}
      </div>
    </div>
  );
}
