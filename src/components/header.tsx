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
      const trigger = window.innerHeight;
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
        className={`fixed top-0 flex w-full items-center text-secondary gap-x-4 px-4 z-50 from-background via-background/70 to-transparent transition-all ${isHome ? "" : "bg-linear-to-b"} py-4`}
      >
        <div className="flex-1 z-40">
          <HamburgerButton />
        </div>
        <div
          className={`text-primary flex justify-center transition-all z-50 ${scrolled ? "text-[0.7rem]" : ""}`}
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
            className="hover:text-primary text-base transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>
      <Nav />

      <div
        className={`fixed bottom-0 left-0 z-30 flex justify-end w-full px-4 py-8 from-background via-background/70 to-transparent transition-all bg-linear-to-t duration-300 ${
          showTopButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="bg-primary text-background p-3 rounded-full w-12 h-12 hover:scale-105 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
        >
          <span className="rotate-180 text-xl">
            <ChevronDown />
          </span>
        </button>
      </div>
    </>
  );
};

export default Header;
