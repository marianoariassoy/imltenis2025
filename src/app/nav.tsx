"use client";
import { useState } from "react";
import { tournaments, menu, extra } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const pathname = usePathname();
  const [category, setCategory] = useState("Damas");

  return (
    <nav
      className={`fixed top-0 left-0 w-screen h-screen bg-[#262626]/90   backdrop-blur z-30 text-base ${isOpen ? "block" : "hidden"}`}
    >
      <div
        className={`w-full h-full content-center text-center ${isOpen ? "fade-in" : "hidden"}`}
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
                          pathname === item.url
                            ? "underline"
                            : "hover:underline"
                        }`}
                        onClick={onClick}
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
        <ul className="flex flex-col font-medium mt-2">
          {menu.map((item, index) => (
            <li key={index + 20}>
              <Link
                href={item.url}
                className={
                  pathname === item.url
                    ? "text-primary"
                    : "hover:underline text-white/70"
                }
                onClick={onClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col font-medium mt-2">
          {extra.map((item, index) => (
            <li key={index + 20}>
              <Link
                href={item.url}
                className={
                  pathname === item.url
                    ? "text-primary"
                    : "hover:underline text-white/50"
                }
                onClick={onClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
