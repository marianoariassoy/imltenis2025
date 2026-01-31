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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header = document.querySelector("#header") as HTMLElement;
    if (pathname === "/") {
      header.classList.remove("bg-gradient-to-b");
    } else {
      header.classList.add("bg-gradient-to-b");
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 10;
      setScrolled((prev) => {
        if (prev === next) return prev;
        return next;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 flex w-full items-center gap-x-4 px-4 py-2   z-40 bg-gradient-to-b from-[#262626] via-[#262626]/70 to-transparent`}
        id="header"
      >
        <div className="flex-1 z-40">
          <HamburgerButton onClick={handleMenu} isOpen={isOpen} />
        </div>
        <div
          className={`flex justify-center text-primary transition-all z-50 ${scrolled ? "text-[0.6rem]" : ""}`}
        >
          <Link
            href="/"
            aria-label="Logo"
            className="lg:hover:brightness-125 transition-all"
          >
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-end flex-1">
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
