"use client";
import { useState } from "react";
import { Logo, Instagram, Menu } from "../lib/icons";
import Link from "next/link";
import Script from "next/script";
import Nav from "./nav";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="sticky top-0 flex items-center gap-x-4 px-4 py-2 z-50 header-main">
        <Script id="inline-script" strategy="lazyOnload">
          {`
         const header = document.querySelector(".header-main");

          window.onscroll = () => {
            if (window.scrollY > 0) {
              header.classList.add("header_small");  
            } else {
              header.classList.remove("header_small");
            }
          };
        `}
        </Script>

        <div>
          <button className="hover:text-primary" onClick={openMenu}>
            <Menu />
          </button>
        </div>
        <div className="flex-1 flex justify-center text-primary transition-all logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <a
            href="https://www.instagram.com/imltenis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Instagram />
          </a>
        </div>
      </header>

      {menu && <Nav setMenu={setMenu} />}
    </>
  );
};

export default Header;
