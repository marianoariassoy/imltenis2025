"use client";
import { useEffect } from "react";
import { Logo, Instagram, Menu } from "@/lib/icons";
import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  useEffect(() => {
    const logo = document.querySelector(".logo-main") as HTMLElement;
    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add("text-xs");
      } else {
        logo.classList.remove("text-xs");
      }
    };
  }, []);

  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <>
      <header
        className="sticky top-0 flex w-full items-center gap-x-4 px-4 py-2 z-50 transition-all backdrop-blur bg-header"
        id="header"
      >
        <div>
          <button
            className="hover:text-primary"
            onClick={handleMenu}
            aria-label="Menu"
          >
            <Menu />
          </button>
        </div>
        <div className="flex-1 flex justify-center text-primary logo-main transition-all">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>
        </div>
        <div>
          <a
            href="https://www.instagram.com/imltenis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;
