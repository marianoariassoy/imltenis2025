"use client";
import { WhatsApp } from "@/lib/icons";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col p-4 text-secondary mt-8 ">
      <div className="text-center flex flex-col">
        <span className="font-semibold">Interclubes IML Tenis</span>
        <div className="flex items-center flex-wrap justify-center gap-x-1 ">
          <a
            href="https://wa.me/5491130171475"
            className="hover:text-primary flex items-center gap-x-1"
          >
            <WhatsApp />
            WhatsApp
          </a>
          <span>—</span>
          <a
            href="mailto:hola@imltenis.com.ar"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            hola@imltenis.com.ar
          </a>
          <span>—</span>
          <Link href="/terminos-y-condiciones" className="hover:text-primary">
            Terminos y Condiciones
          </Link>
        </div>
        <div className="font-medium">
          <span>Hecho con ❤︎ en {year}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
