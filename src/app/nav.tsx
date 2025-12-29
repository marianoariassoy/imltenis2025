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
      className="fade-in fixed top-0 left-0 w-full bg-[#262626]/80 h-screen content-center text-center backdrop-blur z-50 hidden"
      id="menu"
    >
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`text-primary italic font-black text-lg ${
                pathname === item.url ? "underline" : "hover:underline"
              }`}
              onClick={handleMenu}
            >
              {item.name}
            </Link>
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
                  : "hover:underline text-white/70 dark:text-black/70"
              }
              onClick={handleMenu}
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
      <button
        className="absolute top-6 right-0 p-3 z-50 hover:text-primary cursor-pointer"
        onClick={handleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Menu;
