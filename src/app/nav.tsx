"use client";
import { useState } from "react";
import { tournaments, menu, extra } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Close } from "@/lib/icons";

const Menu = () => {
  const pathname = usePathname();
  const [category, setCategory] = useState("Damas");

  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#262626]/80 h-screen content-center text-center backdrop-blur z-50 hidden"
      id="menu"
    >
      <ul className="flex flex-col">
        {tournaments.map((item, index) => (
          <li key={index}>
            <button
              className="italic text-primary font-black text-xl lg:text-2xl hover:underline"
              onClick={() =>
                setCategory(category === item.name ? "" : item.name)
              }
            >
              {item.name}
            </button>
            {category === item.name && (
              <ul className="my-2">
                {item.categories.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className={`font-medium ${
                        pathname === item.url ? "underline" : "hover:underline"
                      }`}
                      onClick={handleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col font-medium mt-2 text-base">
        {menu.map((item, index) => (
          <li key={index + 20}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "text-primary"
                  : "hover:underline text-white/70"
              }
              onClick={handleMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col font-medium mt-2 text-base">
        {extra.map((item, index) => (
          <li key={index + 20}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "text-primary"
                  : "hover:underline text-white/50"
              }
              onClick={handleMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="absolute top-10 left-4 z-50 hover:text-primary cursor-pointer"
        onClick={handleMenu}
      >
        <Close />
      </button>
    </nav>
  );
};

export default Menu;
