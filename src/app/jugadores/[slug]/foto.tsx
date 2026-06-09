"use client";
import { useState } from "react";
import Image from "next/image";

const Foto = ({ src, alt }: { src: string; alt: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed z-60 top-0 left-0 w-screen h-screen bg-background/50 ${open ? "" : "hidden"}`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`absolute top-30 left-1/2 w-52 h-52 shadow-md rounded-full overflow-hidden -translate-y-4 -translate-x-1/2`}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              width={208}
              height={208}
              className="object-cover h-full w-full cursor-pointer"
            />
          ) : (
            <span className="text-2xl">🙈</span>
          )}
        </div>
      </div>

      <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={96}
            height={96}
            className="object-cover h-full w-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <span className="text-2xl">🙈</span>
        )}
      </div>
    </>
  );
};

export default Foto;
