"use client";
import { useState } from "react";
import { tournaments, menu, extra } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/menu-context";

const Menu = () => {
  const { open, setOpen } = useMenu();
  const pathname = usePathname();
  const [category, setCategory] = useState("");

  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-background/90 backdrop-blur z-40 flex  transition-all duration-300 justify-center ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}
      onClick={() => setOpen(false)}
    >
      <div
        className="flex flex-col gap-y-2 gap-x-12 text-center md:hidden mt-30"
        onClick={handleNavClick}
      >
        <ul className="font-medium">
          {tournaments.map((item, index) => (
            <li key={index}>
              <button
                className="text-primary italic font-extrabold text-xl hover:underline cursor-pointer"
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
        <ul className="flex flex-col font-medium">
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
        <ul className="flex flex-col font-medium">
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
      </div>

      <div className="gap-x-20 justify-start gap-y-4 hidden md:flex max-w-6xl mx-auto flex-wrap px-8 mt-40">
        {tournaments.map((item, index) => (
          <ul key={index}>
            <h2 className="text-primary italic font-extrabold text-xl mb-2">
              {item.name}
            </h2>
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
        ))}
        <ul className="flex flex-col font-medium">
          {menu.map((item, index) => (
            <li key={index + 20}>
              <Link
                href={item.url}
                className={
                  pathname === item.url
                    ? "text-primary"
                    : "hover:text-primary text-secondary"
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col font-medium">
          {extra.map((item, index) => (
            <li key={index + 20}>
              <Link
                href={item.url}
                className={
                  pathname === item.url
                    ? "text-primary"
                    : "hover:text-primary text-secondary"
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
