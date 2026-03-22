"use client";
import { categories } from "@/lib/data";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "@/lib/icons";

const Filter = ({ category_slug }: { category_slug: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = categories.find((c) => c.slug === category_slug);

  // Cerrar al clickear afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all w-full mx-auto flex justify-center font-medium text-secondary mb-4 ${open ? "max-w-full" : "max-w-md"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 px-4 py-3 border rounded-lg border-primary text-primary transition w-full "
      >
        <span className="text-secondary text-sm">
          {active?.name ?? "Seleccionar categoría"}
        </span>
        <span
          className={`transition-transform z-30 ${open ? "rotate-180" : ""}`}
        >
          <ChevronDown />
        </span>
      </button>

      {open && (
        <div className="absolute z-20 px-4 py-2 w-full rounded-lg bg-background border border-primary shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 text-sm">
          {categories.map((item) => {
            const isActive = category_slug === item.slug;

            return (
              <Link
                key={item.slug}
                href={`/rankings/jugadores/${item.slug}`}
                onClick={() => setOpen(false)}
                className={`block py-1 transition  hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
