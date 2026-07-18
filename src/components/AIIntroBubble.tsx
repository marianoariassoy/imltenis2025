"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Robot } from "../lib/icons";

export default function AIIntroBubble() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 800);

    const hide = setTimeout(() => {
      setShowText(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed bottom-40 md:bottom-32 right-4 flex items-center gap-2 z-50">
      <div
        className={`
          transition-all duration-700 
          overflow-hidden 
          ${showText ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}

        `}
      >
        <div
          className="flex flex-col
          rounded-xl
          bg-background/80
          shadow-lg
          px-5
          py-3
          text-sm
        "
        >
          <span>
            <b>Consulta con nuestra IA </b>
          </span>
          <span>Estamos para ayudarte 🤖</span>
        </div>
      </div>

      <Link
        href="/chatiml"
        className="
        shrink-0
          relative
         w-15 
         h-15
          rounded-full
          bg-background/80
          flex
          items-center
          justify-center
          shadow-xl hover:scale-105 transition-all"
      >
        <div
          className="
          absolute
          inset-0
          rounded-full"
        />
        <span className="text-3xl">
          <Robot />
        </span>
      </Link>
    </div>
  );
}
