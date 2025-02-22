"use client";

import { menu, categories } from "../lib/data";
import Link from "next/link";

const Menu = ({
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const openMenu = () => {
    setMenu(false);
  };

  return (
    <nav
      className="fade-in fixed top-0 left-0 w-full bg-black/20 h-screen content-center text-center backdrop-blur-md z-50"
      onClick={openMenu}
    >
      <ul className="text-white/70 italic">
        {categories.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="text-primary italic font-black hover:underline text-[1.1rem]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="text-white/70 flex flex-col font-medium lg:text-base">
        {menu.map((item, index) => (
          <li key={index + 12}>
            <Link href={item.url} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
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
