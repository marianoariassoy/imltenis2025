"use client";
import { useState } from "react";
import { tournaments, menu, extra } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  const pathname = usePathname();
  const [category, setCategory] = useState("Damas");

  const handleBackgroundClick = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#262626]/90 backdrop-blur z-30 text-base flex items-center justify-center ${isOpen ? "block" : "hidden"}`}
      onClick={handleBackgroundClick}
    >
      <nav
        className={`text-center ${isOpen ? "fade-in" : "hidden"}`}
        onClick={handleNavClick}
      >
        <ul>
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
                            ? "text-primary"
                            : "hover:underline"
                        }`}
                        onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
