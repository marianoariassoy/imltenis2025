"use client";
import { useState } from "react";
import Item from "./Item";
import Search from "./Search";

interface data {
  title: string;
  text: string;
}

const Filter = ({ data }: { data: data[] }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const dataFiltered = filterText
    ? data.filter((item) =>
        item.text.toLowerCase().includes(filterText.toLowerCase())
      )
    : data;

  return (
    <div className="flex flex-col gap-y-6">
      <Search filterText={filterText} handleFilterChange={handleFilterChange} />

      <div className="md:columns-2 gap-8 text-sm">
        {dataFiltered.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
