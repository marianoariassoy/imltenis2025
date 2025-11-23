"use client";

import { useState } from "react";
import { Info } from "@/lib/icons";

const info = ({ text }: { text: string }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div
      className="flex gap-x-3  text-sm p-3 bg-white/5 transition-colors rounded-xl mb-3 cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-primary">
        <Info />
      </span>
      {show ? (
        <span className="whitespace-break-spaces">{text}</span>
      ) : (
        <span className="text-secondary font-medium">
          Información del torneo
        </span>
      )}
    </div>
  );
};

export default info;
