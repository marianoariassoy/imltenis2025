"use client";

import { menu, categories } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const openMenu = () => {
    setMenu(false);
  };

  const pathname = usePathname();

  return (
    <nav
      className="fade-in fixed top-0 left-0 w-full bg-black/20 h-screen content-center text-center backdrop-blur-md z-50 hover:cursor-pointer"
      onClick={openMenu}
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
                  : "hover:underline text-white/70"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <a href="#" className="hover:underline">
            Registro de jugadores
          </a>
        </li>
        <li>
          <a
            href="https://capitanes.imltenis.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Capitanes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
