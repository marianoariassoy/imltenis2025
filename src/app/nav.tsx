"use client";
import { useState } from "react";
import { tournaments, menu, extra } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/menu-context";

const Menu = () => {
  const { open, setOpen } = useMenu();
  const pathname = usePathname();
  const [category, setCategory] = useState("Damas");

  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#262626]/70 backdrop-blur z-40 text-base flex items-center justify-center ${open ? "block" : "hidden"}`}
      onClick={() => setOpen(false)}
    >
      <nav
        className={`text-center ${open ? "fade-in" : "hidden"}`}
        onClick={handleNavClick}
      >
        <ul className="font-medium">
          {tournaments.map((item, index) => (
            <li key={index}>
              <button
                className="text-primary italic font-black text-xl hover:underline "
                onClick={() =>
                  setCategory(category === item.name ? "" : item.name)
                }
              >
                {item.name}
              </button>
              {category === item.name && (
                <ul className="my-1">
                  {item.categories.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className={`${
                          pathname === item.url
                            ? "text-primary"
                            : "hover:text-primary"
                        }`}
                        onClick={() => setOpen(false)}
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
                    : "hover:text-primary text-white/70"
                }
                onClick={() => setOpen(false)}
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
                    : "hover:text-primary text-white/50"
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
