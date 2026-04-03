"use client";
import { useEffect, useState } from "react";
import { Logo, Instagram } from "@/lib/icons";
import Link from "next/link";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import HamburgerButton from "@/components/HamburgerButton";
import { ChevronDown } from "@/lib/icons";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // Header
      const next = scrollY > 10;
      setScrolled((prev) => (prev === next ? prev : next));

      // Botón scroll top (aparece después de 1 viewport aprox)
      const trigger = window.innerHeight * 0.5;
      setShowTopButton(scrollY > trigger);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 flex w-full items-center text-secondary gap-x-4 px-4 z-50 from-[#262626] via-[#262626]/70 to-transparent transition-all ${isHome ? "" : "bg-gradient-to-b"} py-4`}
      >
        <div className="flex-1 z-40">
          <HamburgerButton />
        </div>
        <div
          className={`text-primary flex justify-center transition-all z-50 ${scrolled ? "text-[0.7rem]" : ""} ${isHome ? "text-[#e4e3e3]" : ""}`}
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
            className="hover:text-primary text-base"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>
      <Nav />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 z-50 bg-primary text-background p-3 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 ${
          showTopButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="rotate-180 text-xl">
          <ChevronDown />
        </span>
      </button>
    </>
  );
};

export default Header;
