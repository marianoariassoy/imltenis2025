"use client";

import { menu, categories } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <nav
      className="fade-in fixed top-0 left-0 w-full bg-black/40 dark:bg-white/60 h-screen content-center text-center backdrop-blur z-50 hover:cursor-pointer hidden"
      id="menu"
      onClick={handleMenu}
    >
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`text-primary italic font-black text-[1.1rem] ${
                pathname === item.url ? "underline" : "hover:underline"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col font-medium lg:text-base">
        {menu.map((item, index) => (
          <li key={index + 12}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "text-primary"
                  : "hover:underline text-white/70 dark:text-black/70"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/bienvenido"
            className={`opacity-70 
              ${
                pathname === "/bienvenido"
                  ? "text-primary opacity-100"
                  : "hover:underline"
              }
           `}
          >
            Registro de jugadores
          </Link>
        </li>
        <li>
          <a
            href="https://capitanes.imltenis.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline opacity-70"
          >
            Capitanes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
