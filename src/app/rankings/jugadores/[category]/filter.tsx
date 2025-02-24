"use client";
import { categories } from "@/lib/data";
import Link from "next/link";

const Filter = ({ category }: { category: string }) => {
  return (
    <div
      className="flex justify-center gap-y-2 gap-x-2 mb-3 text-sm flex-wrap max-w-xl m-auto
     [&>span:last-child]:hidden"
    >
      {categories.map((item) => (
        <>
          <Link
            href={`/rankings/jugadores/${item.slug}`}
            key={item.id}
            className={
              category === item.slug
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }
          >
            {item.name}
          </Link>
          <span>&bull;</span>
        </>
      ))}
    </div>
  );
};

export default Filter;
