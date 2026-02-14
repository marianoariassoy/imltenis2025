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
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
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

  return (
    <>
      <header
        className={`fixed top-0 flex w-screen items-center text-secondary gap-x-4 px-4 z-50 from-[#262626] via-[#262626]/70 to-transparent transition-all ${isHome ? "" : "bg-gradient-to-b"} ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="flex-1 z-40">
          <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div
          className={`text-primary flex justify-center transition-all z-50 ${scrolled ? "text-[0.6rem]" : ""} ${isHome ? "text-[#e4e3e3]" : ""}`}
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
      <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Header;
