"use client";
import { useState } from "react";
import Image from "next/image";

const Foto = ({ src, alt }: { src: string; alt: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`absolute w-52 h-52 shadow-xl rounded-full overflow-hidden bg-white/10 -translate-y-4 ${open ? "" : "hidden"}`}
        onClick={() => setOpen(!open)}
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
