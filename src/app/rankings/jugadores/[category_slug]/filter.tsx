"use client";

import { tournaments } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "@/lib/icons";

const categories = tournaments.flatMap((tournament) =>
  tournament.categories.map((category) => ({
    ...category,
    tournament: tournament.name,
    slug: category.url.replace("/torneos/", ""),
  })),
);

const Filter = ({ category_slug }: { category_slug: string }) => {
  const [open, setOpen] = useState(false);

  const active = categories.find((category) => category.slug === category_slug);

  return (
    <div
      className={`relative transition-all w-full mx-auto flex justify-center font-medium text-secondary mb-4 ${
        open ? "max-w-full" : "max-w-md"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center justify-between gap-2 px-2 py-3 lg:px-4 border rounded-lg border-primary text-primary transition w-full cursor-pointer font-medium"
      >
        <span className="text-primary text-sm">
          {active?.name
            ? active.tournament + " " + active.name
            : "Seleccionar categoría"}
        </span>

        <span className="text-lg hover:text-secondary">
          <ChevronDown />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 z-20 px-2 py-3 lg:px-4 w-full rounded-lg bg-background border border-primary shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 text-sm gap-1">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-primary text-lg cursor-pointer hover:text-secondary"
          >
            <div className={`transition-transform rotate-180`}>
              <ChevronDown />
            </div>
          </button>

          {categories.map((category) => {
            const isActive = category.slug === category_slug;

            return (
              <Link
                key={category.url}
                href={`/rankings/jugadores/${category.slug}`}
                className={`block transition hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {category.tournament} {category.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
