"use client";
import { categories } from "@/lib/data";
import Link from "next/link";

const Filter = ({ category }: { category: string }) => {
  return (
    <div
      className="flex justify-center gap-y-2 gap-x-2 flex-wrap max-w-2xl m-auto
     [&>span:last-child>span]:hidden font-medium"
    >
      {categories.map((item) => (
        <span key={item.id} className="flex gap-x-2">
          <Link
            href={`/rankings/jugadores/${item.slug}`}
            className={
              category === item.slug
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }
          >
            {item.name}
          </Link>
          <span>-</span>
        </span>
      ))}
    </div>
  );
};

export default Filter;
