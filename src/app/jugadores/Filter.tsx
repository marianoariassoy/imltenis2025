"use client";
import { useState } from "react";
import Item from "@/components/Item";
import { Player } from "@/types";

const Filter = ({ data }: { data: Player[] }) => {
  const [filter, setFilter] = useState("");
  const removeAccents = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredData = filter
    ? data.filter((item) =>
        removeAccents(item.name).includes(removeAccents(filter))
      )
    : [];

  return (
    <>
      <input
        type="text"
        placeholder="Buscar por nombre o apellido"
        value={filter}
        onChange={handleFilter}
        className="w-full h-12 border border-white/10 dark:border-black/10 rounded-lg bg-transparent px-4 text-sm focus:outline-none focus:ring-0 placeholder:text-secondary"
      />

      <div className="flex flex-col gap-y-3">
        {filteredData.map((item) => (
          <div key={item.id}>
            <Item
              image={item.image}
              title={item.name}
              link={`/jugadores/${item.id}`}
              active={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
