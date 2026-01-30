"use client";
import { useEffect, useState } from "react";
import { Logo, Instagram } from "@/lib/icons";
import Link from "next/link";
import Nav from "../app/nav";
import { usePathname } from "next/navigation";
import HamburgerButton from "@/components/HamburgerButton";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const logo = document.querySelector(".logo-main") as HTMLElement;
    const header = document.querySelector("#header") as HTMLElement;

    if (pathname === "/") {
      header.classList.remove("backdrop-blur");
    } else {
      header.classList.add("backdrop-blur");
    }

    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add("text-xs");
      } else {
        logo.classList.remove("text-xs");
      }
    };
  }, [pathname]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="sticky top-0 flex w-full items-center gap-x-4 px-4 py-2 z-40"
        id="header"
      >
        <div className="flex-1 z-40">
          <HamburgerButton onClick={handleMenu} isOpen={isOpen} />
        </div>
        <div className="flex justify-center text-primary logo-main transition-all z-50">
          <Link
            href="/"
            aria-label="Logo"
            className="lg:hover:brightness-125 transition-all"
          >
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-x-5 flex-1">
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
      <Nav onClick={handleMenu} isOpen={isOpen} />
    </>
  );
};

export default Header;
